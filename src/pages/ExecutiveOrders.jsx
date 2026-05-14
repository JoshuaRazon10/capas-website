import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Table, Badge, Form, InputGroup, Spinner } from 'react-bootstrap'
import { FaFilePdf, FaDownload, FaUserShield, FaSearch, FaHistory, FaSignature } from 'react-icons/fa'
import API_BASE_URL from '../apiConfig'

const ExecutiveOrders = () => {
  const [loading, setLoading] = useState(false)
  const [ordersState, setOrdersState] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/documents?type=${encodeURIComponent('Executive Orders')}`)
        if (response.ok) {
          const data = await response.json()
          setOrdersState(data)
        } else {
          setOrdersState([])
        }
      } catch (error) {
        console.error('Failed to fetch executive orders:', error)
        setOrdersState([])
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  return (
    <div className="executive-orders-page bg-light min-vh-100 pb-5">
      {/* Header Section */}
      <section className="py-5 mb-0 text-center" style={{
        backgroundColor: '#14183d',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="header-glow"></div>
        <Container className="position-relative py-5">
          <h1 className="display-4 fw-bold mb-3 oswald-font text-uppercase">Executive Orders</h1>
          <p className="lead opacity-75 mx-auto mb-0" style={{ maxWidth: '800px' }}>
            Official directives and administrative orders issued by the Municipal Mayor of Capas.
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="mt-n5 position-relative" style={{ zIndex: 10 }}>
        <Row className="justify-content-center">
          <Col lg={11}>
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
              <Card.Header className="bg-white py-4 px-4 border-bottom">
                <Row className="align-items-center g-3">
                  <Col md={6}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-maroon-subtle p-2 rounded-3" style={{ backgroundColor: 'rgba(128, 0, 0, 0.1)' }}>
                        <FaSignature className="text-maroon" size={24} style={{ color: '#800000' }} />
                      </div>
                      <h3 className="h5 fw-bold mb-0">Mayor's Directives</h3>
                    </div>
                  </Col>
                  <Col md={6}>
                    <InputGroup className="shadow-sm rounded-pill overflow-hidden">
                      <InputGroup.Text className="bg-light border-0 px-3">
                        <FaSearch className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control 
                        placeholder="Search by order number or keyword..." 
                        className="bg-light border-0 py-2 shadow-none"
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="table-responsive">
                  <Table hover className="mb-0 align-middle">
                    <thead className="bg-light">
                      <tr style={{ fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                        <th className="px-4 py-3 border-0 text-muted text-uppercase fw-bold">E.O. NO.</th>
                        <th className="py-3 border-0 text-muted text-uppercase fw-bold">Administrative Order Title</th>
                        <th className="py-3 border-0 text-muted text-uppercase fw-bold text-center">Status</th>
                        <th className="px-4 py-3 border-0 text-muted text-uppercase fw-bold text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="4" className="text-center py-5">
                            <Spinner animation="border" variant="danger" />
                            <p className="mt-3 text-muted">Loading orders...</p>
                          </td>
                        </tr>
                      ) : ordersState.length > 0 ? (
                        ordersState.map((ord, idx) => (
                          <tr key={idx} className="transition-all hover-bg">
                            <td className="px-4 py-4 fw-bold text-maroon" style={{ color: '#800000' }}>{ord.reference_no || ord.no}</td>
                            <td className="py-4">
                              <div className="fw-bold text-dark mb-1">{ord.title}</div>
                              <div className="small text-muted">Issued on: {ord.date_published || ord.date}</div>
                            </td>
                            <td className="py-4 text-center">
                              <Badge bg={(ord.status === 'Active' || !ord.status) ? 'success' : 'secondary'} className="rounded-pill px-3 py-2 fw-medium" style={{ fontSize: '0.75rem' }}>
                                {ord.status || 'Active'}
                              </Badge>
                            </td>
                            <td className="px-4 py-4 text-center">
                              {ord.file_path ? (
                                <a 
                                  href={ord.file_path.startsWith('http') ? ord.file_path : `${API_BASE_URL.replace('/api', '/storage')}/${ord.file_path}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-maroon btn-sm rounded-pill px-4 fw-bold transition-all text-decoration-none" 
                                  style={{ backgroundColor: '#800000', color: 'white', border: 'none' }}
                                >
                                  <FaDownload className="me-2" /> DOWNLOAD
                                </a>
                              ) : (
                                <button className="btn btn-maroon btn-sm rounded-pill px-4 fw-bold transition-all" style={{ backgroundColor: '#ccc', color: 'white', border: 'none' }} disabled>
                                  <FaDownload className="me-2" /> DOWNLOAD
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center py-5 text-muted">No executive orders found.</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Info Grid */}
      <Container className="mt-5">
        <Row className="g-4 text-center">
          <Col md={4}>
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-bottom border-4 border-maroon">
              <FaUserShield size={32} className="text-maroon mb-3" style={{ color: '#800000' }} />
              <h5 className="fw-bold">Official Directives</h5>
              <p className="text-muted small mb-0">Legally binding orders issued by the Local Chief Executive.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-bottom border-4 border-maroon">
              <FaHistory size={32} className="text-maroon mb-3" style={{ color: '#800000' }} />
              <h5 className="fw-bold">Public Record</h5>
              <p className="text-muted small mb-0">Part of the municipal permanent administrative archives.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-bottom border-4 border-maroon">
              <FaFilePdf size={32} className="text-maroon mb-3" style={{ color: '#800000' }} />
              <h5 className="fw-bold">Electronic Access</h5>
              <p className="text-muted small mb-0">Providing digital accessibility to all administrative issuances.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        .oswald-font { font-family: 'Oswald', sans-serif; }
        .text-maroon { color: #800000; }
        
        .hover-bg:hover { background-color: rgba(128, 0, 0, 0.02); }
        .transition-all { transition: all 0.3s ease; }
        
        .btn-maroon:hover {
          background-color: #600000 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(128, 0, 0, 0.2);
        }

        .mt-n5 { margin-top: -3rem !important; }
        @media (max-width: 768px) { .mt-n5 { margin-top: -1.5rem !important; } }
      `}} />
    </div>
  )
}

export default ExecutiveOrders
