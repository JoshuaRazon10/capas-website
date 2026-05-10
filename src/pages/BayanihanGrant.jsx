import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import { FaFileInvoiceDollar, FaDownload, FaEye, FaHandHoldingHeart } from 'react-icons/fa'
import logo from '../assets/images/capas.logo.jpg'

const BayanihanGrant = () => {
  const reports = [
    {
      id: 1,
      title: 'Report on Fund Utilization and Status of Program Projects Activity Implementation for the Month of April 2020',
      file: 'Report-on-Fund-Utilization-and-Status-of-Program-Projects-Activity-Implementation-for-the-Month-of-April-2020.pdf',
      date: 'April 2020'
    },
    {
      id: 2,
      title: 'Report on Fund Utilization and Status of Program Projects Activity Implementation for the Month of May 2020',
      file: 'Report-on-Fund-Utilization-and-Status-of-Program-Projects-Activity-Implementation-for-the-Month-of-May-2020.pdf',
      date: 'May 2020'
    }
  ]

  return (
    <div className="bayanihan-page bg-light min-vh-100 pb-5">
      <section className="py-5 mb-0 text-center" style={{
        backgroundColor: 'var(--capas-navy)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="header-glow"></div>
        <Container className="position-relative py-5">
          <h1 className="display-4 fw-bold mb-3 oswald-font">BAYANIHAN GRANT</h1>
          <p className="lead opacity-75 mx-auto mb-0" style={{ maxWidth: '800px' }}>
            Transparency in the utilization and status of program, projects, and activity implementation of the Bayanihan Grant to Cities and Municipalities.
          </p>
        </Container>
      </section>

      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-5">
              <Card.Header className="bg-white border-bottom py-4 px-4">
                <h4 className="fw-bold mb-0 d-flex align-items-center gap-3">
                  <FaFileInvoiceDollar className="text-primary" />
                  Monthly Utilization Reports
                </h4>
              </Card.Header>
              <Card.Body className="p-0">
                <ListGroup variant="flush">
                  {reports.map((report, idx) => (
                    <ListGroup.Item key={idx} className="p-4 hover-bg transition-all border-bottom">
                      <Row className="align-items-center">
                        <Col md={1} className="d-none d-md-block text-center">
                          <span className="fw-bold text-muted h5 mb-0">{report.id}</span>
                        </Col>
                        <Col md={7}>
                          <h6 className="fw-bold mb-0 text-dark">{report.title}</h6>
                        </Col>
                        <Col md={4} className="text-md-end mt-3 mt-md-0">
                          <div className="d-flex gap-2 justify-content-md-end">
                            <a 
                              href={`/bayanihan/${report.file}`} 
                              download
                              className="btn btn-primary fw-bold px-4 rounded-pill hover-lift"
                            >
                              <FaDownload className="me-2" /> Download
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
        
        .bayanihan-page { font-family: 'Inter', sans-serif; }
        .oswald-font { font-family: 'Oswald', sans-serif; }
        
        .header-glow {
          position: absolute;
          top: 0; right: 0;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(128, 0, 0, 0.1) 0%, rgba(128, 0, 0, 0) 70%);
          z-index: 0;
        }

        .tracking-widest { letter-spacing: 0.2em; }
        
        .floating-logo {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .hover-bg:hover {
          background-color: rgba(128, 0, 0, 0.02);
        }

        .hover-lift {
          transition: all 0.2s ease;
        }

        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        .text-primary { color: #800000 !important; }
        .bg-primary { background-color: #800000 !important; }
        .btn-primary { background-color: #800000; border-color: #800000; }
        .btn-primary:hover { background-color: #600000; border-color: #600000; }
      `}} />
    </div>
  )
}

export default BayanihanGrant
