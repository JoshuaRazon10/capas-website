import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal, Form, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaImage, FaTimes } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'
import AdminToast from '../../components/AdminToast'

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
      {/* Top Bar */}
      <div className="admin-topbar d-flex justify-content-between align-items-center">
        <div>
          <h5>Photo Gallery</h5>
          <small>{galleryList.length} total photos</small>
        </div>
        <button onClick={openAddModal} className="admin-btn-primary">
          <FaPlus size={12} /> Add Photo
        </button>
      </div>

      <Container fluid className="p-4">
        <AdminToast message={success} type="success" onClose={() => setSuccess('')} />
        <AdminToast message={error} type="error" onClose={() => setError('')} />

        {loading ? (
          <div className="text-center py-5 w-100">
            <Spinner animation="border" style={{ color: '#3b82f6' }} />
          </div>
        ) : galleryList.length > 0 ? (
          <Row className="g-3">
            {galleryList.map((photo) => (
              <Col key={photo.id} md={4} xl={3}>
                <div className="admin-photo-card h-100">
                  <div className="photo-wrapper" style={{ height: '200px' }}>
                    <img src={getImageUrl(photo.image_path)} alt={photo.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    <div className="photo-actions">
                      <button className="admin-btn-action delete" style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} onClick={() => handleDelete(photo.id)}>
                        <FaTrash size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#0f172a', marginBottom: '4px' }}>{photo.title}</div>
                    <span className="admin-badge" style={{ background: 'rgba(100,116,139,0.08)', color: '#64748b', textTransform: 'uppercase' }}>
                      {photo.category}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="admin-card">
            <div className="admin-empty-state">
              <div className="icon-wrapper"><FaImage /></div>
              <p>No photos in the gallery yet. Add your first photo!</p>
            </div>
          </div>
        )}
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="admin-modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Caption *</Form.Label>
              <Form.Control type="text" value={caption} onChange={e => setCaption(e.target.value)} placeholder="Enter a descriptive caption" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
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
              <Form.Label>Image *</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="admin-btn-action" style={{ width: 'auto', padding: '0.5rem 1.25rem', fontSize: '0.82rem', fontWeight: 600 }} onClick={() => setShowModal(false)} disabled={submitting}>Cancel</button>
          <button className="admin-btn-primary" onClick={handleSave} disabled={submitting}>
            {submitting ? 'Uploading...' : 'Upload'}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ManageGallery
