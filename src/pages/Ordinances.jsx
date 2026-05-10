import React from 'react'
import { Container, Row, Col, Card, Table, Badge, Form, InputGroup } from 'react-bootstrap'
import { FaFilePdf, FaDownload, FaGavel, FaSearch, FaHistory, FaBalanceScale } from 'react-icons/fa'

const Ordinances = () => {
  // Placeholder for Ordinances - usually categorized by year
  const ordinances = [
    { no: "Ord. No. 001-2024", title: "An Ordinance establishing the Capas Youth Development Center", date: "Jan 15, 2024", status: "Active" },
    { no: "Ord. No. 012-2023", title: "Comprehensive Land Use Plan (CLUP) 2023-2033", date: "Dec 10, 2023", status: "Active" },
  ]

  return (
    <div className="ordinances-page bg-light min-vh-100 pb-5">
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
          <h1 className="display-4 fw-bold mb-3 oswald-font">MUNICIPAL ORDINANCES</h1>
          <p className="lead opacity-75 mx-auto mb-0" style={{ maxWidth: '800px' }}>
            Access the official legislative measures and local laws enacted by the Sangguniang Bayan of Capas.
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
                        <FaBalanceScale className="text-maroon" size={24} style={{ color: '#800000' }} />
                      </div>
                      <h3 className="h5 fw-bold mb-0">Local Legislation Registry</h3>
                    </div>
                  </Col>
                  <Col md={6}>
                    <InputGroup className="shadow-sm rounded-pill overflow-hidden">
                      <InputGroup.Text className="bg-light border-0 px-3">
                        <FaSearch className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control 
                        placeholder="Search by ordinance number or keyword..." 
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
                        <th className="px-4 py-3 border-0 text-muted text-uppercase fw-bold">Number</th>
                        <th className="py-3 border-0 text-muted text-uppercase fw-bold">Description</th>
                        <th className="py-3 border-0 text-muted text-uppercase fw-bold text-center">Status</th>
                        <th className="px-4 py-3 border-0 text-muted text-uppercase fw-bold text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ordinances.map((ord, idx) => (
                        <tr key={idx} className="transition-all hover-bg">
                          <td className="px-4 py-4 fw-bold text-maroon" style={{ color: '#800000' }}>{ord.no}</td>
                          <td className="py-4">
                            <div className="fw-bold text-dark mb-1">{ord.title}</div>
                            <div className="small text-muted">Enacted: {ord.date}</div>
                          </td>
                          <td className="py-4 text-center">
                            <Badge bg="success" className="rounded-pill px-3 py-2 fw-medium" style={{ fontSize: '0.75rem' }}>
                              {ord.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-4 text-center">
                            <button className="btn btn-maroon btn-sm rounded-pill px-4 fw-bold transition-all" style={{ backgroundColor: '#800000', color: 'white', border: 'none' }}>
                              <FaDownload className="me-2" /> PDF
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>

            {/* Pagination Placeholder */}
            <div className="d-flex justify-content-center mt-5">
              <div className="text-muted small">
                Showing {ordinances.length} results • For older records, please contact the Sangguniang Bayan Secretary.
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Info Grid */}
      <Container className="mt-5">
        <Row className="g-4">
          <Col md={4}>
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center border-bottom border-4 border-maroon">
              <FaGavel size={32} className="text-maroon mb-3" style={{ color: '#800000' }} />
              <h5 className="fw-bold">Legislation</h5>
              <p className="text-muted small mb-0">Enacted local laws governing the municipality and its citizens.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center border-bottom border-4 border-maroon">
              <FaHistory size={32} className="text-maroon mb-3" style={{ color: '#800000' }} />
              <h5 className="fw-bold">Archives</h5>
              <p className="text-muted small mb-0">Historical records of municipal sessions and approved measures.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center border-bottom border-4 border-maroon">
              <FaFilePdf size={32} className="text-maroon mb-3" style={{ color: '#800000' }} />
              <h5 className="fw-bold">Digitalization</h5>
              <p className="text-muted small mb-0">Ongoing efforts to provide full digital access to all municipal records.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        .oswald-font { font-family: 'Oswald', sans-serif; }
        .text-maroon { color: #800000; }
        .bg-maroon { background-color: #800000; }
        .border-maroon { border-color: #800000 !important; }
        
        .hover-bg:hover { background-color: rgba(128, 0, 0, 0.02); }
        .transition-all { transition: all 0.3s ease; }
        
        .btn-maroon:hover {
          background-color: #600000 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(128, 0, 0, 0.2);
        }

        .header-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .mt-n5 { margin-top: -3rem !important; }

        @media (max-width: 768px) {
          .mt-n5 { margin-top: -1.5rem !important; }
        }
      `}} />
    </div>
  )
}

export default Ordinances
