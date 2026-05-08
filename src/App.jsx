import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Footer from './components/Footer'

// Public Pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import OfficialSeal from './pages/OfficialSeal'
import History from './pages/History'
import Mayors from './pages/Mayors'
import Geography from './pages/Geography'
import BidsAwards from './pages/BidsAwards'
import BarangayOfficials from './pages/BarangayOfficials'
import Map from './pages/Map'
import News from './pages/News'
import Government from './pages/Government'
import Services from './pages/Services'
import UnderDevelopment from './pages/UnderDevelopment'

// Admin Pages
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ManageNews from './pages/admin/ManageNews'

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          {/* Home Route - fully built */}
          <Route path="/" element={
            <>
              <NavbarComponent />
              <main className="flex-grow-1">
                <Home />
              </main>
              <Footer />
            </>
          } />

          {/* Under Development Routes - full screen with background */}
          <Route path="/about" element={<><NavbarComponent /><UnderDevelopment /></>} />
          <Route path="/seal" element={<><NavbarComponent /><main className="flex-grow-1"><OfficialSeal /></main><Footer /></>} />
          <Route path="/history" element={<><NavbarComponent /><main className="flex-grow-1"><History /></main><Footer /></>} />
          <Route path="/mayors" element={<><NavbarComponent /><main className="flex-grow-1"><Mayors /></main><Footer /></>} />
          <Route path="/geography" element={<><NavbarComponent /><main className="flex-grow-1"><Geography /></main><Footer /></>} />
          <Route path="/government" element={<><NavbarComponent /><main className="flex-grow-1"><Government /></main><Footer /></>} />
          <Route path="/services" element={<><NavbarComponent /><UnderDevelopment /></>} />
          <Route path="/news" element={<><NavbarComponent /><main className="flex-grow-1"><News /></main><Footer /></>} />
          <Route path="/contact" element={<><NavbarComponent /><UnderDevelopment /></>} />
          <Route path="/bids-awards" element={<><NavbarComponent /><main className="flex-grow-1"><BidsAwards /></main><Footer /></>} />
          <Route path="/barangays" element={<><NavbarComponent /><main className="flex-grow-1"><BarangayOfficials /></main><Footer /></>} />
          <Route path="/map" element={<><NavbarComponent /><main className="flex-grow-1"><Map /></main><Footer /></>} />
          <Route path="/socio-economic" element={<><NavbarComponent /><main className="flex-grow-1"><Profile /></main><Footer /></>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/news" element={<ManageNews />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

