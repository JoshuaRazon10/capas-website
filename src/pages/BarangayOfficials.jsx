import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Badge, Spinner } from 'react-bootstrap'
import { FaUserTie, FaMapMarkerAlt, FaDirections } from 'react-icons/fa'
import API_BASE_URL from '../apiConfig'

const BarangayOfficials = () => {
  const [barangays, setBarangays] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBarangays()
  }, [])

  const fetchBarangays = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/barangays`)
      if (response.ok) {
        const data = await response.json()
        setBarangays(data)
      }
    } catch (err) {
      console.error('Error fetching barangays:', err)
    } finally {
      setLoading(false)
    }
  }

  const getImageUrl = (path) => {
    if (!path) return null
    if (path.startsWith('http')) return path
    return `${API_BASE_URL.replace('/api', '/storage')}/${path}`
  }

  return (
    <div className="barangay-officials-page py-5 bg-white min-vh-100">
      <Container className="text-center mb-5">
        <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3rem', letterSpacing: '2px' }}>BARANGAY OFFICIALS</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
          Meet the dedicated leaders of our 20 barangays who work tirelessly for the progress and welfare of every Capaseño.
        </p>
      </Container>

      <Container>
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row className="g-4">
            {barangays.map((brgy, index) => (
              <Col key={index} lg={3} md={4} sm={6}>
                <Card className="h-100 border-0 shadow-sm hover-lift overflow-hidden" style={{ transition: 'all 0.3s ease' }}>
                  <div className="brgy-photo-wrapper bg-light d-flex align-items-center justify-content-center" style={{ height: '220px', overflow: 'hidden' }}>
                    {brgy.image_path ? (
                      <img src={getImageUrl(brgy.image_path)} alt={brgy.captain} className="w-100 h-100 object-fit-cover" />
                    ) : (
                      <div className="d-flex flex-column align-items-center text-muted opacity-25">
                        <FaUserTie size={60} />
                        <span className="small mt-2">No Photo</span>
                      </div>
                    )}
                  </div>
                  <Card.Body className="text-center p-4">
                    <h5 className="fw-bold text-dark mb-2">{brgy.name.toUpperCase()}</h5>
                    <Badge className="mb-3 px-3 py-2" style={{ backgroundColor: 'var(--blue-logo)', border: 'none', color: 'white' }}>PUNONG BARANGAY</Badge>
                    
                    <div className="official-info mt-2">
                      <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                        <FaUserTie className="text-muted" />
                        <span className="fw-bold text-dark">{brgy.captain}</span>
                      </div>
                      <p className="text-muted small mb-0 mt-3" style={{ lineHeight: '1.5' }}>
                        {brgy.description}
                      </p>
                    </div>
                  </Card.Body>
                <Card.Footer className="bg-transparent border-0 pb-4 text-center">
                  <a 
                    href={`https://www.google.com/maps/search/Barangay+${brgy.name}+Capas+Tarlac`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger btn-sm rounded-pill px-4 fw-bold"
                  >
                    <FaDirections className="me-2" /> View on Maps
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
          </Row>
        )}
      </Container>

      <style>{`
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
  )
}

export default BarangayOfficials
