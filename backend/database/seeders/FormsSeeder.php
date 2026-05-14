<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Document;

class FormsSeeder extends Seeder
{
    public function run(): void
    {
        $docs = [
            [
                'title' => 'Application Form for New Business',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Application Form for New Business',
                'file_path' => '/forms/Application-Form-for-New-Business.docx'
            ],
            [
                'title' => 'Application Form for Renewal',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Application Form for Renewal',
                'file_path' => '/forms/Application-Form-for-Renewal.docx'
            ],
            [
                'title' => 'Building Permit Requirements - New',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'New Building Permit',
                'file_path' => '/forms/BUILDING-PERMIT-REQUIREMENTS-NEW.doc'
            ],
            [
                'title' => 'Electrical Permit Form (front/back 3 copies)',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Electrical Permit Form',
                'file_path' => '/forms/ELECTRICAL-PERMIT-FORM-front-back-3-copies-1.doc'
            ],
            [
                'title' => 'Fencing Permit Form (from back 3 copies)',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Fencing Permit Form',
                'file_path' => '/forms/FENCING-PERMIT-FORM-from-back-3-copies.docx'
            ],
            // Certificate of Occupancy Group
            [
                'title' => 'Unified Application Form for Certificate of Occupancy',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Certificate of Occupancy Application Form and Completion Form',
                'file_path' => '/forms/Unified-Application-Form-for-Certificate-of-Occupancy-1-copy.pdf'
            ],
            [
                'title' => 'Certificate of Completion (3 copies)',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Certificate of Occupancy Application Form and Completion Form',
                'file_path' => '/forms/CERTIFICATE-OF-COMPLETION-3-copies.doc'
            ],
            [
                'title' => 'Certificate of Completion - Electrical Works',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Certificate of Occupancy Application Form and Completion Form',
                'file_path' => '/forms/CERTIFICATE-OF-COMPLETION-ELECTRICAL-WORKS-3-copies.doc'
            ],
            // Building Permit & Ancillary Group
            [
                'title' => 'Unified Application Form for Building Permit',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Building Permit Form and Other Ancillary Permit Form',
                'file_path' => '/forms/UNIFIED-APPLICATION-FORM-FOR-BUILDING-PERMIT-front-back-5-copies.pdf'
            ],
            [
                'title' => 'Mechanical Permit Form',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Building Permit Form and Other Ancillary Permit Form',
                'file_path' => '/forms/MECHANICAL-PERMIT-FORM-front-back-3-copies.doc'
            ],
            [
                'title' => 'Electronics Permit Form',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Building Permit Form and Other Ancillary Permit Form',
                'file_path' => '/forms/ELECTRONICS-PERMIT-FORM-front-back-3-copies.doc'
            ],
            [
                'title' => 'Sanitary Plumbing Permit Form',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Building Permit Form and Other Ancillary Permit Form',
                'file_path' => '/forms/SANITARY-PLUMBING-PERMIT-FORM-front-back-3-copies.doc'
            ],
            [
                'title' => 'Building Permit Requirements',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Building Permit Form and Other Ancillary Permit Form',
                'file_path' => '/forms/BUILDING-PERMIT-REQUIREMENTS.doc'
            ],
            [
                'title' => 'Certification (3 copies)',
                'year' => 2024,
                'type' => 'Downloadable Forms',
                'description' => 'Building Permit Form and Other Ancillary Permit Form',
                'file_path' => '/forms/CERTIFICATION-3-copies.doc'
            ],
        ];

        foreach ($docs as $doc) {
            Document::updateOrCreate(
                ['file_path' => $doc['file_path']],
                [
                    'title' => $doc['title'],
                    'year' => $doc['year'],
                    'type' => $doc['type'],
                    'description' => $doc['description']
                ]
            );
        }
    }
}
