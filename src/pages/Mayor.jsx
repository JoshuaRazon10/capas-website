import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaQuoteLeft } from 'react-icons/fa'
import bootsImg from '../assets/images/mayors/boots.png'

const Mayor = () => {
  return (
    <div className="mayor-profile-page">
      {/* Hero Section */}
      <section className="mayor-hero bg-dark text-white py-5 position-relative overflow-hidden" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(13,13,13,0.9), rgba(198,40,40,0.8))',
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
                  src={bootsImg} 
                  alt="Hon. Roseller 'Boots' Rodriguez" 
                  className="rounded-3"
                  style={{ width: '100%', maxWidth: '320px', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </Col>
            <Col lg={8} className="text-center text-lg-start">
              <span className="badge bg-primary px-3 py-2 mb-3 text-uppercase tracking-wider">The Municipal Mayor</span>
              <h1 className="display-3 fw-bold mb-2">Hon. Roseller "Boots" Rodriguez</h1>
              <p className="lead mb-4 opacity-75">Providing leadership with heart and action for the citizens of Capas.</p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <a href="https://www.facebook.com/BootsRodriguezOfficial" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                  <FaFacebook size={20} />
                </a>
                {/* Add more social links if available */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mayor's Message */}
      <section className="py-5 bg-white">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="message-card p-5 rounded-4 shadow-sm border-start border-primary border-5" style={{ background: 'var(--gray-100)' }}>
                <FaQuoteLeft size={40} className="text-primary mb-4 opacity-50" />
                <h2 className="fw-bold mb-4">A Message to the People of Capas</h2>
                <div className="message-content text-muted lead" style={{ lineHeight: '1.8' }}>
                  <p className="mb-4">
                    "My commitment to the people of Capas is rooted in the belief that true progress is achieved when every citizen is empowered and every community is heard. Our administration is dedicated to transparency, efficiency, and compassionate service."
                  </p>
                  <p className="mb-4">
                    "We are building a Capas that is resilient, inclusive, and progressive—a place where the youth have opportunities, the elderly are cared for, and businesses can thrive. Let us continue to work together for the brighter future of our beloved municipality."
                  </p>
                </div>
                <div className="mt-5 pt-3 border-top">
                  <h5 className="fw-bold text-dark mb-0">Hon. Roseller "Boots" B. Rodriguez</h5>
                  <p className="text-primary small fw-bold text-uppercase">Municipal Mayor</p>
                </div>
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
          transform: rotate(-2deg);
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

export default Mayor
