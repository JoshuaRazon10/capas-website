import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, Modal } from 'react-bootstrap'
import { FaDownload, FaSearch, FaFilePdf, FaFileWord, FaFilter, FaFileAlt, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DownloadableForms = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('All')
  const [showPreview, setShowPreview] = useState(false)
  const [previewFile, setPreviewFile] = useState(null)

  const handlePreview = (file) => {
    setPreviewFile(file)
    setShowPreview(true)
  }

  const forms = [
    // Building & Engineering (Priority)
    {
      name: 'New Building Permit Requirements',
      category: 'Building & Engineering',
      type: 'DOC',
      file: 'BUILDING-PERMIT-REQUIREMENTS-NEW.doc'
    },
    {
      name: 'Electrical Permit Form',
      category: 'Building & Engineering',
      type: 'DOC',
      file: 'ELECTRICAL-PERMIT-FORM-front-back-3-copies-1.doc'
    },
    // Business Permits
    {
      name: 'Application Form for New Business',
      category: 'Business Permits',
      type: 'DOCX',
      file: 'Application-Form-for-New-Business.docx'
    },
    {
      name: 'Application Form for Renewal',
      category: 'Business Permits',
      type: 'DOCX',
      file: 'Application-Form-for-Renewal.docx'
    },
    // Fencing
    {
      name: 'Fencing Permit Form',
      category: 'Building & Engineering',
      type: 'DOCX',
      file: 'FENCING-PERMIT-FORM-from-back-3-copies.docx'
    },
    // Groups
    {
      name: 'Certificate of Occupancy Application Form and Completion Form',
      category: 'Building & Engineering',
      type: 'PDF / DOC',
      isGroup: true,
      files: [
        { name: 'Unified Occupancy Form', file: 'Unified-Application-Form-for-Certificate-of-Occupancy-1-copy.pdf', type: 'PDF' },
        { name: 'Certificate of Completion (General)', file: 'CERTIFICATE-OF-COMPLETION-3-copies.doc', type: 'DOC' },
        { name: 'Certificate of Completion (Electrical)', file: 'CERTIFICATE-OF-COMPLETION-ELECTRICAL-WORKS-3-copies.doc', type: 'DOC' },
        { name: 'Certification Form (3 Copies)', file: 'CERTIFICATION-3-copies.doc', type: 'DOC' },
      ]
    },
    {
      name: 'Building Permit Form and Other Ancillary Permit Form',
      category: 'Building & Engineering',
      type: 'PDF / DOC',
      isGroup: true,
      files: [
        { name: 'Unified Building Permit Form', file: 'UNIFIED-APPLICATION-FORM-FOR-BUILDING-PERMIT-front-back-5-copies.pdf', type: 'PDF' },
        { name: 'Building Permit Requirements', file: 'BUILDING-PERMIT-REQUIREMENTS.doc', type: 'DOC' },
        { name: 'Electronics Permit Form', file: 'ELECTRONICS-PERMIT-FORM-front-back-3-copies.doc', type: 'DOC' },
        { name: 'Mechanical Permit Form', file: 'MECHANICAL-PERMIT-FORM-front-back-3-copies.doc', type: 'DOC' },
        { name: 'Sanitary/Plumbing Permit Form', file: 'SANITARY-PLUMBING-PERMIT-FORM-front-back-3-copies.doc', type: 'DOC' },
      ]
    }
  ]

  const categories = ['All', 'Business Permits', 'Building & Engineering', 'Certificates & Others']

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'All' || form.category === filter
    return matchesSearch && matchesFilter
  })

  const getFileIcon = (type) => {
    if (type === 'PDF') return <FaFilePdf className="text-danger" />
    if (type.includes('DOC')) return <FaFileWord style={{ color: 'var(--blue-logo)' }} />
    return <FaFileAlt className="text-secondary" />
  }

  return (
    <div className="downloadable-forms-page bg-light min-vh-100">
      {/* Page Header */}
      <div className="page-header text-white py-5 mb-0" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <Container className="py-4 position-relative z-index-1">
          <h1 className="display-4 fw-bold">Downloadable Forms</h1>
          <p className="lead opacity-75">Access and download official municipal application forms and documents.</p>
        </Container>
      </div>

      <Container className="py-5">
        {/* Search and Filter Section */}
        <Card className="border-0 shadow-sm rounded-4 mb-5 p-4">
          <Row className="g-3">
            <Col lg={7}>
              <InputGroup className="shadow-sm rounded-3 overflow-hidden border">
                <InputGroup.Text className="bg-white border-0 ps-3">
                  <FaSearch style={{ color: 'var(--blue-logo)' }} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search for forms (e.g. Building, Business...)"
                  className="border-0 bg-transparent py-3 shadow-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col lg={5}>
              <div className="d-flex gap-2 overflow-auto pb-2 scrollbar-hide">
                {categories.map((cat, idx) => (
                  <Button
                    key={idx}
                    className={`rounded-pill px-4 text-nowrap fw-bold ${filter === cat ? 'shadow' : 'border-0 bg-white shadow-sm'}`}
                    style={{ 
                      backgroundColor: filter === cat ? 'var(--blue-logo)' : 'white', 
                      borderColor: filter === cat ? 'var(--blue-logo)' : '#ddd',
                      color: filter === cat ? 'white' : '#666',
                      border: filter === cat ? 'none' : '1px solid #ddd'
                    }}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Card>

        {/* Forms Grid */}
        <Row className="g-4">
          {filteredForms.length > 0 ? (
            filteredForms.map((form, idx) => (
              <Col key={idx} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm rounded-4 hover-lift transition-all overflow-hidden bg-white">
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="file-icon-wrapper p-3 rounded-4 bg-light">
                        {getFileIcon(form.isGroup ? 'PDF' : form.type)}
                      </div>
                      <Badge className="text-uppercase fw-bold p-2" style={{ fontSize: '0.7rem', letterSpacing: '1px', backgroundColor: 'var(--blue-logo)', color: 'white' }}>
                        {form.type}
                      </Badge>
                    </div>
                    <h5 className="fw-bold mb-2 text-dark" style={{ lineHeight: '1.4' }}>{form.name}</h5>
                    
                    {form.isGroup ? (
                      <div className="group-files mt-3 mb-4">
                        <small className="text-uppercase fw-bold text-muted mb-2 d-block" style={{ fontSize: '0.65rem' }}>Includes {form.files.length} documents:</small>
                        {form.files.map((file, fIdx) => (
                          <div key={fIdx} className="d-flex align-items-center justify-content-between py-2 border-bottom border-light">
                            <span className="text-muted small text-truncate me-2" title={file.name}>{file.name}</span>
                            <div className="d-flex gap-3">
                              <button 
                                onClick={() => handlePreview(file)}
                                className="btn btn-link p-0 text-decoration-none small fw-bold d-flex align-items-center gap-1"
                                style={{ color: 'var(--blue-logo)' }}
                              >
                                <FaEye size={12} /> View
                              </button>
                              <a href={`/forms/${file.file}`} download className="text-decoration-none small fw-bold" style={{ color: 'var(--primary)' }}>
                                <FaDownload size={12} className="me-1" /> {file.type}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted small mb-4 mt-auto">
                        <FaFilter className="me-2" size={10} style={{ color: 'var(--blue-logo)' }} />
                        {form.category}
                      </p>
                    )}

                    {!form.isGroup && (
                      <div className="d-flex gap-2">
                        <Button 
                          className="border-2 py-2 w-50 fw-bold d-flex align-items-center justify-content-center gap-2"
                          style={{ color: 'var(--blue-logo)', borderColor: 'var(--blue-logo)', background: 'transparent' }}
                          onClick={() => handlePreview(form)}
                        >
                          <FaEye size={14} /> View
                        </Button>
                        <Button 
                          as="a" 
                          href={`/forms/${form.file}`} 
                          download 
                          className="btn-primary-red border-0 py-2 w-50 fw-bold d-flex align-items-center justify-content-center gap-2"
                          style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
                        >
                          <FaDownload size={14} /> Download
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <div className="mb-4 opacity-25" style={{ color: 'var(--blue-logo)' }}>
                <FaFileAlt size={80} />
              </div>
              <h4 className="text-muted fw-bold">No forms found matching your search.</h4>
              <p className="text-muted">Try adjusting your filters or search terms.</p>
            </Col>
          )}
        </Row>

        {/* Preview Modal */}
        <Modal show={showPreview} onHide={() => setShowPreview(false)} size="lg" centered className="form-preview-modal">
          <Modal.Header closeButton className="border-0">
            <Modal.Title className="fw-bold" style={{ color: 'var(--blue-logo)' }}>{previewFile?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0 bg-light">
            {previewFile?.type === 'PDF' ? (
              <iframe
                src={`/forms/${previewFile.file}#toolbar=0`}
                width="100%"
                height="600px"
                className="border-0"
                title="File Preview"
              ></iframe>
            ) : (
              <div className="text-center py-5 px-4">
                <div className="mb-4 opacity-50" style={{ color: 'var(--blue-logo)' }}>
                  <FaFileWord size={80} />
                </div>
                <h4 className="fw-bold mb-3">Preview not available for Word documents</h4>
                <p className="text-muted mb-4">Please download the file to view its contents on your device.</p>
                <Button 
                  as="a" 
                  href={`/forms/${previewFile?.file}`} 
                  download 
                  className="btn-primary-red border-0 px-5 py-3 fw-bold rounded-pill"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
                >
                  <FaDownload className="me-2" /> Download Document
                </Button>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>

      <style>{`
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
        }
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .file-icon-wrapper svg {
          font-size: 2rem;
        }
        .z-index-1 { z-index: 1; }
      `}</style>
    </div>
  )
}

export default DownloadableForms
