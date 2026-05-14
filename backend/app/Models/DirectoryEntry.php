<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DirectoryEntry extends Model
{
    protected $fillable = [
        'sort_order',
        'name',
        'position',
        'department',
        'dept_emails',
        'contact_numbers',
        'personal_emails',
        'category',
        'facebook_link',
        'image_path',
    ];

    protected $casts = [
        'dept_emails' => 'array',
        'contact_numbers' => 'array',
        'personal_emails' => 'array',
    ];
}
