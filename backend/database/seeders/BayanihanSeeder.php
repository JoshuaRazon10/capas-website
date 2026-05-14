<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Document;

class BayanihanSeeder extends Seeder
{
    public function run(): void
    {
        $docs = [
            [
                'title' => 'Report on Fund Utilization and Status of Program Projects Activity Implementation for the Month of April 2020',
                'year' => 2020,
                'type' => 'Bayanihan Grant',
                'description' => 'Monthly Utilization Reports',
                'file_path' => '/bayanihan/Report-on-Fund-Utilization-and-Status-of-Program-Projects-Activity-Implementation-for-the-Month-of-April-2020.pdf'
            ],
            [
                'title' => 'Report on Fund Utilization and Status of Program Projects Activity Implementation for the Month of May 2020',
                'year' => 2020,
                'type' => 'Bayanihan Grant',
                'description' => 'Monthly Utilization Reports',
                'file_path' => '/bayanihan/Report-on-Fund-Utilization-and-Status-of-Program-Projects-Activity-Implementation-for-the-Month-of-May-2020.pdf'
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
