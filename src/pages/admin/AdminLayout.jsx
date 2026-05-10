import React, { useState } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { Nav, Offcanvas, Button } from 'react-bootstrap'
import { FaSignOutAlt, FaTachometerAlt, FaListAlt, FaFolderOpen, FaCog, FaImage, FaBars } from 'react-icons/fa'
import capasLogo from '../../assets/images/capas.logo.jpg'

const AdminLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  const SidebarContent = () => (
    <>
      <div className="px-4 mb-4 mt-lg-4 mt-0">
        <div className="d-flex align-items-center gap-2">
          <img src={capasLogo} alt="Capas Logo" style={{
            width: '45px', height: '45px', borderRadius: '50%',
            objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)'
          }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>Capas Admin</div>
          </div>
        </div>
      </div>

      <Nav className="flex-column admin-nav">
        <Nav.Link as={Link} to="/admin/dashboard" className={`d-flex align-items-center gap-3 ${location.pathname === '/admin/dashboard' ? 'active' : ''}`} onClick={() => setShowMobileSidebar(false)}>
          <FaTachometerAlt size={16} /> Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/news" className={`d-flex align-items-center gap-3 ${location.pathname === '/admin/news' ? 'active' : ''}`} onClick={() => setShowMobileSidebar(false)}>
          <FaListAlt size={16} /> Manage News
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/files" className={`d-flex align-items-center gap-3 ${location.pathname === '/admin/files' ? 'active' : ''}`} onClick={() => setShowMobileSidebar(false)}>
          <FaFolderOpen size={16} /> Manage Files
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/gallery" className={`d-flex align-items-center gap-3 ${location.pathname === '/admin/gallery' ? 'active' : ''}`} onClick={() => setShowMobileSidebar(false)}>
          <FaImage size={16} /> Manage Gallery
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/settings" className={`d-flex align-items-center gap-3 ${location.pathname === '/admin/settings' ? 'active' : ''}`} onClick={() => setShowMobileSidebar(false)}>
          <FaCog size={16} /> Settings
        </Nav.Link>
      </Nav>

      <div className="px-3 mt-auto mb-4" style={{ flexShrink: 0 }}>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        <Nav.Link onClick={handleLogout} className="d-flex align-items-center gap-3 text-danger" style={{ cursor: 'pointer', color: '#EF5350 !important' }}>
          <FaSignOutAlt size={16} /> Sign Out
        </Nav.Link>
        <a href="/" className="d-flex align-items-center gap-3 nav-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          &larr; Back to Website
        </a>
      </div>
    </>
  )

  return (
    <div className="d-flex flex-column flex-lg-row" style={{ minHeight: '100vh', background: 'var(--gray-100)' }}>
      {/* Mobile Topbar */}
      <div className="d-lg-none bg-white p-3 d-flex justify-content-between align-items-center border-bottom shadow-sm" style={{ zIndex: 10, position: 'sticky', top: 0 }}>
        <div className="d-flex align-items-center gap-2">
          <img src={capasLogo} alt="Capas Logo" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
          <div className="fw-bold" style={{ color: 'var(--primary)' }}>Capas Admin</div>
        </div>
        <Button variant="light" className="border-0 bg-transparent p-1" onClick={() => setShowMobileSidebar(true)}>
          <FaBars size={24} color="var(--primary)" />
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="admin-sidebar d-none d-lg-flex flex-column" style={{ width: '260px', flexShrink: 0, minHeight: '100vh', position: 'sticky', top: 0 }}>
        <SidebarContent />
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <Offcanvas show={showMobileSidebar} onHide={() => setShowMobileSidebar(false)} className="admin-sidebar border-0" style={{ width: '260px', background: 'var(--primary)' }}>
        <Offcanvas.Header closeButton closeVariant="white" className="pb-0" />
        <Offcanvas.Body className="d-flex flex-column p-0 h-100 pt-3">
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content Area */}
      <div className="flex-grow-1 w-100 d-flex flex-column" style={{ minWidth: 0 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
