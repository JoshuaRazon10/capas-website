import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Public Pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import OfficialSeal from './pages/OfficialSeal'
import TransparencySeal from './pages/TransparencySeal'
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
import GAD from './pages/GAD'
import FundUtilization from './pages/FundUtilization'
import BayanihanGrant from './pages/BayanihanGrant'
import Ordinances from './pages/Ordinances'
import ExecutiveOrders from './pages/ExecutiveOrders'
import Gallery from './pages/Gallery'
import MunicipalCouncil from './pages/MunicipalCouncil'
import DownloadableForms from './pages/DownloadableForms'



// Admin Pages
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ManageNews from './pages/admin/ManageNews'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          {/* Home Route - fully built */}
          <Route path="/" element={
            <>
              <NavbarComponent />
              <main className="flex-grow-1">
                <Home />
              </main>
              <PreFooter /><Footer />
            </>
          } />

          {/* Under Development Routes - full screen with background */}
          <Route path="/about" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/seal" element={<><NavbarComponent /><main className="flex-grow-1"><OfficialSeal /></main><PreFooter /><Footer /></>} />
          <Route path="/history" element={<><NavbarComponent /><main className="flex-grow-1"><History /></main><PreFooter /><Footer /></>} />
          <Route path="/mayors" element={<><NavbarComponent /><main className="flex-grow-1"><Mayors /></main><PreFooter /><Footer /></>} />
          <Route path="/mayor" element={<><NavbarComponent /><main className="flex-grow-1"><Mayor /></main><PreFooter /><Footer /></>} />
          <Route path="/vice-mayor" element={<><NavbarComponent /><main className="flex-grow-1"><ViceMayor /></main><PreFooter /><Footer /></>} />
          <Route path="/geography" element={<><NavbarComponent /><main className="flex-grow-1"><Geography /></main><PreFooter /><Footer /></>} />
          <Route path="/government" element={<><NavbarComponent /><main className="flex-grow-1"><Government /></main><PreFooter /><Footer /></>} />
          <Route path="/services" element={<><NavbarComponent /><main className="flex-grow-1"><Services /></main><PreFooter /><Footer /></>} />
          <Route path="/assessors" element={<><NavbarComponent /><main className="flex-grow-1"><Assessors /></main><PreFooter /><Footer /></>} />
          <Route path="/business-permit" element={<><NavbarComponent /><main className="flex-grow-1"><BusinessPermit /></main><PreFooter /><Footer /></>} />
          <Route path="/licensing" element={<><NavbarComponent /><main className="flex-grow-1"><BusinessPermit /></main><PreFooter /><Footer /></>} />
          <Route path="/agrarian" element={<><NavbarComponent /><main className="flex-grow-1"><Agrarian /></main><PreFooter /><Footer /></>} />
          <Route path="/engineering" element={<><NavbarComponent /><main className="flex-grow-1"><Engineering /></main><PreFooter /><Footer /></>} />
          <Route path="/zoning-engineering" element={<><NavbarComponent /><main className="flex-grow-1"><Engineering /></main><PreFooter /><Footer /></>} />
          <Route path="/cooperative" element={<><NavbarComponent /><main className="flex-grow-1"><Cooperative /></main><PreFooter /><Footer /></>} />
          <Route path="/veterinary" element={<><NavbarComponent /><main className="flex-grow-1"><Veterinary /></main><PreFooter /><Footer /></>} />
          <Route path="/news" element={<><NavbarComponent /><main className="flex-grow-1"><News /></main><PreFooter /><Footer /></>} />
          <Route path="/contact" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/bids-awards" element={<><NavbarComponent /><main className="flex-grow-1"><BidsAwards /></main><PreFooter /><Footer /></>} />
          <Route path="/citizens-charter" element={<><NavbarComponent /><main className="flex-grow-1"><CitizensCharter /></main><PreFooter /><Footer /></>} />
          <Route path="/resolutions" element={<><NavbarComponent /><main className="flex-grow-1"><Resolutions /></main><PreFooter /><Footer /></>} />
          <Route path="/gad" element={<><NavbarComponent /><main className="flex-grow-1"><GAD /></main><PreFooter /><Footer /></>} />
          <Route path="/barangays" element={<><NavbarComponent /><main className="flex-grow-1"><BarangayOfficials /></main><PreFooter /><Footer /></>} />
          <Route path="/map" element={<><NavbarComponent /><main className="flex-grow-1"><Map /></main><PreFooter /><Footer /></>} />
          <Route path="/socio-economic" element={<><NavbarComponent /><main className="flex-grow-1"><Profile /></main><PreFooter /><Footer /></>} />
          <Route path="/sangguniang-bayan" element={<><NavbarComponent /><main className="flex-grow-1"><MunicipalCouncil /></main><PreFooter /><Footer /></>} />
          <Route path="/directory" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/council" element={<><NavbarComponent /><main className="flex-grow-1"><MunicipalCouncil /></main><PreFooter /><Footer /></>} />
          
          {/* Services Missing */}
          <Route path="/transportation" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/health" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/social-welfare" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/peso" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/civil-registrar" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/mdrrmc" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/posmo" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/fire-protection" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/police" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/tourism-operators" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />

          {/* Full Disclosure Missing */}
          <Route path="/ordinances" element={<><NavbarComponent /><main className="flex-grow-1"><Ordinances /></main><PreFooter /><Footer /></>} />
          <Route path="/executive-orders" element={<><NavbarComponent /><main className="flex-grow-1"><ExecutiveOrders /></main><PreFooter /><Footer /></>} />
          <Route path="/transparency-seal" element={<><NavbarComponent /><main className="flex-grow-1"><TransparencySeal /></main><PreFooter /><Footer /></>} />
          <Route path="/bayanihan-grant" element={<><NavbarComponent /><main className="flex-grow-1"><BayanihanGrant /></main><PreFooter /><Footer /></>} />
          <Route path="/fund-utilization" element={<><NavbarComponent /><main className="flex-grow-1"><FundUtilization /></main><PreFooter /><Footer /></>} />

          {/* Downloadable Forms Missing */}
          <Route path="/application-forms" element={<><NavbarComponent /><main className="flex-grow-1"><DownloadableForms /></main><PreFooter /><Footer /></>} />

          {/* News Missing */}
          <Route path="/articles" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/events" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/gallery" element={<><NavbarComponent /><main className="flex-grow-1"><Gallery /></main><PreFooter /><Footer /></>} />
          <Route path="/foi" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />

          {/* Careers Missing */}
          <Route path="/job-hiring" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/peso-capas" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/peso-tarlac" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />
          <Route path="/jobs-clark" element={<><NavbarComponent /><UnderDevelopment /><PreFooter /><Footer /></>} />

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

