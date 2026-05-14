<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

class NewsAndEventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear only News and Events
        Article::whereIn('type', ['news', 'event'])->delete();

        $news = [
            ['date' => '2025-12-01', 'title' => 'Municipality of Capas: Excellence in Local Governance', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid067R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-05', 'title' => 'Capas Tourism: A Journey Through History and Nature', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid087R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-10', 'title' => 'New Infrastructure Projects to Boost Local Economy', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid097R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-15', 'title' => 'Capas National Shrine: Commemorating Bataan Death March', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid017R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-20', 'title' => 'Mount Pinatubo Trekking Season Now Open', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid027R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-25', 'title' => 'Capas Christmas Festival 2025 Highlights', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid037R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-30', 'title' => 'Annual Harvest Festival Celebration in Capas', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid047R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-31', 'title' => 'New Clark City: The Smart City of the Future', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid057R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
        ];

        $events = [
            ['date' => '2025-12-01', 'title' => 'Capas Founding Anniversary Parade', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid067R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-05', 'title' => 'Regional Cultural Dance Competition 2025', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid077R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
            ['date' => '2025-12-31', 'title' => 'Ending 2025 with a quick preview of 2026!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid087R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
        ];

        foreach ($news as $item) {
            Article::create([
                'title' => $item['title'],
                'slug' => 'news-' . uniqid(),
                'type' => 'news',
                'content' => $item['title'],
                'date_published' => $item['date'],
                'external_link' => $item['link'],
                'is_published' => true,
            ]);
        }

        foreach ($events as $item) {
            Article::create([
                'title' => $item['title'],
                'slug' => 'event-' . uniqid(),
                'type' => 'event',
                'content' => $item['title'],
                'date_published' => $item['date'],
                'external_link' => $item['link'],
                'is_published' => true,
            ]);
        }
    }
}
