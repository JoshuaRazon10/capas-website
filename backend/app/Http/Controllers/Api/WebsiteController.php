<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Article;
use App\Models\DirectoryEntry;
use App\Models\GalleryImage;
use App\Models\ApplicationForm;
use App\Models\BarangayOfficial;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    /**
     * Get all directory entries grouped by category
     */
    public function getDirectory()
    {
        return response()->json([
            'executive' => DirectoryEntry::where('category', 'executive')->orderBy('sort_order')->get(),
            'council' => DirectoryEntry::where('category', 'council')->orderBy('sort_order')->get(),
            'mayor' => DirectoryEntry::where('category', 'mayor')->orderBy('sort_order')->get(),
            'vice_mayor' => DirectoryEntry::where('category', 'vice-mayor')->orderBy('sort_order')->get(),
            'national' => DirectoryEntry::where('category', 'national')->orderBy('sort_order')->get(),
            'utility' => DirectoryEntry::where('category', 'utility')->orderBy('sort_order')->get(),
            'church' => DirectoryEntry::where('category', 'church')->orderBy('sort_order')->get(),
            'barangay' => DirectoryEntry::where('category', 'barangay')->orderBy('department')->orderBy('sort_order')->get(),
        ]);
    }

    /**
     * Get documents filtered by type
     */
    public function getDocuments(Request $request)
    {
        $type = $request->query('type');
        $query = Document::query();

        if ($type) {
            $query->where('type', $type);
        }

        return response()->json($query->latest()->get());
    }

    /**
     * Get news and events
     */
    public function getArticles(Request $request)
    {
        $type = $request->query('type');

        if ($type) {
            return response()->json(
                Article::where('type', $type)
                    ->where('is_published', true)
                    ->orderBy('date_published', 'desc')
                    ->latest('id')
                    ->get()
            );
        }

        return response()->json([
            'news' => Article::where('type', 'news')->where('is_published', true)->latest()->take(10)->get(),
            'events' => Article::where('type', 'event')->where('is_published', true)->latest()->take(10)->get(),
        ]);
    }

    /**
     * Get a single article by slug
     */
    public function getArticle($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        return response()->json($article);
    }

    /**
     * Get gallery images
     */
    public function getGallery(Request $request)
    {
        $category = $request->query('category');
        $query = GalleryImage::query();

        if ($category) {
            $query->where('category', $category);
        }

        return response()->json($query->latest()->get());
    }

    /**
     * Get downloadable forms
     */
    public function getForms()
    {
        return response()->json(ApplicationForm::orderBy('department')->get());
    }

    /**
     * Get all barangay officials
     */
    public function getBarangayOfficials()
    {
        return response()->json(BarangayOfficial::orderBy('name')->get());
    }
}
