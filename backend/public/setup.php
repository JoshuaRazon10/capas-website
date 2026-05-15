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

// 1. Storage link workaround (symlink often disabled on shared hosting)
echo "--- Step 1: Storage Access ---\n";
$storagePath = __DIR__ . '/../storage/app/public';
$linkPath = __DIR__ . '/storage';

if (is_link($linkPath) || is_dir($linkPath)) {
    echo "OK: Storage link already exists.\n";
} else {
    // Try symlink first
    if (@symlink($storagePath, $linkPath)) {
        echo "OK: Symlink created.\n";
    } else {
        // Fallback: create a PHP-based redirect for storage files
        echo "NOTE: symlink() disabled. Creating .htaccess redirect instead.\n";
        if (!is_dir($linkPath)) {
            mkdir($linkPath, 0755, true);
        }
        file_put_contents($linkPath . '/.htaccess', 
            "<IfModule mod_rewrite.c>\n" .
            "  RewriteEngine On\n" .
            "  RewriteRule ^(.*)$ /backend/storage/app/public/$1 [L]\n" .
            "</IfModule>\n"
        );
        echo "OK: .htaccess redirect created for storage.\n";
    }
}
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
            echo "CREATED: $dir\n";
        } else {
            echo "FAILED: Could not create $dir\n";
        }
    } else {
        echo "OK: $dir\n";
    }
}
ob_flush(); flush();

// 3. Check .env
echo "\n--- Step 3: Check .env ---\n";
$envPath = __DIR__ . '/../.env';
if (file_exists($envPath)) {
    echo "OK: .env file found.\n";
    // Show DB config (hide password)
    $envContent = file_get_contents($envPath);
    if (preg_match('/DB_DATABASE=(.*)/', $envContent, $m)) echo "   DB_DATABASE=" . trim($m[1]) . "\n";
    if (preg_match('/DB_USERNAME=(.*)/', $envContent, $m)) echo "   DB_USERNAME=" . trim($m[1]) . "\n";
    if (preg_match('/DB_HOST=(.*)/', $envContent, $m)) echo "   DB_HOST=" . trim($m[1]) . "\n";
} else {
    echo "ERROR: .env file NOT FOUND at $envPath\n";
    echo "   Please create it via File Manager in public_html/backend/.env\n";
    echo "</pre>";
    exit;
}
ob_flush(); flush();

// 4. Check vendor
echo "\n--- Step 4: Check vendor ---\n";
$autoload = __DIR__ . '/../vendor/autoload.php';
if (file_exists($autoload)) {
    echo "OK: vendor/autoload.php found.\n";
} else {
    echo "ERROR: vendor/autoload.php NOT FOUND.\n";
    echo "   The vendor folder may not have been deployed.\n";
    echo "</pre>";
    exit;
}
ob_flush(); flush();

// 5. Test Laravel bootstrap
echo "\n--- Step 5: Test Laravel ---\n";
try {
    require $autoload;
    $app = require_once __DIR__ . '/../bootstrap/app.php';
    $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
    $kernel->bootstrap();
    echo "OK: Laravel bootstrapped successfully.\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    echo "</pre>";
    exit;
}
ob_flush(); flush();

// 6. Test database
echo "\n--- Step 6: Test Database ---\n";
try {
    $pdo = \Illuminate\Support\Facades\DB::connection()->getPdo();
    $dbName = \Illuminate\Support\Facades\DB::connection()->getDatabaseName();
    echo "OK: Connected to database '$dbName'\n";
    
    // Count records
    $docs = \Illuminate\Support\Facades\DB::table('documents')->count();
    $articles = \Illuminate\Support\Facades\DB::table('articles')->count();
    echo "   Documents: $docs\n";
    echo "   Articles: $articles\n";
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
}
ob_flush(); flush();

echo "\n========================================\n";
echo "SETUP COMPLETE!\n";
echo "DELETE THIS FILE NOW: backend/public/setup.php\n";
echo "========================================\n";
echo "</pre>";
