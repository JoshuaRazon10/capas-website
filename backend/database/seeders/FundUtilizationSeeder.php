<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Document;

class FundUtilizationSeeder extends Seeder
{
    public function run(): void
    {
        $docs = [
            [
                'title' => 'Report on Fund Utilization and Status of Program or Project Implementation as of March 31, 2023',
                'year' => 2023,
                'type' => 'Fund Utilization',
                'description' => 'Financial Transparency Record',
                'file_path' => '/fund/Report-on-Fund-Utilization-and-Status-of-Program-or-Project-Implementation-as-of-March-31-2023.pdf'
            ],
        ];

        foreach ($docs as $doc) {
            Document::updateOrCreate(
                ['title' => $doc['title'], 'year' => $doc['year'], 'type' => $doc['type']],
                ['description' => $doc['description'], 'file_path' => $doc['file_path']]
            );
        }
    }
}
