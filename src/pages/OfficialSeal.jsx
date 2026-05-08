import React from 'react'
import { Container } from 'react-bootstrap'
import capasLogo from '../assets/images/capas.logo.jpg'

const OfficialSeal = () => {
  return (
    <div className="seal-page py-5 bg-white min-vh-100">
      <Container className="text-center mb-5">
        <h1 className="fw-bold mb-1" style={{ letterSpacing: '2px', fontSize: '2.5rem', color: '#000' }}>BAYAN NG CAPAS</h1>
        <h1 className="fw-bold mb-4" style={{ letterSpacing: '2px', fontSize: '2.5rem', color: '#000' }}>LALAWIGAN NG TARLAC</h1>
        
        <img 
          src={capasLogo} 
          alt="Official Seal of Capas" 
          style={{ 
            width: '450px', 
            height: '450px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            margin: '3rem 0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }} 
        />
      </Container>

      <Container>
        <div className="seal-description text-center mx-auto" style={{ maxWidth: '1000px', fontSize: '1.25rem' }}>
          
          <div className="mb-5">
            <h4 className="fw-bold mb-2" style={{ textTransform: 'uppercase', color: '#000' }}>SHIELD :</h4>
            <p style={{ color: '#000', fontWeight: '500' }}>Derived from the provincial seal of Tarlac where the town is located.</p>
          </div>

          <div className="mb-5">
            <h4 className="fw-bold mb-2" style={{ textTransform: 'uppercase', color: '#000' }}>MONUMENT :</h4>
            <p style={{ color: '#000', fontWeight: '500' }}>Depicts the historic Capas Death March, a silent testament to the valor and bravery of those gallant soldiers who died in defense of our beloved country.</p>
          </div>

          <div className="mb-5">
            <h4 className="fw-bold mb-2" style={{ textTransform: 'uppercase', color: '#000' }}>SUGARCANE & RICESTALKS :</h4>
            <p style={{ color: '#000', fontWeight: '500' }}>Represent the principal products of the town.</p>
          </div>

          <div className="mb-5">
            <h4 className="fw-bold mb-2" style={{ textTransform: 'uppercase', color: '#000' }}>CATTLE HEAD :</h4>
            <p style={{ color: '#000', fontWeight: '500' }}>Represents the growing source of livelihood among the western populace of the town.</p>
          </div>

          <div className="mb-5">
            <h4 className="fw-bold mb-2" style={{ textTransform: 'uppercase', color: '#000' }}>1710 :</h4>
            <p style={{ color: '#000', fontWeight: '500' }}>The year the town was founded.</p>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default OfficialSeal
