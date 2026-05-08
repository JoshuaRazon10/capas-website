import React from 'react'
import { Container } from 'react-bootstrap'

const MapPage = () => {
  return (
    <div className="map-page bg-white min-vh-100 py-5">
      <Container className="text-center mb-5">
        <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3rem', letterSpacing: '2px' }}>MUNICIPAL MAP OF CAPAS</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
          Explore the Municipality of Capas through our interactive map. View the boundaries, landmarks, and barangays of our thriving town.
        </p>
      </Container>

      <Container fluid className="px-md-5">
        <div className="shadow-lg rounded-4 overflow-hidden border" style={{ height: '70vh', minHeight: '500px' }}>
          <iframe 
            title="Capas Tarlac Map"
            src="https://maps.google.com/maps?q=Capas,%20Tarlac&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>

      <Container className="mt-5 text-center">
        <div className="d-flex flex-wrap justify-content-center gap-4 text-muted">
          <div className="d-flex align-items-center gap-2">
            <span className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></span>
            <span>Municipal Hall</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="bg-primary rounded-circle" style={{ width: '12px', height: '12px' }}></span>
            <span>Historical Landmarks</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="bg-success rounded-circle" style={{ width: '12px', height: '12px' }}></span>
            <span>Mt. Pinatubo Gateway</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MapPage
