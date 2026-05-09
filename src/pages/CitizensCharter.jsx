import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaTools, FaBriefcase, FaSeedling, FaUsers, FaPaw, FaSearch, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const CitizensCharter = () => {
  return (
    <div className="charter-page bg-light min-vh-100">
      {/* Page Header */}
      <div className="page-header py-5 mb-0" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <Container className="py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">Citizen's Charter</h1>
          <p className="lead opacity-75 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Official Citizens Charter of the Municipality of Capas.
          </p>
          <a 
            href="/00 CC FINAL 2025.pdf" 
            download 
            className="btn btn-outline-light btn-lg rounded-pill px-5 shadow-sm"
            style={{ borderWidth: '2px' }}
          >
            Download Full Charter (PDF)
          </a>
        </Container>
      </div>

      <section className="py-5 bg-white text-center">
        <Container>
          <div className="py-5">
            <FaFileAlt size={80} className="text-muted mb-4 opacity-25" />
            <h2 className="fw-bold mb-3">Frontline Services & Standards</h2>
            <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
              The comprehensive list of frontline services, processing times, and standards is available in the downloadable document above.
            </p>
          </div>
        </Container>
      </section>

      <style>{`
        .hover-bg-light {
          transition: all 0.2s ease;
        }
        .hover-bg-light:hover {
          background-color: #f8f9fa;
          border-color: var(--blue-logo) !important;
          transform: translateY(-2px);
        }
        .transition-all {
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  )
}

export default CitizensCharter
