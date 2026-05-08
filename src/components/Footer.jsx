import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaViber } from 'react-icons/fa'
import logo from '../assets/images/capas.logo.jpg'

const Footer = () => {
  return (
    <footer className="footer-baguio-style" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '60px 0 20px 0' }}>
      <Container>
        <Row className="gy-4">
          {/* Column 1: Philippine Seal */}
          <Col lg={3} md={6}>
            <div className="d-flex align-items-start gap-3">
              <img 
                src="https://www.gov.ph/images/govph-seal-mono-light.png" 
                alt="Republic of the Philippines Seal" 
                style={{ width: '80px', height: 'auto' }}
              />
              <div style={{ fontSize: '0.85rem' }}>
                <h6 className="fw-bold mb-2" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>REPUBLIC OF THE PHILIPPINES</h6>
                <p className="mb-3 opacity-75">All content is in the public domain unless otherwise stated.</p>
                <p className="mb-0 opacity-75">© 2026. All rights reserved.</p>
              </div>
            </div>
          </Col>

          {/* Column 2: About GovPH */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>ABOUT GOVPH</h6>
            <p className="mb-4 opacity-75" style={{ fontSize: '0.85rem' }}>
              Learn more about the Philippine government, its structure, how government works and the people behind it.
            </p>
            <ul className="list-unstyled" style={{ fontSize: '0.85rem' }}>
              <li className="mb-2"><a href="https://www.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">GOV.PH</a></li>
              <li className="mb-2"><a href="https://data.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Open Data Portal</a></li>
              <li className="mb-0"><a href="https://www.officialgazette.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Official Gazette</a></li>
            </ul>
          </Col>

          {/* Column 3: Government Links */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>GOVERNMENT LINKS</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.85rem' }}>
              <li className="mb-2"><a href="https://op-proper.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Office of the President</a></li>
              <li className="mb-2"><a href="https://ovp.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Office of the Vice President</a></li>
              <li className="mb-2"><a href="https://legacy.senate.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Senate of the Philippines</a></li>
              <li className="mb-2"><a href="https://www.congress.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">House of Representatives</a></li>
              <li className="mb-2"><a href="https://sc.judiciary.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Supreme Court</a></li>
              <li className="mb-2"><a href="https://ca.judiciary.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Court of Appeals</a></li>
              <li className="mb-0"><a href="https://sb.judiciary.gov.ph/" className="text-white text-decoration-none opacity-75 hover-opacity-100">Sandiganbayan</a></li>
            </ul>
          </Col>

          {/* Column 4: Contact Us & Capas Logo */}
          <Col lg={3} md={6} className="d-flex flex-column align-items-lg-end">
            <div className="text-lg-end mb-4">
              <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>CONTACT US</h6>
              <div className="d-flex align-items-center justify-content-lg-end gap-2 mb-2 opacity-75" style={{ fontSize: '0.85rem' }}>
                <FaEnvelope size={14} />
                <span>Email: info@capas.gov.ph</span>
              </div>
              <div className="d-flex align-items-center justify-content-lg-end gap-2 opacity-75" style={{ fontSize: '0.85rem' }}>
                <FaViber size={14} />
                <span>Viber: +63 925 015 4000</span>
              </div>
            </div>
            <div className="mt-auto">
              <img 
                src={logo} 
                alt="Municipality of Capas Logo" 
                style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', padding: '5px', background: 'white' }}
              />
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="mt-5 pt-4 border-top border-secondary text-center">
          <p className="mb-0 opacity-50" style={{ fontSize: '0.75rem' }}>
            Powered by: Municipal Information Technology Office - Management in Information and Technology Division
          </p>
        </div>
      </Container>

      <style>{`
        .hover-opacity-100:hover {
          opacity: 1 !important;
          color: #EF5350 !important;
        }
        .footer-baguio-style {
          /* Plain red background as requested */
        }
      `}</style>
    </footer>
  )
}

export default Footer
