import React, { useState, useEffect } from 'react'
import { Container, Table, Badge, Form, InputGroup, Row, Col, Card, Pagination, Spinner } from 'react-bootstrap'
import { FaSearch, FaFilePdf, FaTrophy, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import capasAward from '../assets/images/capas.award.jpg'
import API_BASE_URL from '../apiConfig'

const BidsAwards = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const fallbackBids = [
    { id: 1, title: 'Invitation to Bid for the Construction of New Municipal Health Center', type: 'Notice', file_path: '' },
    { id: 2, title: 'Notice of Award: Procurement of Medical Supplies for Rural Health Units', type: 'Award', file_path: '' },
    { id: 3, title: 'Invitation to Bid for the Rehabilitation of Farm-to-Market Roads in Brgy. O\'Donnell', type: 'Notice', file_path: '' },
    { id: 4, title: 'Notice to Proceed: Improvement of Capas Public Market Facilities', type: 'Award', file_path: '' },
    { id: 5, title: 'Invitation to Bid for the Supply and Delivery of Agricultural Equipment', type: 'Notice', file_path: '' }
  ]

  const [bidsData, setBidsData] = useState(fallbackBids)
  const itemsPerPage = 20

  useEffect(() => {
    const fetchBids = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/documents?type=${encodeURIComponent('Bids & Awards')}`)
        if (response.ok) {
          const data = await response.json()
          setBidsData(data.length > 0 ? data : fallbackBids)
        } else {
          setBidsData(fallbackBids)
        }
      } catch (error) {
        console.error('Failed to fetch bids:', error)
        setBidsData(fallbackBids)
      } finally {
        setLoading(false)
      }
    }
    fetchBids()
  }, [])

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
                {loading ? 'Loading records...' : `Showing ${indexOfFirstItem + 1}-${Math.min(indexOfLastItem, filteredBids.length)} of ${filteredBids.length} records`}
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
                {loading ? (
                  <tr>
                    <td colSpan="3" className="text-center py-5">
                      <Spinner animation="border" variant="danger" />
                      <p className="mt-3 text-muted">Fetching latest bids...</p>
                    </td>
                  </tr>
                ) : currentItems.length > 0 ? (
                  currentItems.map((bid, index) => (
                    <tr key={bid.id || index} className="border-bottom">
                      <td className="text-muted fw-bold">{indexOfFirstItem + index + 1}</td>
                      <td className="py-3">
                        <div className="fw-bold text-dark mb-1" style={{ fontSize: '1rem' }}>{bid.title}</div>
                        <div className="d-flex align-items-center gap-2">
                          <Badge bg="light" className="text-muted border fw-normal">
                            {bid.title.toLowerCase().includes('award') ? 'Award' : (bid.title.toLowerCase().includes('notice') ? 'Notice' : (bid.type === 'Bids & Awards' ? 'Notice/Award' : bid.type))}
                          </Badge>
                          {bid.file_path && <small className="text-success fw-bold"><FaFilePdf size={12} className="me-1"/> Available</small>}
                        </div>
                      </td>
                      <td className="py-3 text-end">
                        {bid.file_path ? (
                          <a 
                            href={bid.file_path.startsWith('http') ? bid.file_path : `${API_BASE_URL.replace('/api', '/storage')}/${bid.file_path}`} 
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-5">
                      <FaSearch className="text-muted mb-3" size={48} />
                      <p className="text-muted fs-5">No records found.</p>
                    </td>
                  </tr>
                )}
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
