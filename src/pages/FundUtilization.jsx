import React from 'react'
import { Container, Accordion, Button, Row, Col } from 'react-bootstrap'
import { FaFileDownload, FaChartLine, FaHistory, FaCalendarAlt } from 'react-icons/fa'

const FundUtilization = () => {
  const reports = [
    {
      year: '2023',
      categories: [
        {
          title: 'Report on Fund Utilization and Status of Program or Project Implementation',
          quarters: [
            { label: 'as of March 31, 2023', file: 'Report-on-Fund-Utilization-and-Status-of-Program-or-Project-Implementation-as-of-March-31-2023.pdf' }
          ]
        }
      ]
    }
  ]

  return (
    <div className="fund-utilization-page min-vh-100 pb-5">
      {/* Hero Header */}
      <section className="text-white py-5 mb-0 text-center shadow-sm overflow-hidden position-relative" style={{ backgroundColor: '#14183d' }}>
        <div className="hero-pattern"></div>
        <Container className="py-5 position-relative">
          <h1 className="display-4 fw-bold mb-0 oswald-font text-white text-uppercase mx-auto" style={{ maxWidth: '900px' }}>
            REPORT ON FUND UTILIZATION AND STATUS OF PROGRAM /PROJECT IMPLEMENTATION
          </h1>
        </Container>
      </section>

      <Container className="pb-5 mb-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="modern-report-container p-4 p-md-5 shadow rounded-5 bg-white border-0">
              <div className="d-flex align-items-center gap-3 mb-5">
                <div className="icon-circle bg-maroon-subtle text-maroon d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(128, 0, 0, 0.1)' }}>
                  <FaHistory size={24} color="#800000" />
                </div>
                <h2 className="h3 fw-bold mb-0">Financial Transparency Record</h2>
              </div>

              {reports.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="year-pill">
                      {item.year}
                    </div>
                    <span className="fw-bold h5 mb-0">Report Year {item.year}</span>
                  </div>
                  
                  <Row className="g-5">
                    {item.categories.map((cat, idx) => (
                      <Col md={12} key={idx} className="category-section">
                        <div className="d-flex align-items-center gap-3 mb-4">
                          <div className="category-line"></div>
                          <h4 className="h5 fw-bold text-dark mb-0 text-uppercase tracking-tight">{cat.title}</h4>
                        </div>
                        <Row className="g-3">
                          {cat.quarters.map((q, qIdx) => {
                            const quarterLabel = typeof q === 'string' ? q : q.label;
                            let filePath = '#';
                            
                            if (typeof q !== 'string') {
                              if (cat.title.includes('Utilization and Status')) {
                                filePath = `/fund/${q.file}`;
                              } else {
                                filePath = `/report/${item.year}/${q.file}`;
                              }
                            }
                            
                            return (
                              <Col sm={6} lg={4} key={qIdx}>
                                <a 
                                  href={filePath} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="report-link-card p-4 rounded-4 border text-decoration-none d-block transition-all h-100 shadow-sm"
                                >
                                  <div className="d-flex flex-column h-100 justify-content-between">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                      <div className="pdf-mini">PDF</div>
                                      <FaFileDownload className="icon-dl" color="#800000" size={20} />
                                    </div>
                                    <div className="fw-bold link-text h6 mb-0" style={{ color: '#800000', lineHeight: '1.5' }}>{quarterLabel}</div>
                                  </div>
                                </a>
                              </Col>
                            );
                          })}
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}

              <div className="mt-5 p-4 rounded-4 bg-light text-center border">
                <p className="mb-0 text-muted fw-medium small">
                  <strong>Note:</strong> This report is published in accordance with the Department of Interior and Local Government (DILG) Full Disclosure Policy.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .fund-utilization-page {
          background-color: #f8f9fa;
          font-family: 'Inter', sans-serif;
        }

        .oswald-font { font-family: 'Oswald', sans-serif; }
        .text-maroon { color: #800000; }

        .modern-accordion .accordion-item {
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05) !important;
        }

        .modern-accordion .accordion-button {
          padding: 1.5rem 2rem;
          background-color: #ffffff;
          box-shadow: none !important;
          color: #14183d;
        }

        .modern-accordion .accordion-button:not(.collapsed) {
          background-color: rgba(128, 0, 0, 0.02);
          color: #800000;
        }

        .year-pill {
          background: #f1f3f9;
          padding: 0.6rem 1.2rem;
          border-radius: 100px;
          color: #14183d;
          font-weight: 800;
          font-size: 1rem;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .category-line {
          width: 4px;
          height: 24px;
          background: #800000;
          border-radius: 2px;
        }

        .report-link-card {
          background: #ffffff;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(0,0,0,0.08) !important;
        }

        .report-link-card:hover {
          background: #800000;
          border-color: #800000;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(128, 0, 0, 0.2);
        }

        .report-link-card:hover .link-text { color: #ffffff !important; }
        .report-link-card:hover .pdf-mini { background: rgba(255,255,255,0.2); color: white; }
        .report-link-card:hover .icon-dl { color: white !important; }

        .pdf-mini {
          font-size: 0.65rem;
          font-weight: 900;
          padding: 2px 6px;
          background: #f8f9fa;
          border-radius: 4px;
          color: #6c757d;
        }

        .hero-pattern {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.2;
        }
      `}} />
    </div>
  )
}

export default FundUtilization
