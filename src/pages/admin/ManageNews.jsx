import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash, FaNewspaper, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'

const ManageNews = () => {
  const navigate = useNavigate()
  const [newsList, setNewsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  
  const [title, setTitle] = useState('')
  const [externalLink, setExternalLink] = useState('')
  const [datePublished, setDatePublished] = useState(new Date().toISOString().split('T')[0])
  const [type, setType] = useState('news')
  const [imageFile, setImageFile] = useState(null)
  
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
      return
    }
    fetchNews()
  }, [navigate])

  const fetchNews = async () => {
    setLoading(true)
    try {
      // Fetch only news and events, not announcements
      const response = await fetch(`${API_BASE_URL}/admin/articles`)
      if (response.ok) {
        const data = await response.json()
        setNewsList(data.filter(item => item.type !== 'announcement'))
      }
    } catch (err) {
      console.error('Failed to fetch news:', err)
      setError('Failed to load news articles.')
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditMode(false)
    setEditId(null)
    setTitle('')
    setExternalLink('')
    setDatePublished(new Date().toISOString().split('T')[0])
    setType('news')
    setImageFile(null)
    setShowModal(true)
  }

  const openEditModal = (item) => {
    setEditMode(true)
    setEditId(item.id)
    setTitle(item.title)
    setExternalLink(item.external_link || '')
    setDatePublished(item.date_published || '')
    setType(item.type || 'news')
    setImageFile(null)
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!title.trim()) {
      setError('Title is required')
      return
    }

    setSubmitting(true)
    setError('')
    
    const formData = new FormData()
    formData.append('title', title)
    formData.append('external_link', externalLink)
    formData.append('date_published', datePublished)
    formData.append('type', type)
    if (imageFile) {
      formData.append('image', imageFile)
    }

    try {
      const url = editMode 
        ? `${API_BASE_URL}/admin/articles/${editId}` 
        : `${API_BASE_URL}/admin/articles`
      
      const response = await fetch(url, {
        method: 'POST', // Use POST for both because of multipart/form-data support in PHP
        body: formData,
      })

      if (response.ok) {
        setSuccess(editMode ? 'Article updated successfully!' : 'Article created successfully!')
        setShowModal(false)
        fetchNews()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Failed to save article')
      }
    } catch (err) {
      console.error('Save error:', err)
      setError('A network error occurred.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/articles/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setSuccess('Article deleted successfully!')
          fetchNews()
          setTimeout(() => setSuccess(''), 3000)
        }
      } catch (err) {
        setError('Failed to delete article')
      }
    }
  }

  const getImageUrl = (path) => {
    if (!path) return null
    return `${API_BASE_URL.replace('/api', '/storage')}/${path}`
  }

  return (
    <>
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)', minHeight: '100vh' }}>
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div>
            <h5 className="fw-bold mb-0">Manage News & Articles</h5>
            <small className="text-muted">{newsList.length} total entries</small>
          </div>
          <Button onClick={openAddModal} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Add New Post
          </Button>
        </div>

        <Container fluid className="p-4">
          {success && <Alert variant="success" className="py-2">✅ {success}</Alert>}
          {error && <Alert variant="danger" className="py-2">❌ {error}</Alert>}

          <Card className="modern-card border-0 shadow-sm overflow-hidden rounded-4">
            <Card.Body className="p-0">
              {loading ? (
                <div className="text-center py-5">
                  <Spinner animation="border" variant="danger" />
                  <p className="mt-2 text-muted">Loading announcements...</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="ps-4 py-3">Image</th>
                        <th className="py-3">Type</th>
                        <th className="py-3">Title / Caption</th>
                        <th className="py-3">External Link</th>
                        <th className="py-3 pe-4 text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newsList.map((item) => (
                        <tr key={item.id} className="align-middle">
                          <td className="ps-4 py-3">
                            <div style={{ width: '60px', height: '45px', borderRadius: '8px', overflow: 'hidden', background: '#eee' }}>
                              {item.image_path ? (
                                <img src={getImageUrl(item.image_path)} alt="" className="w-100 h-100 object-fit-cover" />
                              ) : (
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                                  <FaNewspaper size={18} />
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="py-3">
                            <Badge bg={item.type === 'news' ? 'warning' : 'info'} className="text-dark">
                              {item.type === 'news' ? 'NEWS' : 'ARTICLE'}
                            </Badge>
                          </td>
                          <td className="py-3">
                            <div className="fw-bold text-dark">{item.title}</div>
                            <small className="text-muted">{item.date_published}</small>
                          </td>
                          <td className="py-3 text-truncate" style={{ maxWidth: '200px' }}>
                            <small className="text-primary">{item.external_link || 'No link'}</small>
                          </td>
                          <td className="py-3 pe-4 text-end">
                            <Button variant="link" className="text-primary p-2" onClick={() => openEditModal(item)}><FaEdit /></Button>
                            <Button variant="link" className="text-danger p-2" onClick={() => handleDelete(item.id)}><FaTrash /></Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {!loading && newsList.length === 0 && (
                <div className="text-center py-5 text-muted">
                  <p>No announcements found. Add one to show on the homepage.</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold">{editMode ? 'Edit Post' : 'New Post'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">CATEGORY *</Form.Label>
              <Form.Select value={type} onChange={e => setType(e.target.value)}>
                <option value="news">News Article</option>
                <option value="event">Municipal Article</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">CAPTION / TITLE *</Form.Label>
              <Form.Control 
                type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="e.g. ANNOUNCEMENT JOBSEEKERS"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">DATE PUBLISHED</Form.Label>
              <Form.Control 
                type="date" 
                value={datePublished} 
                onChange={e => setDatePublished(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">FACEBOOK LINK (OPTIONAL)</Form.Label>
              <Form.Control 
                type="text" 
                value={externalLink} 
                onChange={e => setExternalLink(e.target.value)} 
                placeholder="https://facebook.com/..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">UPLOAD IMAGE (OPTIONAL)</Form.Label>
              <Form.Control 
                type="file" 
                accept="image/*" 
                onChange={e => setImageFile(e.target.files[0])}
              />
              {editMode && !imageFile && <small className="text-muted d-block">Leave empty to keep existing image</small>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button variant="light" onClick={() => setShowModal(false)} disabled={submitting}>Cancel</Button>
          <Button className="btn-primary-red" onClick={handleSave} disabled={submitting}>
            {submitting ? 'Saving...' : editMode ? 'Update' : 'Publish'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ManageNews
