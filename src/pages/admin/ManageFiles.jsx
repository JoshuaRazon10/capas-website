import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal, Form, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaFolderOpen, FaFilePdf, FaFileWord, FaSearch, FaNewspaper, FaExternalLinkAlt, FaArrowLeft, FaShieldAlt, FaGavel, FaFileAlt, FaHandHoldingHeart, FaChartBar, FaBalanceScale, FaFileSignature, FaCalendarCheck } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'
import AdminToast from '../../components/AdminToast'

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
    { name: 'Transparency Seal', icon: <FaShieldAlt />, color: '#6366f1', bg: 'rgba(99,102,241,0.08)', types: ['Transparency Seal', 'Full Disclosure'] },
    { name: 'Bids & Awards', icon: <FaGavel />, color: '#ef4444', bg: 'rgba(239,68,68,0.08)', types: ['Bids & Awards'] },
    { name: 'Citizen\'s Charter', icon: <FaFileAlt />, color: '#10b981', bg: 'rgba(16,185,129,0.08)', types: ['Citizen\'s Charter'] },
    { name: 'Downloadable Forms', icon: <FaFileSignature />, color: '#06b6d4', bg: 'rgba(6,182,212,0.08)', types: ['Downloadable Forms'] },
    { name: 'Ordinances', icon: <FaBalanceScale />, color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', types: ['Ordinances'] },
    { name: 'Resolutions', icon: <FaFileAlt />, color: '#a855f7', bg: 'rgba(168,85,247,0.08)', types: ['Resolutions'] },
    { name: 'Executive Orders', icon: <FaGavel />, color: '#ec4899', bg: 'rgba(236,72,153,0.08)', types: ['Executive Orders'] },
    { name: 'Municipal Articles', icon: <FaNewspaper />, color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', types: ['Municipal Articles'] },
    { name: 'Municipal Events', icon: <FaCalendarCheck />, color: '#14b8a6', bg: 'rgba(20,184,166,0.08)', types: ['Municipal Events'] },
    { name: 'GAD', icon: <FaHandHoldingHeart />, color: '#f97316', bg: 'rgba(249,115,22,0.08)', types: ['GAD'] },
    { name: 'Bayanihan Grant', icon: <FaHandHoldingHeart />, color: '#22c55e', bg: 'rgba(34,197,94,0.08)', types: ['Bayanihan Grant'] },
    { name: 'Fund Utilization', icon: <FaChartBar />, color: '#3b82f6', bg: 'rgba(59,130,246,0.08)', types: ['Fund Utilization'] },
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
    if (e === 'pdf') return <FaFilePdf size={18} style={{ color: '#ef4444' }} />
    if (['doc', 'docx'].includes(e)) return <FaFileWord size={18} style={{ color: '#3b82f6' }} />
    return <FaFolderOpen size={18} style={{ color: '#94a3b8' }} />
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

  // Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="admin-content">
        <div className="admin-topbar">
          <h5>Document Management</h5>
          <small>Select a category to manage its files</small>
        </div>
        
        <Container fluid className="p-4">
          <Row className="g-3">
            {categories.map((cat, idx) => (
              <Col key={idx} md={4} lg={3} xl={2}>
                <div className="admin-file-category" onClick={() => setSelectedCategory(cat.name)}>
                  <div className="cat-icon" style={{ background: cat.bg, color: cat.color }}>
                    {cat.icon}
                  </div>
                  <h6>{cat.name}</h6>
                  <span className="count">
                    {fileList.filter(f => cat.types.includes(f.type)).length} Files
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }

  // Category Detail View
  const currentCat = categories.find(c => c.name === selectedCategory)

  return (
    <>
      <div className="admin-content">
        {/* Top Bar */}
        <div className="admin-topbar d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <button className="admin-btn-action" onClick={() => setSelectedCategory(null)} style={{ flexShrink: 0 }}>
              <FaArrowLeft size={12} />
            </button>
            <div>
              <h5 className="d-flex align-items-center gap-2">
                <span style={{ color: currentCat?.color }}>{currentCat?.icon}</span>
                {selectedCategory}
              </h5>
              <small>{filteredFiles.length} files in this category</small>
            </div>
          </div>
          <button onClick={() => setShowModal(true)} className="admin-btn-primary">
            <FaPlus size={12} /> Upload File
          </button>
        </div>

        <Container fluid className="p-4">
          <AdminToast message={success} type="success" onClose={() => setSuccess('')} />
          <AdminToast message={error} type="error" onClose={() => setError('')} />

          {/* Search */}
          <div className="admin-search-wrapper mb-4" style={{ maxWidth: '400px' }}>
            <FaSearch className="search-icon" size={13} />
            <input 
              placeholder={`Search in ${selectedCategory}...`} 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="admin-card">
            <div className="table-responsive">
              <table className="admin-table table mb-0">
                <thead>
                  <tr>
                    <th style={{ paddingLeft: '1.5rem' }}>Document Title</th>
                    {['Transparency Seal', 'Bayanihan Grant', 'Fund Utilization', 'Downloadable Forms'].includes(selectedCategory) && (
                      <th>Year / Sub</th>
                    )}
                    {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') && (
                      <th>Date / Link</th>
                    )}
                    <th style={{ textAlign: 'right', paddingRight: '1.5rem' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan="5" className="text-center py-5"><Spinner animation="border" style={{ color: '#3b82f6' }} /></td></tr>
                  ) : filteredFiles.length > 0 ? (
                    filteredFiles.map(f => (
                      <tr key={f.id}>
                        <td style={{ paddingLeft: '1.5rem' }}>
                          <div className="d-flex align-items-center gap-3">
                            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: currentCat?.bg || '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') ? <FaNewspaper size={16} style={{ color: currentCat?.color }} /> : getFileIcon(f.file_extension)}
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.85rem' }}>{f.title}</div>
                              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                                {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') ? (f.external_link ? 'External Link Post' : 'Image Only') : f.file_name}
                              </div>
                            </div>
                          </div>
                        </td>
                        {['Transparency Seal', 'Bayanihan Grant', 'Fund Utilization', 'Downloadable Forms'].includes(selectedCategory) && (
                          <td>
                            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{f.year}</div>
                            {f.description && <div style={{ fontSize: '0.72rem', color: '#3b82f6' }}>{f.description}</div>}
                          </td>
                        )}
                        {(selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events') && (
                          <td>
                            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{f.date_published}</div>
                            {f.external_link && (
                              <a href={f.external_link} target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', textDecoration: 'none', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
                                <FaExternalLinkAlt size={9} /> View Story
                              </a>
                            )}
                          </td>
                        )}
                        <td style={{ textAlign: 'right', paddingRight: '1.5rem' }}>
                          <button className="admin-btn-action delete" onClick={() => handleDelete(f.id, (selectedCategory === 'Municipal Articles' || selectedCategory === 'Municipal Events'))}>
                            <FaTrash size={13} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">
                        <div className="admin-empty-state">
                          <div className="icon-wrapper" style={{ background: currentCat?.bg, color: currentCat?.color }}>{currentCat?.icon}</div>
                          <p>No files found in this category.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Container>

        {/* Upload Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered className="admin-modal">
          <Modal.Header closeButton>
            <Modal.Title>Upload to {selectedCategory}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Document Title *</Form.Label>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., Annual Budget Report" />
              </Form.Group>
              
              {selectedCategory === 'Transparency Seal' && (
                <Form.Group className="mb-3">
                  <Form.Label>Type *</Form.Label>
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
                    <Form.Label>Year *</Form.Label>
                    <Form.Select value={year} onChange={e => setYear(e.target.value)}>
                      {availableYears.sort((a, b) => b - a).map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Sub-Category (Optional)</Form.Label>
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
                    <Form.Label>Date Published (e.g., Dec 25, 2023)</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={year} 
                      onChange={e => setYear(e.target.value)} 
                      placeholder="Leave blank for today" 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Facebook / External Story Link</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={description} 
                      onChange={e => setDescription(e.target.value)} 
                      placeholder="https://facebook.com/..." 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Feature Image (Optional)</Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
                  </Form.Group>
                </>
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>File (PDF, DOC, DOCX) *</Form.Label>
                  <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={e => setFile(e.target.files[0])} />
                </Form.Group>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="admin-btn-action" style={{ width: 'auto', padding: '0.5rem 1.25rem', fontSize: '0.82rem', fontWeight: 600 }} onClick={() => setShowModal(false)} disabled={submitting}>Cancel</button>
            <button className="admin-btn-primary" onClick={handleSave} disabled={submitting}>
              {submitting ? 'Uploading...' : 'Upload'}
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default ManageFiles
