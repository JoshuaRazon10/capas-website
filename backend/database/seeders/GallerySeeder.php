<?php

namespace Database\Seeders;

use App\Models\GalleryImage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class GallerySeeder extends Seeder
{
    public function run(): void
    {
        // Clear existing gallery images from DB
        GalleryImage::truncate();

        $images = [
            ['title' => 'New Clark City Stadium', 'category' => 'landmarks', 'filename' => 'clark.jpg'],
            ['title' => 'Flag Raising Rites', 'category' => 'events', 'filename' => 'flagrites.jpg'],
            ['title' => 'Monday Flag Ceremony', 'category' => 'events', 'filename' => 'flagrites2.jpg'],
            ['title' => 'LGU Capas Personnel', 'category' => 'government', 'filename' => 'flagrites3.jpg'],
            ['title' => 'Municipal Hall Gathering', 'category' => 'government', 'filename' => 'flagrites4.jpg'],
            ['title' => 'Public Service Excellence', 'category' => 'government', 'filename' => 'flagrites5.jpg'],
            ['title' => 'Mount Pinatubo Crater', 'category' => 'landmarks', 'filename' => 'pinatubo.webp'],
            ['title' => 'Capas National Shrine', 'category' => 'landmarks', 'filename' => 'shrine.png'],
        ];

        // Ensure gallery directory exists in storage
        if (!Storage::disk('public')->exists('gallery')) {
            Storage::disk('public')->makeDirectory('gallery');
        }

        // Define source path (relative to backend directory)
        $sourcePath = base_path('../src/assets/images/');

        foreach ($images as $img) {
            $sourceFile = $sourcePath . $img['filename'];
            $targetPath = 'gallery/' . $img['filename'];

            if (File::exists($sourceFile)) {
                // Copy file to storage
                File::copy($sourceFile, storage_path('app/public/' . $targetPath));

                // Create DB record
                GalleryImage::create([
                    'title' => $img['title'],
                    'category' => $img['category'],
                    'image_path' => $targetPath,
                ]);
            }
        }

        $this->command->info('Gallery seeded and images copied to storage!');
    }
}
