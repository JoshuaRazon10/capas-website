import React, { useState, useEffect, useRef } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaBars, FaSearch, FaInstagram, FaTimes, FaArrowRight } from 'react-icons/fa'

import logo from '../assets/images/capas.logo.jpg'
import bagongPilipinasLogo from '../assets/images/Bagong_Pilipinas_logo.png'

const NavbarComponent = () => {
  const bpLogo = bagongPilipinasLogo
  const location = useLocation()
  const navigate = useNavigate()
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
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
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

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
        { path: '/barangays', label: 'Barangay Officials' },
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
        { path: '/cooperative', label: 'Municipal Cooperative and Development Office' },
        { path: 'https://www.facebook.com/cttsc2020', label: 'Municipal Transportation and Regulatory Board' },
        { path: 'https://www.facebook.com/profile.php?id=100083998756255', label: 'Municipal Veterinary Office' },
        { isDivider: true },
        { isHeader: true, label: 'Social Services' },
        { path: 'https://www.facebook.com/profile.php?id=100068497367126', label: 'Health' },
        { path: 'https://www.facebook.com/capasmswdo', label: 'Municipal Social Welfare Development Office' },
        { path: 'https://www.facebook.com/PESOCapasTarlacOfficial', label: 'Public Employment Services Office' },
        { path: 'https://www.facebook.com/profile.php?id=61550652630760', label: 'Municipal Civil Registrar' },
        { isDivider: true },
        { isHeader: true, label: 'Safety' },
        { path: 'https://www.facebook.com/mdrrmc.capas', label: 'Municipal Disaster Risk Reduction and Management Council' },
        { path: 'https://www.facebook.com/capasposmo', label: 'Public Order and Safety Management Office' },
        { path: 'https://www.facebook.com/profile.php?id=61569860834660', label: 'Bureau of Fire Protection' },
        { path: 'https://www.facebook.com/profile.php?id=61561342485880', label: 'Philippine National Police' },
        { isDivider: true },
        { isHeader: true, label: 'Tourism' },
        { path: 'https://www.facebook.com/profile.php?id=100064575226399', label: 'Municipal Tourism Office' },
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
        { path: '/gad', label: 'GAD (Gender and Development)' },
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
        { isHeader: true, label: 'Job Hiring' },
        { path: 'https://www.facebook.com/PESOCapasTarlacOfficial', label: 'PESO Capas' },
        { path: 'https://www.facebook.com/peso.tarlac.province.2024/', label: 'PESO Tarlac Province' },
        { path: 'http://45.32.113.4/?fbclid=IwAR2049EqY2gqGleTs76d_k_bazGOOpAh7KHPVoA21yJGQ8FTtFf_WYlSrwI', label: 'Jobs at Clark' },
      ]
    },
  ]

  // Handle Search
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = []
      links.forEach(link => {
        if (link.label.toLowerCase().includes(searchQuery.toLowerCase()) && link.path) {
          results.push({ label: link.label, path: link.path, category: 'Main Menu' })
        }
        if (link.hasDropdown) {
          link.dropdownItems.forEach(item => {
            if (item.label && item.label.toLowerCase().includes(searchQuery.toLowerCase()) && item.path) {
              results.push({ label: item.label, path: item.path, category: link.label })
            }
          })
        }
      })
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearchResultClick = (path) => {
    setIsSearchOpen(false)
    setSearchQuery('')
    if (path.startsWith('http')) {
      window.open(path, '_blank')
    } else {
      navigate(path)
    }
  }

  return (
    <div className="modern-nav-wrapper">
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay d-flex align-items-center justify-content-center">
          <button 
            className="search-close-btn"
            onClick={() => setIsSearchOpen(false)}
          >
            &times;
          </button>
          <Container className="text-center">
            <h2 className="text-white mb-4 fw-bold">Search Capas LGU</h2>
            <div className="search-input-group mx-auto position-relative" style={{ maxWidth: '700px' }}>
              <input 
                type="text" 
                className="form-control form-control-lg rounded-pill shadow-lg px-4" 
                placeholder="What are you looking for?" 
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="search-icon-inside" />

              {/* Search Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="search-results-list mt-3 shadow-xl rounded-4 overflow-hidden bg-white text-start">
                  <div className="p-3 bg-light border-bottom small fw-bold text-uppercase text-muted">
                    Found {searchResults.length} matches
                  </div>
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {searchResults.map((result, idx) => (
                      <div 
                        key={idx} 
                        className="search-result-item p-3 border-bottom d-flex justify-content-between align-items-center"
                        style={{ cursor: 'pointer', transition: 'background 0.2s' }}
                        onClick={() => handleSearchResultClick(result.path)}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <div>
                          <div className="fw-bold text-dark">{result.label}</div>
                          <div className="small text-muted">{result.category}</div>
                        </div>
                        <FaArrowRight size={12} className="text-primary-red" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {searchQuery.trim().length > 1 && searchResults.length === 0 && (
                <div className="mt-3 text-white-50">No results found for "{searchQuery}"</div>
              )}
            </div>
            <p className="text-white-50 mt-4">Press ESC or click &times; to close</p>
          </Container>
        </div>
      )}

      {/* 1. TOP OFFICIAL BAR */}
      <div className="top-official-bar d-none d-lg-block">
        <Container className="d-flex justify-content-between align-items-center h-100">
          <div className="d-flex align-items-center gap-3">
            <span className="republic-text">REPUBLIC OF THE PHILIPPINES</span>
            <span className="gov-separator">|</span>
            <span className="official-gazette">OFFICIAL GAZETTE</span>
          </div>
          <div className="d-flex align-items-center gap-4">
            <Link to="/transparency-seal" className="top-bar-link text-decoration-none">Transparency Seal</Link>
            <Link to="/foi" className="top-bar-link text-decoration-none">FOI</Link>
            <div className="top-socials d-flex gap-3">
              <a href="https://www.facebook.com/CapasInformationOfficeOfficial" target="_blank" rel="noreferrer" className="text-white opacity-75 hover-opacity-100">
                <FaFacebookF size={40} />
              </a>
              <a href="https://www.youtube.com/channel/UCGPbqKxR8633lLk_vwzVkLw" target="_blank" rel="noreferrer" className="text-white opacity-75 hover-opacity-100">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white opacity-75 hover-opacity-100">
                <FaInstagram />
              </a>
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
                        className="w-100 h-100 border-0 p-0 custom-dropdown-wrapper"
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
                              as={item.path.startsWith('http') ? 'a' : Link}
                              {...(item.path.startsWith('http') ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' } : { to: item.path })}
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
              
              {/* Search Button */}
              <div className="modern-nav-item d-flex align-items-center ms-lg-3 px-0">
                <button 
                  className="btn btn-link nav-search-btn text-dark p-0 border-0 text-decoration-none"
                  style={{ fontSize: '1.1rem' }}
                  onClick={() => setIsSearchOpen(true)}
                >
                  <FaSearch />
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
