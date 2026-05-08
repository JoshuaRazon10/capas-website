import React, { useState } from 'react'
import { Container, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaChevronDown, 
  FaBars, FaTimes, FaHome, FaInfoCircle, FaGavel, 
  FaCogs, FaNewspaper, FaEnvelope 
} from 'react-icons/fa'

import logo from '../assets/images/capas.logo.jpg'

const NavbarComponent = () => {
  const location = useLocation()
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  const handleClose = () => setShowOffcanvas(false)
  const handleShow = () => setShowOffcanvas(true)

  const links = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/government', label: 'Government', icon: <FaGavel />, hasDropdown: true },
    { path: '/services', label: 'Services', icon: <FaCogs />, hasDropdown: true },
    { path: '/news', label: 'News', icon: <FaNewspaper /> },
    { path: '/about', label: 'Tourism', icon: <FaInfoCircle /> },
    { path: '/contact', label: 'Transparency', icon: <FaEnvelope />, hasDropdown: true },
  ]

  return (
    <div className="appbar-wrapper sticky-top">
      {/* 1. Top Red Strip */}
      <div className="top-red-strip">
        <Container>
          <div className="d-none d-md-block">
            Lungsod ng Capas (Official Page)
          </div>
          <div className="social-links-top">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </Container>
      </div>

      {/* 2. Middle Navigation Menu (Desktop Only) */}
      <div className="middle-nav-menu d-none d-lg-block">
        <Container>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                  {link.label}
                  {link.hasDropdown && <FaChevronDown className="nav-dropdown-icon" />}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* 3. Brand Header Section */}
      <div className="brand-header-section">
        <Container>
          <div className="brand-main">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img src={logo} alt="Capas Logo" className="brand-logo-img" />
              <div className="brand-text-content">
                <h1>CAPAS CITY</h1>
                <p>www.capas.gov.ph</p>
              </div>
            </Link>
          </div>

          <div className="d-flex align-items-center gap-4">
            <div className="seals-container d-none d-lg-flex">
              {/* Using generic placeholders for seals as seen in reference */}
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '10px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #ddd' }}>FOI</div>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '10px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #ddd' }}>SEAL</div>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '10px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #ddd' }}>DPO</div>
            </div>

            <button className="mobile-menu-toggle d-lg-none" onClick={handleShow}>
              <FaBars />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer (Same logic as before but updated styles) */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        className="modern-drawer"
      >
        <Offcanvas.Header className="drawer-header border-0">
          <div className="d-flex align-items-center gap-3">
            <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <div>
              <span style={{ fontWeight: 900, fontSize: '1.1rem', display: 'block', lineHeight: 1 }}>CAPAS</span>
              <span style={{ fontSize: '0.65rem', opacity: 0.5, fontWeight: 600, letterSpacing: '0.1em' }}>MUNICIPALITY</span>
            </div>
          </div>
          <button onClick={handleClose} className="drawer-close-btn">
            <FaTimes size={18} />
          </button>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="d-flex flex-column p-0">
          <div className="drawer-nav-list flex-grow-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`drawer-nav-item ${location.pathname === link.path ? 'active' : ''}`}
                onClick={handleClose}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.label}</span>
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default NavbarComponent
