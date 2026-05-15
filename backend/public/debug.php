<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<pre>\n";
echo "=== API Debug ===\n\n";

// 1. Clear caches that may have wrong paths
echo "--- Clearing caches ---\n";
$cacheFiles = [
    __DIR__ . '/../bootstrap/cache/config.php',
    __DIR__ . '/../bootstrap/cache/routes-v7.php',
    __DIR__ . '/../bootstrap/cache/services.php',
    __DIR__ . '/../bootstrap/cache/packages.php',
];
foreach ($cacheFiles as $f) {
    if (file_exists($f)) {
        unlink($f);
        echo "DELETED: " . basename($f) . "\n";
    } else {
        echo "NOT FOUND: " . basename($f) . "\n";
    }
}

// 2. Try to boot Laravel
echo "\n--- Bootstrap Laravel ---\n";
try {
    require __DIR__ . '/../vendor/autoload.php';
    $app = require_once __DIR__ . '/../bootstrap/app.php';
    $kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
    
    echo "OK: Laravel HTTP kernel created.\n";
    
    // 3. Test a direct DB query
    echo "\n--- Direct DB Test ---\n";
    $consoleKernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
    $consoleKernel->bootstrap();
    
    $docs = \Illuminate\Support\Facades\DB::table('documents')->limit(3)->get();
    echo "OK: Got " . count($docs) . " documents\n";
    foreach ($docs as $d) {
        echo "   - " . ($d->title ?? $d->name ?? 'untitled') . "\n";
    }
    
    // 4. Test making a request
    echo "\n--- Test Request ---\n";
    $request = Illuminate\Http\Request::create('/api/documents', 'GET');
    $response = $kernel->handle($request);
    echo "Status: " . $response->getStatusCode() . "\n";
    if ($response->getStatusCode() !== 200) {
        echo "Response: " . substr($response->getContent(), 0, 500) . "\n";
    } else {
        $data = json_decode($response->getContent(), true);
        echo "OK: Got " . (is_array($data) ? count($data) : 'non-array') . " results\n";
    }
    
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
    echo "Trace:\n" . $e->getTraceAsString() . "\n";
} catch (Error $e) {
    echo "FATAL: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
}

echo "\n</pre>";
