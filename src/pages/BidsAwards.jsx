import React, { useState } from 'react'
import { Container, Table, Badge, Form, InputGroup, Row, Col, Card } from 'react-bootstrap'
import { FaSearch, FaFilePdf, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa'
import capasAward from '../assets/images/capas.award.jpg'

const BidsAwards = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const bidsData = [
    { id: 1, title: 'Contract Agreement – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'Contract', file: '/bidding-award/Contract-Agreement-Procurement-of-Reconditioned-tractor-Head-10-Wheeler.pdf' },
    { id: 2, title: 'Notice to Proceed – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Procurement-of-Reconditioned-tractor-Head-10-Wheeler.pdf' },
    { id: 3, title: 'Notice of Award – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Reconditioned-tractor-Head-10-Wheeler.pdf' },
    { id: 4, title: 'Invitation to Bid – Procurement of Various Medical Supplies and Materials (Lot 1) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-1-for-Ospital-Ning-Capas.pdf' },
    { id: 5, title: 'Invitation to Bid – Procurement of various medical supplies and materials (Lot 2) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-2-for-Ospital-Ning-Capas.pdf' },
    { id: 6, title: 'Invitation to Bid – Procurement of Various Office and Janitorial Supplies and Materials for Different Offices of LGU- Capas, Tarlac 1st', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-Various-Office-and-Janitorial-Supplies-and-Materials-for-Different-Offices-of-LGU-Capas-Tarlac-1st-1.pdf' },
    { id: 7, title: 'Invitation to Bid – Procurement of various medical supplies and materials (Lot 1) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-1-for-Ospital-Ning-Capas-1.pdf' },
    { id: 8, title: 'Invitation to Bid – Procurement of Various Office and Janitorial Supplies and Materials for Different Offices of LGU- Capas, Tarlac 1st', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-Various-Office-and-Janitorial-Supplies-and-Materials-for-Different-Offices-of-LGU-Capas-Tarlac-1st-1.pdf' },
    { id: 9, title: 'Invitation to Bid – Procurement of various medical supplies and materials (Lot 2) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-2-for-Ospital-Ning-Capas-1.pdf' },
    { id: 10, title: 'Request for Quotation – Procurement of Janitorial Supplies for SB', type: 'RFQ', file: '/bidding-award/Request-for-Quotation-Procurement-of-Janitorial-Supplies-for-SB.pdf' },
    { id: 11, title: 'Request for Quotation – Procurement of Computer Equipment and Accessories for MDRRMO', type: 'RFQ', file: '/bidding-award/Request-for-Quotation-Procurement-of-Computer-Equipment-and-Accessories-for-MDRRMO.pdf' },
    { id: 12, title: 'Notice of Proceed – Procurement of Rice for MDRRMO', type: 'NTP', file: '/bidding-award/Notice-of-Proceed-Procurement-of-Rice-for-MDRRMO.pdf' },
    { id: 13, title: 'Contract of Agreement – Procurement of Rice for MDRRMO', type: 'Contract', file: '/bidding-award/Contract-of-Agreement-Procurement-of-Rice-for-MDRRMO.pdf' },
    { id: 14, title: 'Notice of Award – Procurement of Rice for MDRRMO', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Rice-for-MDRRMO.pdf' },
    { id: 15, title: 'Notice to Proceed – Procurement of Drugs, Medicines and Medical Supplies and Materials for RHU – GAD Programs', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Procurement-of-Drugs-Medicines-and-Medical-Supplies-and-Materials-for-RHU-GAD-Programs.pdf' },
    { id: 16, title: 'Contract Agreement – Procurement of Drugs, Medicines and Medical Supplies and Materials for RHU – GAD Programs', type: 'Contract', file: '/bidding-award/Contract-Agreement-Procurement-of-Drugs-Medicines-and-Medical-Supplies-and-Materials-for-RHU-GAD-Programs.pdf' },
    { id: 17, title: 'Notice of Award – Procurement of Drugs, Medicines and Medical Supplies and Materials for RHU – GAD Programs', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Drugs-Medicines-and-Medical-Supplies-and-Materials-for-RHU-GAD-Programs.pdf' },
    { id: 18, title: 'Notice of Award – Organice Production Center Shed at Brhy. Cutcut I, Capas, Tarlac', type: 'NOA', file: '/bidding-award/Notice-of-Awards-Organice-Production-Center-Shed-at-Brhy.-Cutcut-I-Capas-Tarlac.pdf' },
    { id: 19, title: 'Notice to Proceed – Organice Production Center Shed at Brhy. Cutcut I, Capas, Tarlac', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Organice-Production-Center-Shed-at-Brhy.-Cutcut-I-Capas-Tarlac.pdf' },
    { id: 20, title: 'Contract of Agreement – Organic Production Center Shed at Brgy. Cutcut I, Capas, Tarlac', type: 'Contract', file: '/bidding-award/Contract-of-Agreement-Organic-Production-Center-Shed-at-Brgy.-Cutcut-I-Capas-Tarlac.pdf' },
    { id: 21, title: 'Notice of Award – Installation of Solar Streetlights at Barangay Dolores-Tabun, Talaga and Manga-Lawy, Capas, Tarlac', type: 'NOA', file: '/bidding-award/Notice-of-Award-Installation-of-Solar-Streetlights-at-Barangay-Dolores-Tabun-Talaga-and-Manga-Lawy-Capas-Tarlac.pdf' },
    { id: 22, title: 'Notice to Proceed – Installation of Solar Streetlights at Barangay Dolores-Tabun, Talaga and Manga-Lawy, Capas, Tarlac', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Installation-of-Solar-Streetlights-at-Barangay-Dolores-Tabun-Talaga-and-Manga-Lawy-Capas-Tarlac.pdf' },
    { id: 23, title: 'Contract Agreement – Installation of Solar Streetlights at Barangay Dolores-Tabun, Talaga and Manga-Lawy, Capas, Tarlac', type: 'Contract', file: '/bidding-award/Contract-Agreement-Installation-of-Solar-Streetlights-at-Barangay-Dolores-Tabun-Talaga-and-Manga-Lawy-Capas-Tarlac.pdf' },
    { id: 24, title: 'Notice of Award – Procurement of Reconditioned 6×6 Rescue Truck (10 – Wheeler) and Lowbed Heavy Duty (12 – Wheeler)', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Reconditioned-6x6-Rescue-Truck-10-Wheeler-and-Lowbed-Heavy-Duty-12-Wheeler.pdf' },
    { id: 25, title: 'Notice to Proceed – Procurement of Reconditioned 6×6 Rescue Truck (10 – Wheeler) and Lowbed Heavy Duty (12 – Wheeler)', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Procurement-of-Reconditioned-6x6-Rescue-Truck-10-Wheeler-and-Lowbed-Heavy-Duty-12-Wheeler.pdf' },
    { id: 26, title: 'Contract Agreement – Procurement Procurement of Reconditioned 6×6 Rescue Truck (10 – Wheeler) and Lowbed Heavy Duty (12 – Wheeler)', type: 'Contract', file: '/bidding-award/Contract-Agreement-Procurement-Procurement-of-Reconditioned-6x6-Rescue-Truck-10-Wheeler-and-Lowbed-Heavy-Duty-12-Wheeler.pdf' },
    { id: 27, title: 'Invitation to Bid – Supply and Delivery of Various Laboratory Supplies and Materials for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Supply-and-delivery-of-various-laboratory-supplies-and-materials-for-Ospital-Ning-Capas.pdf' },
    { id: 28, title: 'Request for Quotation – Procurement of Vaccine for Rabies', type: 'RFQ', file: '/bidding-award/Request-for-Quotation-Procurement-of-Vaccine-for-Rabies.pdf' },
    { id: 29, title: 'Invitation to Bid – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-Reconditioned-Tractor-Head-10-Wheeler-1.pdf' },
    { id: 30, title: 'Notice of Award – Procurement of Various Drugs and Medicines for RHU I, I and III', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-various-drugs-and-medicines-for-RHU-I-I-and-III.pdf' },
    { id: 31, title: 'Notice to Proceed – Procurement of Various Drugs and Medicines for RHU I, I and III', type: 'NTP' },
    { id: 32, title: 'Contract Agreement – Procurement of Various Drugs and Medicines for RHU I, I and III', type: 'Contract' },
    { id: 33, title: 'Notice of Award – Construction of Road at Brgy. Sto. Domingo II', type: 'NOA' },
    { id: 34, title: 'Notice to Proceed – Construction of Road at Brgy. Sto. Domingo II', type: 'NTP' },
    { id: 35, title: 'Contract Agreement – Construction of Road at Brgy. Sto. Domingo II', type: 'Contract' },
    { id: 36, title: 'Notice of Award – Construction of Evacuation Center at Brgy. Cristo Rey', type: 'NOA' },
    { id: 37, title: 'Notice to Proceed – Construction of Evacuation Center at Brgy. Cristo Rey', type: 'NTP' },
    { id: 38, title: 'Contract Agreement – Construction of Evacuation Center at Brgy. Cristo Rey', type: 'Contract' },
    { id: 40, title: 'Notice to Proceed – Construction of Public Toilet at Eco- Park, Brgy. O’Donnell', type: 'NTP' },
    { id: 41, title: 'Contract Agreement – Construction of Public Toilet at Eco- Park, Brgy. O’Donnell', type: 'Contract' },
    { id: 42, title: 'Notice of Award – Proposed Conversion of Bahay Pagbabago to RHU 3 at Brgy. Cristo Rey', type: 'NOA' },
    { id: 43, title: 'Notice to Proceed – Proposed Conversion of Bahay Pagbabago to RHU 3 at Brgy. Cristo Rey', type: 'NTP' },
    { id: 44, title: 'Contact Agreement – Proposed Conversion of Bahay Pagbabago to RHU 3 at Brgy. Cristo Rey', type: 'Contract' },
    { id: 45, title: 'Notice of Award – Improvement of Tourism Satellite Office at Brgy. Sta. Juliana, Capas, Tarlac', type: 'NOA' },
    { id: 46, title: 'Notice to Proceed – Improvement of Tourism Satellite Office at Brgy. Sta. Juliana, Capas, Tarlac', type: 'NTP' },
    { id: 47, title: 'Contract Agreement – Improvement of Tourism Satellite Office at Brgy. Sta. Juliana, Capas, Tarlac', type: 'Contract' },
    { id: 48, title: 'Request for Quotation – Procurement of Office Tables and Chairs for the Brgy. Hall of Brgy. Estrada', type: 'RFQ' },
    { id: 49, title: 'Notice of Award – Procurement of Drugs and Medicines for MDRRMO', type: 'NOA' },
    { id: 50, title: 'Contract Agreement – Procurement of Drugs and Medicines for MDRRMO', type: 'Contract' },
  ]

  const filteredBids = bidsData.filter(bid => 
    bid.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bids-awards-page py-5 bg-light min-vh-100">
      {/* Page Header */}
      <div className="bg-white border-bottom mb-5 py-4 shadow-sm">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h1 className="fw-bold text-dark mb-2" style={{ fontSize: '2.5rem' }}>Bids and Awards</h1>
              <p className="text-muted lead mb-0">Transparency and Accountability in Municipal Procurement.</p>
            </Col>
            <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
              <div className="d-inline-flex align-items-center p-3 rounded-pill bg-white border shadow-sm">
                <FaTrophy className="text-warning me-2" size={24} />
                <span className="fw-bold text-dark">Top 1 Most Improved Municipality</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* Awards Section */}
        <section className="mb-5">
          <Card className="border-0 shadow rounded-4 overflow-hidden">
            <Row className="g-0">
              <Col md={5}>
                <img src={capasAward} alt="Capas Awards" className="h-100 w-100" style={{ objectFit: 'cover' }} />
              </Col>
              <Col md={7} className="d-flex align-items-center bg-white p-4 p-md-5">
                <div>
                  <Badge bg="danger" className="mb-3 px-3 py-2 shadow-sm">EXCELLENCE IN GOVERNANCE</Badge>
                  <h2 className="fw-bold text-dark mb-3">Integrity in Every Transaction</h2>
                  <p className="text-dark" style={{ fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'justify' }}>
                    The Municipality of Capas adheres to the highest standards of transparency in its procurement activities. 
                    This commitment to open governance is a key factor in our recognition as the 
                    <strong> Top 1 Most Improved Municipality in the Philippines</strong>. We ensure that every public fund 
                    is utilized for the benefit of all Capaseños.
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </section>

        {/* Bidding List */}
        <section className="bg-white rounded-4 shadow-sm p-4 p-md-5">
          <div className="d-md-flex justify-content-between align-items-center mb-4 border-bottom pb-4">
            <div>
              <h3 className="fw-bold text-dark mb-1">Bidding Opportunities & Notices</h3>
              <p className="text-muted small mb-0">Official PDF documents for public review.</p>
            </div>
            <div style={{ width: '300px' }} className="mt-3 mt-md-0">
              <InputGroup>
                <InputGroup.Text className="bg-light border-end-0">
                  <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  className="bg-light border-start-0 shadow-none"
                  placeholder="Search project titles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </div>
          </div>

          <div className="table-responsive">
            <Table hover className="align-middle border-0">
              <thead className="bg-light">
                <tr>
                  <th className="py-3 border-0 text-muted" style={{ width: '60px' }}>#</th>
                  <th className="py-3 border-0 text-muted">Project Description</th>
                  <th className="py-3 border-0 text-end text-muted">Action</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {filteredBids.map((bid) => (
                  <tr key={bid.id} className="border-bottom">
                    <td className="text-muted fw-bold">{bid.id}</td>
                    <td className="py-3">
                      <div className="fw-bold text-dark mb-1" style={{ fontSize: '1rem' }}>{bid.title}</div>
                      <div className="d-flex align-items-center gap-2">
                        <Badge bg="light" className="text-muted border fw-normal">{bid.type}</Badge>
                        {bid.file && <small className="text-success fw-bold"><FaFilePdf size={12} className="me-1"/> Available</small>}
                      </div>
                    </td>
                    <td className="py-3 text-end">
                      {bid.file ? (
                        <a 
                          href={bid.file} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline-danger btn-sm rounded-pill px-4 d-inline-flex align-items-center fw-bold shadow-sm"
                        >
                          <FaFilePdf className="me-2" size={14} /> VIEW PDF
                        </a>
                      ) : (
                        <button className="btn btn-light btn-sm rounded-pill px-4 text-muted disabled border" disabled>
                          PENDING
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {filteredBids.length === 0 && (
            <div className="text-center py-5">
              <FaSearch className="text-muted mb-3" size={48} />
              <p className="text-muted fs-5">No results found for "{searchTerm}"</p>
            </div>
          )}
        </section>
      </Container>
    </div>
  )
}

export default BidsAwards
