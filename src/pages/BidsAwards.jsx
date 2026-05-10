import React, { useState } from 'react'
import { Container, Table, Badge, Form, InputGroup, Row, Col, Card, Pagination } from 'react-bootstrap'
import { FaSearch, FaFilePdf, FaTrophy, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import capasAward from '../assets/images/capas.award.jpg'

const BidsAwards = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const bidsData = [
    { id: 1, title: 'Invitation to Bid – Construction of Concrete Drainage with Cover and Concrete Pathway at Brgy. Cutcut II (Capitly and Macale Compound), Capas, Tarlac', type: 'ITB', file: '/bidding-award/Invitation to Bid- Construction of Concrete Drainage with Cover and Concrete Pathway at Brgy. Cutcut II (Capitly and Macale Compound), Capas, Tarlac.pdf' },
    { id: 2, title: 'Invitation to Bid – Installation of Solar Street Lights and CCTV with Fiber Optic Wire at Brgy. Cubcub, Capas, Tarlac', type: 'ITB', file: '/bidding-award/Invitation to Bid- Installation of Solar Street Lights and CCTV with Fiber Optic Wire at Brgy. Cubcub, Capas, Tarlac.pdf' },
    { id: 3, title: 'Invitation to Bid – Installation of Solar Street Lights and CCTV with Fiber Optic Wire at Brgy. Sto. Domingo I, Capas, Tarlac', type: 'ITB', file: '/bidding-award/Invitation to Bid- Installation of Solar Street Lights and CCTV with Fiber Optic Wire at Brgy. Sto. Domingo I, Capas, Tarlac.pdf' },
    { id: 4, title: 'Contract Agreement – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'Contract', file: '/bidding-award/Contract-Agreement-Procurement-of-Reconditioned-tractor-Head-10-Wheeler.pdf' },
    { id: 5, title: 'Notice to Proceed – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Procurement-of-Reconditioned-tractor-Head-10-Wheeler.pdf' },
    { id: 6, title: 'Notice of Award – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Reconditioned-tractor-Head-10-Wheeler.pdf' },
    { id: 7, title: 'Invitation to Bid – Procurement of Various Medical Supplies and Materials (Lot 1) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-1-for-Ospital-Ning-Capas.pdf' },
    { id: 8, title: 'Invitation to Bid – Procurement of various medical supplies and materials (Lot 2) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-2-for-Ospital-Ning-Capas.pdf' },
    { id: 9, title: 'Invitation to Bid – Procurement of Various Office and Janitorial Supplies and Materials for Different Offices of LGU- Capas, Tarlac 1st', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-Various-Office-and-Janitorial-Supplies-and-Materials-for-Different-Offices-of-LGU-Capas-Tarlac-1st-1.pdf' },
    { id: 10, title: 'Invitation to Bid – Procurement of various medical supplies and materials (Lot 1) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-1-for-Ospital-Ning-Capas-1.pdf' },
    { id: 11, title: 'Invitation to Bid – Procurement of Various Office and Janitorial Supplies and Materials for Different Offices of LGU- Capas, Tarlac 1st', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-Various-Office-and-Janitorial-Supplies-and-Materials-for-Different-Offices-of-LGU-Capas-Tarlac-1st-1.pdf' },
    { id: 12, title: 'Invitation to Bid – Procurement of various medical supplies and materials (Lot 2) for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-various-medical-supplies-and-materials-Lot-2-for-Ospital-Ning-Capas-1.pdf' },
    { id: 13, title: 'Request for Quotation – Procurement of Janitorial Supplies for SB', type: 'RFQ', file: '/bidding-award/Request-for-Quotation-Procurement-of-Janitorial-Supplies-for-SB.pdf' },
    { id: 14, title: 'Request for Quotation – Procurement of Computer Equipment and Accessories for MDRRMO', type: 'RFQ', file: '/bidding-award/Request-for-Quotation-Procurement-of-Computer-Equipment-and-Accessories-for-MDRRMO.pdf' },
    { id: 15, title: 'Notice of Proceed – Procurement of Rice for MDRRMO', type: 'NTP', file: '/bidding-award/Notice-of-Proceed-Procurement-of-Rice-for-MDRRMO.pdf' },
    { id: 16, title: 'Contract of Agreement – Procurement of Rice for MDRRMO', type: 'Contract', file: '/bidding-award/Contract-of-Agreement-Procurement-of-Rice-for-MDRRMO.pdf' },
    { id: 17, title: 'Notice of Award – Procurement of Rice for MDRRMO', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Rice-for-MDRRMO.pdf' },
    { id: 18, title: 'Notice to Proceed – Procurement of Drugs, Medicines and Medical Supplies and Materials for RHU – GAD Programs', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Procurement-of-Drugs-Medicines-and-Medical-Supplies-and-Materials-for-RHU-GAD-Programs.pdf' },
    { id: 19, title: 'Contract Agreement – Procurement of Drugs, Medicines and Medical Supplies and Materials for RHU – GAD Programs', type: 'Contract', file: '/bidding-award/Contract-Agreement-Procurement-of-Drugs-Medicines-and-Medical-Supplies-and-Materials-for-RHU-GAD-Programs.pdf' },
    { id: 20, title: 'Notice of Award – Procurement of Drugs, Medicines and Medical Supplies and Materials for RHU – GAD Programs', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Drugs-Medicines-and-Medical-Supplies-and-Materials-for-RHU-GAD-Programs.pdf' },
    { id: 21, title: 'Notice of Award – Organice Production Center Shed at Brhy. Cutcut I, Capas, Tarlac', type: 'NOA', file: '/bidding-award/Notice-of-Awards-Organice-Production-Center-Shed-at-Brhy.-Cutcut-I-Capas-Tarlac.pdf' },
    { id: 22, title: 'Notice to Proceed – Organice Production Center Shed at Brhy. Cutcut I, Capas, Tarlac', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Organice-Production-Center-Shed-at-Brhy.-Cutcut-I-Capas-Tarlac.pdf' },
    { id: 23, title: 'Contract of Agreement – Organic Production Center Shed at Brgy. Cutcut I, Capas, Tarlac', type: 'Contract', file: '/bidding-award/Contract-of-Agreement-Organic-Production-Center-Shed-at-Brgy.-Cutcut-I-Capas-Tarlac.pdf' },
    { id: 24, title: 'Notice of Award – Installation of Solar Streetlights at Barangay Dolores-Tabun, Talaga and Manga-Lawy, Capas, Tarlac', type: 'NOA', file: '/bidding-award/Notice-of-Award-Installation-of-Solar-Streetlights-at-Barangay-Dolores-Tabun-Talaga-and-Manga-Lawy-Capas-Tarlac.pdf' },
    { id: 25, title: 'Notice to Proceed – Installation of Solar Streetlights at Barangay Dolores-Tabun, Talaga and Manga-Lawy, Capas, Tarlac', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Installation-of-Solar-Streetlights-at-Barangay-Dolores-Tabun-Talaga-and-Manga-Lawy-Capas-Tarlac.pdf' },
    { id: 26, title: 'Contract Agreement – Installation of Solar Streetlights at Barangay Dolores-Tabun, Talaga and Manga-Lawy, Capas, Tarlac', type: 'Contract', file: '/bidding-award/Contract-Agreement-Installation-of-Solar-Streetlights-at-Barangay-Dolores-Tabun-Talaga-and-Manga-Lawy-Capas-Tarlac.pdf' },
    { id: 27, title: 'Notice of Award – Procurement of Reconditioned 6×6 Rescue Truck (10 – Wheeler) and Lowbed Heavy Duty (12 – Wheeler)', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-Reconditioned-6x6-Rescue-Truck-10-Wheeler-and-Lowbed-Heavy-Duty-12-Wheeler.pdf' },
    { id: 28, title: 'Notice to Proceed – Procurement of Reconditioned 6×6 Rescue Truck (10 – Wheeler) and Lowbed Heavy Duty (12 – Wheeler)', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Procurement-of-Reconditioned-6x6-Rescue-Truck-10-Wheeler-and-Lowbed-Heavy-Duty-12-Wheeler.pdf' },
    { id: 29, title: 'Contract Agreement – Procurement Procurement of Reconditioned 6×6 Rescue Truck (10 – Wheeler) and Lowbed Heavy Duty (12 – Wheeler)', type: 'Contract', file: '/bidding-award/Contract-Agreement-Procurement-Procurement-of-Reconditioned-6x6-Rescue-Truck-10-Wheeler-and-Lowbed-Heavy-Duty-12-Wheeler.pdf' },
    { id: 30, title: 'Invitation to Bid – Supply and Delivery of Various Laboratory Supplies and Materials for Ospital Ning Capas', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Supply-and-delivery-of-various-laboratory-supplies-and-materials-for-Ospital-Ning-Capas.pdf' },
    { id: 31, title: 'Request for Quotation – Procurement of Vaccine for Rabies', type: 'RFQ', file: '/bidding-award/Request-for-Quotation-Procurement-of-Vaccine-for-Rabies.pdf' },
    { id: 32, title: 'Invitation to Bid – Procurement of Reconditioned Tractor Head (10-Wheeler)', type: 'ITB', file: '/bidding-award/Invitation-to-Bid-Procurement-of-Reconditioned-Tractor-Head-10-Wheeler-1.pdf' },
    { id: 33, title: 'Notice of Award – Procurement of Various Drugs and Medicines for RHU I, I and III', type: 'NOA', file: '/bidding-award/Notice-of-Award-Procurement-of-various-drugs-and-medicines-for-RHU-I-I-and-III.pdf' },
    { id: 34, title: 'Notice to Proceed – Procurement of Various Drugs and Medicines for RHU I, I and III', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Procurement-of-various-drugs-and-medicines-for-RHU-I-I-and-III.pdf' },
    { id: 35, title: 'Contract Agreement – Procurement of Various Drugs and Medicines for RHU I, I and III', type: 'Contract', file: '/bidding-award/Contract-Agreement-Procurement-of-various-drugs-and-medicines-for-RHU-I-I-and-III.pdf' },
    { id: 36, title: 'Notice of Award – Construction of Road at Brgy. Sto. Domingo II', type: 'NOA', file: '/bidding-award/Notice-of-Award-Construction-of-Road-at-Brgy.-Sto.-Domingo-II.pdf' },
    { id: 37, title: 'Notice to Proceed – Construction of Road at Brgy. Sto. Domingo II', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Construction-of-Road-at-Brgy.-Sto.-Domingo-II.pdf' },
    { id: 38, title: 'Contract Agreement – Construction of Road at Brgy. Sto. Domingo II', type: 'Contract', file: '/bidding-award/Contract-Agreement-Construction-of-Road-at-Brgy.-Sto.-Domingo-II.pdf' },
    { id: 39, title: 'Notice of Award – Construction of Evacuation Center at Brgy. Cristo Rey', type: 'NOA', file: '/bidding-award/Notice-of-Award-Construction-of-Evacuation-Center-at-Brgy.-Cristo-Rey.pdf' },
    { id: 40, title: 'Notice to Proceed – Construction of Evacuation Center at Brgy. Cristo Rey', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Construction-of-Evacuation-Center-at-Brgy.-Cristo-Rey.pdf' },
    { id: 41, title: 'Contract Agreement – Construction of Evacuation Center at Brgy. Cristo Rey', type: 'Contract', file: '/bidding-award/Contract-Agreement-Construction-of-Evacuation-Center-at-Brgy.-Cristo-Rey.pdf' },
    { id: 42, title: 'Notice of Award – Construction of Public Toilet at Eco- Park, Brgy. O’Donnell', type: 'NOA', file: '/bidding-award/Notice-of-Award-Construction-of-Public-Toilet-at-Eco-Park-Brgy.-ODonnell.pdf' },
    { id: 43, title: 'Notice to Proceed – Construction of Public Toilet at Eco- Park, Brgy. O’Donnell', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Construction-of-Public-Toilet-at-Eco-Park-Brgy.-ODonnell.pdf' },
    { id: 44, title: 'Contract Agreement – Construction of Public Toilet at Eco- Park, Brgy. O’Donnell', type: 'Contract', file: '/bidding-award/Contract-Agreement-Construction-of-Public-Toilet-at-Eco-Park-Brgy.-ODonnell.pdf' },
    { id: 45, title: 'Notice of Award – Proposed Conversion of Bahay Pagbabago to RHU 3 at Brgy. Cristo Rey', type: 'NOA', file: '/bidding-award/Notice-of-Award-Proposed-Conversion-of-Bahay-Pagbabago-to-RHU-3-at-Brgy.-Cristo-Rey.pdf' },
    { id: 46, title: 'Notice to Proceed – Proposed Conversion of Bahay Pagbabago to RHU 3 at Brgy. Cristo Rey', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Proposed-Conversion-of-Bahay-Pagbabago-to-RHU-3-at-Brgy.-Cristo-Rey.pdf' },
    { id: 47, title: 'Contact Agreement – Proposed Conversion of Bahay Pagbabago to RHU 3 at Brgy. Cristo Rey', type: 'Contract', file: '/bidding-award/Contact-Agreement-Proposed-Conversion-of-Bahay-Pagbabago-to-RHU-3-at-Brgy.-Cristo-Rey.pdf' },
    { id: 48, title: 'Notice of Award – Improvement of Tourism Satellite Office at Brgy. Sta. Juliana, Capas, Tarlac', type: 'NOA', file: '/bidding-award/Notice-of-Award-Improvement-of-Tourism-Satellite-Office-at-Brgy.-Sta.-Juliana-Capas-Tarl.pdf' },
    { id: 49, title: 'Notice to Proceed – Improvement of Tourism Satellite Office at Brgy. Sta. Juliana, Capas, Tarlac', type: 'NTP', file: '/bidding-award/Notice-to-Proceed-Improvement-of-Tourism-Satellite-Office-at-Brgy.-Sta.-Juliana-Capas-Ta.pdf' },
    { id: 50, title: 'Contract Agreement – Improvement of Tourism Satellite Office at Brgy. Sta. Juliana, Capas, Tarlac', type: 'Contract', file: '/bidding-award/Contract-Agreement-Improvement-of-Tourism-Satellite-Office-at-Brgy.-Sta.-Juliana-Capas-Tarlac.pdf' },
    { id: 51, title: 'Request for Quotation – Procurement of Office Tables and Chairs for the Brgy. Hall of Brgy. Estrada', type: 'RFQ', file: '/bidding-award/Request-for-Quotation-Procurement-of-Office-Tables-and-Chairs-for-the-Brgy.-Hall-of-Brgy.-Estrada.pdf' },
    { id: 52, title: 'Notice of Award – Procurement of Drugs and Medicines for MDRRMO', type: 'NOA', file: '/bidding-award/Notice-of-Award-–-Procurement-of-Drugs-and-Medicines-for-MDRRMO.pdf' },
    { id: 53, title: 'Contract Agreement – Procurement of Drugs and Medicines for MDRRMO', type: 'Contract', file: '/bidding-award/Contract-Agreement-–-Procurement-of-Drugs-and-Medicines-for-MDRRMO.pdf' },
  ]

  // Filtering
  const filteredBids = bidsData.filter(bid => 
    bid.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredBids.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredBids.length / itemsPerPage)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

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
              <p className="text-muted small mb-0">
                Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredBids.length)} of {filteredBids.length} records
              </p>
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
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1) // Reset to first page on search
                  }}
                />
              </InputGroup>
            </div>
          </div>

          <div className="table-responsive">
            <Table hover className="align-middle border-0 mb-4">
              <thead className="bg-light">
                <tr>
                  <th className="py-3 border-0 text-muted" style={{ width: '60px' }}>#</th>
                  <th className="py-3 border-0 text-muted">Project Description</th>
                  <th className="py-3 border-0 text-end text-muted">Action</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {currentItems.map((bid) => (
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

          {filteredBids.length > itemsPerPage && (
            <div className="d-flex justify-content-center mt-4">
              <Pagination className="custom-pagination">
                <Pagination.Prev 
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft className="me-1" /> Previous
                </Pagination.Prev>
                
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item 
                    key={index + 1} 
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}

                <Pagination.Next 
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                >
                  Next <FaChevronRight className="ms-1" />
                </Pagination.Next>
              </Pagination>
            </div>
          )}

          {filteredBids.length === 0 && (
            <div className="text-center py-5">
              <FaSearch className="text-muted mb-3" size={48} />
              <p className="text-muted fs-5">No results found for "{searchTerm}"</p>
            </div>
          )}
        </section>
      </Container>
      
      <style>{`
        .custom-pagination .page-link {
          color: #dc3545;
          border-radius: 50px;
          margin: 0 4px;
          padding: 8px 16px;
          font-weight: 600;
          border: 1px solid #dee2e6;
        }
        .custom-pagination .page-item.active .page-link {
          background-color: #dc3545;
          border-color: #dc3545;
          color: white;
        }
        .custom-pagination .page-item.disabled .page-link {
          color: #6c757d;
        }
      `}</style>
    </div>
  )
}

export default BidsAwards
