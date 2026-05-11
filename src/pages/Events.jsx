import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, InputGroup, Button, Table, Badge } from 'react-bootstrap'
import { FaSearch, FaCalendarDay, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const events = [
    { date: 'December 1, 2025', title: 'Coop Trade Fair at Capas Event Center', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0ZLvtSBYRirNCzoCbJ8WCUmoHHrrf1Ctq4SrLUpacZNouLaCa5PgkapR6Tfi2dnnbl' },
    { date: 'December 1, 2025', title: 'ONE HOUR: The Spark is Coming!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid021QchDWapDJ7DG9X1jVqkawYEod2kgWpH7o4v9umn5SKXjwawTjcB6XkXdNWDqGPrl' },
    { date: 'December 2, 2025', title: "Capas Day 2025 Kick Off: Unity and 'Capas-idad' Highlighted", link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02hA3LnbQ6Fm2ntgbTqcnQFvUzV1Uf1hSyS4eRvwY43MsEK6KjMvZRDYhe7wT69tiyl' },
    { date: 'December 2, 2025', title: 'Buy Local, Grow Capas!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid04bWWLccKY3hr1TTxiGnSHhP3PQsZvQo6MYe7P3oMaaeQjS6WzVAFAzt5jHuKGuwdl' },
    { date: 'December 3, 2025', title: '𝗝𝗼𝗯 𝗙𝗮𝗶𝗿 𝗦𝘂𝗰𝗰𝗲𝘀𝘀: 𝗢𝘃𝗲𝗿 2,000 𝗝𝗼𝗯 𝗢𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝗶𝗲𝘀 𝗢𝗳𝗳𝗲𝗿𝗲𝗱', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02XohoDP2PotSFuzASgbZNAhuwVfpUW1ZX8Rizhass1yoMqSJKoQUYpidwhHUjerLGl' },
    { date: 'December 3, 2025', title: 'ALDO DA RENG ORTILANO, Masaya at Masagana!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02Q5Qez1kNMu615gCFuqQS4tiFgZo9wM8PbtbNZ8v3eZMemzMpPcWS8bWyXoM41edyl' },
    { date: 'December 4, 2025', title: 'cultural heritage exhibit - pagbubukas ng mundo para sa mga hindi nakakakita', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid04tZLEpFysKV5VscdmTYkChXZzydTdqCF5WXeUatC6k4fMWybKhSPw42WNSBqhAZWl' },
    { date: 'December 4, 2025', title: '𝗘𝗸𝘀𝗶𝗯𝗶𝘁 𝗻𝗴 𝗟𝗼𝗸𝗮𝗹 𝗻𝗮 𝗞𝗮𝘀𝗮𝘆𝘀𝗮𝘆𝗮𝗻 𝗮𝘁 𝗻𝗴 𝗺𝗴𝗮 𝗞𝗮𝘁𝘂𝘁𝘂𝗯𝗼𝗻𝗴 𝗔𝘆𝘁𝗮', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0shXCm8yD8t7x8BLgmJU5Vh9P9GpJ5FE1fpiZYWLuAwV3hk8dbrxAiWR8JEfNC8Xhl' },
    { date: 'December 5, 2025', title: 'Celebrate the 313th Founding Anniversary Events', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid032uSypkyCWBFeNMwAY2dKwKk6S3UMFWKkTkSBoTJcEDfhwagB1SVTGk9ty2aiNmaHl' },
    { date: 'December 6, 2025', title: 'Handa na ba si Kap? Handa na ba ang buong Liga?', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid023RbJP9pG1Ab5xqnMyrDrQR7jYyZEbwpTbpZpo4NDXFT1fFoTw78ZSuj3dWNx2PHJl' },
    { date: 'December 7, 2025', title: "IT'S A RIDE DAY SUNDAY!", link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid023rpUNjX6cstt94Ay8G6mJEHnPqLvn5bv9MGphhWNKryRkMHBE7eEk1WyomHwR3mfl' },
    { date: 'December 7, 2025', title: '𝗠𝗶𝘀𝘀 𝗖𝗮𝗽𝗮𝘀 𝗖𝗮𝗻𝗱𝗶𝗱𝗮𝘁𝗲𝘀 𝗮𝗻𝗱 𝗖𝗼𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝘃𝗲𝘀 𝗟𝗲𝗮𝗱 𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁𝗮𝗹 𝗗𝗿𝗶𝘃𝗲', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid021TuQtB8sa4FYEn8BQKKoBpxjtjrbU5mAThaX297A6qdDUSe8F8M8epBpUJRA7Zzul' },
    { date: 'December 8, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗔𝗻𝘁𝗶-𝗗𝗿𝘂𝗴 𝗠𝘂𝗿𝗮𝗹 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻𝘀 𝗔𝘄𝗮𝗿𝗱𝗲𝗱', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0212nXQKucCu3UgRSNhKU9kxeKTGLmVdmfgHgB7vZFZuatteHKs3wgbSUCzE15FM3Ll' },
    { date: 'December 8, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹𝘀 𝗦𝗶𝗴𝗻 𝗣𝗹𝗲𝗱𝗴𝗲 𝘁𝗼 𝗘𝗻𝗱 𝗩𝗶𝗼𝗹𝗲𝗻𝗰𝗲 𝗔𝗴𝗮𝗶𝗻𝘀𝘁 𝗪𝗼𝗺𝗲𝗻', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0fb5jzp9uhcQC8v6murtekx1KuLnp1J1nnF4M85tKtkZE2x626xdSASvb9kzab2zSl' },
    { date: 'December 9, 2025', title: '𝗘𝗟𝗘𝗚𝗔𝗡𝗖𝗘 𝗨𝗡𝗗𝗘𝗥 𝗧𝗛𝗘 𝗦𝗧𝗔𝗥𝗦! 𝗕𝗼𝗻𝘀𝗮𝗶 𝗘𝘅𝗵𝗶𝗯𝗶𝘁 𝗡𝗶𝗴𝗵𝘁 𝗩𝗶𝗲𝘄!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02zpzQ2T8tMFtf1vVWLaDZbWx2YZG7VhZBdvceLfzwhc2YHLKHjiwT9KNUm2shjaKcl' },
    { date: 'December 9, 2025', title: '𝗚𝗮𝗯𝗶 𝗻𝗴 𝗣𝗮𝗿𝗮𝗻𝗴𝗮𝗹 𝗮𝘁 𝗣𝗮𝘀𝗮𝘀𝗮𝗹𝗮𝗺𝗮𝘁: 𝗔 𝗚𝗮𝗹𝗮 𝗗𝗶𝗻𝗻𝗲𝗿', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0279Az3DfNc64QbuEVPAjYKVc2pWbrttMYevnS4H32Q34NDdg3LHuMJTWbEnX6EQfzl' },
    { date: 'December 9, 2025', title: 'CAPAS TRAFFIC AND TRUCK BAN ADVISORY: Capas Day 2025', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02azcF3r4ZD7NWfRSxp3vBpq4NxAetSaMXA6GhF59KeKXpVmC9nQH2qAm8NLrpsZKWl' },
    { date: 'December 9, 2025', title: '𝗕𝗮𝗿𝗮𝗻𝗴𝗮𝘆 𝗡𝗶𝗴𝗵𝘁 2025, 𝗡𝗶𝘆𝗮𝗻𝗶𝗴 𝗻𝗴 𝗺𝗴𝗮 𝗞𝗮𝗽𝗶𝘁𝗮𝗻 𝗮𝘁 𝗧𝗮𝗴𝗮-𝗕𝗮𝗿𝗮𝗻𝗴𝗮𝘆!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid026pHApA6MznDHRtpxV4K2vhGwQvvmxPLaiHJpLqxjtTMepFyvkykKeHKXXD4m3eNkl' },
    { date: 'December 9, 2025', title: '𝗕𝘂𝗸𝗮𝘀 𝗻𝗮 𝗮𝗻𝗴 𝗶𝗻𝗮𝗮𝗯𝗮𝗻𝗴𝗮𝗻 𝗻𝗮𝘁𝗶𝗻𝗴 𝗠𝗶𝘀𝘀 𝗖𝗮𝗽𝗮𝘀 2025 𝗚𝗿𝗮𝗻𝗱 𝗖𝗼𝗿𝗼𝗻𝗮𝘁𝗶𝗼𝗻 𝗡𝗶𝗴𝗵𝘁!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02fxABQhvFSjeqV7asUsQfcByQaSyYbSsm13XW688bGMdhdDGNvFRNgEkP5H3r4wDLl' },
    { date: 'December 12, 2025', title: '𝗗𝗙𝗔 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 𝗦𝗲𝗰𝗿𝗲𝘁𝗮𝗿𝘆 𝗡𝗮𝗺𝗲𝗱 𝗠𝗼𝘀𝘁 𝗢𝘂𝘁𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗖𝗮𝗽𝗮𝘀𝗲ñ𝗼', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0cHxv69NK4DykppeN547AmZmWUhynEU3KSLJMpXntVyfDVFvpbNRKNMYBe5nUoV5zl' },
    { date: 'December 12, 2025', title: '𝗕𝗿𝗴𝘆. 𝗖𝘂𝘁-𝗖𝘂𝘁 𝗜𝗜, 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻 𝘀𝗮 𝗗𝗜𝗦𝗛𝗖𝗼𝘃𝗲𝗿 𝗖𝗮𝗽𝗮𝘀𝗲ñ𝗼 𝗖𝗼𝗼𝗸𝗳𝗲𝘀𝘁!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0k3oRrw811SwVVTVkaZoN1Ywa1nUFVkjPFNmHHctVKCM1rEeebFntg9oyDLsZPes2l' },
    { date: 'December 12, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗗𝗮𝘆 𝗚𝗿𝗮𝗻帮 𝗣𝗮𝗿𝗮𝗱𝗲!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid031yiZV3e5kA3YvbBQggr4UC6UVHh7kSPRP78MNDSxk296b7wgKBiX4nUugVG1Q4Yhl' },
    { date: 'December 12, 2025', title: 'Joint meeting of the MPOC/MADAC/NTF-ELCAC for 4th Quarter 2025', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0neQFKBG7Pi5eaJvzLVsUVUidQuRzvn3YWY4EgABtrKERbk4v5ViMuq8yBQx9RfHol' },
    { date: 'December 12, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗟𝗚𝗨 𝗘𝗺𝗽𝗹𝗼𝘆𝗲𝗲𝘀 𝗔𝘁𝘁𝗲𝗻𝗱 𝗠𝗲𝗻𝘁𝗮𝗹 𝗛𝗲𝗮𝗹𝘁𝗵 𝗦𝗲𝗺𝗶𝗻𝗮𝗿', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0h8k5qy9n41LYRTmToVL65xDiGt9zscbaUXUSdTQyh972EaujHf8o9WrzLG9qEDEMl' },
    { date: 'December 12, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗗𝗮𝘆 𝗦𝘁𝗿𝗲𝗲𝘁 𝗗𝗮𝗻𝗰𝗶𝗻𝗴 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻: 𝗔𝗻 𝗘𝅥𝅴𝗽𝗹𝗼𝘀𝗶𝗼𝗻 𝗼𝗳 𝗖𝗼𝗹𝗼𝗿!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0UDEb6J3cVasZnMYQZx1mQi26oA7Cw4n1C29gGTk9NmXJny8rHjc5auXjSPGHwv7Tl' },
    { date: 'December 13, 2025', title: '𝗦𝘁𝗿𝗲𝗲𝘁 𝗗𝗮𝗻𝗰𝗶𝗻𝗴 𝗚𝗿𝗮𝗻𝗱 𝗦𝗵𝗼𝘄𝗱𝗼𝘄𝗻', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02LmCVFKR2RrVRJQXcS3qWVaWFUtp5PPgHZJG6N4MZRZm7nzjuaijZjgxd7aCpnhsXl' },
    { date: 'December 13, 2025', title: 'Winners of the Capas Day 2025 Street Dancing and Float Competitions!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02kdKwUhHYkHtmZ33T9yusFyGT4Pm9zdZAfa1nLRjecqMu629z2XGrEmmB3agFVNVyl' },
    { date: 'December 13, 2025', title: '𝗪𝗶𝗻𝗻𝗲𝗿𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗕𝗲𝘀𝘁 𝗶𝗻 𝗨𝗿𝗯𝗮𝗻 & 𝗕𝗮𝗰𝗸𝘆𝗮𝗿𝗱 𝗚𝗮𝗿𝗱𝗲𝗻𝗶𝗻𝗴 2025!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0XVhQhkJZa3CAJgAZi8rDNo7RH7YMXYbEiP67jfeXzyqvMy2kLJPoYXhDvFyCKS77l' },
    { date: 'December 17, 2025', title: '𝗢𝘃𝗲𝗿 700 𝗦𝗲𝗻𝗶𝗼𝗿𝘀 𝗥𝗲𝗰𝗲𝗶𝘃𝗲 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0369jAedQrh3nU1iYpJdYVtkqEPWfenSw9ey8pBKmB21qBX76yXgCwVy5kKAa8TJXJl' },
    { date: 'December 18, 2025', title: 'Alessandra David, Miss Capas 2024, represents PH at Miss Celebrity International', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0XhbqRqZzm4KPe2NVXHmgKbnnUE3ThkXwUHgZoYm6CxWFmjXCSXhRXpt7TiBMDRZzl' },
    { date: 'December 19, 2025', title: 'CONGRATULATIONS to our amazing new Licensed Professional Teachers!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02yi1ZFs4yyFbGWMgvrNXRx6TyYVGEcJ9phuovHUFNgqQjaP5VGpAbxML3RHULPAvdl' },
    { date: 'December 19, 2025', title: 'Mayor Boots Rodriguez Expands Senior Pension Program', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid035YtZXyekYPwsKcRcAvRHgqXP3a22QoK4kFAaHpAXNB5KQRBFADPGfxfc1JiNBqHol' },
    { date: 'December 20, 2025', title: 'Hon. Imelda Papin visits future Capas Medical Complex site', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02PQRMKfJpw6i5iFAwyysjB6CtdexaSEvktHGNXJC7o3fJiExG1J3pPNcnaLuRbMwgl' },
    { date: 'December 23, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗜𝗻𝗮𝘂𝗴𝘂𝗿𝗮𝘁𝗲𝘀 𝗡𝗲𝘄 𝗚𝗮𝘇𝗲𝗯𝗼 𝗙𝘂𝗻𝗱𝗲𝗱 𝗯𝘆 𝗦𝗚𝗟𝗚 𝗜𝗻𝗰𝗲𝗻𝘁𝗶𝘃𝗲 𝗙𝘂𝗻𝗱', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0qqqikYSXbrfhPCY9it6666xsMLcerv5aVoGEW3q8e6oTZqM5CYdGd8XHAVKYAS4Bl' },
    { date: 'December 23, 2025', title: '𝗛𝗶𝗴𝗶𝘁 ₱4-𝗠𝗶𝗹𝘆𝗼𝗻𝗴 𝗔𝘆𝘂𝗱𝗮 𝗽𝗮𝗿𝗮 𝘀𝗮 𝗜𝗯𝗮’𝘁- 𝗜𝗯𝗮𝗻𝗴 𝗦𝗲𝗸𝘁𝗼𝗿', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02GJUppS62xqTEMF7WGycqcGfq7MyJ5VodaGPdFcYm3RTNw56nwDPSEmpZJhzdHCR8l' },
    { date: 'December 23, 2025', title: '700 𝗜𝗻𝗱𝗶𝗴𝗲𝗻𝘁 𝘀𝗮 𝗖𝗮𝗽𝗮𝘀, 𝗡𝗮𝗸𝗮𝘁𝗮𝗻𝗴𝗴𝗮𝗽 𝗻𝗴 𝗣𝗮𝗺𝗮𝘀𝗸𝗼𝗻𝗴 𝗛𝗮𝗻𝗱𝗼𝗴', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02YzJMoEugLHFR3rv3nHfoLg1upfSawZ8RXYcc4eGTAJF3VorsNEkuNVoQ9Yg2Upp6l' },
    { date: 'December 23, 2025', title: '153 𝗖𝗮𝗻𝗰𝗲𝗿 𝗮𝘁 𝗗𝗶𝗮𝗹𝘆𝘀𝗶𝘀 𝗣𝗮𝘁𝗶𝗲𝗻𝘁𝘀 𝘀𝗮 𝗖𝗮𝗽𝗮𝘀, 𝗧𝘂𝗺𝗮𝗻𝗴𝗴𝗮𝗽 𝗻𝗴 𝗙𝗶𝗻𝗮𝗻𝗰𝗶𝗮𝗹 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0K4USfL2vchXFoiHh8ACNwraRYLvmT2SvLkGdfYBRhCZWZdTgE6Q1U3f2x7DwmbSal' },
    { date: 'December 23, 2025', title: 'Alessandra David safely back home as 2nd Runner-Up!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02Q8o3HXnUyoMxPPEmtke42ProGMbM7A1p1tTBEsmpPc346JPLAwbstmKGNqbTMD3Nl' },
    { date: 'December 30, 2025', title: '𝗚𝘂𝗶𝗱𝗲𝗱 𝗯𝘆 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲, 𝗗𝗿𝗶𝘃𝗲𝗻 𝗯𝘆 𝗛𝗲𝗮𝗿𝘁', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0DgF2f8tNFDyW3UvsYTMWYiyA5NDGVoHZw44AS4hcKLP3LBSvRYRQzjkz1M3q9zJHl' },
    { date: 'December 31, 2025', title: '𝗘𝗻𝗱𝗶𝗻𝗴 𝟮𝟬𝟮𝟱 𝘄𝗶𝘁𝗵 𝗮 𝗾𝘂𝗶𝗰𝗸 𝗽𝗿𝗲𝘃𝗶𝗲𝘄 𝗼𝗳 𝟮𝟬𝟮𝟲!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid087R9epFU9cHdmmbuo9Y6NnkPq69SAiMqgLZQfeNejWCufVipMffM7iXFmFnySinAl' },
    // October Events
    { date: 'October 2, 2025', title: '𝗗𝗲𝗰𝗮𝗱𝗲𝘀 𝗥𝗲𝘄𝗶𝗻𝗱!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02mB4fVMow4cvc2r3B5wSRZeh4XCP1v3KLResK58yS4i7HqVK89fMmQ8cNLVXYtssbl' },
    { date: 'October 2, 2025', title: '𝗔𝗻𝗴𝗮𝘁 𝗮𝗻𝗴 𝗚𝘂𝗿𝗼 𝗻𝗴 𝗖𝗮𝗽𝗮𝘀!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0258vqUoEwJYnWLnWDmszUrMXgHPaTbLysTkhrJTQzQEQPY1nZX8ZNNs36nD2LXqWUl' },
    { date: 'October 4, 2025', title: 'Celebration for Public School Teachers', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02iRWRDG9CidimaqsKeN1tSrnJdfB7uCxdmvTJgAkDiuxzc4XoMoE6dVkRUam3BHPyl' },
    { date: 'October 5, 2025', title: "𝗛𝗮𝗽𝗽𝘆 𝗪𝗼𝗿𝗹𝗱 𝗧𝗲𝗮𝗰𝗵𝗲𝗿'𝘀 𝗗𝗮𝘆", link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02Dj35tQE7SCbT3yQVAnwL6PQVaDiK81hThEFSfserSPuBpSoskZHwxXPiEtAsjDhwl' },
    { date: 'October 6, 2025', title: '𝗟𝗚𝗨 𝗖𝗮𝗽𝗮𝘀 𝗛𝗼𝗻𝗼𝗿𝘀 𝗥𝗲𝘁𝗶𝗿𝗲𝗲𝘀', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02qFir2YKYqkAknDVBp3GByRTwM9dEQyfC1EnABBRZ1ummpSDwqnrvuBcsLj46qFLvl' },
    { date: 'October 7, 2025', title: 'SINING LABAN SA DROGA', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid03sef62iKoE9qWqyYkCDpC2qzf8srMC3gHHTJDcUMYTXgcibdMkq3nqhpFcnGeTNNl' },
    { date: 'October 8, 2025', title: 'Philippine team Vs. Timor Leste', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02SY6tVMSg4cr2ouy4PB53LzUNKxqTrw7QB6LbbPQeicsYaQtnGVZcuwLxMtGmxE81l' },
    { date: 'October 10, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗶𝘀 𝗼𝗳𝗳𝗶𝗰𝗶𝗮𝗹𝗹𝘆 𝗲𝗻𝘁𝗲𝗿𝗶𝗻𝗴 𝗶𝘁𝘀 𝗱𝗶𝗴𝗶𝘁𝗮𝗹 𝗲𝗿𝗮', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0tGTdRGSDWEqu4VscCqSGwbvF6aVjZobULb413jDFdGMdNqvC6op4VJAgJgViUwewl' },
    { date: 'October 13, 2025', title: 'FREE ANTI-RABIES VACCINATION', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02QsLoKnkMXcdpqxdhz8NX6z8pnH2EFmED63jQr24gKyn8K8cAgQ7XnLuhEhYDLtEwl' },
    { date: 'October 13, 2025', title: 'Immediate earthquake safety inspection', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid05HEKUf958amCSVamH92cyBGHv8BE4AU4oLQQnSRn11p2E4gJ9Gn3rkXvn5vZC5n2l' },
    { date: 'October 14, 2025', title: '𝐏𝐀𝐆𝐋𝐈𝐋𝐈𝐍𝐈𝐒 𝐒𝐀 𝐌𝐆𝐀 𝐒𝐄𝐌𝐄𝐍𝐓𝐄𝐑𝐘𝐎 𝐏𝐀𝐑𝐀 𝐒𝐀 𝐔𝐍𝐃𝐀𝐒', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02YomjEEiBXttXFCE3ucZmRhddn2tekJhgpZFdXrQc69bcshUZcxcXLW9cAoD87Hv5l' },
    { date: 'October 14, 2025', title: 'Coordination Meeting para sa Implementasyon ng Earthquake Safety EO', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0SFqBMcXX1UjUEYG9UhZQoympzJ3PFZ3dAPQVVSjpZExUXBjqaNHMwgiRbDRHBt7El' },
    { date: 'October 14, 2025', title: '𝗙𝗥𝗘𝗘 𝗥𝗜𝗗𝗘 𝗧𝗢 𝗧𝗛𝗘 𝗚𝗔𝗠𝗘!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02g933sReac4m9SpWHjgAmHDSFDNM3GXLHHBTYW6GWR9AcDiD6M8fcdMrsQemMdZWxl' },
    { date: 'October 15, 2025', title: '𝗣𝗔𝗡𝗔𝗪𝗔𝗚𝗔𝗡 𝗣𝗔𝗥𝗔 𝗦𝗔 𝗠𝗚𝗔 𝗞𝗔𝗔𝗡𝗔𝗞 𝗡𝗚 𝗜𝗦𝗔𝗡𝗚 𝗚𝗜𝗡𝗔𝗡𝗚 𝗡𝗔 𝗡𝗔𝗧𝗔𝗚𝗣𝗨𝗔𝗡', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02bJuryakfLSkg3xyCdkbGHQ4yYcojfti5jwm3fqHi6oiNThT7nNHgw5UPfDbDDPWdl' },
    { date: 'October 22, 2025', title: 'Regional Validation and Assessment Team for the Local Legislative Award', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0MxWyUJWpvq94MdjTSQF2rDso8foaSMYVwSEKP383dtzqWtnbkFHpWngzcYyKzBVdl' },
    { date: 'October 22, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗨𝗻𝗱𝗲𝗿𝗴𝗼𝗲𝘀 𝗥𝗲𝗴𝗶𝗼𝗻𝗮𝗹 𝗔𝘀𝘀𝗲𝘀𝘀𝗺𝗲𝗻𝘁 𝗶𝗻 𝗕𝗶𝗱 𝗳𝗼𝗿 𝗡𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗟𝗲𝗴𝗶𝘀𝗹𝗮𝘁𝗶𝘃𝗲 𝗔𝘄𝗮𝗿𝗱', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02k22EwY6CGvDgKSGZKhXr5YpjLV6GNthjsafs1tf8XWESiy7YtNmYqppLzmdpxPhCl' },
    { date: 'October 25, 2025', title: 'Isang linggo na lang, Undas 2025 na (Nov. 1-2)!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0mfFgnFUjQUmNCvhssE5Rpbt2M1cnNzpKM2YVMwEquruzjTtvw7FvTKCdLKQtEy7Xl' },
    { date: 'October 25, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗟𝗚𝗨 𝗪𝗲𝗹𝗰𝗼𝗺𝗲𝘀 𝗠𝗶𝘀𝘀 𝗘𝗮𝗿𝘁𝗵 2025 𝗖𝗮𝗻𝗱𝗶𝗱𝗮𝘁𝗲𝘀', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02NbsCvPjazxMRLb9ukZY2sKQtXYpaq5twyxBB4YwRv1K2QWJRTw34PxGRHvwngFUBl' },
    { date: 'October 28, 2025', title: 'paglilinis at paghahanda sa mga pampublikong sementeryo sa bayan.', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02K41Eu8RKBfJfduA5pWhv32UFANfBH2JgKHowDmgmnvrTD591EyneWtQLBrBXZi3ol' },
    { date: 'October 29, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗟𝗚𝗨 𝗪𝗲𝗹𝗰𝗼𝗺𝗲𝘀 𝗚𝗲𝗻𝘁𝗿𝘆 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗦𝗰𝗵𝗼𝗼𝗹 𝗳𝗼𝗿 𝗖𝗮𝗿𝗲𝗲𝗿 𝗗𝗮𝘆', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid06Cs9VYmCMJuDAT8TwZiLpWhtV15b8bC7gKFGUrF3vEo7zyfd4fySf9jiDgdjb7LQl' },
    { date: 'October 29, 2025', title: 'Pinoy Halloween for Munisipyo Kids', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid071wCv8hAKP5WvMTbZatmgzd5MJbsQkUhSEK18bmuaCXPgj1BMav4DNL5fozNq6Tsl' },
    { date: 'October 31, 2025', title: 'Isang taos-pusong pagbati ng maligayang kaarawan kay Kapatid na Eduardo V. Manalo', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02mjjMSaARsmmQJ7SokAUPWzsM6zXLsyZAupPtfZn2ZG2Mqy4uXzHQHRGuoW7kHXMJl' },
    { date: 'October 31, 2025', title: 'Photobooth pics are in!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02B4QeL3D86VTyXFLsmM38qpTBK7gVNobVUKHP7iWYtnv2sHNQHwPDxdhLp2Nns9Mtl' },
    { date: 'October 31, 2025', title: 'SINONG BUKAS SA CAPAS BUKAS?', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02VoGTzzLDEFK3HE4F2soPutB4mj7Dq5QZ9WcGiqj7pxck36sagK5jsNk5nKHLYMJMl' },
    { date: 'October 31, 2025', title: '"𝗧𝗮𝘆𝗼 𝗸𝗮 𝗱𝘆𝗮𝗻 \'𝗻𝗮𝗸 𝗽𝗶𝗰𝘁𝘂𝗿𝗮𝗻 𝗸𝗶𝘁𝗮!" 𝗠𝗼𝗺𝗲𝗻𝘁𝘀', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0VnWBnnwxAMtSe5fM8DoiasPDc2Y2opQ6nNwoAWCMpeTAuPgCbsY9FbKCeezQmUhxl' },
  ]

  const filteredEvents = events.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="events-page bg-light min-vh-100">
      {/* Header */}
      <div className="page-header text-white py-5" style={{ 
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container className="py-4">
          <h1 className="display-4 fw-bold">Municipal Events</h1>
          <p className="lead opacity-75">Join us in celebrating our community through these municipal activities and programs.</p>
        </Container>
      </div>

      <Container className="py-5">
        <Card className="border-0 shadow-sm rounded-4 mb-5 p-4">
          <InputGroup className="shadow-sm rounded-pill overflow-hidden border-0 bg-light p-1">
            <InputGroup.Text className="bg-transparent border-0 ps-3">
              <FaSearch style={{ color: 'var(--blue-logo)' }} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search events by title or date..."
              className="border-0 bg-transparent py-3 shadow-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Card>

        {/* Latest Previews */}
        {!searchTerm && (
          <div className="mb-5">
            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <div style={{ width: '8px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
              Featured Events
            </h3>
            <Row className="g-4">
              {events.slice(0, 5).map((item, idx) => (
                <Col key={idx} lg={idx === 0 ? 8 : 4} md={6}>
                  <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-lift transition-all bg-white" style={{ border: '1px solid rgba(20,24,61,0.08)' }}>
                    <div style={{ 
                      height: idx === 0 ? '500px' : '400px', 
                      overflow: 'hidden',
                      backgroundColor: 'var(--blue-logo)',
                      position: 'relative',
                      padding: '2px', // Border effect
                      background: idx === 0 ? 'linear-gradient(135deg, var(--primary), var(--blue-logo))' : 'var(--blue-logo)'
                    }}>
                      <div style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '14px 14px 0 0', overflow: 'hidden' }}>
                        <iframe 
                          src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(item.link)}&show_text=true&width=500`}
                          width="100%" 
                          height="100%" 
                          style={{ border: 'none', overflow: 'hidden' }} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen={true} 
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          title={`Facebook Event ${idx}`}
                        ></iframe>
                      </div>
                      <Badge className="position-absolute top-0 end-0 m-3 rounded-pill shadow-sm fw-bold px-3 py-2" style={{ backgroundColor: 'var(--blue-logo)', border: 'none', color: 'white' }}>
                        {idx === 0 ? 'EVENT SPOTLIGHT' : 'LATEST NEWS'}
                      </Badge>
                    </div>
                    <Card.Body className="p-4 bg-white border-top">
                      <div className="d-flex align-items-center gap-2 mb-2 text-muted small fw-bold">
                        <FaCalendarDay size={12} style={{ color: 'var(--primary)' }} /> {item.date}
                      </div>
                      <h6 className="fw-bold mb-3 text-truncate-2" style={{ color: 'var(--blue-logo)', lineHeight: '1.4', height: '2.8em', overflow: 'hidden' }}>{item.title}</h6>
                      <Button 
                        as="a" 
                        href={item.link} 
                        target="_blank" 
                        variant="link" 
                        className="p-0 text-decoration-none d-flex align-items-center gap-2 mt-auto"
                        style={{ color: 'var(--primary)', fontWeight: '700' }}
                      >
                        View Full Details <FaExternalLinkAlt size={12} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold mb-0">All Event Records</h3>
          <Badge className="rounded-pill px-3 py-2" style={{ backgroundColor: 'var(--blue-logo)', color: 'white' }}>
            {filteredEvents.length} Entries
          </Badge>
        </div>

        <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
          <Table responsive hover className="mb-0 custom-table">
            <thead className="bg-white border-bottom">
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th className="py-4 px-4 border-0 text-uppercase small fw-bold text-muted" style={{ width: '180px' }}>Event Date</th>
                <th className="py-4 px-4 border-0 text-uppercase small fw-bold text-muted">Activity Name</th>
                <th className="py-4 px-4 border-0 text-uppercase small fw-bold text-muted text-center" style={{ width: '150px' }}>Story Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((item, idx) => (
                  <tr key={idx} className="align-middle">
                    <td className="py-4 px-4 border-0">
                      <div className="d-flex align-items-center gap-2">
                        <FaCalendarDay style={{ color: 'var(--blue-logo)', opacity: 0.6 }} />
                        <span className="fw-semibold">{item.date}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-0">
                      <h6 className="mb-0 fw-bold text-dark" style={{ lineHeight: '1.4' }}>{item.title}</h6>
                    </td>
                    <td className="py-4 px-4 border-0 text-center">
                      <Button 
                        as="a" 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-pill px-3 py-2 btn-sm fw-bold border-2 d-inline-flex align-items-center gap-2"
                        style={{ border: '2px solid var(--blue-logo)', color: 'var(--blue-logo)', background: 'transparent' }}
                      >
                        View Event <FaExternalLinkAlt size={12} />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-5 text-muted">
                    No events found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
      </Container>

      <style>{`
        .custom-table tbody tr {
          transition: all 0.2s ease;
        }
        .custom-table tbody tr:hover {
          background-color: rgba(128, 0, 0, 0.02);
          transform: scale(1.002);
        }
        .text-primary-light { color: #a00000; }
      `}</style>
    </div>
  )
}

export default Events
