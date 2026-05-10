import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaUserAlt, FaScroll, FaAward, FaGavel } from 'react-icons/fa'

// Council Images
import julietaImg from '../assets/images/council/Cabagan Jimenez.jpg'
import arielImg from '../assets/images/council/Ariel Batican.jpg'
import edithaImg from '../assets/images/council/Edith Mejia Yumul.jpg'
import benzImg from '../assets/images/council/Benz Pineda.jpg'
import clodualdoImg from '../assets/images/council/Clod Gamboa.jpg'
import jeffersonImg from '../assets/images/council/Jeff Garcia.jpg'
import estelaImg from '../assets/images/council/Manlupig.jpg'
import alejandroImg from '../assets/images/council/Driggs Duenas.jpg'
import arnoldImg from '../assets/images/council/Seto Arcilla.jpg'
import marleoImg from '../assets/images/council/Marleo Delos Reyes.jpg'
import victorImg from '../assets/images/council/Valantin.jpg'

// Key Officials
import bootsImg from '../assets/images/mayors/boots.webp'
import vmAlex from '../assets/images/vm.alex.jpg'

const MunicipalCouncil = () => {
  const councilMembers = [
    { name: 'Hon. Julieta C. Jimenez', role: 'Municipal Councilor', image: julietaImg },
    { name: 'Hon. Ariel G. Batican', role: 'Municipal Councilor', image: arielImg },
    { name: 'Hon. Editha M. Yumul', role: 'Municipal Councilor', image: edithaImg },
    { name: 'Hon. Benz A. Pineda', role: 'Municipal Councilor', image: benzImg },
    { name: 'Hon. Clodualdo B. Gamboa', role: 'Municipal Councilor', image: clodualdoImg },
    { name: 'Hon. Jefferson M. Garcia', role: 'Municipal Councilor', image: jeffersonImg },
    { name: 'Hon. Estela S. Manlupig', role: 'Municipal Councilor', image: estelaImg },
    { name: 'Hon. Alejandro T. Dueñas', role: 'Municipal Councilor', image: alejandroImg },
    { name: 'Hon. Victor Valantin', role: 'IPMR Representative', image: victorImg },
    { name: 'Hon. Arnold Arcilla', role: 'ABC President', image: arnoldImg },
    { name: 'Hon. Raymart Catacutan', role: 'SK Federation President', image: null },
    { 
      name: 'Atty. Catherine Rose Diaz Cunanan', 
      role: 'Municipal Legal Officer', 
      office: 'Municipal Legal Office',
      email: 'legaloffice@capastarlac.gov.ph',
      image: null 
    },
  ]

  return (
    <div className="municipal-council-page py-5 bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-white border-bottom mb-5 py-5 shadow-sm overflow-hidden position-relative">
        <div className="position-absolute top-0 end-0 opacity-10" style={{ transform: 'translate(20%, -20%)' }}>
          <FaGavel size={300} />
        </div>
        <Container>
          <Row className="align-items-center position-relative">
            <Col lg={7}>
              <span className="badge mb-3 px-3 py-2 text-uppercase letter-spacing-1" style={{ backgroundColor: '#14183d', color: 'white', borderRadius: '4px' }}>Legislative Branch</span>
              <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '3rem' }}>Municipal Council</h1>
              <p className="text-muted lead mb-4">
                The legislative heart of Capas, enacting laws and policies that empower our community 
                and ensure sustainable progress for all.
              </p>
              <div className="d-flex gap-4">
                <div className="text-center">
                  <div className="h4 fw-bold mb-0" style={{ color: '#800000' }}>11</div>
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
        {/* Key Officials Section */}
        <section className="mb-5 text-center">
          <Row className="justify-content-center g-4">
            {/* Mayor */}
            <Col md={6} lg={5}>
              <div className="official-card main shadow p-4 bg-white rounded-4 border-top border-5 mb-4" style={{ borderTopColor: '#800000' }}>
                <div className="official-img-wrapper mb-4 mx-auto shadow-sm" style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', border: '8px solid #fff' }}>
                  <img src={bootsImg} alt="Hon. Atty. Roseller B. Rodriguez" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <Badge bg="danger" className="mb-2 px-3 py-2 text-uppercase letter-spacing-1">Municipal Mayor</Badge>
                <h2 className="fw-bold text-dark mb-0">Hon. Atty. Roseller B. Rodriguez</h2>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {/* Vice Mayor */}
            <Col md={5} lg={4}>
              <div className="official-card secondary shadow-sm p-4 bg-white rounded-4">
                <div className="official-img-wrapper mb-3 mx-auto" style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', border: '5px solid #f8f9fa' }}>
                  <img src={vmAlex} alt="Hon. Alex C. Espinosa" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <span className="badge mb-2 px-3 py-2 text-uppercase letter-spacing-1" style={{ backgroundColor: '#14183d', color: 'white', borderRadius: '4px' }}>Vice Mayor</span>
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
            Municipal Councilors
          </h2>
          <Row className="g-4">
            {councilMembers.map((member, idx) => (
              <Col key={idx} sm={6} lg={4} xl={3}>
                <Card className="border-0 shadow-sm h-100 rounded-4 hover-lift transition-all">
                  <div className="bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center" style={{ height: '250px' }}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    ) : (
                      <FaUserAlt size={60} style={{ color: '#800000', opacity: 0.2 }} />
                    )}
                  </div>
                  <Card.Body className="text-center p-4">
                    <h5 className="fw-bold text-dark mb-1">{member.name}</h5>
                    <p className="text-muted small mb-0 text-uppercase letter-spacing-1">{member.role}</p>
                    {member.office && (
                      <p className="text-muted small mb-0 mt-2">{member.office}</p>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-primary small d-block mt-1 text-decoration-none">{member.email}</a>
                    )}
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
