import React, { useState, useEffect, useRef } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import {
  FaFacebookF, FaTwitter, FaInstagram, FaBars
} from 'react-icons/fa'

import logo from '../assets/images/capas.logo.jpg'
import bagongPilipinasLogo from '../assets/images/Bagong_Pilipinas_logo.png'

const NavbarComponent = () => {
  const bpLogo = bagongPilipinasLogo
  const location = useLocation()
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)

  const updateIndicatorToActive = () => {
    if (!navRef.current) return
    const activeItem = navRef.current.querySelector('.modern-nav-item.active')
    if (activeItem) {
      setIndicatorStyle({
        left: activeItem.offsetLeft + (activeItem.offsetWidth * 0.2), // Adjust for the 20% visual padding
        width: activeItem.offsetWidth * 0.6,
        opacity: 1
      })
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
    }
  }

  useEffect(() => {
    setTimeout(updateIndicatorToActive, 100)
    window.addEventListener('resize', updateIndicatorToActive)
    return () => window.removeEventListener('resize', updateIndicatorToActive)
  }, [location.pathname])

  const handleMouseEnter = (e) => {
    const item = e.currentTarget
    setIndicatorStyle({
      left: item.offsetLeft + (item.offsetWidth * 0.2),
      width: item.offsetWidth * 0.6,
      opacity: 1
    })
  }

  const handleMouseLeave = () => {
    updateIndicatorToActive()
  }

  const links = [
    { path: '/', label: 'HOME' },
    {
      label: 'CAPAS',
      hasDropdown: true,
      dropdownItems: [
        { isHeader: true, label: 'Government' },
        { isSubHeader: true, label: 'Profile', path: '/socio-economic' },
        { path: '/seal', label: 'Official Seal' },
        { path: '/history', label: 'History' },
        { path: '/mayors', label: 'Mayors of Capas' },
        { path: '/sangguniang-bayan', label: 'Sangguniang Bayan' },
        { path: '/geography', label: 'Geography' },
        { path: '/barangays', label: 'Barangays' },
        { path: '/socio-economic', label: 'Socio-Economic Profile' },
        { isDivider: true },
        { isSubHeader: true, label: 'Capas Municipal Hall' },
        { path: '/map', label: 'Map' },
        { path: '/mayor', label: 'The Mayor' },
        { path: '/vice-mayor', label: 'The Vice Mayor' },
        { path: '/council', label: 'Municipal Council' },
        { path: '/barangay-officials', label: 'Barangay Officials' },
        { isDivider: true },
        { path: '/directory', label: 'Directory' },
      ]
    },
    {
      label: 'SERVICES',
      hasDropdown: true,
      dropdownItems: [
        { isHeader: true, label: 'Business' },
        { path: '/assessors', label: 'Assessors Office' },
        { path: '/business-permit', label: 'Business Permit' },
        { path: '/licensing', label: 'Licensing Office' },
        { path: '/zoning-engineering', label: 'Zoning / Engineering' },
        { isDivider: true },
        { isHeader: true, label: 'Economics Services' },
        { path: '/agrarian', label: 'Municipal Agrarian Office' },
        { path: '/cooperative', label: 'Municipal Cooperative Economic Development Office' },
        { path: '/transportation', label: 'Municipal Transportation and Regulatory Board' },
        { path: '/veterinary', label: 'Veterinary Office' },
        { isDivider: true },
        { isHeader: true, label: 'Social Services' },
        { path: '/health', label: 'Health' },
        { path: '/social-welfare', label: 'Municipal Social Welfare Development Office' },
        { path: '/peso', label: 'Public Employment Services Office' },
        { path: '/civil-registrar', label: 'Municipal Civil Registrar' },
        { isDivider: true },
        { isHeader: true, label: 'Safety' },
        { path: '/mdrrmc', label: 'Municipal Disaster Risk Reduction and Management Council' },
        { path: '/posmo', label: 'Public Order and Safety Management Office' },
        { path: '/fire-protection', label: 'Bureau of Fire Protection' },
        { path: '/police', label: 'Philippine National Police' },
        { isDivider: true },
        { isHeader: true, label: 'Tourism' },
        { path: '/tourism-operators', label: 'Accredited Tourism Operators' },
      ]
    },
    {
      label: 'FULL DISCLOSURE POLICY',
      hasDropdown: true,
      dropdownItems: [
        { path: '/ordinances', label: 'Ordinances' },
        { path: '/resolutions', label: 'Resolutions' },
        { path: '/executive-orders', label: 'Executive Orders' },
        { path: '/bids-awards', label: 'Bids & Awards' },
        { path: '/citizens-charter', label: 'Citizen\'s Charter' },
        { path: '/transparency-seal', label: 'Transparency Seal' },
        { path: '/bayanihan-grant', label: 'Bayanihan Grant to Cities and Municipalities' },
        { path: '/fund-utilization', label: 'Report on Fund Utilization and Status of Program or Project Implementation' },
      ]
    },
    {
      label: 'DOWNLOADABLE FORMS',
      hasDropdown: true,
      dropdownItems: [
        { path: '/application-forms', label: 'Application Forms' },
      ]
    },
    {
      label: 'NEWS',
      hasDropdown: true,
      dropdownItems: [
        { path: '/articles', label: 'Articles' },
        { path: '/events', label: 'Events' },
        { path: '/gallery', label: 'Photo Gallery' },
      ]
    },
    {
      label: 'CAREERS',
      hasDropdown: true,
      dropdownItems: [
        { path: '/job-hiring', label: 'Job Hiring' },
        { path: '/peso-capas', label: 'PESO Capas' },
        { path: '/peso-tarlac', label: 'PESO Tarlac Province' },
        { path: '/jobs-clark', label: 'Jobs at Clark' },
      ]
    },
  ]

  return (
    <div className="modern-nav-wrapper">
      {/* 1. TOP OFFICIAL BAR */}
      <div className="top-official-bar d-none d-lg-block">
        <Container className="d-flex justify-content-between align-items-center h-100">
          <div className="d-flex align-items-center gap-3">
            <span className="republic-text">REPUBLIC OF THE PHILIPPINES</span>
            <span className="gov-separator">|</span>
            <span className="official-gazette">OFFICIAL GAZETTE</span>
          </div>
          <div className="d-flex align-items-center gap-4">
            <a href="#" className="top-bar-link">Transparency Seal</a>
            <a href="#" className="top-bar-link">FOI</a>
            <div className="top-socials">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </Container>
      </div>

      {/* 2. MAIN BRAND & NAVIGATION BAR */}
      <Navbar expand="lg" className="main-navbar-modern sticky-top shadow-sm">
        <Container>
          {/* Brand Logo & Name */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center py-2">
            <div className="logo-group d-flex align-items-center me-3">
              <img
                src={bpLogo}
                alt="Bagong Pilipinas"
                className="logo-bp"
              />
              <img
                src={logo}
                alt="Capas Logo"
                className="logo-capas ms-2"
              />
            </div>
            <div className="brand-text-modern">
              <div className="municipality-name">MUNICIPALITY OF CAPAS</div>
              <div className="province-name">PROVINCE OF TARLAC</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="modern-nav" className="border-0">
            <FaBars />
          </Navbar.Toggle>

          <Navbar.Collapse id="modern-nav">
            <Nav 
              className="ms-auto nav-links-modern position-relative" 
              ref={navRef} 
              onMouseLeave={handleMouseLeave}
            >
              <div className="sliding-indicator" style={{
                position: 'absolute',
                bottom: '8px',
                height: '3px',
                backgroundColor: 'var(--primary)',
                borderRadius: '2px',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                pointerEvents: 'none',
                ...indicatorStyle
              }} />

              {links.map((link, index) => {
                if (link.hasDropdown) {
                  // Check if any child item matches the current path to keep the parent active
                  const isActive = link.dropdownItems.some(item => item.path && location.pathname === item.path);
                  
                  return (
                    <div key={index} onMouseEnter={handleMouseEnter} className={`modern-nav-item ${isActive ? 'active' : ''}`}>
                      <NavDropdown 
                        title={link.label} 
                        id={`nav-dropdown-${index}`} 
                        className="w-100 h-100 d-flex align-items-center justify-content-center border-0 p-0"
                      >
                        {link.dropdownItems.map((item, idx) => {
                          if (item.isDivider) return <NavDropdown.Divider key={idx} />
                          if (item.isHeader) return <div key={idx} className="dropdown-header-custom">{item.label}</div>
                          if (item.isSubHeader) {
                            if (item.path) {
                              return (
                                <Link 
                                  key={idx} 
                                  to={item.path} 
                                  className="dropdown-subheader-custom text-decoration-none d-block"
                                  style={{ cursor: 'pointer' }}
                                >
                                  {item.label}
                                </Link>
                              )
                            }
                            return <div key={idx} className="dropdown-subheader-custom">{item.label}</div>
                          }
                          return (
                            <NavDropdown.Item
                              as={Link}
                              to={item.path}
                              key={idx}
                              className="dropdown-item-custom"
                            >
                              {item.label}
                            </NavDropdown.Item>
                          )
                        })}
                      </NavDropdown>
                    </div>
                  )
                }
                return (
                  <Nav.Link
                    as={Link}
                    to={link.path}
                    key={link.path}
                    className={`modern-nav-item ${location.pathname === link.path ? 'active' : ''}`}
                    onMouseEnter={handleMouseEnter}
                  >
                    {link.label}
                  </Nav.Link>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
