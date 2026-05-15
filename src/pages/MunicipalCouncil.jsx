import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaUserAlt, FaScroll, FaUserTie, FaFacebookF } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

// Council Images
import julietaImg from '../assets/images/council/Cabagan Jimenez.jpg'
import arielImg from '../assets/images/council/Ariel Batican.jpg'
import edithaImg from '../assets/images/council/Edith Mejia Yumul.jpg'
import benzImg from '../assets/images/council/Benz Pineda.jpg'
import clodualdoImg from '../assets/images/council/Clod Gamboa.jpg'
import jeffersonImg from '../assets/images/council/Jeff Garcia.jpg'
import estelaImg from '../assets/images/council/Manlupig.jpg'
import alejandroImg from '../assets/images/council/Driggs Duenas.jpg'
import vmAlex from '../assets/images/vm.alex.jpg'
import valantinImg from '../assets/images/council/Valantin.jpg'
import arcillaImg from '../assets/images/council/Seto Arcilla.jpg'
import marleoImg from '../assets/images/council/Marleo Delos Reyes.jpg'

const MunicipalCouncil = () => {
  const location = useLocation()
  const isCouncilPage = location.pathname === '/council'

  const sbMembers = [
    { name: 'Hon. Julieta C. Jimenez', position: 'Municipal Councilor', image: julietaImg },
    { name: 'Hon. Ariel G. Batican', position: 'Municipal Councilor', image: arielImg },
    { name: 'Hon. Editha M. Yumul', position: 'Municipal Councilor', image: edithaImg },
    { name: 'Hon. Benz A. Pineda', position: 'Municipal Councilor', image: benzImg },
    { name: 'Hon. Clodualdo B. Gamboa', position: 'Municipal Councilor', image: clodualdoImg },
    { name: 'Hon. Jefferson M. Garcia', position: 'Municipal Councilor', image: jeffersonImg },
    { name: 'Hon. Estela S. Manlupig', position: 'Municipal Councilor', image: estelaImg },
    { name: 'Hon. Alejandro T. Dueñas', position: 'Municipal Councilor', image: alejandroImg },
    { name: 'Hon. Victor Valantin', position: 'IPMR Representative', image: valantinImg },
    { name: 'Hon. Arnold Arcilla', position: 'ABC President', image: arcillaImg },
    { name: 'Hon. Marleo Delos Reyes', position: 'SK Federation President', image: marleoImg },
  ]

  const staffMembers = [
    { name: 'Atty. Catherine Rose Diaz Cunanan', position: 'Municipal Legal Officer', image: null },
    { name: 'Mahalia C. Bertillo', position: 'Officer-in-Charge, Municipal Public Information Office', image: null },
  ]

  const displayMembers = isCouncilPage ? [...sbMembers, ...staffMembers] : sbMembers

  return (
    <div className="municipal-council-page py-5 bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-white border-bottom mb-5 py-5 shadow-sm overflow-hidden position-relative">
        <Container>
          <Row className="align-items-center position-relative">
            <Col lg={12} className="text-center">
              <span className="badge mb-3 px-3 py-2 text-uppercase letter-spacing-1" style={{ backgroundColor: 'var(--blue-logo)', color: 'white', borderRadius: '4px' }}>Legislative Branch</span>
              <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3rem' }}>{isCouncilPage ? 'Municipal Council' : 'Sangguniang Bayan'}</h1>
              <p className="text-muted lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                The legislative heart of Capas, enacting laws and policies that empower our community 
                and ensure sustainable progress for all.
              </p>
              <div className="mb-4">
                <a 
                  href="https://www.facebook.com/sbcapas" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary px-4 py-2 rounded-pill shadow-sm d-inline-flex align-items-center gap-2"
                  style={{ backgroundColor: '#1877F2', borderColor: '#1877F2' }}
                >
                  <FaFacebookF /> Visit SB Page
                </a>
              </div>
              <div className="d-flex gap-4 justify-content-center">
                <div className="text-center">
                  <div className="h4 fw-bold mb-0" style={{ color: '#800000' }}>{displayMembers.length + 1}</div>
                  <small className="text-muted text-uppercase">Members</small>
                </div>
                <div className="border-start ps-4">
                  <div className="h4 fw-bold mb-0" style={{ color: '#800000' }}>Weekly</div>
                  <small className="text-muted text-uppercase">Sessions</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* Presiding Officer Section */}
        <section className="mb-5 text-center">
          <Row className="justify-content-center">
            {/* Vice Mayor */}
            <Col md={5} lg={4}>
              <div className="official-card secondary shadow p-4 bg-white rounded-4 border-top border-5" style={{ borderTopColor: 'var(--blue-logo)' }}>
                <div className="official-img-wrapper mb-3 mx-auto shadow-sm" style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', border: '5px solid #fff' }}>
                  <img src={vmAlex} alt="Vice Mayor" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <span className="badge mb-2 px-3 py-2 text-uppercase letter-spacing-1" style={{ backgroundColor: 'var(--blue-logo)', color: 'white', borderRadius: '4px' }}>Vice Mayor / Presiding Officer</span>
                <h4 className="fw-bold text-dark mb-0">Hon. Alex C. Espinosa</h4>
              </div>
            </Col>
          </Row>
        </section>

        {/* Council Members Grid */}
        <section className="mb-5">
          <h2 className="fw-bold text-dark mb-4 d-flex align-items-center">
            <span className="p-2 rounded me-3 d-flex align-items-center justify-content-center text-white" style={{ backgroundColor: '#800000' }}>
              <FaScroll size={20} />
            </span>
            Members
          </h2>
          <Row className="g-4 mb-5 justify-content-center">
            {displayMembers.map((member, idx) => (
              <Col key={idx} sm={6} lg={4} xl={3}>
                <Card className="border-0 shadow-sm h-100 rounded-4 hover-lift transition-all">
                  <div className="bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    ) : (
                      <FaUserAlt size={60} className="text-muted opacity-25" />
                    )}
                  </div>
                  <Card.Body className="text-center p-4">
                    <h5 className="fw-bold text-dark mb-1">{member.name}</h5>
                    <p className="text-muted small mb-0 text-uppercase letter-spacing-1">{member.position}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      <style>{`
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
        }
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
        .letter-spacing-1 {
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  )
}

export default MunicipalCouncil
