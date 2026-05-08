import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBriefcase, FaArrowRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const BusinessPermit = () => {
  const services = [
    "Manual Registration of Business/Mayor's Permit",
    "Manual Renewal of Business/Mayor's Permit",
    "Issuance of Certification of Business Retirement",
    "Online Registration Business/Mayor's Permit",
    "Online Renewal of Business/Mayor's Permit"
  ]

  return (
    <div className="office-page bg-light min-vh-100">
      {/* Page Header */}
      <div className="page-header py-5 mb-0" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <Container className="py-4 text-center text-md-start">
          <h1 className="display-4 fw-bold m-0">Business Permit and Licensing Office</h1>
        </Container>
      </div>

      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-sm p-4 p-md-5" style={{ borderRadius: '24px' }}>
                <div className="d-flex align-items-center gap-4 mb-5 border-bottom pb-4">
                  <div className="p-4 rounded-circle" style={{ backgroundColor: 'var(--blue-logo-glow)', color: 'var(--blue-logo)' }}>
                    <FaBriefcase size={40} />
                  </div>
                  <div>
                    <h2 className="fw-bold mb-1">Our Services</h2>
                    <p className="text-muted m-0">Fast-track your business with our streamlined registration services.</p>
                  </div>
                </div>

                <div className="services-grid">
                  <Row className="gy-4">
                    {services.map((service, idx) => (
                      <Col key={idx} md={12}>
                        <div className="d-flex align-items-start gap-3 p-3 rounded-3 bg-white border-start border-4 shadow-sm h-100 transition-hover" style={{ borderLeftColor: 'var(--blue-logo) !important' }}>
                          <div className="flex-shrink-0 mt-1">
                            <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}></div>
                          </div>
                          <span className="fw-medium text-dark" style={{ fontSize: '1.1rem' }}>{service}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="mt-5 p-4 rounded-4" style={{ backgroundColor: 'rgba(12,12,107,0.05)', border: '1px dashed var(--blue-logo)' }}>
                  <h5 className="fw-bold d-flex align-items-center gap-2 mb-3" style={{ color: 'var(--blue-logo)' }}>
                    <FaClock /> Operating Hours
                  </h5>
                  <p className="text-muted mb-0">Monday to Friday | 8:00 AM – 5:00 PM (No Noon Break)</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .transition-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .transition-hover:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .bg-primary-glow {
          background-color: var(--primary-glow);
        }
      `}</style>
    </div>
  )
}

export default BusinessPermit
