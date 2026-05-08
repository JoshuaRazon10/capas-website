import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

// Import Mayor Images
import rolando from '../assets/images/mayors/rolando.jpg'
import rafael from '../assets/images/mayors/rafael.jpg'
import arnaldo from '../assets/images/mayors/arnaldo.jpg'
import aurelio from '../assets/images/mayors/aurelio.jpg'
import hermes from '../assets/images/mayors/hermes.jpg'
import orlando from '../assets/images/mayors/orlando.jpg'
import amado from '../assets/images/mayors/amado.jpg'
import reynaldo from '../assets/images/mayors/reynaldo.jpg'
import catacutan1 from '../assets/images/mayors/reynaldocatacutan.jpg'
import antonio from '../assets/images/mayors/antonio.jpg'
import catacutan2 from '../assets/images/mayors/reynaldocatacutan2.jpg'
import boots from '../assets/images/mayors/boots.webp'

const Mayors = () => {
  const mayorsList = [
    { name: 'Rolando R. Pineda', title: 'MAYOR', years: '1977-1979', image: rolando },
    { name: 'Rafael B. Suarez', title: 'MAYOR', years: '1979-1986', image: rafael },
    { name: 'Arnaldo P. Dizon', title: 'Acting MAYOR', years: '1986', image: arnaldo },
    { name: 'Dr. Aurelio C. Fabros', title: 'MAYOR', years: '1987-1988', image: aurelio },
    { name: 'Dr. Hermes E. Frias, Sr.', title: 'MAYOR', years: '1988-1992 and 1995-1999', image: hermes },
    { name: 'Orlando R. Molina', title: 'MAYOR', years: '1992-1995', image: orlando },
    { name: 'Amado S. Day', title: 'Acting MAYOR', years: '1994-1995', image: amado },
    { name: 'Reynaldo David', title: 'Acting MAYOR', years: '1999-2001', image: reynaldo },
    { name: 'Reynaldo L. Catacutan, LL.B. DPA', title: 'MAYOR', years: '2001-2010', image: catacutan1 },
    { name: 'Antonio C. Rodriguez Jr.', title: 'MAYOR', years: '2010-2016', image: antonio },
    { name: 'Reynaldo L. Catacutan, LL.B. DPA', title: 'MAYOR', years: '2016-2022', image: catacutan2 },
    { name: 'Roseller "Boots" Rodriguez', title: 'MAYOR', years: '2022 - Present', image: boots },
  ]

  return (
    <div className="mayors-page py-5 bg-light min-vh-100">
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold text-dark display-4 mb-2">MAYORS OF CAPAS</h1>
          <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'var(--primary)' }}></div>
        </div>

        <Row className="g-4 justify-content-center">
          {mayorsList.map((mayor, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden text-center mayor-card">
                <div className="overflow-hidden" style={{ height: '350px' }}>
                  <Card.Img 
                    variant="top" 
                    src={mayor.image} 
                    style={{ 
                      height: '100%', 
                      width: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }} 
                    className="mayor-img"
                  />
                </div>
                <Card.Body className="p-4 bg-white">
                  <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1.1rem' }}>{mayor.name}</h5>
                  <p className="text-uppercase fw-bold text-secondary mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>{mayor.title}</p>
                  <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>{mayor.years}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>
        {`
          .mayor-card:hover .mayor-img {
            transform: scale(1.1);
          }
          .mayor-card {
            transition: transform 0.3s ease;
          }
          .mayor-card:hover {
            transform: translateY(-10px);
          }
        `}
      </style>
    </div>
  )
}

export default Mayors
