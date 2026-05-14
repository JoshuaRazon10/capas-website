<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BarangayOfficial;

class BarangayOfficialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $barangays = [
            ['name' => 'Aranguren', 'captain' => 'Hon. Bonifacio P. Alzadon Jr.', 'description' => 'One of the major barangays in Capas.'],
            ['name' => 'Bueno', 'captain' => 'Hon. Danny D. Agdeppa', 'description' => 'Known for its scenic agricultural lands.'],
            ['name' => 'Cristo Rey', 'captain' => 'Hon. Arturo O. Joves', 'description' => 'Formerly known as Navy, a vibrant community.'],
            ['name' => 'Cubcub', 'captain' => 'Hon. Jose P. Tolentino', 'description' => 'Located in the Poblacion area.'],
            ['name' => 'Cut-Cut I', 'captain' => 'Hon. Gerardo C. Sangalang', 'description' => 'One of the central business districts.'],
            ['name' => 'Cut-Cut II', 'captain' => 'Hon. Edwin A. Macale', 'description' => 'A bustling residential and commercial area.'],
            ['name' => 'Dolores', 'captain' => 'Hon. Rogelio D. Pabustan Jr.', 'description' => 'A key barangay in the town center.'],
            ['name' => 'Estrada', 'captain' => 'Hon. Allan S. Ramos', 'description' => 'Formerly Calingcuan, rich in heritage.'],
            ['name' => 'Lawy', 'captain' => 'Hon. Porfirio D. Laxamana Jr.', 'description' => 'A peaceful and growing barangay.'],
            ['name' => 'Manga', 'captain' => 'Hon. Julie R. Guevarra', 'description' => 'A community with strong agricultural roots.'],
            ['name' => 'Manlapig', 'captain' => 'Hon. Ricky M. Datu', 'description' => 'Known for its active local community.'],
            ['name' => 'Maruglo', 'captain' => 'Hon. Lota S. Guanlao', 'description' => 'Located near the foothills, offering cool breezes.'],
            ['name' => "O'Donnell", 'captain' => 'Hon. Wendell L. Mercado', 'description' => 'Home to historical landmarks and nature.'],
            ['name' => 'Sta. Juliana', 'captain' => 'Hon. Jude C. Lenon', 'description' => 'The gateway to Mt. Pinatubo treks.'],
            ['name' => 'Sta. Lucia', 'captain' => 'Hon. Cesario D. Bautista Jr.', 'description' => 'A vibrant residential barangay.'],
            ['name' => 'Sta. Rita', 'captain' => 'Hon. Arnold C. Arcilla', 'description' => 'Growing residential and industrial area.'],
            ['name' => 'Sto. Domingo 1st', 'captain' => 'Hon. Jefferson M. Garcia', 'description' => 'Central urbanized barangay.'],
            ['name' => 'Sto. Domingo 2nd', 'captain' => 'Hon. Edwin Lucas M. Baron', 'description' => 'Busy commercial and urban center.'],
            ['name' => 'Sto. Rosario', 'captain' => 'Hon. Solomon E. Sicat Jr.', 'description' => 'A central Poblacion barangay.'],
            ['name' => 'Talaga', 'captain' => 'Hon. Eliseo C. Malonzo', 'description' => 'A friendly and hospitable community.'],
        ];

        foreach ($barangays as $brgy) {
            BarangayOfficial::updateOrCreate(['name' => $brgy['name']], $brgy);
        }
    }
}
