import React, { useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { Nav, Offcanvas, Button } from 'react-bootstrap'
import { FaSignOutAlt, FaTachometerAlt, FaListAlt, FaFolderOpen, FaCog, FaImage, FaBars, FaBullhorn, FaMapMarkerAlt, FaArrowLeft, FaTrophy } from 'react-icons/fa'
import capasLogo from '../../assets/images/capas.logo.jpg'

const AdminLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  const navItems = [
    { path: '/admin/dashboard', icon: <FaTachometerAlt size={15} />, label: 'Dashboard' },
    { path: '/admin/news', icon: <FaListAlt size={15} />, label: 'News & Articles' },
    { path: '/admin/home-visuals', icon: <FaTrophy size={15} />, label: 'Awards' },
    { path: '/admin/manage-barangays', icon: <FaMapMarkerAlt size={15} />, label: 'Barangays' },
    { path: '/admin/announcements', icon: <FaBullhorn size={15} />, label: 'Announcements' },
    { path: '/admin/files', icon: <FaFolderOpen size={15} />, label: 'Documents' },
    { path: '/admin/gallery', icon: <FaImage size={15} />, label: 'Gallery' },
    { path: '/admin/settings', icon: <FaCog size={15} />, label: 'Settings' },
  ]

  const SidebarContent = () => (
    <>
      {/* Logo Section */}
      <div className="px-4 mb-4 mt-lg-3 mt-0">
        <div className="d-flex align-items-center gap-3">
          <div style={{
            width: '42px', height: '42px', borderRadius: '12px',
            overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)',
            flexShrink: 0
          }}>
            <img src={capasLogo} alt="Capas Logo" className="w-100 h-100" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', lineHeight: 1.2 }}>Capas Admin</div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500, letterSpacing: '0.05em' }}>MUNICIPALITY PORTAL</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 mb-3" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

      {/* Navigation Label */}
      <div className="px-4 mb-2">
        <span style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)' }}>
          Management
        </span>
      </div>

      {/* Nav Items */}
      <Nav className="flex-column admin-nav">
        {navItems.map((item) => (
          <Nav.Link
            key={item.path}
            as={Link}
            to={item.path}
            className={`d-flex align-items-center gap-3 ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setShowMobileSidebar(false)}
          >
            {item.icon}
            <span>{item.label}</span>
          </Nav.Link>
        ))}
      </Nav>

      {/* Bottom Actions */}
      <div className="px-3 mt-auto mb-4" style={{ flexShrink: 0 }}>
        <div className="mx-1 mb-3" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        <Nav.Link
          onClick={handleLogout}
          className="d-flex align-items-center gap-3"
          style={{ cursor: 'pointer', color: '#f87171', padding: '0.7rem 1.25rem', borderRadius: '10px', margin: '2px 0', fontSize: '0.875rem', fontWeight: 500, transition: 'all 0.2s ease' }}
        >
          <FaSignOutAlt size={15} /> Sign Out
        </Nav.Link>
        <a
          href="/"
          className="d-flex align-items-center gap-3"
          style={{
            color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', padding: '0.5rem 1.25rem',
            textDecoration: 'none', transition: 'color 0.2s ease', borderRadius: '10px'
          }}
        >
          <FaArrowLeft size={12} /> Back to Website
        </a>
      </div>
    </>
  )

  return (
    <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Mobile Topbar */}
      <div className="d-lg-none p-3 d-flex justify-content-between align-items-center" style={{
        zIndex: 10, position: 'sticky', top: 0,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}>
        <div className="d-flex align-items-center gap-2">
          <img src={capasLogo} alt="Capas Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
          <div className="fw-bold" style={{ color: '#0f172a', fontSize: '0.9rem' }}>Capas Admin</div>
        </div>
        <Button variant="light" className="border-0 bg-transparent p-1" onClick={() => setShowMobileSidebar(true)}>
          <FaBars size={22} color="#0f172a" />
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="admin-sidebar d-none d-lg-flex flex-column" style={{ width: '260px', flexShrink: 0, minHeight: '100vh', position: 'sticky', top: 0 }}>
        <SidebarContent />
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <Offcanvas show={showMobileSidebar} onHide={() => setShowMobileSidebar(false)} className="admin-sidebar border-0" style={{ width: '260px' }}>
        <Offcanvas.Header closeButton closeVariant="white" className="pb-0" />
        <Offcanvas.Body className="d-flex flex-column p-0 h-100 pt-3">
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content Area */}
      <div className="flex-grow-1 w-100 d-flex flex-column admin-content" style={{ minWidth: 0 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
