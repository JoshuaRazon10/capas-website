<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<pre>\n";
echo "=== API Debug v2 ===\n\n";

// Force debug mode
putenv('APP_DEBUG=true');
$_ENV['APP_DEBUG'] = 'true';
$_SERVER['APP_DEBUG'] = 'true';

// Boot Laravel
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Force debug in config
$app['config']->set('app.debug', true);

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

echo "--- Laravel Booted ---\n";

// Check if route exists
echo "\n--- Registered Routes ---\n";
$routes = app('router')->getRoutes();
$count = 0;
foreach ($routes as $route) {
    $uri = $route->uri();
    if (str_contains($uri, 'api') || str_contains($uri, 'document')) {
        echo $route->methods()[0] . " " . $uri . " -> " . ($route->getActionName() ?? 'closure') . "\n";
        $count++;
    }
}
echo "Found $count API-related routes\n";

// Check controller exists
echo "\n--- Controller Check ---\n";
$controllerClass = 'App\\Http\\Controllers\\Api\\WebsiteController';
if (class_exists($controllerClass)) {
    echo "OK: $controllerClass exists\n";
    if (method_exists($controllerClass, 'getDocuments')) {
        echo "OK: getDocuments method exists\n";
    } else {
        echo "ERROR: getDocuments method NOT found\n";
    }
} else {
    echo "ERROR: $controllerClass NOT found\n";
}

// Try calling the controller directly
echo "\n--- Direct Controller Call ---\n";
try {
    $controller = app()->make($controllerClass);
    $result = $controller->getDocuments(new Illuminate\Http\Request());
    echo "Status: " . $result->getStatusCode() . "\n";
    $data = json_decode($result->getContent(), true);
    echo "OK: Got " . (is_array($data) ? count($data) : 'non-array') . " results\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
} catch (Error $e) {
    echo "FATAL: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
}

// Try simulated HTTP request
echo "\n--- HTTP Request Simulation ---\n";
try {
    $httpKernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
    $request = Illuminate\Http\Request::create('/api/documents', 'GET');
    $request->headers->set('Accept', 'application/json');
    $response = $httpKernel->handle($request);
    echo "Status: " . $response->getStatusCode() . "\n";
    $content = $response->getContent();
    echo "Response: " . substr($content, 0, 1000) . "\n";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
} catch (Error $e) {
    echo "FATAL: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . ":" . $e->getLine() . "\n";
}

echo "\n</pre>";
