import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaUserTie, FaMapMarkerAlt, FaDirections } from 'react-icons/fa'

const BarangayOfficials = () => {
  const barangays = [
    { name: 'Aranguren', captain: 'Hon. Bonifacio P. Alzadon Jr.', description: 'One of the major barangays in Capas.' },
    { name: 'Bueno', captain: 'Hon. Danny D. Agdeppa', description: 'Known for its scenic agricultural lands.' },
    { name: 'Cristo Rey', captain: 'Hon. Arturo O. Joves', description: 'Formerly known as Navy, a vibrant community.' },
    { name: 'Cubcub', captain: 'Hon. Jose P. Tolentino', description: 'Located in the Poblacion area.' },
    { name: 'Cut-Cut I', captain: 'Hon. Gerardo C. Sangalang', description: 'One of the central business districts.' },
    { name: 'Cut-Cut II', captain: 'Hon. Edwin A. Macale', description: 'A bustling residential and commercial area.' },
    { name: 'Dolores', captain: 'Hon. Rogelio D. Pabustan Jr.', description: 'A key barangay in the town center.' },
    { name: 'Estrada', captain: 'Hon. Allan S. Ramos', description: 'Formerly Calingcuan, rich in heritage.' },
    { name: 'Lawy', captain: 'Hon. Porfirio D. Laxamana Jr.', description: 'A peaceful and growing barangay.' },
    { name: 'Manga', captain: 'Hon. Julie R. Guevarra', description: 'A community with strong agricultural roots.' },
    { name: 'Manlapig', captain: 'Hon. Ricky M. Datu', description: 'Known for its active local community.' },
    { name: 'Maruglo', captain: 'Hon. Lota S. Guanlao', description: 'Located near the foothills, offering cool breezes.' },
    { name: "O'Donnell", captain: 'Hon. Wendell L. Mercado', description: 'Home to historical landmarks and nature.' },
    { name: 'Sta. Juliana', captain: 'Hon. Jude C. Lenon', description: 'The gateway to Mt. Pinatubo treks.' },
    { name: 'Sta. Lucia', captain: 'Hon. Cesario D. Bautista Jr.', description: 'A vibrant residential barangay.' },
    { name: 'Sta. Rita', captain: 'Hon. Arnold C. Arcilla', description: 'Growing residential and industrial area.' },
    { name: 'Sto. Domingo 1st', captain: 'Hon. Jefferson M. Garcia', description: 'Central urbanized barangay.' },
    { name: 'Sto. Domingo 2nd', captain: 'Hon. Edwin Lucas M. Baron', description: 'Busy commercial and urban center.' },
    { name: 'Sto. Rosario', captain: 'Hon. Solomon E. Sicat Jr.', description: 'A central Poblacion barangay.' },
    { name: 'Talaga', captain: 'Hon. Eliseo C. Malonzo', description: 'A friendly and hospitable community.' },
  ]

  return (
    <div className="barangay-officials-page py-5 bg-white min-vh-100">
      <Container className="text-center mb-5">
        <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3rem', letterSpacing: '2px' }}>BARANGAY OFFICIALS</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
          Meet the dedicated leaders of our 20 barangays who work tirelessly for the progress and welfare of every Capaseño.
        </p>
      </Container>

      <Container>
        <Row className="g-4">
          {barangays.map((brgy, index) => (
            <Col key={index} lg={3} md={4} sm={6}>
              <Card className="h-100 border-0 shadow-sm hover-lift" style={{ transition: 'all 0.3s ease' }}>
                <Card.Body className="text-center p-4">
                  <div className="brgy-icon mb-3 d-inline-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: '60px', height: '60px' }}>
                    <FaMapMarkerAlt className="text-danger" size={24} />
                  </div>
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
