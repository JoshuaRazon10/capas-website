import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa'

const officials = [
  { name: 'Hon. Mayor', position: 'Municipal Mayor', office: 'Office of the Mayor' },
  { name: 'Hon. Vice Mayor', position: 'Municipal Vice Mayor', office: 'Office of the Vice Mayor' },
]

const departments = [
  'Municipal Planning and Development Office',
  'Municipal Budget Office',
  'Municipal Accounting Office',
  'Municipal Treasurer\'s Office',
  'Municipal Assessor\'s Office',
  'Municipal Civil Registrar',
  'Municipal Health Office',
  'Municipal Social Welfare and Development Office',
  'Municipal Engineering Office',
  'Municipal Agriculture Office',
  'Municipal Environment and Natural Resources Office',
  'Human Resource Management Office',
]

const councilors = Array.from({ length: 8 }, (_, i) => ({
  name: `Hon. Councilor ${i + 1}`,
  position: 'Sangguniang Bayan Member',
  committee: `Committee ${i + 1}`,
}))

const Government = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link> / <span>Government</span>
          </div>
          <h1>Local Government</h1>
          <p>Meet the dedicated officials serving the Municipality of Capas.</p>
        </Container>
      </div>

      {/* Executive Officials */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-3">
          <div className="section-header">
            <h2>Executive Officials</h2>
            <div className="section-divider"></div>
          </div>
          <Row className="gy-4 justify-content-center">
            {officials.map((official, idx) => (
              <Col key={idx} lg={4} md={6}>
                <Card className="modern-card h-100 border-0 text-center">
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${idx === 0 ? '#C62828, #8E0000' : '#1a1a2e, #16213e'})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: '100px', height: '100px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)', border: '3px solid rgba(255,255,255,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <FaUser size={40} style={{ color: 'white', opacity: 0.8 }} />
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <h5 className="fw-bold mb-1">{official.name}</h5>
                    <p className="text-primary-red fw-semibold small mb-2">{official.position}</p>
                    <p className="text-muted small mb-0">{official.office}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Sangguniang Bayan */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-3">
          <div className="section-header">
            <h2>Sangguniang Bayan</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Members of the Municipal Council.</p>
          </div>
          <Row className="gy-3">
            {councilors.map((c, idx) => (
              <Col key={idx} lg={3} md={4} sm={6}>
                <Card className="modern-card border-0 h-100">
                  <Card.Body className="p-3 d-flex align-items-center gap-3">
                    <div style={{
                      width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0,
                      background: 'linear-gradient(135deg, rgba(198,40,40,0.1), rgba(198,40,40,0.05))',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <FaUser size={18} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <div className="fw-bold small">{c.name}</div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>{c.position}</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Departments */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-3">
          <div className="section-header">
            <h2>Departments & Offices</h2>
            <div className="section-divider"></div>
          </div>
          <Row className="gy-3">
            {departments.map((dept, idx) => (
              <Col key={idx} lg={4} md={6}>
                <div className="d-flex align-items-center gap-3 p-3" style={{
                  background: 'var(--gray-100)', borderRadius: 'var(--radius-sm)',
                  transition: 'var(--transition)', cursor: 'pointer',
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                    background: 'var(--primary)',
                  }}></div>
                  <span className="fw-medium small">{dept}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Government
