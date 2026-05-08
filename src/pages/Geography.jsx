import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import geoImage from '../assets/images/capas.geography.png'

const Geography = () => {
  return (
    <div className="geography-page py-5 bg-white min-vh-100">
      <Container className="text-center mb-5">
        <h1 className="fw-bold text-dark mb-4" style={{ fontSize: '3rem', letterSpacing: '2px' }}>GEOGRAPHY</h1>
      </Container>

      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={8} className="text-center">
            <div className="image-container shadow-lg rounded p-3 bg-light mb-5">
              <img 
                src={geoImage} 
                alt="Geography of Capas" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>
          </Col>
        </Row>

        <div className="geo-content text-dark mx-auto" style={{ maxWidth: '900px', fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'justify' }}>
          <p className="mb-4">
            Capas is a landlocked municipality in the province of Tarlac. It is located at the southwestern part of the province, 
            bounded on the north by the Municipality of San Jose, on the northeast by Tarlac City, on the east by the 
            Municipality of Concepcion, on the south by the Municipality of Bamban, and on the west by the province of Zambales.
          </p>
          <p className="mb-4">
            The town is characterized by a diverse landscape, ranging from rolling hills to mountainous terrain. Approximately 
            46.24% of its total land area consists of hilly to mountainous regions, while the remaining areas are relatively 
            level plains suitable for agricultural and commercial development.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Geography
