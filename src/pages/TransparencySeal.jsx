import React from 'react'
import { Container, Row, Col, Accordion, ListGroup, Card } from 'react-bootstrap'
import { FaShieldAlt, FaFileContract, FaChartPie, FaBuilding, FaUserCheck, FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/images/capas.logo.jpg'

const TransparencySeal = () => {
  const sections = [
    {
      title: 'Full Disclosure Policy (FDP) Archive',
      icon: <FaFileContract />,
      isNested: true,
      years: [
        {
          year: '2023',
          categories: [
            {
              title: 'Annual Reports',
              files: [
                { name: 'Annual Budget Report', file: 'Annual-Budget-Report-1.pdf' },
                { name: 'Annual GAD Accomplishment Report', file: 'Annual-Gender-and-Development-Accomplishment-Report.pdf' },
                { name: 'Annual Procurement Plan', file: 'Annual-Procurement-Plan-or-Procurement-List.pdf' },
                { name: 'Annual Statement of Indebtedness (SIPB)', file: 'Annual-Statement-of-Indebtedness-Payments-and-Balances-SIPB_organized.pdf' },
                { name: 'Statement of Receipts and Expenditures', file: 'Statement-of-Receipts-and-Expenditures.pdf' },
                { name: 'Supplemental Procurement Plan', file: 'Supplemental-Procurement-Plan.pdf' }
              ]
            }
          ]
        },
        {
          year: '2022',
          categories: [
            {
              title: 'Annual Reports',
              files: [
                { name: 'Annual Budget Report', file: 'Annual-Budget-Report.pdf' },
                { name: 'Annual GAD Accomplishment Report', file: 'Annual-Gender-and-Development-Accomplishment-Report-1.pdf' },
                { name: 'Annual Procurement Plan', file: 'Annual-Procurement-Plan-or-Procurement-List-1.pdf' },
                { name: 'Annual Statement of Indebtedness (SIPB)', file: 'Annual-Statement-of-Indebtedness-Payments-and-Balances-SIPB.pdf' },
                { name: 'Statement of Receipts and Expenditures', file: 'Statement-of-Receipts-and-Expenditures-1.pdf' }
              ]
            },
            {
              title: 'Trust Fund Utilization',
              files: [
                { name: 'Trust Fund - 1st Quarter', file: 'Trust-Fund-Utilization-1st.pdf' },
                { name: 'Trust Fund - 2nd Quarter', file: 'Trust-Fund-Utilization-2nd.pdf' },
                { name: 'Trust Fund - 3rd Quarter', file: 'Trust-Fund-Utilization-3rd.pdf' },
                { name: 'Trust Fund - 4th Quarter', file: 'Trust-Fund-Utilization-4th.pdf' }
              ]
            },
            {
              title: 'Special Education Fund (SEF)',
              files: [
                { name: 'SEF Utilization - 1st Quarter', file: 'SEF-UTILIZATION-2022-1ST-QUARTER.pdf' },
                { name: 'SEF Utilization - 2nd Quarter', file: 'SEF-UTILIZATION-2022-2ND-QUARTER.pdf' },
                { name: 'SEF Utilization - 3rd Quarter', file: 'SEF-UTILIZATION-2022-3RD-QUARTER.pdf' },
                { name: 'SEF Utilization - 4th Quarter', file: 'SEF-UTILIZATION-2022-4TH-QUARTER.pdf' }
              ]
            },
            {
              title: '20% Development Fund',
              files: [
                { name: '20% Utilization - 1st Quarter', file: '20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization-1st.pdf' },
                { name: '20% Utilization - 2nd Quarter', file: '20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization-2nd.pdf' },
                { name: '20% Utilization - 3rd Quarter', file: '20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization-3rd.pdf' },
                { name: '20% Utilization - 4th Quarter', file: '20-Percent-Component-of-the-Internal-Revenue-Allotment-Utilization.pdf' }
              ]
            },
            {
              title: 'LDRRM Fund Utilization',
              files: [
                { name: 'LDRRMF - 1st Quarter', file: 'Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-1st.pdf' },
                { name: 'LDRRMF - 2nd Quarter', file: 'Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-2nd.pdf' },
                { name: 'LDRRMF - 3rd Quarter', file: 'Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-3rd.pdf' },
                { name: 'LDRRMF - 4th Quarter', file: 'Local-Disaster-Risk-Reduction-and-Management-Fund-Utilization-LDRRMF-4th.pdf' }
              ]
            },
            {
              title: 'Quarterly Statement of Cash Flow',
              files: [
                { name: 'Cash Flow - 1st Quarter', file: 'Quarterly-Statement-of-Cash-Flow-1st.pdf' },
                { name: 'Cash Flow - 2nd Quarter', file: 'Quarterly-Statement-of-Cash-Flow-2nd.pdf' },
                { name: 'Cash Flow - 3rd Quarter', file: 'Quarterly-Statement-of-Cash-Flow-3rd.pdf' },
                { name: 'Cash Flow - 4th Quarter', file: 'Quarterly-Statement-of-Cash-Flow-4th.pdf' }
              ]
            },
            {
              title: 'Unliquidated Cash Advances',
              files: [
                { name: 'Cash Advances - 1st Quarter', file: 'Unliquidated-Cash-Advances-1st.pdf' },
                { name: 'Cash Advances - 2nd Quarter', file: 'Unliquidated-Cash-Advances-2nd.pdf' },
                { name: 'Cash Advances - 3rd Quarter', file: 'Unliquidated-Cash-Advances-3rd.pdf' },
                { name: 'Cash Advances - 4th Quarter', file: 'Unliquidated-Cash-Advances-4th.pdf' }
              ]
            },
            {
              title: 'Human Resource Complement',
              files: [
                { name: 'HR Complement - 1st Quarter', file: 'Human-Resource-Complement-1st.pdf' },
                { name: 'HR Complement - 2nd Quarter', file: 'Human-Resource-Complement-2nd.pdf' },
                { name: 'HR Complement - 3rd Quarter', file: 'Human-Resource-Complement-3rd.pdf' },
                { name: 'HR Complement - 4th Quarter', file: 'Human-Resource-Complement-4th.pdf' }
              ]
            },
            {
              title: 'Bid Results',
              files: [
                { name: 'Bid Results - 1st Quarter', file: 'Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-1st.pdf' },
                { name: 'Bid Results - 2nd Quarter', file: 'Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-2nd.pdf' },
                { name: 'Bid Results - 3rd Quarter', file: 'Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-3rd.pdf' },
                { name: 'Bid Results - 4th Quarter', file: 'Bid-Results-on-Civil-Works-Goods-and-Services-and-Consulting-Services-4th.pdf' }
              ]
            }
          ]
        },
        {
          year: '2021',
          categories: [
            {
              title: 'Local Government Support Fund (LGSF)',
              files: [
                { name: 'LGSF - 1st Quarter', file: 'LGSF-1st-Quarter.pdf' },
                { name: 'LGSF - 2nd Quarter', file: 'LGSF-2nd-Quarter.pdf' },
                { name: 'LGSF - 3rd Quarter', file: 'LGSF-3rd-Quarter-1.pdf' },
                { name: 'LGSF - 4th Quarter', file: 'LGSF-4th-Quarter_rotated.pdf' }
              ]
            },
            {
              title: 'Special Education Fund (SEF)',
              files: [
                { name: 'SEF - 1st Quarter', file: 'SEF-1st-Quarter.pdf' },
                { name: 'SEF - 2nd Quarter', file: 'SEF-2nd-Quarter-1.pdf' },
                { name: 'SEF - 3rd Quarter', file: 'SEF-3rd-Quarter-1.pdf' },
                { name: 'SEF - 4th Quarter', file: 'SEF-4th-Quarter_rotated.pdf' }
              ]
            }
          ]
        }
      ]
    }
  ]

  return (
    <div className="transparency-page bg-light min-vh-100 pb-5">
      {/* Premium Header */}
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
          <h1 className="display-4 fw-bold mb-0 oswald-font">TRANSPARENCY SEAL</h1>
        </Container>
      </section>

      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Accordion Sections */}
            <Accordion defaultActiveKey="0" className="transparency-accordion">
              {sections.map((section, idx) => (
                <Accordion.Item eventKey={idx.toString()} key={idx} className="mb-4 border-0 rounded-4 shadow-sm overflow-hidden">
                  <Accordion.Header>
                    <div className="d-flex align-items-center gap-3 py-2">
                      <div className="section-icon text-primary">
                        {section.icon}
                      </div>
                      <h4 className="h5 fw-bold mb-0">{section.title}</h4>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="bg-white p-4 p-md-5">
                    {section.isLink ? (
                      <div className="text-center py-4">
                        <p className="text-muted mb-4">{section.description}</p>
                        <Link to={section.linkTo} className="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow-sm">
                          Go to {section.title.split('. ')[1]}
                        </Link>
                      </div>
                    ) : section.isNested ? (
                      <Accordion className="nested-accordion">
                        {section.years.map((yearObj, yIdx) => (
                          <Accordion.Item eventKey={yIdx.toString()} key={yIdx} className="border-0 mb-3">
                            <Accordion.Header className="nested-header">
                              <span className="fw-bold">{yearObj.year} Reports</span>
                            </Accordion.Header>
                            <Accordion.Body className="bg-light-subtle rounded-bottom-4 p-4">
                              {yearObj.categories ? (
                                yearObj.categories.map((cat, cIdx) => (
                                  <div key={cIdx} className="mb-4">
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                      <div className="category-marker bg-primary"></div>
                                      <h6 className="fw-bold text-dark mb-0 text-uppercase small tracking-wider">{cat.title}</h6>
                                    </div>
                                    <ListGroup variant="flush" className="rounded-3 overflow-hidden border">
                                      {cat.files.map((file, fIdx) => {
                                        const filePath = file.file ? `/report/${yearObj.year}/${file.file}` : '#';
                                        return (
                                          <ListGroup.Item key={fIdx} className="bg-white py-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                                            <div className="d-flex align-items-center gap-3">
                                              <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" width="24" />
                                              <span className="fw-medium">{file.name}</span>
                                            </div>
                                            <div className="d-flex gap-2">
                                              <a href={filePath} target="_blank" rel="noreferrer" className="btn btn-sm btn-light text-primary fw-bold">View</a>
                                              <a href={filePath} download className="btn btn-sm btn-outline-primary fw-bold">Download</a>
                                            </div>
                                          </ListGroup.Item>
                                        );
                                      })}
                                    </ListGroup>
                                  </div>
                                ))
                              ) : (
                                <ListGroup variant="flush" className="rounded-3 overflow-hidden border">
                                  {yearObj.files.map((file, fIdx) => {
                                    const filePath = file.file ? `/report/${yearObj.year}/${file.file}` : '#';
                                    return (
                                      <ListGroup.Item key={fIdx} className="bg-white py-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom">
                                        <div className="d-flex align-items-center gap-3">
                                          <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" width="24" />
                                          <div>
                                            <span className="fw-medium d-block">{file.name}</span>
                                            {file.date && <small className="text-muted small">{file.date}</small>}
                                          </div>
                                        </div>
                                        <div className="d-flex gap-2">
                                          <a href={filePath} target="_blank" rel="noreferrer" className="btn btn-sm btn-light text-primary fw-bold">View</a>
                                          <a href={filePath} download className="btn btn-sm btn-outline-primary fw-bold">Download</a>
                                        </div>
                                      </ListGroup.Item>
                                    );
                                  })}
                                </ListGroup>
                              )}
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    ) : (
                      <ListGroup variant="flush">
                        {section.items.map((item, i) => (
                          <ListGroup.Item key={i} className="py-4 border-bottom-dashed d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                            <div>
                              <h6 className="fw-bold mb-1">{item.name}</h6>
                              <small className="text-muted">{item.date}</small>
                            </div>
                            <div className="d-flex gap-2">
                              <button className="btn btn-light rounded-pill px-4 text-primary fw-bold hover-lift">View</button>
                              <button className="btn btn-outline-primary rounded-pill px-4 hover-lift">Download</button>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        :root {
          --capas-maroon: #800000;
          --capas-navy: #14183d;
          --capas-gold: #FFD700;
        }

        .transparency-page { font-family: 'Inter', sans-serif; }
        .oswald-font { font-family: 'Oswald', sans-serif; }
        
        .header-glow {
          position: absolute;
          top: 0; right: 0;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(128, 0, 0, 0.15) 0%, rgba(128, 0, 0, 0) 70%);
          z-index: 0;
        }

        .tracking-widest { letter-spacing: 0.25em; }

        .icon-circle {
          width: 60px; height: 60px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .section-icon { 
          font-size: 1.5rem; 
          color: var(--capas-maroon) !important;
        }

        .text-primary { color: var(--capas-maroon) !important; }
        .btn-primary { background-color: var(--capas-maroon); border-color: var(--capas-maroon); }
        .btn-primary:hover { background-color: #600000; border-color: #600000; }
        .btn-outline-primary { color: var(--capas-maroon); border-color: var(--capas-maroon); }
        .btn-outline-primary:hover { background-color: var(--capas-maroon); color: white; }

        .transparency-accordion .accordion-item {
          transition: transform 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05) !important;
        }

        .transparency-accordion .accordion-item:hover {
          transform: translateY(-5px);
        }

        .transparency-accordion .accordion-button {
          background-color: white;
          padding: 1.5rem 2rem;
          box-shadow: none !important;
        }

        .transparency-accordion .accordion-button:not(.collapsed) {
          color: var(--capas-maroon);
          background-color: rgba(128, 0, 0, 0.02);
          border-bottom: 1px solid rgba(128, 0, 0, 0.1);
        }

        .nested-accordion .accordion-button {
          background-color: #f8f9fa !important;
          border-radius: 12px !important;
          font-size: 0.95rem;
          padding: 1rem 1.5rem;
          color: var(--capas-navy) !important;
        }

        .nested-accordion .accordion-button:not(.collapsed) {
          background-color: rgba(20, 24, 61, 0.05) !important;
          color: var(--capas-navy) !important;
          border: 1px solid rgba(20, 24, 61, 0.1) !important;
        }

        .nested-accordion .accordion-item {
          background: transparent;
        }

        .category-marker {
          width: 4px;
          height: 16px;
          border-radius: 2px;
          background-color: var(--capas-maroon);
        }

        .bg-light-subtle { background-color: #fdfdfe; }

        .border-bottom-dashed {
          border-bottom: 1px dashed rgba(0,0,0,0.1) !important;
        }
        
        .border-bottom-dashed:last-child {
          border-bottom: none !important;
        }

        .hover-lift {
          transition: all 0.2s;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .seal-display {
          display: inline-block;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .text-primary-theme { color: var(--capas-navy); }
        .text-maroon { color: var(--capas-maroon); }
      `}} />
    </div>
  )
}

export default TransparencySeal
