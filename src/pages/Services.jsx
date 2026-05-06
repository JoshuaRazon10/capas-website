import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaHeart, FaHome, FaGavel, FaBriefcase, FaGraduationCap, FaTree, FaShieldAlt, FaArrowRight } from 'react-icons/fa'

const serviceCategories = [
  { icon: <FaBriefcase size={28} />, title: 'Business Permits', desc: 'Apply for and renew your business permits and licenses with ease.', color: '#C62828' },
  { icon: <FaFileAlt size={28} />, title: 'Civil Registry', desc: 'Birth, marriage, and death certificates. Document authentication services.', color: '#D32F2F' },
  { icon: <FaHeart size={28} />, title: 'Health Services', desc: 'Free medical consultations, vaccinations, and health programs.', color: '#E53935' },
  { icon: <FaHome size={28} />, title: 'Social Welfare', desc: 'Assistance programs for senior citizens, PWDs, solo parents, and indigents.', color: '#EF5350' },
  { icon: <FaGavel size={28} />, title: 'Real Property Tax', desc: 'Property assessment, tax declarations, and payment processing.', color: '#C62828' },
  { icon: <FaGraduationCap size={28} />, title: 'Scholarship Programs', desc: 'Educational assistance and scholarship opportunities for qualified students.', color: '#D32F2F' },
  { icon: <FaTree size={28} />, title: 'Environmental Services', desc: 'Waste management, environmental permits, and tree cutting applications.', color: '#E53935' },
  { icon: <FaShieldAlt size={28} />, title: 'Peace & Order', desc: 'Public safety services, barangay dispute resolution, and emergency response.', color: '#EF5350' },
]

const Services = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link> / <span>Services</span>
          </div>
          <h1>Public Services</h1>
          <p>Comprehensive services available to the citizens of Capas.</p>
        </Container>
      </div>

      {/* Services Grid */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-3">
          <div className="section-header">
            <h2>What We Offer</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Our municipality provides a wide range of public services to serve you better.</p>
          </div>
          <Row className="gy-4">
            {serviceCategories.map((item, idx) => (
              <Col key={idx} lg={3} md={6}>
                <Card className="modern-card h-100 border-0 p-4">
                  <Card.Body className="d-flex flex-column">
                    <div className="service-icon-wrapper" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                    <h5 className="fw-bold mb-2" style={{ fontSize: '1.05rem' }}>{item.title}</h5>
                    <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                    <a href="#" className="text-decoration-none fw-bold" style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
                      Learn More <FaArrowRight className="ms-1" size={10} />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Office Hours */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-3">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="news-date-badge mb-3 d-inline-block">Information</span>
              <h2 className="fw-bold mb-4">Office Hours & Requirements</h2>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Office Hours</h6>
                <p className="text-muted">Monday – Friday: 8:00 AM – 5:00 PM (No noon break)</p>
              </div>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">General Requirements</h6>
                <ul className="text-muted">
                  <li className="mb-2">Valid Government-issued ID</li>
                  <li className="mb-2">Duly accomplished application forms</li>
                  <li className="mb-2">Barangay Clearance (for applicable transactions)</li>
                  <li className="mb-2">Community Tax Certificate (Cedula)</li>
                </ul>
              </div>
              <Button as={Link} to="/contact" className="btn-primary-red">
                Contact Us for Details <FaArrowRight className="ms-2" size={12} />
              </Button>
            </Col>
            <Col lg={6}>
              <div style={{
                borderRadius: 'var(--radius)',
                background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
                padding: '3rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
                <h4 className="fw-bold mb-4" style={{ color: 'white' }}>Need Help?</h4>
                <p style={{ opacity: 0.85, lineHeight: '1.8' }}>
                  Visit the Municipal Hall during office hours or contact us through phone or email.
                  Our staff is ready to assist you with any transaction or inquiry.
                </p>
                <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                  <p className="mb-2"><strong>Phone:</strong> (045) 925-0154</p>
                  <p className="mb-0"><strong>Email:</strong> info@capas.gov.ph</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Services
