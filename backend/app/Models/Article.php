<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Article extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'featured_image',
        'image_path',
        'type',
        'event_date',
        'date_published',
        'external_link',
        'is_published',
    ];

    protected $casts = [
        'event_date' => 'date',
        'is_published' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($article) {
            if (empty($article->slug)) {
                $slug = Str::slug($article->title);
                // If title is all fancy characters, Str::slug might return empty
                if (empty($slug)) {
                    $slug = 'post-' . Str::random(8);
                }
                
                // Ensure uniqueness
                $originalSlug = $slug;
                $count = 1;
                while (Article::where('slug', $slug)->exists()) {
                    $slug = $originalSlug . '-' . $count++;
                }
                
                $article->slug = $slug;
            }
        });
    }
}
