<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\GalleryImage;
use App\Models\Document;
use App\Models\BarangayOfficial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    /**
     * Get all articles for admin
     */
    public function getArticles(Request $request)
    {
        $type = $request->query('type');
        $query = Article::query();
        if ($type) {
            $query->where('type', $type);
        }
        return response()->json($query->orderBy('date_published', 'desc')->latest('id')->get());
    }

    /**
     * Store a new article
     */
    public function storeArticle(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'external_link' => 'nullable|string',
            'date_published' => 'nullable|string',
        ]);

        $article = new Article();
        $article->title = $request->title;
        $article->type = $request->type;
        $article->external_link = $request->external_link;
        
        // Handle date_published
        if ($request->date_published) {
            try {
                $article->date_published = \Carbon\Carbon::parse($request->date_published)->format('Y-m-d');
            } catch (\Exception $e) {
                $article->date_published = now()->format('Y-m-d');
            }
        } else {
            $article->date_published = now()->format('Y-m-d');
        }
        $article->is_published = true;
        $article->content = $request->title; // Use title as content if not provided

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('articles', 'public');
            $article->image_path = $path;
        }

        $article->save();

        return response()->json($article, 201);
    }

    /**
     * Update an article
     */
    public function updateArticle(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'nullable|string',
            'date_published' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'external_link' => 'nullable|string',
        ]);

        $article->title = $request->title;
        $article->type = $request->type ?: $article->type;
        
        // Handle date_published
        if ($request->date_published) {
            try {
                $article->date_published = \Carbon\Carbon::parse($request->date_published)->format('Y-m-d');
            } catch (\Exception $e) {
                // Keep original if parsing fails or set to now
                $article->date_published = $article->date_published ?: now()->format('Y-m-d');
            }
        }
        
        $article->external_link = $request->external_link;
        
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($article->image_path) {
                Storage::disk('public')->delete($article->image_path);
            }
            $path = $request->file('image')->store('articles', 'public');
            $article->image_path = $path;
        }

        $article->save();

        return response()->json($article);
    }

    /**
     * Delete an article
     */
    /**
     * Delete an article
     */
    public function deleteArticle($id)
    {
        $article = Article::findOrFail($id);
        if ($article->image_path) {
            Storage::disk('public')->delete($article->image_path);
        }
        $article->delete();

        return response()->json(['message' => 'Article deleted successfully']);
    }

    /**
     * Get all gallery images
     */
    public function getGallery(Request $request)
    {
        return response()->json(GalleryImage::latest()->get());
    }

    /**
     * Store gallery image
     */
    public function storeGallery(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|max:10240',
            'category' => 'nullable|string',
        ]);

        $item = new GalleryImage();
        $item->title = $request->title;
        $item->category = $request->category ?: 'general';
        
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('gallery', 'public');
            $item->image_path = $path;
        }

        $item->save();
        return response()->json($item, 201);
    }

    /**
     * Update gallery image
     */
    public function updateGallery(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|max:10240',
            'category' => 'nullable|string',
        ]);

        $item = GalleryImage::findOrFail($id);
        $item->title = $request->title;
        if ($request->category) {
            $item->category = $request->category;
        }

        if ($request->hasFile('image')) {
            // Delete old image
            if ($item->image_path) {
                Storage::disk('public')->delete($item->image_path);
            }
            $path = $request->file('image')->store('gallery', 'public');
            $item->image_path = $path;
        }

        $item->save();
        return response()->json($item);
    }

    /**
     * Delete gallery image
     */
    public function deleteGallery($id)
    {
        $item = GalleryImage::findOrFail($id);
        if ($item->image_path) {
            Storage::disk('public')->delete($item->image_path);
        }
        $item->delete();
        return response()->json(['message' => 'Image deleted']);
    }

    /**
     * Get all documents
     */
    public function getDocuments(Request $request)
    {
        return response()->json(Document::latest()->get());
    }

    /**
     * Store document
     */
    public function storeDocument(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file|max:51200',
            'type' => 'required|string',
            'year' => 'nullable|integer',
            'description' => 'nullable|string',
        ]);

        $doc = new Document();
        $doc->title = $request->title;
        $doc->type = $request->type;
        $doc->year = $request->year ?: date('Y');
        $doc->description = $request->description;
        $doc->file_name = $request->file('file')->getClientOriginalName();
        $doc->file_extension = $request->file('file')->getClientOriginalExtension();
        
        $path = $request->file('file')->store('documents', 'public');
        $doc->file_path = $path;

        $doc->save();
        return response()->json($doc, 201);
    }

    /**
     * Delete document
     */
    public function deleteDocument($id)
    {
        $doc = Document::findOrFail($id);
        if ($doc->file_path) {
            Storage::disk('public')->delete($doc->file_path);
        }
        $doc->delete();
        return response()->json(['message' => 'Document deleted']);
    }

    /**
     * Get all barangay officials
     */
    public function getBarangayOfficials()
    {
        return response()->json(BarangayOfficial::all());
    }

    /**
     * Update barangay official
     */
    public function updateBarangayOfficial(Request $request, $id)
    {
        $request->validate([
            'captain' => 'required|string|max:255',
            'image' => 'nullable|image|max:10240',
            'description' => 'nullable|string',
        ]);

        $official = BarangayOfficial::findOrFail($id);
        $official->captain = $request->captain;
        $official->description = $request->description;

        if ($request->remove_image == 'true') {
            if ($official->image_path) {
                Storage::disk('public')->delete($official->image_path);
            }
            $official->image_path = null;
        }

        if ($request->hasFile('image')) {
            if ($official->image_path) {
                Storage::disk('public')->delete($official->image_path);
            }
            $path = $request->file('image')->store('barangays', 'public');
            $official->image_path = $path;
        }

        $official->save();
        return response()->json($official);
    }
}
