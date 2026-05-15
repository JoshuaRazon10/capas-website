<?php
/**
 * One-time Setup Script for Capas Website Backend
 * Run this ONCE via browser: https://capas.gov.ph/backend/public/setup.php
 * DELETE THIS FILE AFTER SETUP!
 */

echo "<h2>🔧 Capas Website Backend Setup</h2><pre>";

// 1. Create storage symlink
echo "--- Creating storage symlink ---\n";
$target = __DIR__ . '/../storage/app/public';
$link = __DIR__ . '/storage';

if (is_link($link)) {
    echo "✅ Storage symlink already exists.\n";
} else {
    if (@symlink($target, $link)) {
        echo "✅ Storage symlink created successfully!\n";
    } else {
        echo "⚠️ Could not create symlink (may need manual setup).\n";
        echo "   Target: $target\n";
        echo "   Link: $link\n";
    }
}

// 2. Ensure storage directories exist and are writable
echo "\n--- Checking storage directories ---\n";
$dirs = [
    __DIR__ . '/../storage/framework/cache',
    __DIR__ . '/../storage/framework/sessions',
    __DIR__ . '/../storage/framework/views',
    __DIR__ . '/../storage/logs',
    __DIR__ . '/../storage/app/public',
    __DIR__ . '/../bootstrap/cache',
];

foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
        echo "📁 Created: " . basename(dirname($dir)) . "/" . basename($dir) . "\n";
    } else {
        echo "✅ Exists: " . basename(dirname($dir)) . "/" . basename($dir) . "\n";
    }
}

// 3. Check .env file
echo "\n--- Checking .env file ---\n";
$envPath = __DIR__ . '/../.env';
if (file_exists($envPath)) {
    echo "✅ .env file exists.\n";
} else {
    echo "❌ .env file NOT FOUND! Create it in the backend/ folder.\n";
}

// 4. Clear caches
echo "\n--- Clearing caches ---\n";
$artisan = __DIR__ . '/../artisan';
if (file_exists($artisan)) {
    echo shell_exec("php $artisan config:clear 2>&1") . "\n";
    echo shell_exec("php $artisan cache:clear 2>&1") . "\n";
    echo shell_exec("php $artisan route:clear 2>&1") . "\n";
    echo shell_exec("php $artisan view:clear 2>&1") . "\n";
    echo "✅ All caches cleared.\n";
    
    // 5. Cache config and routes for production
    echo "\n--- Building production caches ---\n";
    echo shell_exec("php $artisan config:cache 2>&1") . "\n";
    echo shell_exec("php $artisan route:cache 2>&1") . "\n";
    echo "✅ Production caches built.\n";
} else {
    echo "❌ artisan not found at: $artisan\n";
}

echo "\n--- Checking database connection ---\n";
try {
    require __DIR__ . '/../vendor/autoload.php';
    $app = require_once __DIR__ . '/../bootstrap/app.php';
    $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
    $kernel->bootstrap();
    
    $pdo = \Illuminate\Support\Facades\DB::connection()->getPdo();
    echo "✅ Database connected successfully!\n";
    echo "   Database: " . \Illuminate\Support\Facades\DB::connection()->getDatabaseName() . "\n";
} catch (Exception $e) {
    echo "❌ Database error: " . $e->getMessage() . "\n";
}

echo "\n========================================\n";
echo "🎉 SETUP COMPLETE!\n";
echo "⚠️  DELETE THIS FILE NOW for security!\n";
echo "    Delete: backend/public/setup.php\n";
echo "========================================\n";
echo "</pre>";
