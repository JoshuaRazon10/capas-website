<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run()
    {
        $articles = [
            [
                'title' => 'Mayor Boots Rodriguez Leads Payout for TUPAD Beneficiaries',
                'type' => 'news',
                'content' => 'Mayor Boots Rodriguez leads the payout for TUPAD beneficiaries in Capas.',
                'date_published' => 'May 10, 2026',
                'external_link' => 'https://www.facebook.com/BootsRodriguezOfficial/posts/pfbid02VpZz7fVj...',
                'is_published' => true,
            ],
            [
                'title' => 'Capas Municipal Health Office Conducts Free Medical Mission',
                'type' => 'news',
                'content' => 'Free medical mission conducted by the Municipal Health Office.',
                'date_published' => 'May 08, 2026',
                'external_link' => 'https://www.facebook.com/BootsRodriguezOfficial/posts/pfbid02XwY...',
                'is_published' => true,
            ],
            [
                'title' => 'New Business One-Stop Shop Opens at Municipal Hall',
                'type' => 'news',
                'content' => 'New BOSS center opens for faster business registration.',
                'date_published' => 'May 05, 2026',
                'external_link' => 'https://www.facebook.com/BootsRodriguezOfficial/posts/pfbid03...',
                'is_published' => true,
            ],
        ];

        foreach ($articles as $article) {
            Article::create($article);
        }
    }
}
