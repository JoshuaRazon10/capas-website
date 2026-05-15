<?php
/**
 * One-time Setup Script for Capas Website Backend
 * DELETE THIS FILE AFTER SETUP!
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);
set_time_limit(300);

echo "<h2>Capas Website Backend Setup</h2><pre>\n";

// 1. Storage access
echo "--- Step 1: Storage Access ---\n";
$linkPath = __DIR__ . '/storage';
if (!is_dir($linkPath)) { mkdir($linkPath, 0755, true); }
file_put_contents($linkPath . '/.htaccess', 
    "<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /backend/public/storage/\n  RewriteRule ^(.*)\$ /backend/storage/app/public/\$1 [L]\n</IfModule>\n"
);
echo "OK: Storage redirect created.\n";

// 2. Storage directories
echo "\n--- Step 2: Storage Directories ---\n";
$dirs = [
    __DIR__ . '/../storage/framework/cache/data',
    __DIR__ . '/../storage/framework/sessions',
    __DIR__ . '/../storage/framework/views',
    __DIR__ . '/../storage/logs',
    __DIR__ . '/../storage/app/public',
    __DIR__ . '/../bootstrap/cache',
];
foreach ($dirs as $dir) {
    if (!is_dir($dir)) { mkdir($dir, 0755, true); echo "CREATED: " . basename($dir) . "\n"; }
    else { echo "OK: " . basename($dir) . "\n"; }
}

// 3. Check .env
echo "\n--- Step 3: Check .env ---\n";
$envPath = __DIR__ . '/../.env';
if (file_exists($envPath)) {
    echo "OK: .env found.\n";
    $env = file_get_contents($envPath);
    if (preg_match('/DB_DATABASE=(.*)/', $env, $m)) echo "   DB=" . trim($m[1]) . "\n";
} else {
    echo "ERROR: .env NOT FOUND!\n</pre>"; exit;
}

// 4. Check vendor
echo "\n--- Step 4: Check Vendor ---\n";
$autoload = __DIR__ . '/../vendor/autoload.php';
if (!file_exists($autoload)) { echo "ERROR: vendor NOT FOUND.\n</pre>"; exit; }
echo "OK: vendor found.\n";

// 5. Rebuild autoloader from installed.json (pure PHP, no shell needed)
echo "\n--- Step 5: Rebuild Autoloader ---\n";
$installedFile = __DIR__ . '/../vendor/composer/installed.json';
$autoloadRealFile = __DIR__ . '/../vendor/composer/autoload_real.php';
if (!file_exists($installedFile) || !file_exists($autoloadRealFile)) { echo "ERROR: composer files not found.\n</pre>"; exit; }

// Detect hash
$hash = '';
$realContent = file_get_contents($autoloadRealFile);
if (preg_match('/class ComposerAutoloaderInit([a-f0-9]+)/', $realContent, $m)) {
    $hash = $m[1];
    echo "OK: Detected hash $hash\n";
} else {
    echo "ERROR: Could not detect hash.\n</pre>"; exit;
}

$installed = json_decode(file_get_contents($installedFile), true);
$packages = isset($installed['packages']) ? $installed['packages'] : $installed;

$vendorDir = realpath(__DIR__ . '/../vendor');
$baseDir = realpath(__DIR__ . '/..');

$psr4 = [];
$classmap = [];
$files = [];

// Add app autoload
$psr4['App\\'] = [$baseDir . '/app'];
$psr4['Database\\Factories\\'] = [$baseDir . '/database/factories'];
$psr4['Database\\Seeders\\'] = [$baseDir . '/database/seeders'];
$psr4['Tests\\'] = [$baseDir . '/tests'];

foreach ($packages as $pkg) {
    $name = $pkg['name'] ?? '';
    $autoloadConfig = $pkg['autoload'] ?? [];
    $installPath = $vendorDir . '/' . $name;
    
    if (!is_dir($installPath)) continue;
    
    // PSR-4
    if (isset($autoloadConfig['psr-4'])) {
        foreach ($autoloadConfig['psr-4'] as $ns => $paths) {
            if (!is_array($paths)) $paths = [$paths];
            foreach ($paths as $p) {
                $fullPath = $installPath . '/' . $p;
                if (!isset($psr4[$ns])) $psr4[$ns] = [];
                $psr4[$ns][] = rtrim($fullPath, '/');
            }
        }
    }
    
    // Classmap
    if (isset($autoloadConfig['classmap'])) {
        foreach ($autoloadConfig['classmap'] as $dir) {
            $path = $installPath . '/' . $dir;
            if (is_dir($path)) {
                $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path, RecursiveDirectoryIterator::SKIP_DOTS));
                foreach ($iterator as $file) {
                    if ($file->getExtension() === 'php') {
                        // Very basic class extraction
                        $content = file_get_contents($file->getPathname());
                        if (preg_match('/(?:class|interface|trait|enum)\s+(\w+)/', $content, $m)) {
                            $ns = '';
                            if (preg_match('/namespace\s+([^;]+);/', $content, $nsM)) $ns = trim($nsM[1]) . '\\';
                            $classmap[$ns . $m[1]] = $file->getPathname();
                        }
                    }
                }
            } else if (is_file($path)) {
                 $content = file_get_contents($path);
                 if (preg_match('/(?:class|interface|trait|enum)\s+(\w+)/', $content, $m)) {
                    $ns = '';
                    if (preg_match('/namespace\s+([^;]+);/', $content, $nsM)) $ns = trim($nsM[1]) . '\\';
                    $classmap[$ns . $m[1]] = $path;
                }
            }
        }
    }

    // Files (Helpers)
    if (isset($autoloadConfig['files'])) {
        foreach ($autoloadConfig['files'] as $f) {
            $fullPath = $installPath . '/' . $f;
            $id = md5($name . ':' . $f);
            $files[$id] = $fullPath;
        }
    }
}

// Rebuild classmap from PSR-4 as well for performance
foreach ($psr4 as $ns => $dirs_arr) {
    foreach ($dirs_arr as $d) {
        if (is_dir($d)) {
            $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($d, RecursiveDirectoryIterator::SKIP_DOTS));
            foreach ($iterator as $file) {
                if ($file->getExtension() === 'php') {
                    $content = file_get_contents($file->getPathname());
                    if (preg_match('/(?:class|interface|trait|enum)\s+(\w+)/', $content, $m)) {
                        $pns = '';
                        if (preg_match('/namespace\s+([^;]+);/', $content, $pnsM)) $pns = trim($pnsM[1]) . '\\';
                        $classmap[$pns . $m[1]] = $file->getPathname();
                    }
                }
            }
        }
    }
}

// Write files
$vendorNorm = str_replace('\\', '/', $vendorDir);
$baseNorm = str_replace('\\', '/', $baseDir);

function makeRel($p, $vn, $bn) {
    $p = str_replace('\\', '/', $p);
    if (strpos($p, $vn) === 0) return "\$vendorDir . '" . substr($p, strlen($vn)) . "'";
    if (strpos($p, $bn) === 0) return "\$baseDir . '" . substr($p, strlen($bn)) . "'";
    return "'" . addslashes($p) . "'";
}

function makeRelStatic($p, $vn, $bn) {
    $p = str_replace('\\', '/', $p);
    if (strpos($p, $vn) === 0) return "__DIR__ . '/../..' . '" . substr($p, strlen($vn)) . "'";
    if (strpos($p, $bn) === 0) return "__DIR__ . '/../../..' . '" . substr($p, strlen($bn)) . "'";
    return "'" . addslashes($p) . "'";
}

// 1. PSR-4
$psr4Content = "<?php\n\n\$vendorDir = dirname(__DIR__);\n\$baseDir = dirname(\$vendorDir);\n\nreturn array(\n";
foreach ($psr4 as $ns => $dirs_arr) {
    $paths = []; foreach ($dirs_arr as $d) $paths[] = makeRel($d, $vendorNorm, $baseNorm);
    $psr4Content .= "    '" . addslashes($ns) . "' => array(" . implode(', ', $paths) . "),\n";
}
$psr4Content .= ");\n";
file_put_contents(__DIR__ . '/../vendor/composer/autoload_psr4.php', $psr4Content);

// 2. Classmap
$classmapContent = "<?php\n\n\$vendorDir = dirname(__DIR__);\n\$baseDir = dirname(\$vendorDir);\n\nreturn array(\n";
foreach ($classmap as $c => $p) $classmapContent .= "    '" . addslashes($c) . "' => " . makeRel($p, $vendorNorm, $baseNorm) . ",\n";
$classmapContent .= ");\n";
file_put_contents(__DIR__ . '/../vendor/composer/autoload_classmap.php', $classmapContent);

// 3. Static
$staticContent = "<?php\n\nnamespace Composer\\Autoload;\n\nclass ComposerStaticInit$hash\n{\n";
// Files
$staticContent .= "    public static \$files = array(\n";
foreach ($files as $id => $p) $staticContent .= "        '$id' => " . makeRelStatic($p, $vendorNorm, $baseNorm) . ",\n";
$staticContent .= "    );\n\n";
// PSR-4 lengths
$staticContent .= "    public static \$prefixLengthsPsr4 = array(\n";
$lengths = []; foreach ($psr4 as $ns => $d) $lengths[$ns[0]][$ns] = strlen($ns);
ksort($lengths);
foreach ($lengths as $l => $arr) {
    $staticContent .= "        '$l' => array(\n";
    foreach ($arr as $ns => $len) $staticContent .= "            '" . addslashes($ns) . "' => $len,\n";
    $staticContent .= "        ),\n";
}
$staticContent .= "    );\n\n";
// PSR-4 dirs
$staticContent .= "    public static \$prefixDirsPsr4 = array(\n";
foreach ($psr4 as $ns => $dirs_arr) {
    $staticContent .= "        '" . addslashes($ns) . "' => array(\n";
    foreach ($dirs_arr as $d) $staticContent .= "            0 => " . makeRelStatic($d, $vendorNorm, $baseNorm) . ",\n";
    $staticContent .= "        ),\n";
}
$staticContent .= "    );\n\n";
// Classmap
$staticContent .= "    public static \$classMap = array(\n";
foreach ($classmap as $c => $p) $staticContent .= "        '" . addslashes($c) . "' => " . makeRelStatic($p, $vendorNorm, $baseNorm) . ",\n";
$staticContent .= "    );\n\n";
// Initializer
$staticContent .= "    public static function getInitializer(ClassLoader \$loader)\n    {\n        return \\Closure::bind(function () use (\$loader) {\n            \$loader->prefixLengthsPsr4 = ComposerStaticInit$hash::\$prefixLengthsPsr4;\n            \$loader->prefixDirsPsr4 = ComposerStaticInit$hash::\$prefixDirsPsr4;\n            \$loader->classMap = ComposerStaticInit$hash::\$classMap;\n        }, null, ClassLoader::class);\n    }\n}\n";
file_put_contents(__DIR__ . '/../vendor/composer/autoload_static.php', $staticContent);

echo "OK: Autoloader rebuilt with detected hash.\n";

// 6. Bootstrap Laravel
echo "\n--- Step 6: Bootstrap Laravel ---\n";
try {
    require $autoload;
    $app = require_once __DIR__ . '/../bootstrap/app.php';
    $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
    $kernel->bootstrap();
    echo "OK: Laravel started.\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n</pre>"; exit;
} catch (Error $e) {
    echo "FATAL: " . $e->getMessage() . "\n</pre>"; exit;
}

// 7. Test database
echo "\n--- Step 7: Database Test ---\n";
try {
    $pdo = \Illuminate\Support\Facades\DB::connection()->getPdo();
    echo "OK: Connected to '" . \Illuminate\Support\Facades\DB::connection()->getDatabaseName() . "'\n";
    echo "   Documents: " . \Illuminate\Support\Facades\DB::table('documents')->count() . "\n";
    echo "   Articles: " . \Illuminate\Support\Facades\DB::table('articles')->count() . "\n";
    echo "   Gallery: " . \Illuminate\Support\Facades\DB::table('gallery_images')->count() . "\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}

// 8. Clear and cache
echo "\n--- Step 8: Build Caches ---\n";
try {
    Illuminate\Support\Facades\Artisan::call('config:clear');
    echo "OK: Config cleared.\n";
    Illuminate\Support\Facades\Artisan::call('route:clear');
    echo "OK: Routes cleared.\n";
    Illuminate\Support\Facades\Artisan::call('cache:clear');
    echo "OK: Cache cleared.\n";
    Illuminate\Support\Facades\Artisan::call('config:cache');
    echo "OK: Config cached.\n";
    Illuminate\Support\Facades\Artisan::call('route:cache');
    echo "OK: Routes cached.\n";
} catch (Exception $e) {
    echo "WARNING: " . $e->getMessage() . "\n";
} catch (Error $e) {
    echo "WARNING: " . $e->getMessage() . "\n";
}

echo "\n========================================\n";
echo "SETUP COMPLETE!\n";
echo "DELETE THIS FILE for security!\n";
echo "========================================\n</pre>";
