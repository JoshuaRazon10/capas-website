import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, ListGroup, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaFilePdf, FaDownload, FaSearch, FaClock, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'
import API_BASE_URL from '../apiConfig'

const CitizensCharter = () => {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/documents?type=${encodeURIComponent("Citizen's Charter")}`)
        if (response.ok) {
          const data = await response.json()
          setDocs(data)
        }
      } catch (err) {
        console.error('Failed to fetch charter docs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchDocs()
  }, [])

  return (
    <div className="charter-page bg-light min-vh-100 pb-5">
      {/* Page Header */}
      <div className="page-header py-5 mb-0" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <Container className="py-4 text-center">
          <h1 className="display-4 fw-bold mb-3 oswald-font">Citizen's Charter</h1>
          <p className="lead opacity-75 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Official Citizens Charter of the Municipality of Capas.
          </p>
          <a 
            href="/00 CC FINAL 2025.pdf" 
            download 
            className="btn btn-outline-light btn-lg rounded-pill px-5 shadow-sm"
            style={{ borderWidth: '2px' }}
          >
            Download Full Charter (PDF)
          </a>
        </Container>
      </div>

      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Frontline Services & Standards</h2>
            <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
              Access individual frontline service standards and processing times below.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={9}>
              {loading ? (
                <div className="text-center py-5">
                  <Spinner animation="border" variant="danger" />
                  <p className="mt-3 text-muted">Loading documents...</p>
                </div>
              ) : docs.length > 0 ? (
                <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                  <ListGroup variant="flush">
                    {docs.map((doc, idx) => (
                      <ListGroup.Item key={idx} className="p-4 hover-bg-light border-bottom">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="icon-box bg-danger-subtle p-3 rounded-3 text-danger">
                              <FaFilePdf size={24} />
                            </div>
                            <div>
                              <h5 className="fw-bold mb-1">{doc.title}</h5>
                              <div className="d-flex gap-3 text-muted small">
                                <span><FaClock className="me-1" /> Published: {new Date(doc.created_at).toLocaleDateString()}</span>
                                {doc.year && <span><FaInfoCircle className="me-1" /> Year: {doc.year}</span>}
                              </div>
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            <a 
                              href={`${API_BASE_URL.replace('/api', '/storage')}/${doc.file_path}`} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="btn btn-danger rounded-pill px-4 fw-bold"
                            >
                              View PDF
                            </a>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>
              ) : (
                <Card className="border-0 shadow-sm rounded-4 p-5 text-center">
                  <FaFileAlt size={60} className="text-muted mb-3 opacity-25 mx-auto" />
                  <h4 className="text-muted">No specific service standards uploaded yet.</h4>
                  <p className="text-muted mb-0">Please check back later or download the full charter above.</p>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .hover-bg-light {
          transition: all 0.2s ease;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa;
          border-color: var(--blue-logo) !important;
          transform: translateY(-2px);
        }
        .icon-box {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .transition-all {
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  )
}

export default CitizensCharter
