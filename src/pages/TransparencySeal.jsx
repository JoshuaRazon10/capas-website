import React from 'react'
import { Container, Row, Col, Accordion, ListGroup, Card } from 'react-bootstrap'
import { FaShieldAlt, FaFileContract, FaChartPie, FaBuilding, FaUserCheck, FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API_BASE_URL from '../apiConfig'
import logo from '../assets/images/capas.logo.jpg'

const TransparencySeal = () => {
  const [dynamicDocs, setDynamicDocs] = useState([])
  const [loading, setLoading] = useState(false)
  const [groupedDocs, setGroupedDocs] = useState({})

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/documents`)
        if (response.ok) {
          const allDocs = await response.json()
          // Filter for Transparency Seal and Full Disclosure
          const filtered = allDocs.filter(d => d.type === 'Transparency Seal' || d.type === 'Full Disclosure')
          
          // Group by Year and then by Description (Sub-category)
          const grouped = filtered.reduce((acc, doc) => {
            const year = doc.year || new Date(doc.created_at).getFullYear()
            const subCat = doc.description || 'General'
            
            if (!acc[year]) acc[year] = {}
            if (!acc[year][subCat]) acc[year][subCat] = []
            
            acc[year][subCat].push(doc)
            return acc
          }, {})
          
          setGroupedDocs(grouped)
        }
      } catch (err) {
        console.error('Failed to fetch transparency docs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchDocs()
  }, [])

  // Static fallback/initial sections if any (currently handled by groupedDocs)
  const years = Object.keys(groupedDocs).sort((a, b) => b - a)


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
            <Accordion defaultActiveKey={years[0]} className="transparency-accordion mt-5">
              {years.length > 0 ? (
                years.map((year, idx) => (
                  <Accordion.Item eventKey={year} key={year} className="mb-4 border-0 rounded-4 shadow-sm overflow-hidden">
                    <Accordion.Header>
                      <div className="d-flex align-items-center gap-3 py-2">
                        <div className="section-icon text-primary">
                          <FaFileContract />
                        </div>
                        <h4 className="h5 fw-bold mb-0">{year} Reports & Disclosures</h4>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="bg-white p-4 p-md-5">
                      <Accordion className="nested-accordion">
                        {Object.keys(groupedDocs[year]).map((subCat, sIdx) => (
                          <Accordion.Item eventKey={`${year}-${sIdx}`} key={sIdx} className="border-0 mb-3">
                            <Accordion.Header className="nested-header">
                              <span className="fw-bold text-uppercase small tracking-wider">{subCat}</span>
                            </Accordion.Header>
                            <Accordion.Body className="bg-light-subtle rounded-bottom-4 p-4">
                              <ListGroup variant="flush" className="rounded-3 overflow-hidden border">
                                {groupedDocs[year][subCat].map((doc, dIdx) => (
                                  <ListGroup.Item key={dIdx} className="bg-white py-3 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                                    <div className="d-flex align-items-center gap-3">
                                      <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" width="24" />
                                      <div>
                                        <span className="fw-medium d-block">{doc.title}</span>
                                        <small className="text-muted">{new Date(doc.created_at).toLocaleDateString()}</small>
                                      </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                      <a 
                                        href={doc.file_path.startsWith('http') || doc.file_path.startsWith('/') ? doc.file_path : `${API_BASE_URL.replace('/api', '/storage')}/${doc.file_path}`} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="btn btn-sm btn-light text-primary fw-bold"
                                      >
                                        View
                                      </a>
                                      <a 
                                        href={doc.file_path.startsWith('http') || doc.file_path.startsWith('/') ? doc.file_path : `${API_BASE_URL.replace('/api', '/storage')}/${doc.file_path}`} 
                                        download 
                                        className="btn btn-sm btn-outline-primary fw-bold"
                                      >
                                        Download
                                      </a>
                                    </div>
                                  </ListGroup.Item>
                                ))}
                              </ListGroup>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                ))
              ) : (
                <div className="text-center py-5 bg-white rounded-4 shadow-sm">
                  <FaInfoCircle size={48} className="text-muted mb-3 opacity-50" />
                  <p className="text-muted lead">No documents found in the archive.</p>
                </div>
              )}
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
