import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash, FaBullhorn, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'

const ManageAnnouncements = () => {
  const navigate = useNavigate()
  const [announcementList, setAnnouncementList] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  
  const [title, setTitle] = useState('')
  const [externalLink, setExternalLink] = useState('')
  const [datePublished, setDatePublished] = useState(new Date().toISOString().split('T')[0])
  const [imageFile, setImageFile] = useState(null)
  
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
      return
    }
    fetchAnnouncements()
  }, [navigate])

  const fetchAnnouncements = async () => {
    setLoading(true)
    try {
      // Fetch only announcements
      const response = await fetch(`${API_BASE_URL}/admin/articles?type=announcement`)
      if (response.ok) {
        const data = await response.json()
        setAnnouncementList(data)
      }
    } catch (err) {
      console.error('Failed to fetch announcements:', err)
      setError('Failed to load official announcements.')
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
    setImageFile(null)
    setShowModal(true)
  }

  const openEditModal = (item) => {
    setEditMode(true)
    setEditId(item.id)
    setTitle(item.title)
    setExternalLink(item.external_link || '')
    setDatePublished(item.date_published || '')
    setImageFile(null)
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!title.trim()) {
      setError('Title/Caption is required')
      return
    }

    setSubmitting(true)
    setError('')
    
    const formData = new FormData()
    formData.append('title', title)
    formData.append('external_link', externalLink)
    formData.append('date_published', datePublished)
    formData.append('type', 'announcement') // Force type to announcement
    if (imageFile) {
      formData.append('image', imageFile)
    }

    try {
      const url = editMode 
        ? `${API_BASE_URL}/admin/articles/${editId}` 
        : `${API_BASE_URL}/admin/articles`
      
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSuccess(editMode ? 'Announcement updated successfully!' : 'Announcement published successfully!')
        setShowModal(false)
        fetchAnnouncements()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Failed to save announcement')
      }
    } catch (err) {
      console.error('Save error:', err)
      setError('A network error occurred.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/articles/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setSuccess('Announcement deleted successfully!')
          fetchAnnouncements()
          setTimeout(() => setSuccess(''), 3000)
        }
      } catch (err) {
        setError('Failed to delete announcement')
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
            <h5 className="fw-bold mb-0">Manage Official Announcements</h5>
            <small className="text-muted">{announcementList.length} total announcements</small>
          </div>
          <Button onClick={openAddModal} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> New Announcement
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
                        <th className="ps-4 py-3">Thumbnail</th>
                        <th className="py-3">Title / Announcement</th>
                        <th className="py-3">Date</th>
                        <th className="py-3">Link</th>
                        <th className="py-3 pe-4 text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcementList.map((item) => (
                        <tr key={item.id} className="align-middle">
                          <td className="ps-4 py-3">
                            <div style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden', background: '#eee' }}>
                              {item.image_path ? (
                                <img src={getImageUrl(item.image_path)} alt="" className="w-100 h-100 object-fit-cover" />
                              ) : (
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                                  <FaBullhorn size={16} />
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="fw-bold text-dark" style={{ maxWidth: '400px' }}>{item.title}</div>
                          </td>
                          <td className="py-3">
                            <small className="text-muted fw-bold">
                              {new Date(item.date_published).toLocaleDateString('en-US', { 
                                month: 'long', day: 'numeric', year: 'numeric' 
                              })}
                            </small>
                          </td>
                          <td className="py-3 text-truncate" style={{ maxWidth: '150px' }}>
                            <small className="text-primary">{item.external_link ? <a href={item.external_link} target="_blank" rel="noreferrer">Facebook Link</a> : 'No link'}</small>
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
              {!loading && announcementList.length === 0 && (
                <div className="text-center py-5 text-muted">
                  <FaBullhorn size={40} className="opacity-25 mb-3" />
                  <p>No official announcements yet. Click "New Announcement" to start.</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold">{editMode ? 'Edit Announcement' : 'New Announcement'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">ANNOUNCEMENT TEXT / TITLE *</Form.Label>
              <Form.Control 
                as="textarea"
                rows={3}
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="e.g. CONGRATULATIONS TO OUR NEW BOARD PASSERS!"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">PUBLISH DATE *</Form.Label>
              <Form.Control 
                type="date" 
                value={datePublished} 
                onChange={e => setDatePublished(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">FACEBOOK POST LINK (OPTIONAL)</Form.Label>
              <Form.Control 
                type="text" 
                value={externalLink} 
                onChange={e => setExternalLink(e.target.value)} 
                placeholder="https://facebook.com/..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">THUMBNAIL IMAGE (OPTIONAL)</Form.Label>
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

export default ManageAnnouncements
