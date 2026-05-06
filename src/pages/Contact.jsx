import React from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link> / <span>Contact</span>
          </div>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today.</p>
        </Container>
      </div>

      {/* Contact Info Cards */}
      <section style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <Container>
          <Row className="gy-3">
            {[
              { icon: <FaMapMarkerAlt size={22} />, title: 'Visit Us', line1: 'Municipal Hall, McArthur Hwy', line2: 'Capas, Tarlac 2315' },
              { icon: <FaPhone size={22} />, title: 'Call Us', line1: '(045) 925-0154', line2: 'Mon – Fri, 8AM – 5PM' },
              { icon: <FaEnvelope size={22} />, title: 'Email Us', line1: 'info@capas.gov.ph', line2: 'We reply within 24 hours' },
              { icon: <FaClock size={22} />, title: 'Office Hours', line1: 'Monday – Friday', line2: '8:00 AM – 5:00 PM' },
            ].map((item, idx) => (
              <Col key={idx} lg={3} md={6}>
                <Card className="modern-card border-0 p-4 text-center h-100">
                  <Card.Body>
                    <div className="service-icon-wrapper mx-auto" style={{ color: 'var(--primary)' }}>
                      {item.icon}
                    </div>
                    <h6 className="fw-bold mb-2">{item.title}</h6>
                    <p className="text-muted small mb-0">{item.line1}</p>
                    <p className="text-muted small mb-0">{item.line2}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Form + Map Section */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-3">
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={5}>
              <Card className="modern-card border-0 h-100" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-1" style={{ fontSize: '1.5rem' }}>Send a Message</h3>
                  <p className="text-muted small mb-4">Fill out the form and we'll get back to you shortly.</p>
                  <Form>
                    <Form.Group className="mb-3" controlId="contactName">
                      <Form.Label className="fw-semibold small text-uppercase" style={{ color: 'var(--gray-500)', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Full Name *</Form.Label>
                      <Form.Control type="text" placeholder="Juan Dela Cruz" className="modern-input" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactPhone">
                      <Form.Label className="fw-semibold small text-uppercase" style={{ color: 'var(--gray-500)', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Contact Number *</Form.Label>
                      <Form.Control type="tel" placeholder="09XX-XXX-XXXX" className="modern-input" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactEmail">
                      <Form.Label className="fw-semibold small text-uppercase" style={{ color: 'var(--gray-500)', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Email Address *</Form.Label>
                      <Form.Control type="email" placeholder="your@email.com" className="modern-input" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="contactMessage">
                      <Form.Label className="fw-semibold small text-uppercase" style={{ color: 'var(--gray-500)', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Message *</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Write your message here..." className="modern-input" required />
                    </Form.Group>

                    <Button type="submit" className="btn-primary-red w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                      <FaPaperPlane size={14} /> Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Map Section */}
            <Col lg={7}>
              <Card className="modern-card border-0 h-100 overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ height: '100%', minHeight: '500px', width: '100%' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6!2d120.5900!3d15.3270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c7b95cc9b969%3A0xc36db5db78b2d187!2sCapas%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1714972583232!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
        padding: '4rem 0',
      }}>
        <Container className="text-center text-white">
          <h3 className="fw-bold mb-3" style={{ color: 'white' }}>Follow Us on Social Media</h3>
          <p className="mb-4" style={{ opacity: 0.8 }}>Stay connected for real-time updates and announcements.</p>
          <div className="d-flex gap-3 justify-content-center">
            {[
              { icon: <FaFacebookF size={18} />, label: 'Facebook' },
              { icon: <FaTwitter size={18} />, label: 'Twitter' },
            ].map((item, idx) => (
              <a key={idx} href="#" className="d-flex align-items-center gap-2 px-4 py-2 text-decoration-none" style={{
                background: 'rgba(255,255,255,0.12)', borderRadius: '50px', color: 'white',
                border: '1px solid rgba(255,255,255,0.2)', transition: 'var(--transition)',
              }}>
                {item.icon} {item.label}
              </a>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Contact
