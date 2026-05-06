import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa'
import logo from '../assets/images/capas.logo.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          {/* Brand */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img 
                src={logo} 
                alt="Capas Logo" 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%',
                  border: '2px solid rgba(255,255,255,0.2)'
                }} 
              />
              <div>
                <div style={{ fontWeight: 800, color: 'white', fontSize: '1.05rem', lineHeight: '1.2' }}>Municipality of Capas</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>Province of Tarlac</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', opacity: 0.6 }}>
              Serving the people of Capas with integrity, transparency, and excellence.
              Together, we build a better future for our community.
            </p>
            <div className="d-flex gap-2 mt-3">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="footer-social-icon"><Icon /></a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/government', label: 'Government' },
                { to: '/news', label: 'Latest News' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((link, i) => (
                <li key={i} className="mb-2">
                  <Link to={link.to}><FaChevronRight size={10} className="me-2" />{link.label}</Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              {['Business Permits', 'Civil Registry', 'Health Services', 'Social Welfare', 'Real Property Tax'].map((s, i) => (
                <li key={i} className="mb-2">
                  <a href="#"><FaChevronRight size={10} className="me-2" />{s}</a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6}>
            <h5>Contact Info</h5>
            <div className="d-flex align-items-start gap-3 mb-3">
              <FaMapMarkerAlt style={{ color: '#EF5350', marginTop: '4px', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem' }}>Municipal Hall, McArthur Hwy,<br />Capas, Tarlac 2315</span>
            </div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <FaPhone style={{ color: '#EF5350', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem' }}>(045) 925-0154</span>
            </div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <FaEnvelope style={{ color: '#EF5350', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem' }}>info@capas.gov.ph</span>
            </div>
          </Col>
        </Row>

        {/* Bottom */}
        <div className="footer-bottom text-center">
          <p className="mb-0" style={{ fontSize: '0.85rem', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} Municipality of Capas, Tarlac. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
