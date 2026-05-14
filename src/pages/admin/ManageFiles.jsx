import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaFolderOpen, FaFilePdf, FaFileWord, FaDownload, FaSearch, FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'

const ManageFiles = () => {
  const navigate = useNavigate()
  const [fileList, setFileList] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [year, setYear] = useState(new Date().getFullYear())
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  
  const [searchTerm, setSearchTerm] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const categories = [
    { name: 'Transparency Seal', icon: <FaFolderOpen />, color: '#14183d', types: ['Transparency Seal', 'Full Disclosure'] },
    { name: 'Bids & Awards', icon: <FaFolderOpen />, color: '#dc3545', types: ['Bids & Awards'] },
    { name: 'Citizen\'s Charter', icon: <FaFolderOpen />, color: '#198754', types: ['Citizen\'s Charter'] },
    { name: 'Downloadable Forms', icon: <FaFolderOpen />, color: '#0dcaf0', types: ['Downloadable Forms'] },
    { name: 'Ordinances', icon: <FaFolderOpen />, color: '#6610f2', types: ['Ordinances'] },
    { name: 'Resolutions', icon: <FaFolderOpen />, color: '#6f42c1', types: ['Resolutions'] },
    { name: 'Executive Orders', icon: <FaFolderOpen />, color: '#d63384', types: ['Executive Orders'] },
    { name: 'Municipal Articles', icon: <FaNewspaper />, color: '#ffc107', types: ['Municipal Articles'] },
    { name: 'Municipal Events', icon: <FaFolderOpen />, color: '#17a2b8', types: ['Municipal Events'] },
    { name: 'GAD', icon: <FaFolderOpen />, color: '#fd7e14', types: ['GAD'] },
    { name: 'Bayanihan Grant', icon: <FaFolderOpen />, color: '#20c997', types: ['Bayanihan Grant'] },
    { name: 'Fund Utilization', icon: <FaFolderOpen />, color: '#0d6efd', types: ['Fund Utilization'] },
  ]

  const availableYears = []
  for (let y = 2020; y <= 2026; y++) {
    availableYears.push(y)
  }

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
      return
    }
    fetchFiles()
  }, [navigate])

  const fetchFiles = async () => {
    setLoading(true)
    try {
      const [docsRes, newsRes, eventsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/admin/documents`),
        fetch(`${API_BASE_URL}/admin/articles?type=news`),
        fetch(`${API_BASE_URL}/admin/articles?type=event`)
      ])
      
      if (docsRes.ok && newsRes.ok && eventsRes.ok) {
        const docsData = await docsRes.json()
        const newsData = await newsRes.json()
        const eventsData = await eventsRes.json()
        setFileList([...docsData, ...newsData, ...eventsData])
      }
    } catch (err) {
      setError('Failed to load records.')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    const isArticle = selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events'
    if (!title.trim() || (!isArticle && !file)) {
      setError('Title and File are required')
      return
    }

    setSubmitting(true)
    const endpoint = isArticle ? `${API_BASE_URL}/admin/articles` : `${API_BASE_URL}/admin/documents`
    
    const formData = new FormData()
    formData.append('title', title)
    formData.append('type', selectedCategory === 'Municipal Articles' ? 'news' : (selectedCategory === 'Municipal Events' ? 'event' : (type || selectedCategory)))
    
    if (isArticle) {
      formData.append('image', file)
      formData.append('external_link', description) // We'll use description field for the link in modal
      formData.append('date_published', year) // We'll use year field for date in modal
    } else {
      formData.append('file', file)
      formData.append('year', year)
      formData.append('description', description)
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSuccess('Record saved successfully!')
        setShowModal(false)
        fetchFiles()
        setTitle('')
        setYear(new Date().getFullYear())
        setDescription('')
        setFile(null)
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError('Failed to save record')
      }
    } catch (err) {
      setError('A network error occurred.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id, isArticle) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      const endpoint = isArticle ? `${API_BASE_URL}/admin/articles/${id}` : `${API_BASE_URL}/admin/documents/${id}`
      try {
        const response = await fetch(endpoint, {
          method: 'DELETE',
        })
        if (response.ok) {
          setSuccess('Deleted successfully!')
          fetchFiles()
          setTimeout(() => setSuccess(''), 3000)
        }
      } catch (err) {
        setError('Failed to delete.')
      }
    }
  }

  const getFileIcon = (ext) => {
    const e = ext ? ext.toLowerCase() : ''
    if (e === 'pdf') return <FaFilePdf size={20} className="text-danger" />
    if (['doc', 'docx'].includes(e)) return <FaFileWord size={20} style={{ color: 'var(--blue-logo)' }} />
    return <FaFolderOpen size={20} className="text-secondary" />
  }

  const filteredFiles = fileList.filter(f => {
    const matchesSearch = f.title.toLowerCase().includes(searchTerm.toLowerCase())
    const isArticle = selectedCategory === 'Municipal Articles'
    const isEvent = selectedCategory === 'Municipal Events'
    
    if (isArticle) return matchesSearch && f.type === 'news'
    if (isEvent) return matchesSearch && f.type === 'event'
    
    const catConfig = categories.find(c => c.name === selectedCategory)
    const matchesCat = catConfig ? catConfig.types.includes(f.type) : false
    return matchesSearch && matchesCat
  })

  // Show Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="admin-files-page p-4 bg-light min-vh-100">
        <div className="mb-5 text-center">
          <h2 className="fw-bold mb-2">Document Management</h2>
          <p className="text-muted">Select a category to manage its files.</p>
        </div>
        
        <Container>
          <Row className="g-4">
            {categories.map((cat, idx) => (
              <Col key={idx} md={4} lg={3}>
                <Card 
                  className="border-0 shadow-sm rounded-4 h-100 text-center p-4 hover-lift cursor-pointer transition-all"
                  onClick={() => setSelectedCategory(cat.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="icon-wrapper mb-3 p-3 rounded-circle bg-light d-inline-block mx-auto" style={{ color: cat.color }}>
                    {cat.icon}
                  </div>
                  <h6 className="fw-bold mb-0">{cat.name}</h6>
                  <small className="text-muted">
                    {fileList.filter(f => cat.types.includes(f.type)).length} Files
                  </small>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }

  // Show Category-Specific View
  return (
    <>
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)', minHeight: '100vh' }}>
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center border-bottom shadow-sm">
          <div className="d-flex align-items-center gap-3">
            <Button variant="light" className="rounded-circle" onClick={() => setSelectedCategory(null)}>
              ←
            </Button>
            <div>
              <h5 className="fw-bold mb-0">{selectedCategory}</h5>
              <small className="text-muted">Managing {filteredFiles.length} files in this category</small>
            </div>
          </div>
          <Button onClick={() => setShowModal(true)} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Upload New File
          </Button>
        </div>

        <Container fluid className="p-4">
          {success && <Alert variant="success" className="rounded-4">✅ {success}</Alert>}
          {error && <Alert variant="danger" className="rounded-4">❌ {error}</Alert>}

          <Card className="modern-card border-0 mb-4 shadow-sm rounded-4">
            <Card.Body className="p-3">
              <div className="position-relative">
                <FaSearch size={14} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-400)' }} />
                <Form.Control 
                  placeholder={`Search in ${selectedCategory}...`} 
                  className="ps-5 border-0 bg-light rounded-pill"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </Card.Body>
          </Card>

          <Card className="modern-card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="py-3 ps-4 border-0 small fw-bold text-muted">DOCUMENT TITLE</th>
                    {['Transparency Seal', 'Bayanihan Grant', 'Fund Utilization', 'Downloadable Forms'].includes(selectedCategory) && (
                      <th className="py-3 border-0 small fw-bold text-muted">YEAR/SUB</th>
                    )}
                    {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') && (
                      <th className="py-3 border-0 small fw-bold text-muted">DATE/LINK</th>
                    )}
                    <th className="py-3 border-0 small fw-bold text-muted text-end pe-4">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="5" className="text-center py-5"><Spinner animation="border" variant="danger" /></td></tr>
                  ) : filteredFiles.length > 0 ? (
                    filteredFiles.map(f => (
                      <tr key={f.id} className="align-middle">
                        <td className="py-3 ps-4">
                          <div className="d-flex align-items-center gap-3">
                            {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') ? <FaNewspaper size={20} style={{ color: '#ffc107' }} /> : getFileIcon(f.file_extension)}
                            <div>
                              <div className="fw-bold">{f.title}</div>
                              <small className="text-muted">{(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') ? (f.external_link ? 'External Link Post' : 'Image Only') : f.file_name}</small>
                            </div>
                          </div>
                        </td>
                        {['Transparency Seal', 'Bayanihan Grant', 'Fund Utilization', 'Downloadable Forms'].includes(selectedCategory) && (
                          <td>
                            <small className="text-muted">{f.year}</small>
                            {f.description && <div className="small text-primary">{f.description}</div>}
                          </td>
                        )}
                        {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') && (
                          <td>
                            <small className="text-muted">{f.date_published}</small>
                            {f.external_link && (
                              <div className="small">
                                <a href={f.external_link} target="_blank" rel="noreferrer" className="text-decoration-none d-flex align-items-center gap-1">
                                  <FaExternalLinkAlt size={10} /> View Story
                                </a>
                              </div>
                            )}
                          </td>
                        )}
                        <td className="text-end pe-4">
                          <Button variant="link" className="text-danger" onClick={() => handleDelete(f.id, (selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events'))}>
                            <FaTrash size={14} />
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan="5" className="text-center py-5 text-muted">No files found in this category.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </Container>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton className="border-0"><Modal.Title className="fw-bold">Upload to {selectedCategory}</Modal.Title></Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">DOCUMENT TITLE *</Form.Label>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., Annual Budget Report" />
              </Form.Group>
              
              {selectedCategory === 'Transparency Seal' && (
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">TYPE *</Form.Label>
                  <Form.Select value={type} onChange={e => setType(e.target.value)}>
                    <option value="">Select type...</option>
                    <option value="Transparency Seal">Transparency Seal</option>
                    <option value="Full Disclosure">Full Disclosure</option>
                  </Form.Select>
                </Form.Group>
              )}
              
              {['Transparency Seal', 'Bayanihan Grant', 'Fund Utilization', 'Downloadable Forms'].includes(selectedCategory) && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">YEAR *</Form.Label>
                    <Form.Select value={year} onChange={e => setYear(e.target.value)}>
                      {availableYears.sort((a, b) => b - a).map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">SUB-CATEGORY (OPTIONAL)</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control 
                        type="text" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)} 
                        placeholder="e.g., Business Permits" 
                      />
                      <Form.Select 
                        style={{ width: '200px' }}
                        onChange={e => setDescription(e.target.value)}
                        value=""
                      >
                        <option value="">Quick Select...</option>
                        <option value="New Building Permit">New Building Permit</option>
                        <option value="Electrical Permit Form">Electrical Permit Form</option>
                        <option value="Application Form for New Business">Application Form for New Business</option>
                        <option value="Application Form for Renewal">Application Form for Renewal</option>
                        <option value="Fencing Permit Form">Fencing Permit Form</option>
                        <option value="Certificate of Occupancy Application Form and Completion Form">Certificate of Occupancy Group</option>
                        <option value="Building Permit Form and Other Ancillary Permit Form">Building Permit & Ancillary Group</option>
                        <option value="Annual Reports">Annual Reports</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </>
              )}

              {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') ? (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">DATE PUBLISHED (e.g., Dec 25, 2023)</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={year} 
                      onChange={e => setYear(e.target.value)} 
                      placeholder="Leave blank for today" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">FACEBOOK/EXTERNAL STORY LINK</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={description} 
                      onChange={e => setDescription(e.target.value)} 
                      placeholder="https://facebook.com/..." 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">FEATURE IMAGE (OPTIONAL)</Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
                  </Form.Group>
                </>
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">FILE (PDF, DOC, DOCX) *</Form.Label>
                  <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={e => setFile(e.target.files[0])} />
                </Form.Group>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="light" onClick={() => setShowModal(false)} disabled={submitting}>Cancel</Button>
            <Button className="btn-primary-red" onClick={handleSave} disabled={submitting}>
              {submitting ? 'Uploading...' : 'Upload'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <style>{`
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  )
}

export default ManageFiles
