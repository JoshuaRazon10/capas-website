import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Form, InputGroup, Modal, Spinner, ListGroup } from 'react-bootstrap'
import { FaDownload, FaSearch, FaFilePdf, FaFileWord, FaFileAlt, FaArrowRight } from 'react-icons/fa'
import API_BASE_URL from '../apiConfig'

const DownloadableForms = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [previewFile, setPreviewFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [formsState, setFormsState] = useState([])

  useEffect(() => {
    const fetchForms = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/documents?type=Downloadable Forms`)
        if (response.ok) {
          const data = await response.json()
          
          // Grouping logic by description
          const grouped = data.reduce((acc, item) => {
            const desc = item.description || 'Others'
            if (!acc[desc]) {
              acc[desc] = []
            }
            acc[desc].push(item)
            return acc
          }, {})

          const formattedData = Object.keys(grouped).map(desc => {
            const items = grouped[desc]
            if (items.length === 1) {
              const item = items[0]
              return {
                name: desc !== 'Others' ? desc : item.title,
                category: desc,
                type: item.file_extension ? item.file_extension.toUpperCase() : 'PDF',
                file_path: item.file_path,
                isGroup: false
              }
            } else {
              return {
                name: desc,
                category: desc,
                type: 'GROUP',
                isGroup: true,
                files: items.map(f => ({
                  name: f.title,
                  file: f.file_path,
                  type: f.file_extension ? f.file_extension.toUpperCase() : 'PDF'
                }))
              }
            }
          })

          setFormsState(formattedData)
        } else {
          setFormsState([])
        }
      } catch (error) {
        console.error('Failed to fetch forms:', error)
        setFormsState([])
      } finally {
        setLoading(false)
      }
    }
    fetchForms()
  }, [])

  const filteredForms = formsState.filter(form => {
    return form.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const getFileUrl = (path) => {
    if (!path) return '#'
    if (path.startsWith('http') || path.startsWith('/')) return path
    return `${API_BASE_URL.replace('/api', '')}/${path}`
  }

  // Define the desired order matching the user's screenshot
  const formOrder = [
    'New Building Permit',
    'Electrical Permit Form',
    'Application Form for New Business',
    'Application Form for Renewal',
    'Fencing Permit Form',
    'Certificate of Occupancy Application Form and Completion Form',
    'Building Permit Form and Other Ancillary Permit Form'
  ]

  const sortedForms = [...filteredForms].sort((a, b) => {
    const idxA = formOrder.indexOf(a.name)
    const idxB = formOrder.indexOf(b.name)
    if (idxA === -1 && idxB === -1) return 0
    if (idxA === -1) return 1
    if (idxB === -1) return -1
    return idxA - idxB
  })

  return (
    <div className="downloadable-forms-page bg-white min-vh-100">
      {/* Page Header - Clean & Professional */}
      <section className="bg-white border-bottom py-5">
        <Container>
          <div className="text-center">
            <h1 className="display-5 fw-bold mb-3" style={{ color: '#14183d' }}>Downloadable Forms</h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Access and download official municipal application forms and documents.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-5">
        {/* Search Bar - Minimalist */}
        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <InputGroup className="shadow-sm rounded-pill overflow-hidden border bg-light">
              <InputGroup.Text className="bg-transparent border-0 ps-4">
                <FaSearch className="text-muted" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for forms (e.g. Building, Business...)"
                className="border-0 bg-transparent py-3 shadow-none fw-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        {/* Forms List - Clean matching user identifier screenshot */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
            <p className="mt-3 text-muted">Loading forms...</p>
          </div>
        ) : sortedForms.length > 0 ? (
          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="forms-list-container">
                {sortedForms.map((form, idx) => (
                  <div key={idx} className="form-item-row py-4 border-bottom transition-all">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1" style={{ 
                          color: form.name.includes('Building Permit Form') ? '#483D8B' : '#333',
                          fontSize: '1.25rem',
                          transition: 'all 0.3s'
                        }}>
                          {form.name}
                        </h5>
                        {form.isGroup && (
                          <span className="badge bg-light text-muted border fw-normal py-1 px-2 mt-1">
                            {form.files.length} documents included
                          </span>
                        )}
                      </div>

                      {/* Download Section */}
                      <div className="d-flex align-items-center gap-3">
                        {!form.isGroup ? (
                          <Button 
                            as="a"
                            href={getFileUrl(form.file_path)}
                            download
                            className="btn btn-maroon fw-bold px-4 py-2 rounded-pill d-flex align-items-center gap-2 border-0 shadow-sm"
                            style={{ backgroundColor: '#800000', color: 'white' }}
                          >
                            <FaDownload size={14} /> DOWNLOAD
                          </Button>
                        ) : (
                          <div className="text-muted small fw-bold">SEE LIST BELOW</div>
                        )}
                      </div>
                    </div>

                    {/* Group Files - Clean nested list */}
                    {form.isGroup && (
                      <div className="mt-4 ps-md-4 pe-md-3">
                        <div className="rounded-4 overflow-hidden border bg-light shadow-sm">
                          {form.files.map((file, fIdx) => (
                            <div key={fIdx} className="d-flex align-items-center justify-content-between p-3 border-bottom border-white last-border-none hover-bg-white transition-all">
                              <div className="d-flex align-items-center gap-3 overflow-hidden">
                                <div className="p-2 rounded bg-white shadow-xs">
                                  {file.type === 'PDF' ? (
                                    <FaFilePdf className="text-danger" />
                                  ) : (
                                    <FaFileWord style={{ color: '#2b5797' }} />
                                  )}
                                </div>
                                <span className="text-dark fw-medium text-truncate" style={{ fontSize: '0.95rem' }}>{file.name}</span>
                              </div>
                              <a 
                                href={getFileUrl(file.file)} 
                                download 
                                className="btn btn-sm btn-outline-danger border-0 rounded-pill px-3 py-2 fw-bold d-flex align-items-center gap-2"
                                style={{ fontSize: '0.8rem' }}
                              >
                                <FaDownload size={12} /> {file.type}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        ) : (
          <div className="text-center py-5">
            <div className="mb-4 opacity-10">
              <FaFileAlt size={100} />
            </div>
            <h4 className="text-muted fw-bold">No forms found.</h4>
            <p className="text-muted">Try a different search term.</p>
          </div>
        )}
      </Container>

      <style>{`
        .form-item-row:hover h5 {
          color: #800000 !important;
          transform: translateX(5px);
        }
        .hover-bg-white:hover {
          background-color: #ffffff !important;
        }
        .shadow-xs {
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .last-border-none:last-child {
          border-bottom: none !important;
        }
        .transition-all {
          transition: all 0.25s ease-in-out;
        }
        .btn-maroon:hover {
          background-color: #600000 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(128, 0, 0, 0.2) !important;
        }
      `}</style>
    </div>
  )
}

export default DownloadableForms
