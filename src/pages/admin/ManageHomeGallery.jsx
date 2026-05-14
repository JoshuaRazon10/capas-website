import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaImage, FaTimes, FaHome, FaEdit } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'

const ManageHomeGallery = () => {
  const navigate = useNavigate()
  const [visualsList, setVisualsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingVisual, setEditingVisual] = useState(null)
  
  const [title, setTitle] = useState('')
  const [imageFile, setImageFile] = useState(null)
  
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
      return
    }
    fetchVisuals()
  }, [navigate])

  const fetchVisuals = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/gallery?category=homepage_visual`)
      if (response.ok) {
        const data = await response.json()
        setVisualsList(data)
      }
    } catch (err) {
      setError('Failed to load homepage visuals.')
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditingVisual(null)
    setTitle('')
    setImageFile(null)
    setShowModal(true)
  }

  const openEditModal = (visual) => {
    setEditingVisual(visual)
    setTitle(visual.title)
    setImageFile(null)
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!title.trim()) {
      setError('Title is required')
      return
    }

    if (!editingVisual && !imageFile) {
      setError('Image is required for new visuals')
      return
    }

    setSubmitting(true)
    const formData = new FormData()
    formData.append('title', title)
    formData.append('category', 'homepage_visual')
    if (imageFile) {
      formData.append('image', imageFile)
    }

    try {
      const url = editingVisual 
        ? `${API_BASE_URL}/admin/gallery/${editingVisual.id}` 
        : `${API_BASE_URL}/admin/gallery`
      
      if (editingVisual) {
        formData.append('_method', 'PUT')
      }

      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      })

      if (response.ok) {
        setSuccess(editingVisual ? 'Visual updated successfully!' : 'Visual added successfully!')
        setShowModal(false)
        fetchVisuals()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        const errorData = await response.json().catch(() => ({}))
        setError(errorData.message || 'Failed to save visual')
      }
    } catch (err) {
      setError('A network error occurred. Please check your connection.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this visual? It will be removed from the homepage slider.')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/gallery/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setSuccess('Visual deleted successfully!')
          fetchVisuals()
          setTimeout(() => setSuccess(''), 3000)
        }
      } catch (err) {
        setError('Failed to delete visual')
      }
    }
  }

  const getImageUrl = (path) => {
    if (!path) return ''
    if (path.startsWith('http')) return path
    return `${API_BASE_URL.replace('/api', '/storage')}/${path}`
  }

  return (
    <>
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)', minHeight: '100vh' }}>
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div>
            <h5 className="fw-bold mb-0">Manage Municipal Awards</h5>
            <small className="text-muted">{visualsList.length} slider items</small>
          </div>
          <Button onClick={openAddModal} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Add New Visual
          </Button>
        </div>

        <Container fluid className="p-4">
          <Alert variant="info" className="border-0 shadow-sm rounded-4 mb-4">
            <div className="d-flex align-items-center gap-3">
              <FaHome size={24} className="text-primary-red" />
              <div>
                <div className="fw-bold">Homepage Slider Management</div>
                <div className="small">The images uploaded here will appear in the <strong>"Municipal Gallery"</strong> section of the main homepage. Recommended size: 1920x1080px.</div>
              </div>
            </div>
          </Alert>

          {success && <Alert variant="success">✅ {success}</Alert>}
          {error && <Alert variant="danger">❌ {error}</Alert>}

          {loading ? (
            <div className="text-center py-5 w-100">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <Row className="g-4">
              {visualsList.map((photo) => (
                <Col key={photo.id} md={6} xl={4}>
                  <Card className="modern-card border-0 h-100 shadow-sm overflow-hidden rounded-4">
                    <div style={{ height: '250px', overflow: 'hidden', position: 'relative', background: '#000' }}>
                      <img src={getImageUrl(photo.image_path)} alt={photo.title} className="w-100 h-100 object-fit-contain" />
                      <div className="position-absolute top-0 end-0 m-2 d-flex gap-2">
                        <Button variant="light" size="sm" className="rounded-circle shadow" onClick={() => openEditModal(photo)}>
                          <FaEdit size={12} />
                        </Button>
                        <Button variant="danger" size="sm" className="rounded-circle shadow" onClick={() => handleDelete(photo.id)}>
                          <FaTrash size={12} />
                        </Button>
                      </div>
                    </div>
                    <Card.Body className="p-3">
                      <div className="fw-bold mb-1">{photo.title}</div>
                      <Badge bg="primary" className="text-uppercase" style={{ fontSize: '0.65rem' }}>GALLERY ITEM</Badge>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {!loading && visualsList.length === 0 && (
            <div className="text-center py-5 text-muted bg-white rounded-4 shadow-sm">
              <FaImage size={48} className="mb-3 opacity-25" />
              <p>No visuals uploaded yet. Add your first homepage slider image!</p>
            </div>
          )}
        </Container>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title className="fw-bold">{editingVisual ? 'Edit Visual Caption' : 'Add Homepage Visual'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">VISUAL TITLE / CAPTION *</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="e.g. New Clark City Stadium"
                  value={title} 
                  onChange={e => setTitle(e.target.value)} 
                  autoFocus
                />
                <Form.Text className="text-muted">This text will appear as the caption on the homepage slider.</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">IMAGE {editingVisual ? '(Leave blank to keep current)' : '*'}</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
                {editingVisual && (
                    <div className="mt-2 small text-muted">Current: {editingVisual.image_path.split('/').pop()}</div>
                )}
              </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="light" onClick={() => setShowModal(false)} disabled={submitting}>Cancel</Button>
            <Button className="btn-primary-red" type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : (editingVisual ? 'Update Visual' : 'Add to Slider')}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ManageHomeGallery
