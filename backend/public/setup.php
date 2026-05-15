<?php
/**
 * One-time Setup Script for Capas Website Backend
 * DELETE THIS FILE AFTER SETUP!
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);
set_time_limit(120);

echo "<h2>Capas Website Backend Setup</h2><pre>\n";
ob_flush(); flush();

// 1. Storage access - use .htaccess redirect (symlink disabled on Hostinger)
echo "--- Step 1: Storage Access ---\n";
$linkPath = __DIR__ . '/storage';
if (!is_dir($linkPath)) {
    mkdir($linkPath, 0755, true);
}
file_put_contents($linkPath . '/.htaccess', 
    "<IfModule mod_rewrite.c>\n" .
    "  RewriteEngine On\n" .
    "  RewriteBase /backend/public/storage/\n" .
    "  RewriteRule ^(.*)$ /backend/storage/app/public/\$1 [L]\n" .
    "</IfModule>\n"
);
echo "OK: Storage redirect created.\n";
ob_flush(); flush();

// 2. Ensure storage directories exist
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
    if (!is_dir($dir)) {
        if (mkdir($dir, 0755, true)) {
            echo "CREATED: " . str_replace(__DIR__ . '/../', '', $dir) . "\n";
        } else {
            echo "FAILED: " . str_replace(__DIR__ . '/../', '', $dir) . "\n";
        }
    } else {
        echo "OK: " . str_replace(__DIR__ . '/../', '', $dir) . "\n";
    }
}
ob_flush(); flush();

// 3. Check .env
echo "\n--- Step 3: Check .env ---\n";
$envPath = __DIR__ . '/../.env';
if (file_exists($envPath)) {
    echo "OK: .env file found.\n";
    $envContent = file_get_contents($envPath);
    if (preg_match('/DB_DATABASE=(.*)/', $envContent, $m)) echo "   DB_DATABASE=" . trim($m[1]) . "\n";
    if (preg_match('/DB_USERNAME=(.*)/', $envContent, $m)) echo "   DB_USERNAME=" . trim($m[1]) . "\n";
    if (preg_match('/DB_HOST=(.*)/', $envContent, $m)) echo "   DB_HOST=" . trim($m[1]) . "\n";
} else {
    echo "ERROR: .env file NOT FOUND!\n";
    echo "   Create it at: public_html/backend/.env\n";
    echo "</pre>";
    exit;
}
ob_flush(); flush();

// 4. Check vendor
echo "\n--- Step 4: Check Vendor ---\n";
$autoload = __DIR__ . '/../vendor/autoload.php';
if (file_exists($autoload)) {
    echo "OK: vendor/autoload.php found.\n";
} else {
    echo "ERROR: vendor NOT FOUND.\n";
    echo "</pre>";
    exit;
}
// 4.5 Regenerate autoloader on server
echo "\n--- Step 4b: Regenerate Autoloader ---\n";
$composerPhar = __DIR__ . '/../../composer.phar';
if (file_exists($composerPhar)) {
    $output = shell_exec("cd " . escapeshellarg(__DIR__ . '/..') . " && php " . escapeshellarg($composerPhar) . " dump-autoload --optimize 2>&1");
    echo $output . "\n";
    echo "OK: Autoloader regenerated.\n";
} else {
    // Try system composer
    $output = shell_exec("cd " . escapeshellarg(__DIR__ . '/..') . " && composer dump-autoload --optimize 2>&1");
    if ($output) {
        echo $output . "\n";
    } else {
        echo "WARNING: composer not found. Autoloader may be stale.\n";
    }
}
ob_flush(); flush();

// 5. Bootstrap Laravel
echo "\n--- Step 5: Bootstrap Laravel ---\n";
try {
    require $autoload;
    $app = require_once __DIR__ . '/../bootstrap/app.php';
    $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
    $kernel->bootstrap();
    echo "OK: Laravel started.\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    echo "</pre>";
    exit;
} catch (Error $e) {
    echo "FATAL: " . $e->getMessage() . "\n";
    echo "</pre>";
    exit;
}
ob_flush(); flush();

// 6. Test database
echo "\n--- Step 6: Database Test ---\n";
try {
    $pdo = \Illuminate\Support\Facades\DB::connection()->getPdo();
    $dbName = \Illuminate\Support\Facades\DB::connection()->getDatabaseName();
    echo "OK: Connected to '$dbName'\n";
    
    $docs = \Illuminate\Support\Facades\DB::table('documents')->count();
    $articles = \Illuminate\Support\Facades\DB::table('articles')->count();
    $gallery = \Illuminate\Support\Facades\DB::table('gallery_images')->count();
    echo "   Documents: $docs\n";
    echo "   Articles: $articles\n";
    echo "   Gallery: $gallery\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
ob_flush(); flush();

// 7. Clear and cache
echo "\n--- Step 7: Build Caches ---\n";
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
echo "========================================\n";
echo "</pre>";
