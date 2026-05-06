import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FaTools, FaHome, FaHardHat } from 'react-icons/fa'
import backgroundImage from '../assets/images/capas.background.png'
import logo from '../assets/images/capas.logo.jpg'

const UnderDevelopment = () => {
  const location = useLocation()
  
  // Get page name from path
  const pageName = location.pathname.replace('/', '').replace(/-/g, ' ')
  const displayName = pageName.charAt(0).toUpperCase() + pageName.slice(1)

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated floating elements */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%', width: '120px', height: '120px',
        borderRadius: '50%', border: '2px solid rgba(255,255,255,0.05)',
        animation: 'float 8s ease-in-out infinite',
      }}></div>
      <div style={{
        position: 'absolute', bottom: '15%', right: '8%', width: '80px', height: '80px',
        borderRadius: '50%', border: '2px solid rgba(255,255,255,0.08)',
        animation: 'float 6s ease-in-out infinite reverse',
      }}></div>

      <Container style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
        {/* Logo */}
        <div className="mb-4">
          <img 
            src={logo} 
            alt="Capas Logo" 
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%',
              border: '3px solid rgba(255,255,255,0.3)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }} 
          />
        </div>

        {/* Icon */}
        <div className="mb-4">
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'rgba(255,215,0,0.15)',
            border: '2px solid rgba(255,215,0,0.3)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FaTools size={32} style={{ color: '#FFD700' }} />
          </div>
        </div>

        {/* Title */}
        <h1 className="fw-bold mb-3" style={{ 
          fontSize: '2.8rem', 
          color: 'white',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          letterSpacing: '-0.02em',
        }}>
          Under Development
        </h1>

        {/* Page name badge */}
        <div className="mb-3">
          <span style={{
            background: 'rgba(255,215,0,0.2)',
            color: '#FFD700',
            padding: '0.4rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: '700',
            border: '1px solid rgba(255,215,0,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            <FaHardHat className="me-2" size={14} />
            {displayName} Page
          </span>
        </div>

        {/* Description */}
        <p style={{ 
          fontSize: '1.1rem', 
          opacity: 0.8, 
          lineHeight: '1.8',
          maxWidth: '480px',
          margin: '0 auto 2rem',
        }}>
          We're working hard to bring you this page. The <strong>{displayName}</strong> section 
          of the Municipality of Capas website is currently under development and will be available soon.
        </p>

        {/* CTA */}
        <Button 
          as={Link} 
          to="/" 
          className="btn-primary-red px-4 py-3 d-inline-flex align-items-center gap-2"
          style={{ borderRadius: '50px', fontSize: '0.95rem' }}
        >
          <FaHome size={16} /> Back to Home
        </Button>

        {/* Footer text */}
        <p className="mt-4" style={{ fontSize: '0.8rem', opacity: 0.4 }}>
          Municipality of Capas, Tarlac &bull; Official Government Website
        </p>
      </Container>
    </div>
  )
}

export default UnderDevelopment
