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
import Mayor from './pages/Mayor'
import ViceMayor from './pages/ViceMayor'
import News from './pages/News'
import Government from './pages/Government'
import Services from './pages/Services'
import UnderDevelopment from './pages/UnderDevelopment'
import Assessors from './pages/Assessors'
import BusinessPermit from './pages/BusinessPermit'
import Engineering from './pages/Engineering'
import Agrarian from './pages/Agrarian'
import Cooperative from './pages/Cooperative'
import Veterinary from './pages/Veterinary'
import CitizensCharter from './pages/CitizensCharter'
import Resolutions from './pages/Resolutions'

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
          <Route path="/mayor" element={<><NavbarComponent /><main className="flex-grow-1"><Mayor /></main><Footer /></>} />
          <Route path="/vice-mayor" element={<><NavbarComponent /><main className="flex-grow-1"><ViceMayor /></main><Footer /></>} />
          <Route path="/geography" element={<><NavbarComponent /><main className="flex-grow-1"><Geography /></main><Footer /></>} />
          <Route path="/government" element={<><NavbarComponent /><main className="flex-grow-1"><Government /></main><Footer /></>} />
          <Route path="/services" element={<><NavbarComponent /><main className="flex-grow-1"><Services /></main><Footer /></>} />
          <Route path="/assessors" element={<><NavbarComponent /><main className="flex-grow-1"><Assessors /></main><Footer /></>} />
          <Route path="/business-permit" element={<><NavbarComponent /><main className="flex-grow-1"><BusinessPermit /></main><Footer /></>} />
          <Route path="/licensing" element={<><NavbarComponent /><main className="flex-grow-1"><BusinessPermit /></main><Footer /></>} />
          <Route path="/agrarian" element={<><NavbarComponent /><main className="flex-grow-1"><Agrarian /></main><Footer /></>} />
          <Route path="/engineering" element={<><NavbarComponent /><main className="flex-grow-1"><Engineering /></main><Footer /></>} />
          <Route path="/zoning-engineering" element={<><NavbarComponent /><main className="flex-grow-1"><Engineering /></main><Footer /></>} />
          <Route path="/cooperative" element={<><NavbarComponent /><main className="flex-grow-1"><Cooperative /></main><Footer /></>} />
          <Route path="/veterinary" element={<><NavbarComponent /><main className="flex-grow-1"><Veterinary /></main><Footer /></>} />
          <Route path="/news" element={<><NavbarComponent /><main className="flex-grow-1"><News /></main><Footer /></>} />
          <Route path="/contact" element={<><NavbarComponent /><UnderDevelopment /></>} />
          <Route path="/bids-awards" element={<><NavbarComponent /><main className="flex-grow-1"><BidsAwards /></main><Footer /></>} />
          <Route path="/citizens-charter" element={<><NavbarComponent /><main className="flex-grow-1"><CitizensCharter /></main><Footer /></>} />
          <Route path="/resolutions" element={<><NavbarComponent /><main className="flex-grow-1"><Resolutions /></main><Footer /></>} />
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

