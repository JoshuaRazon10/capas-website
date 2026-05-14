import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Table, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFilePdf, FaDownload, FaGavel, FaSearch, FaHistory } from 'react-icons/fa'
import API_BASE_URL from '../apiConfig'

const Resolutions = () => {
  const [loading, setLoading] = useState(false)
  const [resolutionsState, setResolutionsState] = useState([])

  useEffect(() => {
    const fetchResolutions = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/documents?type=Resolutions`)
        if (response.ok) {
          const data = await response.json()
          setResolutionsState(data)
        } else {
          setResolutionsState([])
        }
      } catch (error) {
        console.error('Failed to fetch resolutions:', error)
        setResolutionsState([])
      } finally {
        setLoading(false)
      }
    }
    fetchResolutions()
  }, [])

  return (
    <div className="resolutions-page bg-light min-vh-100">
      {/* Page Header */}
      <div className="page-header py-5 mb-0" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <Container className="py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">Resolutions</h1>
          <p className="lead opacity-75 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Official legislative records and resolutions of the Sangguniang Bayan of Capas.
          </p>
        </Container>
      </div>

      {/* Main Content */}
      <section className="py-5">
        <Container>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
            <Card.Header className="bg-white py-4 px-4 border-bottom">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <h3 className="h5 fw-bold m-0" style={{ color: 'var(--blue-logo)' }}>Recent Resolutions</h3>
                <div className="search-box">
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0"><FaSearch className="text-muted" /></span>
                    <input type="text" className="form-control bg-light border-start-0" placeholder="Search resolutions..." />
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table hover className="mb-0 align-middle">
                  <thead className="bg-light">
                    <tr>
                      <th className="px-4 py-3 border-0">RES. NO.</th>
                      <th className="py-3 border-0">TITLE</th>
                      <th className="px-4 py-3 border-0 text-center">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="3" className="text-center py-5">
                          <Spinner animation="border" variant="primary" />
                          <p className="mt-3 text-muted">Loading resolutions...</p>
                        </td>
                      </tr>
                    ) : resolutionsState.length > 0 ? (
                      resolutionsState.map((res, idx) => (
                        <tr key={idx}>
                          <td className="px-4 py-4 fw-bold text-muted">{res.reference_no || res.no}</td>
                          <td className="py-4 fw-medium text-dark">{res.title}</td>
                          <td className="px-4 py-4 text-center">
                            {res.file_path ? (
                              <a 
                                href={res.file_path.startsWith('http') ? res.file_path : `${API_BASE_URL.replace('/api', '/storage')}/${res.file_path}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-sm btn-outline-primary rounded-pill px-3"
                              >
                                <FaDownload className="me-2" /> PDF
                              </a>
                            ) : (
                              <button className="btn btn-sm btn-outline-secondary rounded-pill px-3" disabled>
                                <FaDownload className="me-2" /> PDF
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center py-5 text-muted">No resolutions found.</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>

          <div className="text-center mt-5">
            <p className="text-muted">For older resolutions, please visit the Municipal Secretary's Office.</p>
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-5 bg-white border-top">
        <Container>
          <Row className="gy-4 text-center">
            <Col md={4}>
              <FaGavel size={32} className="text-primary mb-3" />
              <h5 className="fw-bold">Legislative Records</h5>
              <p className="text-muted small">Updated weekly following SB sessions</p>
            </Col>
            <Col md={4}>
              <FaHistory size={32} className="text-primary mb-3" />
              <h5 className="fw-bold">Archives</h5>
              <p className="text-muted small">Access records dating back to 2010</p>
            </Col>
            <Col md={4}>
              <FaFilePdf size={32} className="text-primary mb-3" />
              <h5 className="fw-bold">Digital Copies</h5>
              <p className="text-muted small">Downloadable in secure PDF format</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Resolutions
