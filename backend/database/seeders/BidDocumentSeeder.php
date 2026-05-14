<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Document;
use Illuminate\Support\Facades\File;

class BidDocumentSeeder extends Seeder
{
    public function run(): void
    {
        $directory = storage_path('app/public/bidding-award');
        
        if (!File::exists($directory)) {
            return;
        }

        $files = File::files($directory);

        foreach ($files as $file) {
            $filename = $file->getFilename();
            
            // Skip if already exists
            if (Document::where('file_path', 'bidding-award/' . $filename)->exists()) {
                continue;
            }

            // Clean title from filename
            $title = str_replace(['-', '.pdf'], [' ', ''], $filename);
            $title = trim(preg_replace('/\s+/', ' ', $title));
            
            // Determine type from filename
            $type = 'Notice';
            if (stripos($filename, 'Invitation') !== false) $type = 'ITB';
            if (stripos($filename, 'Award') !== false) $type = 'NOA';
            if (stripos($filename, 'Proceed') !== false) $type = 'NTP';
            if (stripos($filename, 'Quotation') !== false) $type = 'RFQ';
            if (stripos($filename, 'Contract') !== false) $type = 'Contract';

            Document::create([
                'title' => $title,
                'file_path' => 'bidding-award/' . $filename,
                'type' => 'bids_awards',
                'reference_no' => $type,
                'year' => 2024,
                'date_published' => now(),
                'description' => 'Imported bidding document: ' . $type
            ]);
        }
    }
}
