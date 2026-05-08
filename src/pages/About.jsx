import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaEye, FaBullseye, FaHeart, FaLandmark, FaMountain, FaHistory } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link> / <span>About Capas</span>
          </div>
          <h1>About Capas</h1>
          <p>Discover the rich history and vibrant culture of our municipality.</p>
        </Container>
      </div>

      {/* History Section */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-3">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div style={{
                height: '400px', borderRadius: 'var(--radius)',
                background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: '10%', right: '10%', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(198,40,40,0.2)' }}></div>
                <div style={{ position: 'absolute', bottom: '15%', left: '10%', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(239,83,80,0.15)' }}></div>
                <div className="text-center text-white" style={{ zIndex: 2 }}>
                  <FaHistory size={56} style={{ opacity: 0.8, marginBottom: '1rem' }} />
                  <h4 className="fw-bold" style={{ color: 'white' }}>Est. 1712</h4>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <span className="news-date-badge mb-3 d-inline-block">Our Heritage</span>
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.2rem' }}>A Town Rich in History</h2>
              <p className="text-muted" style={{ lineHeight: '1.9' }}>
                Capas is a first-class municipality in the province of Tarlac, Philippines. It is known as the
                "Tourism Capital of Tarlac" and is one of the most historically significant towns in the country.
              </p>
              <p className="text-muted" style={{ lineHeight: '1.9' }}>
                The Capas National Shrine, a memorial for Filipino and American soldiers who perished during the
                Bataan Death March in World War II, stands as a testament to the courage and sacrifice of our heroes.
              </p>
              <p className="text-muted" style={{ lineHeight: '1.9' }}>
                Mount Pinatubo, one of the most popular tourist destinations in the region, is also partially located
                within Capas, drawing thousands of visitors each year for trekking and adventure tourism.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-3">
          <div className="section-header">
            <h2>Vision & Mission</h2>
            <div className="section-divider"></div>
          </div>
          <Row className="gy-4">
            {[
              {
                icon: <FaEye size={32} />,
                title: 'Our Vision',
                desc: 'CAPAS TO BE THE TOURISM AND AGRO-INDUSTRIAL CAPITAL OF TARLAC WITH EMPOWERED AND HEALTHY CITIZENRY IN A SOCIALLY JUST AND SAFE COMMUNITY WHO LIVES IN A SUSTAINABLE AND ECOLOGICALLY-BALANCED ENVIRONMENT WITH ACCESIBLE AND WELL-PLANNED INFRASTRUCTURE UNDER AN INVESTMENT FRIENDLY, PROGRESSIVE AND DIVERSE ECONOMY, GOVERNED BY GOD-FEARING AND RESPONSIVE LEADERSHIP.',
                color: '#C62828',
              },
              {
                icon: <FaBullseye size={32} />,
                title: 'Our Mission',
                desc: 'IN THE PROMOTION OF THE GENERAL WELL-BEING OF OUR PEOPLE, CAPAS SHALL BE CONSISTENT IN PROVIDING EFFICIENT AND EFFECTIVE SERVICES, THROUGH THE IMPLEMENTATION OF THE PROGRAM, PROJECT AND ACTIVITIES WHERE THE GREATEST NUMBER OF OUR PEOPLE GAINFULLY EMPLOYED.',
                color: '#8E0000',
              },
              {
                icon: <FaHeart size={32} />,
                title: 'Core Values',
                desc: 'Integrity, Transparency, Accountability, Excellence, and Public Service. We uphold these values in everything we do to serve the people of Capas.',
                color: '#EF5350',
              },
            ].map((item, idx) => (
              <Col key={idx} lg={4} md={6}>
                <Card className="modern-card h-100 border-0 p-4 text-center">
                  <Card.Body>
                    <div className="service-icon-wrapper mx-auto" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <h4 className="fw-bold mb-3">{item.title}</h4>
                    <p className="text-muted" style={{ lineHeight: '1.8' }}>{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Landmarks */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-3">
          <div className="section-header">
            <h2>Landmarks & Attractions</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Explore the iconic destinations that make Capas special.</p>
          </div>
          <Row className="gy-4">
            {[
              { title: 'Capas National Shrine', desc: 'A memorial dedicated to the Filipino and American soldiers of WWII.', icon: <FaLandmark size={36} /> },
              { title: 'Mount Pinatubo', desc: 'Breathtaking volcanic crater lake, one of the top trekking destinations in the Philippines.', icon: <FaMountain size={36} /> },
              { title: 'New Clark City', desc: 'A next-generation metropolis and hub for sports, government, and industry.', icon: <FaLandmark size={36} /> },
            ].map((item, idx) => (
              <Col key={idx} lg={4} md={6}>
                <Card className="modern-card h-100 border-0">
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(135deg, hsl(${idx * 20 + 350}, 70%, 45%), hsl(${idx * 20 + 360}, 60%, 60%))`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ color: 'white', opacity: 0.8 }}>{item.icon}</div>
                  </div>
                  <Card.Body className="p-4">
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About
