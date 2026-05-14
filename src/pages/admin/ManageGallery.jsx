import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaImage, FaTimes } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'

const ManageGallery = () => {
  const navigate = useNavigate()
  const [galleryList, setGalleryList] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [caption, setCaption] = useState('')
  const [category, setCategory] = useState('general')
  const [imageFile, setImageFile] = useState(null)
  
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
      return
    }
    fetchGallery()
  }, [navigate])

  const fetchGallery = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/admin/gallery`)
      if (response.ok) {
        const data = await response.json()
        setGalleryList(data)
      }
    } catch (err) {
      setError('Failed to load gallery.')
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setCaption('')
    setCategory('general')
    setImageFile(null)
    setShowModal(true)
  }

  const handleSave = async () => {
    if (!caption.trim() || !imageFile) {
      setError('Caption and image are required')
      return
    }

    setSubmitting(true)
    const formData = new FormData()
    formData.append('title', caption)
    formData.append('category', category)
    formData.append('image', imageFile)

    try {
      const response = await fetch(`${API_BASE_URL}/admin/gallery`, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSuccess('Photo added successfully!')
        setShowModal(false)
        fetchGallery()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError('Failed to upload photo')
      }
    } catch (err) {
      setError('A network error occurred.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/gallery/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setSuccess('Photo deleted successfully!')
          fetchGallery()
          setTimeout(() => setSuccess(''), 3000)
        }
      } catch (err) {
        setError('Failed to delete photo')
      }
    }
  }

  const getImageUrl = (path) => {
    return `${API_BASE_URL.replace('/api', '/storage')}/${path}`
  }

  return (
    <>
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)', minHeight: '100vh' }}>
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div>
            <h5 className="fw-bold mb-0">Manage Gallery</h5>
            <small className="text-muted">{galleryList.length} total photos</small>
          </div>
          <Button onClick={openAddModal} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Add Photo
          </Button>
        </div>

        <Container fluid className="p-4">
          {success && <Alert variant="success">✅ {success}</Alert>}
          {error && <Alert variant="danger">❌ {error}</Alert>}

          {loading ? (
            <div className="text-center py-5 w-100">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <Row className="g-4">
              {galleryList.map((photo) => (
                <Col key={photo.id} md={4} xl={3}>
                  <Card className="modern-card border-0 h-100 shadow-sm overflow-hidden rounded-4">
                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                      <img src={getImageUrl(photo.image_path)} alt={photo.title} className="w-100 h-100 object-fit-cover" />
                      <div className="position-absolute top-0 end-0 m-2">
                        <Button variant="danger" size="sm" className="rounded-circle shadow" onClick={() => handleDelete(photo.id)}>
                          <FaTrash size={12} />
                        </Button>
                      </div>
                    </div>
                    <Card.Body className="p-3">
                      <div className="fw-bold small mb-1">{photo.title}</div>
                      <Badge bg="light" text="dark" className="border text-uppercase" style={{ fontSize: '0.65rem' }}>{photo.category}</Badge>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {!loading && galleryList.length === 0 && (
            <div className="text-center py-5 text-muted">
              <p>No photos in the gallery yet.</p>
            </div>
          )}
        </Container>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold">Add Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">CAPTION *</Form.Label>
              <Form.Control type="text" value={caption} onChange={e => setCaption(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">CATEGORY</Form.Label>
              <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="general">General</option>
                <option value="landmarks">Landmarks</option>
                <option value="events">Events</option>
                <option value="awards">Awards</option>
                <option value="government">Government</option>
                <option value="gad">GAD</option>
                <option value="leadership">Leadership</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">IMAGE *</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="light" onClick={() => setShowModal(false)} disabled={submitting}>Cancel</Button>
          <Button className="btn-primary-red" onClick={handleSave} disabled={submitting}>
            {submitting ? 'Uploading...' : 'Upload'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ManageGallery
