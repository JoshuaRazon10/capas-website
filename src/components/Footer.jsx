import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa'
import logo from '../assets/images/capas.logo.jpg'

const Footer = () => {
  return (
    <footer className="footer" style={{ paddingTop: 0 }}>
      {/* Standard Philippine Government Footer */}
      <div className="standard-gov-footer">
        <Container>
          <Row className="gy-4 align-items-start">
            <Col lg={4} md={12} className="d-flex align-items-start gap-3">
              <img 
                src="https://www.gov.ph/images/govph-seal-mono-light.png" 
                alt="GovPH Seal" 
                className="gov-footer-seal"
              />
              <div className="gov-footer-text">
                <h6>REPUBLIC OF THE PHILIPPINES</h6>
                <p>All content is in the public domain unless otherwise stated.</p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="gov-footer-text">
                <h6>ABOUT GOVPH</h6>
                <p>Learn more about the Philippine government, its structure, how government works and the people behind it.</p>
                <ul className="list-unstyled gov-links">
                  <li><a href="https://www.gov.ph/">GOV.PH</a></li>
                  <li><a href="https://data.gov.ph/">Open Data Portal</a></li>
                  <li><a href="https://www.officialgazette.gov.ph/">Official Gazette</a></li>
                </ul>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="gov-footer-text">
                <h6>GOVERNMENT LINKS</h6>
                <ul className="list-unstyled gov-links">
                  <li><a href="https://op-proper.gov.ph/">Office of the President</a></li>
                  <li><a href="https://ovp.gov.ph/">Office of the Vice President</a></li>
                  <li><a href="https://legacy.senate.gov.ph/">Senate of the Philippines</a></li>
                  <li><a href="https://www.congress.gov.ph/">House of Representatives</a></li>
                  <li><a href="https://sc.judiciary.gov.ph/">Supreme Court</a></li>
                  <li><a href="https://ca.judiciary.gov.ph/">Court of Appeals</a></li>
                  <li><a href="https://sb.judiciary.gov.ph/">Sandiganbayan</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
