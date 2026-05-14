<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangayOfficial extends Model
{
    protected $fillable = [
        'name',
        'captain',
        'image_path',
        'description',
    ];
}
