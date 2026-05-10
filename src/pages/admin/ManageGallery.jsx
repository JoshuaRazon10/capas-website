import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Nav, Button, Modal, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaSignOutAlt, FaTachometerAlt, FaListAlt, FaFolderOpen, FaCog, FaImage, FaTimes } from 'react-icons/fa'
import capasLogo from '../../assets/images/capas.logo.jpg'

const ManageGallery = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [caption, setCaption] = useState('')
  const [success, setSuccess] = useState('')

  // Placeholder gallery data
  const [galleryList, setGalleryList] = useState([
    { id: 1, caption: 'Municipal Hall Night View', date: 'May 8, 2026', url: 'https://via.placeholder.com/150' },
    { id: 2, caption: 'Capas Day Celebration 2026', date: 'May 5, 2026', url: 'https://via.placeholder.com/150' },
    { id: 3, caption: 'Health Center Inauguration', date: 'Apr 20, 2026', url: 'https://via.placeholder.com/150' },
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
    setCaption('')
    setShowModal(true)
  }

  const handleSave = () => {
    if (!caption.trim()) return

    const newItem = {
      id: Date.now(),
      caption,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      url: 'https://via.placeholder.com/150' // Mock URL
    }
    setGalleryList(prev => [newItem, ...prev])
    setSuccess('Photo added to gallery successfully!')

    setShowModal(false)
    setCaption('')
    setTimeout(() => setSuccess(''), 3000)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this photo from the gallery?')) {
      setGalleryList(prev => prev.filter(p => p.id !== id))
      setSuccess('Photo deleted successfully!')
      setTimeout(() => setSuccess(''), 3000)
    }
  }

  return (
    <>
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)' }}>
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div>
            <h5 className="fw-bold mb-0">Manage Gallery</h5>
            <small className="text-muted">{galleryList.length} total photos in gallery</small>
          </div>
          <Button onClick={openAddModal} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Add Photo
          </Button>
        </div>

        <Container fluid className="p-4">
          {success && (
            <Alert variant="success" className="py-2 d-flex align-items-center gap-2" style={{ borderRadius: 'var(--radius-xs)', fontSize: '0.9rem' }}>
              ✅ {success}
            </Alert>
          )}

          <Row className="g-4">
            {galleryList.map((photo) => (
              <Col key={photo.id} md={4} xl={3}>
                <Card className="modern-card border-0 h-100" style={{ boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img src={photo.url} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                      <Button variant="danger" size="sm" className="rounded-circle p-1" style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleDelete(photo.id)}>
                        <FaTrash size={12} />
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="p-3">
                    <div className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{photo.caption}</div>
                    <div className="text-muted small">{photo.date}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {galleryList.length === 0 && (
            <div className="text-center py-5 text-muted">
              <FaImage size={48} className="mb-3" style={{ opacity: 0.2 }} />
              <p>No photos in the gallery yet. Click "Add Photo" to get started.</p>
            </div>
          )}
        </Container>
      </div>

      {/* Add Photo Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header className="border-0 pb-0 px-4 pt-4">
          <Modal.Title className="fw-bold" style={{ fontSize: '1.2rem' }}>
            Add Photo to Gallery
          </Modal.Title>
          <Button variant="link" className="text-muted p-0" onClick={() => setShowModal(false)}>
            <FaTimes size={18} />
          </Button>
        </Modal.Header>
        <Modal.Body className="px-4 py-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>Photo Caption *</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Annual Capas Festival"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="modern-input"
              />
            </Form.Group>
            
            <Form.Group className="mb-3 mt-4">
              <div className="border border-2 border-dashed rounded-4 p-5 text-center" style={{ borderColor: 'rgba(0,0,0,0.1) !important', background: '#fcfcfc' }}>
                <FaImage size={40} className="mb-3 text-muted opacity-50" />
                <h6 className="fw-bold mb-1">Click to upload photo</h6>
                <p className="text-muted small mb-3">Support for JPG, PNG, WEBP. Max 10MB.</p>
                <Form.Control type="file" accept="image/*" className="d-none" id="photoUpload" />
                <Button as="label" htmlFor="photoUpload" variant="outline-primary" className="rounded-pill px-4">
                  Browse
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-4 pb-4 pt-0">
          <Button variant="light" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="btn-primary-red">
            Upload to Gallery
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ManageGallery
