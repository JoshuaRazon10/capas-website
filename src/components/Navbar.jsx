import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FaShieldAlt, FaTimes, FaHome, FaInfoCircle, FaGavel, FaCogs, FaNewspaper, FaEnvelope, FaFacebook, FaTwitter, FaGlobe } from 'react-icons/fa'

import logo from '../assets/images/capas.logo.jpg'

const NavbarComponent = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClose = () => setShowOffcanvas(false)
  const handleShow = () => setShowOffcanvas(true)

  const links = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/government', label: 'Government', icon: <FaGavel /> },
    { path: '/services', label: 'Services', icon: <FaCogs /> },
    { path: '/news', label: 'News', icon: <FaNewspaper /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ]

  return (
    <Navbar
      expand="lg"
      className="navbar-custom sticky-top"
      style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '0.5rem 0' : '0.8rem 0',
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src={logo} 
            alt="Capas Logo" 
            style={{ 
              width: scrolled ? '40px' : '48px', 
              height: scrolled ? '40px' : '48px', 
              borderRadius: '50%', 
              marginRight: '0.8rem',
              border: '2px solid rgba(255,255,255,0.4)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.4s ease'
            }} 
          />
          <div style={{ transition: 'all 0.4s ease', color: 'white' }}>
            <div style={{ fontSize: scrolled ? '0.95rem' : '1.1rem', fontWeight: '900', lineHeight: '1.1', letterSpacing: '0.02em' }}>Municipality of Capas</div>
            <div style={{ fontSize: '0.65rem', opacity: 0.8, fontWeight: '600', letterSpacing: '0.1em', marginTop: '1px' }}>Province of Tarlac</div>
          </div>
        </Navbar.Brand>

        <button 
          onClick={handleShow}
          className="drawer-toggle-btn"
          aria-label="Toggle navigation"
        >
          <div className="hamburger-inner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Global Modern Drawer */}
        <Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          className="modern-drawer"
        >
          <Offcanvas.Header className="drawer-header border-0">
            <div className="d-flex align-items-center gap-3">
              <div className="logo-glow-wrapper">
                <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              </div>
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
              <div className="px-4 py-3">
                <span className="drawer-label">Menu Navigation</span>
              </div>
              {links.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`drawer-nav-item ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={handleClose}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-text">{link.label}</span>
                  {location.pathname === link.path && <div className="active-dot"></div>}
                </Link>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="px-4 mb-4">
                <span className="drawer-label mb-3 d-block">Connect With Us</span>
                <div className="d-flex gap-3">
                  <a href="#" className="social-pill"><FaFacebook size={18} /></a>
                  <a href="#" className="social-pill"><FaTwitter size={18} /></a>
                  <a href="#" className="social-pill"><FaGlobe size={18} /></a>
                </div>
              </div>
              <div className="drawer-copyright px-4 py-4 border-top border-white border-opacity-10">
                <p className="mb-0">© 2026 Municipality of Capas</p>
                <p className="mb-0 opacity-50 small">Official Government Website</p>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
