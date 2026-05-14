<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use Illuminate\Support\Str;

class ImportArticlesSeeder extends Seeder
{
    public function run(): void
    {
        $articles = [
            // ARTICLES
            ['date' => '2025-12-01', 'type' => 'news', 'title' => '𝗖𝗢𝗡𝗚𝗥𝗔𝗧𝗨𝗟𝗔𝗧𝗜𝗢𝗡𝗦 𝗧𝗢 𝗢𝗨𝗥 𝗡𝗘𝗪 𝗕𝗢𝗔𝗥𝗗 𝗣𝗔𝗦𝗦𝗘𝗥𝗦!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0kPZDy2pPY1YHsfF4c5pK9zvfdmotuk24ZYBGgoKxoCeEUXcoTWUc2Ln6E2GNhhWol'],
            ['date' => '2025-12-01', 'type' => 'news', 'title' => 'Regional Winner para sa Local Legislative Award para sa taong 2022-2025!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0Rg7kGiWNUPXqDzeePfM578g42vtdTNigszZa3Fnbe7LAvH5op4KTEjRMdx6i7GN8l'],
            ['date' => '2025-12-04', 'type' => 'news', 'title' => '𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗔𝘁𝘁𝘆. 𝗔𝗴𝗻𝗲𝘀 𝗗𝗲𝘃𝗮𝗻𝗮𝗱𝗲𝗿𝗮!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid04PQ8TwPFqEYt67fqBxc7BqevtKpYYh94kaLcLg3STmKJQyEUsZ6KYUqYJpoLRKDJl'],
            ['date' => '2025-12-05', 'type' => 'news', 'title' => '𝗪𝗘 𝗔𝗥𝗘 𝗡𝗨𝗠𝗕𝗘𝗥 𝗢𝗡𝗘!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0LtxGtvuBn1vgfTXTixuZuArQQ4Da3inqTXvmJEqEAfGfbLUbc2txSqRcK6eLD4zul'],
            ['date' => '2025-12-05', 'type' => 'news', 'title' => '𝗦𝗮𝗻𝗴𝗴𝘂𝗻𝗶𝗮𝗻𝗴 𝗕𝗮𝘆𝗮𝗻 𝗻𝗴 𝗖𝗮𝗽𝗮𝘀, 𝗛𝘂𝗺𝗮𝗸𝗼𝘁 𝗻𝗴 𝗠𝗮𝗿𝗮𝗺𝗶𝗻𝗴 𝗣𝗮𝗿𝗮𝗻𝗴𝗮𝗹!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0X85DUPE5uqaLzwbW1YvwzG6SPG4rrKJa7TPM6JezPHdEGYCMPCrDvTtyB3TvshMzl'],
            ['date' => '2025-12-05', 'type' => 'news', 'title' => '𝗖𝗢𝗡𝗚𝗥𝗔𝗧𝗨𝗟𝗔𝗧𝗜𝗢𝗡𝗦 𝗔𝗧 𝗚𝗢𝗢𝗗 𝗟𝗨𝗖𝗞, 𝗞𝗢𝗥𝗢 𝗗𝗢𝗠𝗜𝗡𝗜𝗞𝗔𝗡𝗢!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0cKiEn9oc53ed1vzg8ErZyXrjDpjpbDPNUYN83nz2NAWdfrytoMzXCxGmT2bfqH8jl'],
            ['date' => '2025-12-05', 'type' => 'news', 'title' => '80 𝗩𝗼𝗶𝗰𝗲𝘀, 𝗢𝗻𝗲 𝗖𝗮𝗽𝗮𝘀!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0avEwCxmjWMp3HVzmMtmRnzwg1Hi2zNoYWTqvDFAghD3xHvmbHmNhGkA4jNgwLiGjl'],
            ['date' => '2025-12-12', 'type' => 'news', 'title' => '𝗣𝗿𝗼𝘂𝗱 𝗚𝗹𝗼𝗯𝗮𝗹 𝗹𝗲𝗮𝗱𝗲𝗿, 𝗣𝗿𝗼𝘂𝗱 𝗖𝗔𝗣𝗔𝗦𝗘Ñ𝗢!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02zdXHPwFT2orNyXCpw5ke3L9gPrc9pkg6cjzkE7ycPDjTWdDS19C2kya19ycTZhQEl'],
            ['date' => '2025-12-14', 'type' => 'news', 'title' => '𝗞𝗶𝗿𝘀𝘁𝗲𝗻 𝗚𝗶𝗲𝗻 𝗧𝗶𝘇𝗼𝗻 crowned 𝗠𝗶𝘀𝘀 𝗖𝗮𝗽𝗮𝘀 2025', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02s4prfpUmmhdL4NHNLYGikgmUWQQ4ctV27CHUL3EEfewZk8xARk1LGQzd7b9qTKpzl'],
            ['date' => '2025-12-14', 'type' => 'news', 'title' => '𝗜𝗡𝗧𝗥𝗢𝗗𝗨𝗖𝗜𝗡𝗚 𝗠𝗜𝗦𝗦 𝗖𝗔𝗣𝗔𝗦 2025!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02p8MDYgygRin2wKtVWA9L49bQz9amDimtrkYmx7LRaBSy9pYpGsVeSZgcrA32mawsl'],
            ['date' => '2025-12-15', 'type' => 'news', 'title' => '𝗖𝗮𝗽as, 𝗚𝗲𝘁-𝗚𝗲𝘁-𝗔𝘄𝘄𝘄𝗮𝗿𝗿𝗱𝘀!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0rPQJP7ZPuGjQKMmcKMMcY3THFKC6KnX7YmLBDZ3ixvQpufbw5dTMJtBMgbwrMVEPl'],
            ['date' => '2025-12-15', 'type' => 'news', 'title' => 'Licensed Dentists - November 2025 Licensure Exam', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0dK3iBngPJd5P9nmR6mgkGNnJuk64giNDpvvDf8a3Lhysrmarvt4x3FzDtwNA5A5Fl'],
            ['date' => '2025-12-22', 'type' => 'news', 'title' => '𝗧𝗛𝗘 𝗙𝗜𝗥𝗦𝗧 𝗣𝗢𝗟𝗜𝗖𝗘 𝗕𝗥𝗜𝗚𝗔𝗗𝗜𝗘𝗥 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝗙𝗥𝗢𝗠 𝗖𝗔𝗣𝗔𝗦!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02ScBoUQ7U66xhvSPMn5gaqqVFbnFSnzW8JpK6dtb3kvYuW6ViTkz2CNhJRVLoDP85l'],
            ['date' => '2025-12-24', 'type' => 'news', 'title' => '𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗼𝘂𝗿 𝗡𝗲𝘄 𝗖𝗮𝗽𝗮𝘀𝗲ñ𝗼 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹𝘀!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0ixZxepmbKbxKSPVYyXuWWYMjWCm92XVSGuVGMSR5Jv8VuxEmE1dk6v595Va7aCsgl'],
            ['date' => '2025-12-24', 'type' => 'news', 'title' => 'Licensed Professional Teachers - November 2025', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid036XMLSkrEWQD7L6SibyXKYVr6hUCjmJp4pvazVupV1A3WMkXmGvn1k2GJMijc9mQjl'],
            ['date' => '2025-12-24', 'type' => 'news', 'title' => '𝗢𝗨𝗥 𝗤𝗨𝗘𝗘𝗡 𝗜𝗦 𝗛𝗢𝗠𝗘!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02Q8o3HXnUyoMxPPEmtke42ProGMbM7A1p1tTBEsmpPc346JPLAwbstmKGNqbTMD3Nl'],
            ['date' => '2025-12-27', 'type' => 'news', 'title' => '𝗙𝗥𝗢𝗠 𝗧𝗔𝗟𝗔𝗚𝗔 𝗧𝗢 𝗧𝗛𝗔𝗜𝗟𝗔𝗡𝗗: 𝗝𝗔𝗬𝗣𝗘𝗘 𝗗𝗘𝗟𝗔 𝗖𝗥𝗨𝗭 𝗜𝗦 𝗚𝗢𝗟𝗗𝗘𝗡!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02riWkLbNtmkZZfjT1UArguA4sBHZWhuw4RRrHrFwYvLrzDnaG5ZnLc3Yb3tKoY278l'],

            // EVENTS
            ['date' => '2025-12-01', 'type' => 'event', 'title' => 'Coop Trade Fair at Capas Event Center', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0ZLvtSBYRirNCzoCbJ8WCUmoHHrrf1Ctq4SrLUpacZNouLaCa5PgkapR6Tfi2dnnbl'],
            ['date' => '2025-12-01', 'type' => 'event', 'title' => 'ONE HOUR: The Spark is Coming!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid021QchDWapDJ7DG9X1jVqkawYEod2kgWpH7o4v9umn5SKXjwawTjcB6XkXdNWDqGPrl'],
            ['date' => '2025-12-02', 'type' => 'event', 'title' => "Capas Day 2025 Kick Off: Unity and 'Capas-idad' Highlighted", 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02hA3LnbQ6Fm2ntgbTqcnQFvUzV1Uf1hSyS4eRvwY43MsEK6KjMvZRDYhe7wT69tiyl'],
            ['date' => '2025-12-02', 'type' => 'event', 'title' => 'Buy Local, Grow Capas!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid04bWWLccKY3hr1TTxiGnSHhP3PQsZvQo6MYe7P3oMaaeQjS6WzVAFAzt5jHuKGuwdl'],
            ['date' => '2025-12-03', 'type' => 'event', 'title' => '𝗝𝗼𝗯 𝗙𝗮𝗶𝗿 𝗦𝘂𝗰𝗰𝗲𝘀𝘀: 𝗢𝘃𝗲𝗿 2,000 𝗝𝗼𝗯 𝗢𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝗶𝗲𝘀 𝗢𝗳𝗳𝗲𝗿𝗲𝗱', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02XohoDP2PotSFuzASgbZNAhuwVfpUW1ZX8Rizhass1yoMqSJKoQUYpidwhHUjerLGl'],
            ['date' => '2025-12-03', 'type' => 'event', 'title' => 'ALDO DA RENG ORTILANO, Masaya at Masagana!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02Q5Qez1kNMu615gCFuqQS4tiFgZo9wM8PbtbNZ8v3eZMemzMpPcWS8bWyXoM41edyl'],
            ['date' => '2025-12-04', 'type' => 'event', 'title' => 'cultural heritage exhibit - pagbubukas ng mundo para sa mga hindi nakakakita', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid04tZLEpFysKV5VscdmTYkChXZzydTdqCF5WXeUatC6k4fMWybKhSPw42WNSBqhAZWl'],
            ['date' => '2025-12-04', 'type' => 'event', 'title' => '𝗘𝗸𝘀𝗶𝗯𝗶𝘁 𝗻𝗴 𝗟𝗼𝗸𝗮𝗹 𝗻𝗮 𝗞𝗮𝘀𝗮𝘆𝘀𝗮𝘆𝗮𝗻 𝗮𝘁 𝗻𝗴 𝗺𝗴𝗮 𝗞𝗮𝘁𝘂𝘁𝘂𝗯𝗼𝗻𝗴 𝗔𝘆𝘁𝗮', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0shXCm8yD8t7x8BLgmJU5Vh9P9GpJ5FE1fpiZYWLuAwV3hk8dbrxAiWR8JEfNC8Xhl'],
            ['date' => '2025-12-05', 'type' => 'event', 'title' => 'Celebrate the 313th Founding Anniversary Events', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid032uSypkyCWBFeNMwAY2dKwKk6S3UMFWKkTkSBoTJcEDfhwagB1SVTGk9ty2aiNmaHl'],
            ['date' => '2025-12-06', 'type' => 'event', 'title' => 'Handa na ba si Kap? Handa na ba ang buong Liga?', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid023RbJP9pG1Ab5xqnMyrDrQR7jYyZEbwpTbpZpo4NDXFT1fFoTw78ZSuj3dWNx2PHJl'],
            ['date' => '2025-12-07', 'type' => 'event', 'title' => "IT'S A RIDE DAY SUNDAY!", 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid023rpUNjX6cstt94Ay8G6mJEHnPqLvn5bv9MGphhWNKryRkMHBE7eEk1WyomHwR3mfl'],
            ['date' => '2025-12-07', 'type' => 'event', 'title' => '𝗠𝗶𝘀𝘀 𝗖𝗮𝗽𝗮𝘀 𝗖𝗮𝗻𝗱𝗶𝗱𝗮𝘁𝗲𝘀 𝗮𝗻𝗱 𝗖𝗼𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝘃𝗲𝘀 𝗟𝗲𝗮𝗱 𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁𝗮𝗹 𝗗𝗿𝗶𝘃𝗲', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid021TuQtB8sa4FYEn8BQKKoBpxjtjrbU5mAThaX297A6qdDUSe8F8M8epBpUJRA7Zzul'],
            ['date' => '2025-12-08', 'type' => 'event', 'title' => '𝗖𝗮𝗽𝗮𝘀 𝗔𝗻𝘁𝗶-𝗗𝗿𝘂𝗴 𝗠𝘂𝗿𝗮𝗹 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻𝘀 𝗔𝘄𝗮𝗿𝗱𝗲𝗱', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0212nXQKucCu3UgRSNhKU9kxeKTGLmVdmfgHgB7vZFZuatteHKs3wgbSUCzE15FM3Ll'],
            ['date' => '2025-12-08', 'type' => 'event', 'title' => '𝗖𝗮𝗽𝗮𝘀 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹𝘀 𝗦𝗶𝗴𝗻 𝗣𝗹𝗲𝗱𝗴𝗲 𝘁𝗼 𝗘𝗻𝗱 𝗩𝗶𝗼𝗹𝗲𝗻𝗰𝗲 𝗔𝗴𝗮𝗶𝗻𝘀𝘁 𝗪𝗼𝗺𝗲𝗻', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0fb5jzp9uhcQC8v6murtekx1KuLnp1J1nnF4M85tKtkZE2x626xdSASvb9kzab2zSl'],
            ['date' => '2025-12-09', 'type' => 'event', 'title' => '𝗘𝗟𝗘𝗚𝗔𝗡𝗖𝗘 𝗨𝗡𝗗𝗘𝗥 𝗧𝗛𝗘 𝗦𝗧𝗔𝗥𝗦! 𝗕𝗼𝗻𝘀𝗮𝗶 𝗘𝘅𝗵𝗶𝗯𝗶𝘁 𝗡𝗶𝗴𝗵𝘁 𝗩𝗶𝗲𝘄!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02zpzQ2T8tMFtf1vVWLaDZbWx2YZG7VhZBdvceLfzwhc2YHLKHjiwT9KNUm2shjaKcl'],
            ['date' => '2025-12-09', 'type' => 'event', 'title' => '𝗚𝗮𝗯𝗶 𝗻𝗴 𝗣𝗮𝗿𝗮𝗻𝗴𝗮𝗹 𝗮𝘁 𝗣𝗮𝘀𝗮𝘀𝗮𝗹𝗮𝗺𝗮𝘁: 𝗔 𝗚𝗮𝗹𝗮 𝗗𝗶𝗻𝗻𝗲𝗿', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0279Az3DfNc64QbuEVPAjYKVc2pWbrttMYevnS4H32Q34NDdg3LHuMJTWbEnX6EQfzl'],
            ['date' => '2025-12-09', 'type' => 'event', 'title' => 'CAPAS TRAFFIC AND TRUCK BAN ADVISORY: Capas Day 2025', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02azcF3r4ZD7NWfRSxp3vBpq4NxAetSaMXA6GhF59KeKXpVmC9nQH2qAm8NLrpsZKWl'],
            ['date' => '2025-12-09', 'type' => 'event', 'title' => '𝗕𝗮𝗿𝗮𝗻𝗴𝗮y 𝗡𝗶𝗴𝗵𝘁 2025, 𝗡𝗶𝘆𝗮𝗻𝗶𝗴 𝗻𝗴 𝗺𝗴𝗮 𝗞𝗮𝗽𝗶𝘁𝗮𝗻 𝗮𝘁 𝗧𝗮𝗴𝗮-𝗕𝗮𝗿𝗮𝗻𝗴𝗮𝘆!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid026pHApA6MznDHRtpxV4K2vhGwQvvmxPLaiHJpLqxjtTMepFyvkykKeHKXXD4m3eNkl'],
            ['date' => '2025-12-09', 'type' => 'event', 'title' => '𝗕𝘂𝗸𝗮𝘀 𝗻𝗮 𝗮𝗻𝗴 𝗶𝗻𝗮𝗮𝗯𝗮𝗻𝗴𝗮𝗻 𝗻𝗮𝘁𝗶𝗻𝗴 𝗠𝗶𝘀𝘀 𝗖𝗮𝗽𝗮𝘀 2025 𝗚𝗿𝗮𝗻𝗱 𝗖𝗼𝗿𝗼𝗻𝗮𝘁𝗶𝗼𝗻 𝗡𝗶𝗴𝗵𝘁!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02fxABQhvFSjeqV7asUsQfcByQaSyYbSsm13XW688bGMdhdDGNvFRNgEkP5H3r4wDLl'],
            ['date' => '2025-12-12', 'type' => 'event', 'title' => '𝗗𝗙𝗔 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 𝗦𝗲𝗰𝗿𝗲𝘁𝗮𝗿𝘆 𝗡𝗮𝗺𝗲𝗱 𝗠𝗼𝘀𝘁 𝗢𝘂𝘁𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗖𝗮𝗽𝗮𝘀𝗲ñ𝗼', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0cHxv69NK4DykppeN547AmZmWUhynEU3KSLJMpXntVyfDVFvpbNRKNMYBe5nUoV5zl'],
            ['date' => '2025-12-12', 'type' => 'event', 'title' => '𝗕𝗿𝗴𝘆. 𝗖𝘂𝘁-𝗖𝘂𝘁 𝗜𝗜, 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻 𝘀𝗮 𝗗𝗜𝗦𝗛𝗖𝗼𝘃𝗲𝗿 𝗖𝗮𝗽𝗮𝘀𝗲ñ𝗼 𝗖𝗼𝗼𝗸𝗳𝗲𝘀𝘁!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0k3oRrw811SwVVTVkaZoN1Ywa1nUFVkjPFNmHHctVKCM1rEeebFntg9oyDLsZPes2l'],
            ['date' => '2025-12-12', 'type' => 'event', 'title' => '𝗖𝗮𝗽𝗮𝘀 𝗗𝗮𝘆 𝗚𝗿𝗮𝗻𝗱 𝗣𝗮𝗿𝗮𝗱𝗲!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid031yiZV3e5kA3YvbBQggr4UC6UVHh7kSPRP78MNDSxk296b7wgKBiX4nUugVG1Q4Yhl'],
            ['date' => '2025-12-12', 'type' => 'event', 'title' => 'Joint meeting of the MPOC/MADAC/NTF-ELCAC for 4th Quarter 2025', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0neQFKBG7Pi5eaJvzLVsUVUidQuRzvn3YWY4EgABtrKERbk4v5ViMuq8yBQx9RfHol'],
            ['date' => '2025-12-12', 'type' => 'event', 'title' => '𝗖𝗮𝗽𝗮𝘀 𝗟𝗚𝗨 𝗘𝗺𝗽𝗹𝗼𝘆𝗲𝗲𝘀 𝗔𝘁𝘁𝗲𝗻𝗱 𝗠𝗲𝗻𝘁𝗮𝗹 𝗛𝗲𝗮𝗹𝘁𝗵 𝗦𝗲𝗺𝗶𝗻𝗮𝗿', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0h8k5qy9n41LYRTmToVL65xDiGt9zscbaUXUSdTQyh972EaujHf8o9WrzLG9qEDEMl'],
            ['date' => '2025-12-12', 'type' => 'event', 'title' => '𝗖𝗮𝗽𝗮𝘀 𝗗𝗮𝘆 𝗦𝘁𝗿𝗲𝗲𝘁 𝗗𝗮𝗻𝗰𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻: 𝗔𝗻 𝗘𝘅𝗽𝗹𝗼𝘀𝗶𝗼𝗻 𝗼𝗳 𝗖𝗼𝗹𝗼𝗿!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0UDEb6J3cVasZnMYQZx1mQi26oA7Cw4n1C29gGTk9NmXJny8rHjc5auXjSPGHwv7Tl'],
            ['date' => '2025-12-13', 'type' => 'event', 'title' => '𝗦𝘁𝗿𝗲𝗲𝘁 𝗗𝗮𝗻𝗰𝗶𝗻𝗴 𝗚𝗿𝗮𝗻𝗱 𝗦𝗵𝗼𝘄𝗱𝗼𝘄𝗻', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02LmCVFKR2RrVRJQXcS3qWVaWFUtp5PPgHZJG6N4MZRZm7nzjuaijZjgxd7aCpnhsXl'],
            ['date' => '2025-12-13', 'type' => 'event', 'title' => 'Winners of the Capas Day 2025 Street Dancing and Float Competitions!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02kdKwUhHYkHtmZ33T9yusFyGT4Pm9zdZAfa1nLRjecqMu629z2XGrEmmB3agFVNVyl'],
            ['date' => '2025-12-13', 'type' => 'event', 'title' => '𝗪𝗶𝗻𝗻𝗲𝗿𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗕𝗲𝘀𝘁 𝗶𝗻 𝗨𝗿𝗯𝗮𝗻 & 𝗕𝗮𝗰𝗸𝘆𝗮𝗿𝗱 𝗚𝗮𝗿𝗱𝗲𝗻𝗶𝗻𝗴 2025!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0XVhQhkJZa3CAJgAZi8rDNo7RH7YMXYbEiP67jfeXzyqvMy2kLJPoYXhDvFyCKS77l'],
            ['date' => '2025-12-17', 'type' => 'event', 'title' => '𝗢𝘃𝗲𝗿 700 𝗦𝗲𝗻𝗶𝗼𝗿𝘀 𝗥𝗲𝗰𝗲𝗶𝘃𝗲 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0369jAedQrh3nU1iYpJdYVtkqEPWfenSw9ey8pBKmB21qBX76yXgCwVy5kKAa8TJXJl'],
            ['date' => '2025-12-18', 'type' => 'event', 'title' => 'Alessandra David represents PH at Miss Celebrity International', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0XhbqRqZzm4KPe2NVXHmgKbnnUE3ThkXwUHgZoYm6CxWFmjXCSXhRXpt7TiBMDRZzl'],
            ['date' => '2025-12-19', 'type' => 'event', 'title' => 'CONGRATULATIONS to our amazing new Licensed Professional Teachers!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02yi1ZFs4yyFbGWMgvrNXRx6TyYVGEcJ9phuovHUFNgqQjaP5VGpAbxML3RHULPAvdl'],
            ['date' => '2025-12-19', 'type' => 'event', 'title' => 'Mayor Boots Rodriguez Expands Senior Pension Program', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid035YtZXyekYPwsKcRcAvRHgqXP3a22QoK4kFAaHpAXNB5KQRBFADPGfxfc1JiNBqHol'],
            ['date' => '2025-12-20', 'type' => 'event', 'title' => 'Hon. Imelda Papin visits future Capas Medical Complex site', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02PQRMKfJpw6i5iFAwyysjB6CtdexaSEvktHGNXJC7o3fJiExG1J3pPNcnaLuRbMwgl'],
            ['date' => '2025-12-23', 'type' => 'event', 'title' => '𝗖𝗮𝗽𝗮𝘀 𝗜𝗻𝗮𝘂𝗴𝘂𝗿𝗮𝘁𝗲𝘀 𝗡𝗲𝘄 𝗚𝗮𝘇𝗲𝗯𝗼 𝗙𝘂𝗻𝗱𝗲𝗱 𝗯𝘆 𝗦𝗚𝗟𝗚 𝗜𝗻𝗰𝗲𝗻𝘁𝗶𝘃𝗲 𝗙𝘂𝗻𝗱', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0qqqikYSXbrfhPCY9it6666xsMLcerv5aVoGEW3q8e6oTZqM5CYdGd8XHAVKYAS4Bl'],
            ['date' => '2025-12-23', 'type' => 'event', 'title' => '𝗛𝗶𝗴𝗶𝘁 ₱4-𝗠𝗶𝗹𝘆𝗼𝗻𝗴 𝗔𝘆𝘂𝗱𝗮 𝗽𝗮𝗿𝗮 𝘀𝗮 𝗜𝗯𝗮’𝘁- 𝗜𝗯𝗮𝗻𝗴 𝗦𝗲𝗸𝘁𝗼𝗿', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02GJUppS62xqTEMF7WGycqcGfq7MyJ5VodaGPdFcYm3RTNw56nwDPSEmpZJhzdHCR8l'],
            ['date' => '2025-12-23', 'type' => 'event', 'title' => '700 𝗜𝗻𝗱𝗶𝗴𝗲𝗻𝘁 𝘀𝗮 𝗖𝗮𝗽𝗮𝘀, 𝗡𝗮𝗸𝗮𝘁𝗮𝗻𝗴𝗴𝗮𝗽 𝗻𝗴 𝗣𝗮𝗺𝗮𝘀𝗸𝗼𝗻𝗴 𝗛𝗮𝗻𝗱𝗼𝗴', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02YzJMoEugLHFR3rv3nHfoLg1upfSawZ8RXYcc4eGTAJF3VorsNEkuNVoQ9Yg2Upp6l'],
            ['date' => '2025-12-23', 'type' => 'event', 'title' => '153 𝗖𝗮𝗻𝗰𝗲𝗿 𝗮𝘁 𝗗𝗶𝗮𝗹𝘆𝘀𝗶𝘀 𝗣𝗮𝘁𝗶𝗲𝗻𝘁𝘀 𝘀𝗮 𝗖𝗮𝗽𝗮𝘀, 𝗧𝘂𝗺𝗮𝗻𝗴𝗴𝗮𝗽 𝗻𝗴 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0K4USfL2vchXFoiHh8ACNwraRYLvmT2SvLkGdfYBRhCZWZdTgE6Q1U3f2x7DwmbSal'],
            ['date' => '2025-12-23', 'type' => 'event', 'title' => 'Alessandra David safely back home as 2nd Runner-Up!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02Q8o3HXnUyoMxPPEmtke42ProGMbM7A1p1tTBEsmpPc346JPLAwbstmKGNqbTMD3Nl'],
            ['date' => '2025-12-30', 'type' => 'event', 'title' => '𝗚𝘂𝗶𝗱𝗲𝗱 𝗯𝘆 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲, 𝗗𝗿𝗶𝘃𝗲𝗻 𝗯𝘆 𝗛𝗲𝗮𝗿𝘁', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0DgF2f8tNFDyW3UvsYTMWYiyA5NDGVoHZw44AS4hcKLP3LBSvRYRQzjkz1M3q9zJHl'],
            ['date' => '2025-12-31', 'type' => 'event', 'title' => '𝗘𝗻𝗱𝗶𝗻𝗴 𝟮𝟬𝟮𝟱 𝘄𝗶𝘁𝗵 𝗮 𝗾𝘂𝗶𝗰𝗸 𝗽𝗿𝗲𝘃𝗶𝗲𝘄 𝗼𝗳 𝟮𝟬𝟮𝟲!', 'link' => 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid087R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl'],
        ];

        foreach ($articles as $data) {
            Article::updateOrCreate(
                ['external_link' => $data['link']],
                [
                    'title' => $data['title'],
                    'type' => $data['type'],
                    'date_published' => $data['date'],
                    'content' => $data['title'],
                    'is_published' => true,
                    'slug' => Str::slug($data['title']) . '-' . Str::random(5)
                ]
            );
        }
    }
}
