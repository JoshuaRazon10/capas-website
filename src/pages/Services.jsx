import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaTools, FaBriefcase, FaSeedling, FaArrowRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const offices = [
  {
    title: "MUNICIPAL ASSESSOR'S OFFICE",
    icon: <FaFileAlt size={32} />,
    color: 'var(--blue-logo)',
    services: [
      "Transfer of Tax Declaration",
      "Issuance of Tax Declaration for Consolidation/Subdivision",
      "Issuance of Certified Copy of Tax Declaration, Certification of Property Holdings and Non-Property Holding",
      "Issuance of Certificate with Improvement and Certificate of Non-Improvement"
    ]
  },
  {
    title: "BUSINESS PERMIT AND LICENSING OFFICE",
    icon: <FaBriefcase size={32} />,
    color: 'var(--blue-logo)',
    services: [
      "Manual Registration of Business/Mayor's Permit",
      "Manual Renewal of Business/Mayor's Permit",
      "Issuance of Certification of Business Retirement",
      "Online Registration Business/Mayor's Permit",
      "Online Renewal of Business/Mayor's Permit"
    ]
  },
  {
    title: "MUNICIPAL ENGINEERING OFFICE",
    icon: <FaTools size={32} />,
    color: 'var(--blue-logo)',
    services: [
      "Issuance of Building Permit",
      "Issuance of Certificate of Occupancy",
      "Issuance of Service Connection Permit and Permit for Temporary Service Connection (Electric Meter Connection)",
      "Issuance of Fencing Permit",
      "Issuance of Demolition Permit",
      "Issuance of Sign Permit (Lamp Post Banner)",
      "Issuance of Sign Post (Lamp Post Banner)",
      "Issuance of Excavation and Ground Preparation Permit"
    ]
  },
  {
    title: "MUNICIPAL AGRARIAN OFFICE",
    icon: <FaSeedling size={32} />,
    color: 'var(--blue-logo)',
    services: [
      "Distribution of Farm Machineries",
      "Distribution of Farm Inputs to Registered Farmers (Certified Seeds, Corn, Fingerlings, Seedlings)",
      "Anti-Rabies Vaccination",
      "Issuance of Fencing Permit"
    ]
  }
]

const Services = () => {
  return (
    <div className="services-page bg-light min-vh-100">
      {/* Page Header */}
      <div className="page-header text-white py-5 mb-0" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container className="py-4">
          <h1 className="display-4 fw-bold">Citizen's Charter</h1>
          <p className="lead opacity-75">Transparency and efficiency in public service delivery.</p>
        </Container>
      </div>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="fw-bold display-5 mb-3">Frontline Services</h2>
            <div className="section-divider mx-auto" style={{ width: '80px', height: '4px', backgroundColor: 'var(--blue-logo)' }}></div>
            <p className="text-muted mt-3 lead">Detailed list of services provided by our municipal offices.</p>
          </div>

          <Row className="g-4">
            {offices.map((office, idx) => (
              <Col key={idx} lg={12} className="mb-4">
                <Card className="border-0 shadow-sm overflow-hidden" style={{ borderRadius: '20px' }}>
                  <Row className="g-0">
                    <Col md={1} className="d-none d-md-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--blue-logo)', color: 'white' }}>
                      <div className="transform-rotate-neg-90 fw-bold text-nowrap text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>
                        OFFICE
                      </div>
                    </Col>
                    <Col md={11}>
                      <Card.Body className="p-4 p-md-5">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <div className="service-icon-box bg-light p-3 rounded-4" style={{ color: 'var(--blue-logo)' }}>
                            {office.icon}
                          </div>
                          <h3 className="fw-bold m-0" style={{ color: 'var(--gray-900)', fontSize: '1.75rem' }}>{office.title}</h3>
                        </div>
                        
                        <div className="services-list ms-md-4">
                          <h6 className="text-uppercase fw-bold text-muted small mb-3 tracking-widest">Available Services:</h6>
                          <Row>
                            {office.services.map((service, sIdx) => (
                              <Col md={6} key={sIdx} className="mb-3">
                                <div className="d-flex align-items-start gap-3">
                                  <div className="flex-shrink-0 mt-1" style={{ width: '8px', height: '8px', backgroundColor: 'var(--blue-logo)', borderRadius: '2px' }}></div>
                                  <span className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>{service}</span>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-5 bg-white border-top">
        <Container>
          <Row className="gy-4">
            <Col md={6}>
              <div className="d-flex gap-4 p-4 rounded-4 bg-light h-100">
                <FaClock size={40} className="text-primary-red flex-shrink-0" />
                <div>
                  <h4 className="fw-bold mb-2">Office Hours</h4>
                  <p className="text-muted m-0">Monday – Thursday: 7:00 AM – 6:00 PM</p>
                  <p className="text-muted small">No Noon Break policy implemented for continuous service.</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex gap-4 p-4 rounded-4 bg-light h-100">
                <FaMapMarkerAlt size={40} className="text-primary-red flex-shrink-0" />
                <div>
                  <h4 className="fw-bold mb-2">Location</h4>
                  <p className="text-muted m-0">Municipal Hall, Capas, Tarlac</p>
                  <p className="text-muted small">Proceed to the respective windows or desks for assistance.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .transform-rotate-neg-90 {
          transform: rotate(-90deg);
        }
        .tracking-widest {
          letter-spacing: 3px;
        }
        .service-icon-box {
          transition: transform 0.3s ease;
        }
        .modern-card:hover .service-icon-box {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  )
}

export default Services
