import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FaTools, FaHome, FaHardHat, FaClock } from 'react-icons/fa'
import backgroundImage from '../assets/images/capas.background.png'
import logo from '../assets/images/capas.logo.jpg'

const UnderDevelopment = () => {
  const location = useLocation()
  
  // Get page name from path
  const path = location.pathname.replace('/', '').replace(/-/g, ' ')
  const pageName = path || 'Requested'
  const displayName = pageName.charAt(0).toUpperCase() + pageName.slice(1)

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(10, 15, 45, 0.7), rgba(10, 15, 45, 0.85)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Premium background effects */}
      <div className="maintenance-glow" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(20, 24, 61, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      <Container style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }} className="py-5">
        {/* Logo with pulse effect */}
        <div className="mb-5">
          <img 
            src={logo} 
            alt="Capas Logo" 
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%',
              border: '4px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 40px rgba(0,0,0,0.5)',
              padding: '5px',
              background: 'white'
            }} 
          />
        </div>

        {/* Icon & Title */}
        <div className="mb-4">
          <div style={{
            width: '90px', height: '90px', borderRadius: '50%',
            background: 'rgba(255, 193, 7, 0.1)',
            border: '2px solid rgba(255, 193, 7, 0.3)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <FaTools size={36} className="text-warning" />
          </div>
          <h1 className="display-4 fw-bold mb-2" style={{ letterSpacing: '-0.02em' }}>
            Under Maintenance
          </h1>
          <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
            <div style={{ height: '2px', width: '40px', background: 'rgba(255,255,255,0.2)' }}></div>
            <span className="text-uppercase fw-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
              Coming Soon
            </span>
            <div style={{ height: '2px', width: '40px', background: 'rgba(255,255,255,0.2)' }}></div>
          </div>
        </div>

        {/* Page name badge */}
        <div className="mb-4">
          <span style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '0.6rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaHardHat className="text-warning" />
            {displayName} Page
          </span>
        </div>

        {/* Description */}
        <div className="mb-5 mx-auto" style={{ maxWidth: '550px' }}>
          <p className="lead mb-4" style={{ opacity: 0.9, lineHeight: '1.6' }}>
            We're currently updating this section to provide you with a better digital experience. 
            The <strong>{displayName}</strong> portal will be live shortly.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3 text-white-50" style={{ fontSize: '0.9rem' }}>
            <FaClock /> <span>Expected completion: Q3 2024</span>
          </div>
        </div>

        {/* CTA */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Button 
            as={Link} 
            to="/" 
            className="btn-primary-red px-5 py-3 d-inline-flex align-items-center justify-content-center gap-2"
            style={{ borderRadius: '50px', fontWeight: '600', transition: 'all 0.3s' }}
          >
            <FaHome size={18} /> Return to Homepage
          </Button>
          <Button 
            variant="outline-light"
            className="px-5 py-3 d-inline-flex align-items-center justify-content-center gap-2"
            style={{ borderRadius: '50px', fontWeight: '600', background: 'rgba(255,255,255,0.05)' }}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>

        {/* Footer info */}
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: '0.85rem', opacity: 0.5, marginBottom: 0 }}>
            &copy; 2024 Municipality of Capas, Tarlac. All Rights Reserved.
          </p>
        </div>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .btn-primary-red:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(220, 53, 69, 0.3);
        }
      `}} />
    </div>
  )
}

export default UnderDevelopment

