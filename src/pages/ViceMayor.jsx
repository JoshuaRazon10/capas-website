import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaFacebook, FaQuoteLeft } from 'react-icons/fa'
import vmAlexImg from '../assets/images/vm.alex.jpg'

const ViceMayor = () => {
  return (
    <div className="vice-mayor-profile-page">
      {/* Hero Section */}
      <section className="mayor-hero bg-dark text-white py-5 position-relative overflow-hidden" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(13,13,13,0.9), rgba(20,24,61,0.8))',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="hero-pattern"></div>
        <Container className="position-relative z-index-1">
          <Row className="align-items-center g-5">
            <Col lg={4} className="text-center text-lg-start">
              <div className="mayor-image-wrapper p-2 bg-white rounded-4 shadow-xl d-inline-block">
                <img 
                  src={vmAlexImg} 
                  alt="Hon. Alex C. Espinosa" 
                  className="rounded-3"
                  style={{ width: '100%', maxWidth: '320px', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </Col>
            <Col lg={8} className="text-center text-lg-start">
              <span className="badge px-3 py-2 mb-3 text-uppercase tracking-wider" style={{ background: 'var(--blue-logo)', color: 'white' }}>The Vice Mayor</span>
              <h1 className="display-3 fw-bold mb-2">Hon. Alex C. Espinosa</h1>
              <p className="lead mb-4 opacity-75">Committed to legislative excellence and serving the people of Capas with integrity.</p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <a href="https://www.facebook.com/AlexCanlasEspinosa" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                  <FaFacebook size={20} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Profile Details */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="gy-4">
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <div style={{ width: '8px', height: '24px', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  Our Vision
                </h4>
                <p className="text-muted">
                  A premier municipality in Central Luzon characterized by a vibrant economy, resilient infrastructure, and a globally competitive, healthy, and empowered citizenry living in a safe and sustainable environment under a transparent and responsive governance.
                </p>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm p-4">
                <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <div style={{ width: '8px', height: '24px', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  Our Mission
                </h4>
                <p className="text-muted">
                  To provide quality public services, promote sustainable development, and ensure the general welfare of all Capaseños through effective leadership, community participation, and efficient management of resources.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <style>{`
        .mayor-hero .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
        }
        .mayor-image-wrapper {
          transform: rotate(2deg);
          transition: transform 0.4s ease;
        }
        .mayor-image-wrapper:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .tracking-wider {
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  )
}

export default ViceMayor
