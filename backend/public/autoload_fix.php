<?php
/**
 * Auto-fix Composer autoloader for Hostinger deployment.
 * This runs ONCE after each Git deploy (checks a stamp file).
 * Required because composer dump-autoload can't run on Hostinger.
 */
$stampFile = __DIR__ . '/../storage/autoloader_fixed.stamp';
$installedFile = __DIR__ . '/../vendor/composer/installed.json';
$staticFile = __DIR__ . '/../vendor/composer/autoload_static.php';
$realFile = __DIR__ . '/../vendor/composer/autoload_real.php';

// Only run if stamp doesn't exist (deleted on each Git deploy since not in repo)
if (file_exists($stampFile) || !file_exists($installedFile)) {
    return;
}

// Detect hash from autoload_real.php
$hash = '';
if (file_exists($realFile)) {
    $realContent = file_get_contents($realFile);
    if (preg_match('/class ComposerAutoloaderInit([a-f0-9]+)/', $realContent, $m)) {
        $hash = $m[1];
    }
}
if (!$hash) return;

// Check if static file already has correct class
if (file_exists($staticFile)) {
    $staticContent = file_get_contents($staticFile);
    if (str_contains($staticContent, "ComposerStaticInit$hash") && str_contains($staticContent, 'BladeUI')) {
        @file_put_contents($stampFile, date('Y-m-d H:i:s'));
        return; // Already fixed
    }
}

// Parse installed.json
$installed = json_decode(file_get_contents($installedFile), true);
$packages = $installed['packages'] ?? $installed;

$vendorDir = realpath(__DIR__ . '/../vendor');
$baseDir = realpath(__DIR__ . '/..');
$vendorNorm = str_replace('\\', '/', $vendorDir);
$baseNorm = str_replace('\\', '/', $baseDir);

$psr4 = [];
$files = [];

// App autoload
$psr4['App\\'] = [$baseDir . '/app'];
$psr4['Database\\Factories\\'] = [$baseDir . '/database/factories'];
$psr4['Database\\Seeders\\'] = [$baseDir . '/database/seeders'];
$psr4['Tests\\'] = [$baseDir . '/tests'];

foreach ($packages as $pkg) {
    $name = $pkg['name'] ?? '';
    $al = $pkg['autoload'] ?? [];
    $ip = $vendorDir . '/' . $name;
    if (!is_dir($ip)) continue;

    if (isset($al['psr-4'])) {
        foreach ($al['psr-4'] as $ns => $paths) {
            if (!is_array($paths)) $paths = [$paths];
            foreach ($paths as $p) {
                $psr4[$ns][] = rtrim($ip . '/' . $p, '/');
            }
        }
    }

    if (isset($al['files'])) {
        foreach ($al['files'] as $f) {
            $files[md5($name . ':' . $f)] = $ip . '/' . $f;
        }
    }
}

// Helper: make relative path for non-static files
function _mRel($p, $vn, $bn) {
    $p = str_replace('\\', '/', $p);
    if (strpos($p, $vn) === 0) return "\$vendorDir . '" . substr($p, strlen($vn)) . "'";
    if (strpos($p, $bn) === 0) return "\$baseDir . '" . substr($p, strlen($bn)) . "'";
    return "'" . addslashes($p) . "'";
}

// Helper: make relative path for static file
function _mRelS($p, $vn, $bn) {
    $p = str_replace('\\', '/', $p);
    if (strpos($p, $vn) === 0) return "__DIR__ . '/..' . '" . substr($p, strlen($vn)) . "'";
    if (strpos($p, $bn) === 0) return "__DIR__ . '/../..' . '" . substr($p, strlen($bn)) . "'";
    return "'" . addslashes($p) . "'";
}

// Write autoload_psr4.php
$c = "<?php\n\n\$vendorDir = dirname(__DIR__);\n\$baseDir = dirname(\$vendorDir);\n\nreturn array(\n";
foreach ($psr4 as $ns => $da) {
    $pp = [];
    foreach ($da as $d) $pp[] = _mRel($d, $vendorNorm, $baseNorm);
    $c .= "    '" . addslashes($ns) . "' => array(" . implode(', ', $pp) . "),\n";
}
$c .= ");\n";
@file_put_contents($vendorDir . '/composer/autoload_psr4.php', $c);

// Write autoload_classmap.php (empty, PSR-4 handles everything)
@file_put_contents($vendorDir . '/composer/autoload_classmap.php',
    "<?php\n\n\$vendorDir = dirname(__DIR__);\n\$baseDir = dirname(\$vendorDir);\n\nreturn array(\n);\n");

// Write autoload_static.php
$s = "<?php\n\nnamespace Composer\\Autoload;\n\nclass ComposerStaticInit$hash\n{\n";

// Files
$s .= "    public static \$files = array(\n";
foreach ($files as $id => $p) $s .= "        '$id' => " . _mRelS($p, $vendorNorm, $baseNorm) . ",\n";
$s .= "    );\n\n";

// Prefix lengths
$s .= "    public static \$prefixLengthsPsr4 = array(\n";
$lens = [];
foreach ($psr4 as $ns => $d) $lens[$ns[0]][$ns] = strlen($ns);
ksort($lens);
foreach ($lens as $l => $arr) {
    $s .= "        '$l' => array(\n";
    foreach ($arr as $ns => $len) $s .= "            '" . addslashes($ns) . "' => $len,\n";
    $s .= "        ),\n";
}
$s .= "    );\n\n";

// Prefix dirs
$s .= "    public static \$prefixDirsPsr4 = array(\n";
foreach ($psr4 as $ns => $da) {
    $s .= "        '" . addslashes($ns) . "' => array(\n";
    $i = 0;
    foreach ($da as $d) { $s .= "            $i => " . _mRelS($d, $vendorNorm, $baseNorm) . ",\n"; $i++; }
    $s .= "        ),\n";
}
$s .= "    );\n\n";

// Empty classmap
$s .= "    public static \$classMap = array();\n\n";

// Initializer
$s .= "    public static function getInitializer(ClassLoader \$loader)\n    {\n";
$s .= "        return \\Closure::bind(function () use (\$loader) {\n";
$s .= "            \$loader->prefixLengthsPsr4 = ComposerStaticInit$hash::\$prefixLengthsPsr4;\n";
$s .= "            \$loader->prefixDirsPsr4 = ComposerStaticInit$hash::\$prefixDirsPsr4;\n";
$s .= "            \$loader->classMap = ComposerStaticInit$hash::\$classMap;\n";
$s .= "        }, null, ClassLoader::class);\n    }\n}\n";
@file_put_contents($vendorDir . '/composer/autoload_static.php', $s);

// Write stamp
@file_put_contents($stampFile, date('Y-m-d H:i:s'));

// Also ensure storage dirs exist
$dirs = ['storage/framework/cache/data','storage/framework/sessions','storage/framework/views','storage/logs','storage/app/public','bootstrap/cache'];
foreach ($dirs as $d) {
    $full = $baseDir . '/' . $d;
    if (!is_dir($full)) @mkdir($full, 0755, true);
}
