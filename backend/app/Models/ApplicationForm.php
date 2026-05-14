<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApplicationForm extends Model
{
    protected $fillable = [
        'title',
        'file_path',
        'department',
    ];
}
