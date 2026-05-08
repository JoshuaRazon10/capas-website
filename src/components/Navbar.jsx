import React from 'react'
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaChevronDown, 
  FaHome, FaInfoCircle, FaGavel, 
  FaCogs, FaNewspaper, FaEnvelope, FaBars 
} from 'react-icons/fa'

import logo from '../assets/images/capas.logo.jpg'

const NavbarComponent = () => {
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/government', label: 'Government', icon: <FaGavel />, hasDropdown: true },
    { path: '/services', label: 'Businesses', icon: <FaCogs />, hasDropdown: true },
    { path: '/news', label: 'News', icon: <FaNewspaper /> },
    { path: '/about', label: 'Tourism', icon: <FaInfoCircle /> },
    { path: '/contact', label: 'Transparency', icon: <FaEnvelope />, hasDropdown: true },
  ]

  return (
    <div className="appbar-wrapper sticky-top">
      {/* 1. Brand Header Section - NOW AT TOP */}
      <div className="brand-header-section">
        <Container>
          <div className="brand-main">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={logo} alt="Capas Logo" className="brand-logo-img" />
              <div className="brand-text-content">
                <h1>CAPAS CITY</h1>
                <p>www.capas.gov.ph</p>
              </div>
            </Link>
          </div>

          <div className="seals-container d-none d-md-flex">
            <div className="seal-item">
              <img src="https://www.foi.gov.ph/assets/images/foi-logo.png" alt="FOI" className="seal-img" />
            </div>
            <div className="seal-item">
              <img src="https://gov.ph/images/transparency-seal.png" alt="Transparency Seal" className="seal-img" />
            </div>
            <div className="seal-item">
              <img src="https://privacy.gov.ph/wp-content/uploads/2018/12/DPO-Seal-of-Registration.png" alt="DPO Seal" className="seal-img" />
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Navigation Menu with Mobile Drawer */}
      <Navbar expand="lg" className="middle-nav-menu p-0">
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="ms-auto border-0 shadow-none">
            <FaBars />
          </Navbar.Toggle>
          
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                CAPAS CITY
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                {links.map((link) => (
                  <Nav.Link 
                    as={Link} 
                    to={link.path} 
                    key={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.label}
                    {link.hasDropdown && <FaChevronDown className="nav-dropdown-icon ms-1" />}
                  </Nav.Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
