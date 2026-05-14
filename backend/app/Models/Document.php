<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = [
        'title',
        'file_path',
        'file_name',
        'file_extension',
        'type',
        'reference_no',
        'date_published',
        'year',
        'description',
    ];

    protected $casts = [
        'date_published' => 'date',
    ];
}
