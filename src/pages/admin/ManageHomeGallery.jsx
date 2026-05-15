import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal, Form, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaTrash, FaImage, FaEdit, FaInfoCircle } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'
import AdminToast from '../../components/AdminToast'

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
      {/* Top Bar */}
      <div className="admin-topbar d-flex justify-content-between align-items-center">
        <div>
          <h5>Municipal Awards</h5>
          <small>{visualsList.length} slider items</small>
        </div>
        <button onClick={openAddModal} className="admin-btn-primary">
          <FaPlus size={12} /> Add New Visual
        </button>
      </div>

      <Container fluid className="p-4">
        {/* Info Banner */}
        <div className="admin-card mb-4" style={{ borderLeft: '4px solid #800000' }}>
          <div className="d-flex align-items-center gap-3 p-3">
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(128,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FaInfoCircle style={{ color: '#800000' }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>Homepage Slider Management</div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>The images uploaded here will appear in the <strong>"Municipal Gallery"</strong> section of the main homepage. Recommended size: 1920×1080px.</div>
            </div>
          </div>
        </div>

        <AdminToast message={success} type="success" onClose={() => setSuccess('')} />
        <AdminToast message={error} type="error" onClose={() => setError('')} />

        {loading ? (
          <div className="text-center py-5 w-100">
            <Spinner animation="border" style={{ color: '#3b82f6' }} />
          </div>
        ) : visualsList.length > 0 ? (
          <Row className="g-3">
            {visualsList.map((photo) => (
              <Col key={photo.id} md={6} xl={4}>
                <div className="admin-photo-card h-100">
                  <div className="photo-wrapper" style={{ height: '250px', background: '#0f172a' }}>
                    <img src={getImageUrl(photo.image_path)} alt={photo.title} className="w-100 h-100" style={{ objectFit: 'contain' }} />
                    <div className="photo-actions">
                      <button className="admin-btn-action edit" style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} onClick={() => openEditModal(photo)}>
                        <FaEdit size={12} />
                      </button>
                      <button className="admin-btn-action delete" style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} onClick={() => handleDelete(photo.id)}>
                        <FaTrash size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a', marginBottom: '4px' }}>{photo.title}</div>
                    <span className="admin-badge" style={{ background: 'rgba(128,0,0,0.08)', color: '#800000', textTransform: 'uppercase' }}>Gallery Item</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="admin-card">
            <div className="admin-empty-state">
              <div className="icon-wrapper"><FaImage /></div>
              <p>No visuals uploaded yet. Add your first homepage slider image!</p>
            </div>
          </div>
        )}
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="admin-modal">
        <Form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <Modal.Header closeButton>
            <Modal.Title>{editingVisual ? 'Edit Visual Caption' : 'Add Homepage Visual'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Visual Title / Caption *</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="e.g. New Clark City Stadium"
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                autoFocus
              />
              <Form.Text style={{ color: '#94a3b8', fontSize: '0.72rem' }}>This text will appear as the caption on the homepage slider.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image {editingVisual ? '(Leave blank to keep current)' : '*'}</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
              {editingVisual && (
                <div className="mt-2" style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Current: {editingVisual.image_path.split('/').pop()}</div>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="admin-btn-action" style={{ width: 'auto', padding: '0.5rem 1.25rem', fontSize: '0.82rem', fontWeight: 600 }} onClick={() => setShowModal(false)} disabled={submitting}>Cancel</button>
            <button className="admin-btn-primary" type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : (editingVisual ? 'Update Visual' : 'Add to Slider')}
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ManageHomeGallery
