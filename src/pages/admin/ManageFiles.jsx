import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Nav, Button, Modal, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaSignOutAlt, FaTachometerAlt, FaListAlt, FaFolderOpen, FaTimes, FaFilePdf, FaFileWord, FaDownload, FaCog, FaImage, FaSearch } from 'react-icons/fa'
import capasLogo from '../../assets/images/capas.logo.jpg'

const ManageFiles = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [category, setCategory] = useState('')
  const [filterCategory, setFilterCategory] = useState('All')
  const [success, setSuccess] = useState('')

  // Placeholder files data — will be replaced with actual backend/Firestore integration
  const [fileList, setFileList] = useState([
    { id: 1, name: '2026_Annual_Budget.pdf', title: '2026 Annual Budget Report', category: 'Transparency Seal', date: 'May 8, 2026', type: 'PDF' },
    { id: 2, name: 'Application_Form_Business.docx', title: 'New Business Permit Application', category: 'Downloadable Forms', date: 'May 5, 2026', type: 'DOCX' },
    { id: 3, name: 'Q1_Trust_Fund_Utilization.pdf', title: 'Q1 Trust Fund Utilization', category: 'Full Disclosure', date: 'Apr 20, 2026', type: 'PDF' },
  ])

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  const openAddModal = () => {
    setFileName('')
    setCategory('')
    setShowModal(true)
  }

  const handleSave = () => {
    if (!fileName.trim() || !category) return

    const newItem = {
      id: Date.now(),
      name: 'uploaded_file.pdf', // Mock file name
      title: fileName,
      category,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      type: 'PDF' // Mock type
    }
    setFileList(prev => [newItem, ...prev])
    setSuccess('File uploaded successfully!')

    setShowModal(false)
    setFileName('')
    setCategory('')
    setTimeout(() => setSuccess(''), 3000)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this file? This action cannot be undone.')) {
      setFileList(prev => prev.filter(f => f.id !== id))
      setSuccess('File deleted successfully!')
      setTimeout(() => setSuccess(''), 3000)
    }
  }

  const getFileIcon = (type) => {
    if (type === 'PDF') return <FaFilePdf size={20} className="text-danger" />
    if (type === 'DOCX') return <FaFileWord size={20} style={{ color: 'var(--blue-logo)' }} />
    return <FaFolderOpen size={20} className="text-secondary" />
  }

  return (
    <>
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)' }}>
        {/* Top Bar */}
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div>
            <h5 className="fw-bold mb-0">Manage Files</h5>
            <small className="text-muted">{fileList.length} total files uploaded</small>
          </div>
          <Button onClick={openAddModal} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Upload New File
          </Button>
        </div>

        <Container fluid className="p-4">
          {success && (
            <Alert variant="success" className="py-2 d-flex align-items-center gap-2" style={{ borderRadius: 'var(--radius-xs)', fontSize: '0.9rem' }}>
              ✅ {success}
            </Alert>
          )}

          {/* Filters */}
          <Card className="modern-card border-0 mb-4" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <Card.Body className="p-3">
              <Row className="align-items-center g-3">
                <Col md={4}>
                  <div className="position-relative">
                    <FaSearch size={14} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-400)' }} />
                    <Form.Control 
                      placeholder="Search files..." 
                      className="modern-input ps-5 border-0 bg-light"
                      style={{ fontSize: '0.85rem' }}
                    />
                  </div>
                </Col>
                <Col md={3}>
                  <Form.Select 
                    className="modern-input border-0 bg-light" 
                    style={{ fontSize: '0.85rem' }}
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  >
                    <option value="All">All Categories</option>
                    <option value="Transparency Seal">Transparency Seal</option>
                    <option value="Full Disclosure">Full Disclosure Policy</option>
                    <option value="Downloadable Forms">Downloadable Forms</option>
                    <option value="Bids & Awards">Bids & Awards</option>
                    <option value="Ordinances">Ordinances</option>
                    <option value="Resolutions">Resolutions</option>
                    <option value="Executive Orders">Executive Orders</option>
                    <option value="Citizen's Charter">Citizen's Charter</option>
                    <option value="GAD">GAD</option>
                  </Form.Select>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Files Table */}
          <Card className="modern-card border-0" style={{ boxShadow: 'var(--shadow)' }}>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--gray-100)' }}>
                      <th className="fw-semibold text-muted small text-uppercase py-3 ps-4 border-0" style={{ width: '50px' }}>#</th>
                      <th className="fw-semibold text-muted small text-uppercase py-3 border-0">Document Title</th>
                      <th className="fw-semibold text-muted small text-uppercase py-3 border-0">Category</th>
                      <th className="fw-semibold text-muted small text-uppercase py-3 border-0">Date Uploaded</th>
                      <th className="fw-semibold text-muted small text-uppercase py-3 pe-4 border-0 text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fileList
                      .filter(f => filterCategory === 'All' || f.category === filterCategory)
                      .map((file, idx) => (
                      <tr key={file.id} className="align-middle">
                        <td className="py-3 ps-4 text-muted">{idx + 1}</td>
                        <td className="py-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center justify-content-center p-2 rounded-3 bg-light">
                              {getFileIcon(file.type)}
                            </div>
                            <div>
                              <div className="fw-semibold text-dark">{file.title}</div>
                              <div className="text-muted" style={{ fontSize: '0.78rem' }}>{file.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <span className="badge bg-light text-dark border px-2 py-1" style={{ fontWeight: 600 }}>
                            {file.category}
                          </span>
                        </td>
                        <td className="py-3 text-muted">{file.date}</td>
                        <td className="py-3 pe-4 text-end">
                          <Button variant="link" size="sm" className="text-primary p-1 me-2" title="Download">
                            <FaDownload size={14} />
                          </Button>
                          <Button variant="link" size="sm" className="text-danger p-1" onClick={() => handleDelete(file.id)} title="Delete">
                            <FaTrash size={14} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {fileList.length === 0 && (
                <div className="text-center py-5 text-muted">
                  <FaFolderOpen size={48} className="mb-3" style={{ opacity: 0.2 }} />
                  <p>No files uploaded yet. Click "Upload New File" to get started.</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>

      {/* Upload File Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header className="border-0 pb-0 px-4 pt-4">
          <Modal.Title className="fw-bold" style={{ fontSize: '1.2rem' }}>
            Upload New File
          </Modal.Title>
          <Button variant="link" className="text-muted p-0" onClick={() => setShowModal(false)}>
            <FaTimes size={18} />
          </Button>
        </Modal.Header>
        <Modal.Body className="px-4 py-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small" style={{ color: 'var(--gray-500)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Document Title *</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., 2026 Annual Budget Report"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="modern-input"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small" style={{ color: 'var(--gray-500)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category / Placement *</Form.Label>
              <Form.Select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="modern-input border-0 bg-light"
                style={{ padding: '0.75rem 1rem' }}
              >
                <option value="">Select category...</option>
                <option value="Transparency Seal">Transparency Seal (Annual Reports)</option>
                <option value="Full Disclosure">Full Disclosure Policy</option>
                <option value="Downloadable Forms">Application / Downloadable Forms</option>
                <option value="Bids & Awards">Bids & Awards</option>
                <option value="Ordinances">Ordinances</option>
                <option value="Resolutions">Resolutions</option>
                <option value="Executive Orders">Executive Orders</option>
                <option value="Citizen's Charter">Citizen's Charter</option>
                <option value="GAD">GAD (Gender and Development)</option>
                <option value="Bayanihan Grant">Bayanihan Grant</option>
                <option value="Fund Utilization">Report on Fund Utilization</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-4">
              <div className="border border-2 border-dashed rounded-4 p-5 text-center" style={{ borderColor: 'rgba(0,0,0,0.1) !important', background: '#fcfcfc' }}>
                <FaFolderOpen size={40} className="mb-3 text-muted opacity-50" />
                <h6 className="fw-bold mb-1">Click or drag file to this area to upload</h6>
                <p className="text-muted small mb-3">Support for a single PDF, DOC, or DOCX upload. Maximum size: 50MB.</p>
                <Form.Control type="file" accept=".pdf,.doc,.docx" className="d-none" id="fileUpload" />
                <Button as="label" htmlFor="fileUpload" variant="outline-primary" className="rounded-pill px-4" style={{ cursor: 'pointer', borderColor: 'var(--blue-logo)', color: 'var(--blue-logo)' }}>
                  Browse Files
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-4 pb-4 pt-0">
          <Button variant="light" onClick={() => setShowModal(false)} style={{ borderRadius: 'var(--radius-sm)' }}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="btn-primary-red d-flex align-items-center gap-2">
            Upload File
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ManageFiles
