import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaChevronDown, 
  FaHome, FaInfoCircle, FaGavel, 
  FaCogs, FaNewspaper, FaEnvelope 
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
      {/* 1. Top Red Strip */}
      <div className="top-red-strip">
        <Container>
          <div className="official-text">
            Lungsod ng Capas (Official Page)
          </div>
          <div className="social-links-top">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </Container>
      </div>

      {/* 2. Middle Navigation Menu */}
      <div className="middle-nav-menu">
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
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <img src={logo} alt="Capas Logo" className="brand-logo-img" />
              <div className="brand-text-content">
                <h1>CAPAS CITY</h1>
                <p>www.capas.gov.ph</p>
              </div>
            </Link>
          </div>

          <div className="seals-container">
            {/* These simulate the seals seen in the reference image */}
            <div className="seal-item">
              <img src="https://www.foi.gov.ph/assets/images/foi-logo.png" alt="FOI" style={{ height: '70px' }} />
            </div>
            <div className="seal-item">
              <img src="https://gov.ph/images/transparency-seal.png" alt="Transparency Seal" style={{ height: '70px' }} />
            </div>
            <div className="seal-item">
              <img src="https://privacy.gov.ph/wp-content/uploads/2018/12/DPO-Seal-of-Registration.png" alt="DPO Seal" style={{ height: '70px' }} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavbarComponent
