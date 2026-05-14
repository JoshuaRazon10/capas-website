<?php

use App\Http\Controllers\Api\WebsiteController;
use App\Http\Controllers\Api\AdminController;
use Illuminate\Support\Facades\Route;

// Public API endpoints for the Capas Website React frontend
Route::get('/directory', [WebsiteController::class, 'getDirectory']);
Route::get('/documents', [WebsiteController::class, 'getDocuments']);
Route::get('/articles', [WebsiteController::class, 'getArticles']);
Route::get('/articles/{slug}', [WebsiteController::class, 'getArticle']);
Route::get('/gallery', [WebsiteController::class, 'getGallery']);
Route::get('/forms', [WebsiteController::class, 'getForms']);
Route::get('/barangays', [WebsiteController::class, 'getBarangayOfficials']);

// Admin API endpoints
Route::prefix('admin')->group(function () {
    Route::get('/articles', [AdminController::class, 'getArticles']);
    Route::post('/articles', [AdminController::class, 'storeArticle']);
    Route::post('/articles/{id}', [AdminController::class, 'updateArticle']);
    Route::delete('/articles/{id}', [AdminController::class, 'deleteArticle']);

    Route::get('/gallery', [AdminController::class, 'getGallery']);
    Route::post('/gallery', [AdminController::class, 'storeGallery']);
    Route::match(['post', 'put'], '/gallery/{id}', [AdminController::class, 'updateGallery']);
    Route::delete('/gallery/{id}', [AdminController::class, 'deleteGallery']);

    Route::get('/documents', [AdminController::class, 'getDocuments']);
    Route::post('/documents', [AdminController::class, 'storeDocument']);
    Route::delete('/documents/{id}', [AdminController::class, 'deleteDocument']);

    Route::get('/barangays', [AdminController::class, 'getBarangayOfficials']);
    Route::post('/barangays/{id}', [AdminController::class, 'updateBarangayOfficial']);
});
