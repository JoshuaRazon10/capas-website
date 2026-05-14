<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Document;

class TransparencySeeder extends Seeder
{
    public function run(): void
    {
        $docs = [
            // 2023
            ['title' => 'Annual Budget Report', 'year' => 2023, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2023/Annual-Budget-Report-1.pdf'],
            ['title' => 'Annual GAD Accomplishment Report', 'year' => 2023, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2023/Annual-Gender-and-Development-Accomplishment-Report.pdf'],
            ['title' => 'Annual Procurement Plan', 'year' => 2023, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2023/Annual-Procurement-Plan-or-Procurement-List.pdf'],
            ['title' => 'Annual Statement of Indebtedness (SIPB)', 'year' => 2023, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2023/Annual-Statement-of-Indebtedness-Payments-and-Balances-SIPB_organized.pdf'],
            ['title' => 'Statement of Receipts and Expenditures', 'year' => 2023, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2023/Statement-of-Receipts-and-Expenditures.pdf'],
            ['title' => 'Supplemental Procurement Plan', 'year' => 2023, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2023/Supplemental-Procurement-Plan.pdf'],

            // 2022
            ['title' => 'Annual Budget Report', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2022/Annual-Budget-Report.pdf'],
            ['title' => 'Annual GAD Accomplishment Report', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2022/Annual-Gender-and-Development-Accomplishment-Report-1.pdf'],
            ['title' => 'Annual Procurement Plan', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2022/Annual-Procurement-Plan-or-Procurement-List-1.pdf'],
            ['title' => 'Annual Statement of Indebtedness (SIPB)', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2022/Annual-Statement-of-Indebtedness-Payments-and-Balances-SIPB.pdf'],
            ['title' => 'Statement of Receipts and Expenditures', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Annual Reports', 'file_path' => '/report/2022/Statement-of-Receipts-and-Expenditures-1.pdf'],

            ['title' => 'Trust Fund - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Trust Fund Utilization', 'file_path' => '/report/2022/Trust-Fund-Utilization-1st.pdf'],
            ['title' => 'Trust Fund - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Trust Fund Utilization', 'file_path' => '/report/2022/Trust-Fund-Utilization-2nd.pdf'],
            ['title' => 'Trust Fund - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Trust Fund Utilization', 'file_path' => '/report/2022/Trust-Fund-Utilization-3rd.pdf'],
            ['title' => 'Trust Fund - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Trust Fund Utilization', 'file_path' => '/report/2022/Trust-Fund-Utilization-4th.pdf'],

            ['title' => 'SEF Utilization - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2022/SEF-UTILIZATION-2022-1ST-QUARTER.pdf'],
            ['title' => 'SEF Utilization - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2022/SEF-UTILIZATION-2022-2ND-QUARTER.pdf'],
            ['title' => 'SEF Utilization - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2022/SEF-UTILIZATION-2022-3RD-QUARTER.pdf'],
            ['title' => 'SEF Utilization - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2022/SEF-UTILIZATION-2022-4TH-QUARTER.pdf'],

            ['title' => '20% Utilization - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => '20% Development Fund', 'file_path' => '/report/2022/20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization-1st.pdf'],
            ['title' => '20% Utilization - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => '20% Development Fund', 'file_path' => '/report/2022/20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization-2nd.pdf'],
            ['title' => '20% Utilization - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => '20% Development Fund', 'file_path' => '/report/2022/20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization-3rd.pdf'],
            ['title' => '20% Utilization - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => '20% Development Fund', 'file_path' => '/report/2022/20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization.pdf'],

            ['title' => 'LDRRMF - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'LDRRM Fund Utilization', 'file_path' => '/report/2022/Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-1st.pdf'],
            ['title' => 'LDRRMF - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'LDRRM Fund Utilization', 'file_path' => '/report/2022/Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-2nd.pdf'],
            ['title' => 'LDRRMF - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'LDRRM Fund Utilization', 'file_path' => '/report/2022/Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-3rd.pdf'],
            ['title' => 'LDRRMF - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'LDRRM Fund Utilization', 'file_path' => '/report/2022/Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-4th.pdf'],

            ['title' => 'Cash Flow - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Quarterly Statement of Cash Flow', 'file_path' => '/report/2022/Quarterly-Statement-of-Cash-Flow-1st.pdf'],
            ['title' => 'Cash Flow - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Quarterly Statement of Cash Flow', 'file_path' => '/report/2022/Quarterly-Statement-of-Cash-Flow-2nd.pdf'],
            ['title' => 'Cash Flow - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Quarterly Statement of Cash Flow', 'file_path' => '/report/2022/Quarterly-Statement-of-Cash-Flow-3rd.pdf'],
            ['title' => 'Cash Flow - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Quarterly Statement of Cash Flow', 'file_path' => '/report/2022/Quarterly-Statement-of-Cash-Flow-4th.pdf'],

            ['title' => 'Cash Advances - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Unliquidated Cash Advances', 'file_path' => '/report/2022/Unliquidated-Cash-Advances-1st.pdf'],
            ['title' => 'Cash Advances - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Unliquidated Cash Advances', 'file_path' => '/report/2022/Unliquidated-Cash-Advances-2nd.pdf'],
            ['title' => 'Cash Advances - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Unliquidated Cash Advances', 'file_path' => '/report/2022/Unliquidated-Cash-Advances-3rd.pdf'],
            ['title' => 'Cash Advances - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Unliquidated Cash Advances', 'file_path' => '/report/2022/Unliquidated-Cash-Advances-4th.pdf'],

            ['title' => 'HR Complement - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Human Resource Complement', 'file_path' => '/report/2022/Human-Resource-Complement-1st.pdf'],
            ['title' => 'HR Complement - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Human Resource Complement', 'file_path' => '/report/2022/Human-Resource-Complement-2nd.pdf'],
            ['title' => 'HR Complement - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Human Resource Complement', 'file_path' => '/report/2022/Human-Resource-Complement-3rd.pdf'],
            ['title' => 'HR Complement - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Human Resource Complement', 'file_path' => '/report/2022/Human-Resource-Complement-4th.pdf'],

            ['title' => 'Bid Results - 1st Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Bid Results', 'file_path' => '/report/2022/Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-1st.pdf'],
            ['title' => 'Bid Results - 2nd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Bid Results', 'file_path' => '/report/2022/Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-2nd.pdf'],
            ['title' => 'Bid Results - 3rd Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Bid Results', 'file_path' => '/report/2022/Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-3rd.pdf'],
            ['title' => 'Bid Results - 4th Quarter', 'year' => 2022, 'type' => 'Full Disclosure', 'description' => 'Bid Results', 'file_path' => '/report/2022/Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-4th.pdf'],

            // 2021
            ['title' => 'LGSF - 1st Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Local Government Support Fund (LGSF)', 'file_path' => '/report/2021/LGSF-1st-Quarter.pdf'],
            ['title' => 'LGSF - 2nd Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Local Government Support Fund (LGSF)', 'file_path' => '/report/2021/LGSF-2nd-Quarter.pdf'],
            ['title' => 'LGSF - 3rd Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Local Government Support Fund (LGSF)', 'file_path' => '/report/2021/LGSF-3rd-Quarter-1.pdf'],
            ['title' => 'LGSF - 4th Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Local Government Support Fund (LGSF)', 'file_path' => '/report/2021/LGSF-4th-Quarter_rotated.pdf'],

            ['title' => 'SEF - 1st Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2021/SEF-1st-Quarter.pdf'],
            ['title' => 'SEF - 2nd Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2021/SEF-2nd-Quarter-1.pdf'],
            ['title' => 'SEF - 3rd Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2021/SEF-3rd-Quarter-1.pdf'],
            ['title' => 'SEF - 4th Quarter', 'year' => 2021, 'type' => 'Full Disclosure', 'description' => 'Special Education Fund (SEF)', 'file_path' => '/report/2021/SEF-4th-Quarter_rotated.pdf'],
        ];

        foreach ($docs as $doc) {
            Document::updateOrCreate(
                ['title' => $doc['title'], 'year' => $doc['year'], 'description' => $doc['description']],
                ['type' => $doc['type'], 'file_path' => $doc['file_path']]
            );
        }
    }
}
