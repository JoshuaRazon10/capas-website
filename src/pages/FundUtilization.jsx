import { Container, Accordion, Button, Row, Col, Spinner } from 'react-bootstrap'
import { FaFileDownload, FaChartLine, FaHistory, FaCalendarAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import API_BASE_URL from '../apiConfig'

const FundUtilization = () => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/documents?type=Fund Utilization`)
        if (response.ok) {
          const data = await response.json()
          setReports(data)
        }
      } catch (err) {
        console.error('Failed to fetch reports:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [])

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

              {loading ? (
                <div className="text-center py-5"><Spinner animation="border" variant="danger" /></div>
              ) : reports.length > 0 ? (
                <Row className="g-4">
                  {reports.map((report, idx) => (
                    <Col sm={6} lg={4} key={idx}>
                      <a 
                        href={report.file_path.startsWith('http') || report.file_path.startsWith('/') ? report.file_path : `${API_BASE_URL.replace('/api', '/storage')}/${report.file_path}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="report-link-card p-4 rounded-4 border text-decoration-none d-block transition-all h-100 shadow-sm"
                      >
                        <div className="d-flex flex-column h-100 justify-content-between">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="pdf-mini">PDF</div>
                            <FaFileDownload className="icon-dl" color="#800000" size={20} />
                          </div>
                          <div>
                            <div className="fw-bold link-text h6 mb-1" style={{ color: '#800000', lineHeight: '1.5' }}>{report.title}</div>
                            <small className="text-muted small">
                              {report.year} {report.description && `• ${report.description}`}
                            </small>
                          </div>
                        </div>
                      </a>
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="text-center py-5 text-muted">No reports found.</div>
              )}

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
