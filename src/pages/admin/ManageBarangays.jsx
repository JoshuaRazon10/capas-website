import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaEdit, FaMapMarkerAlt, FaUserTie, FaSearch } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'
import AdminToast from '../../components/AdminToast'

const ManageBarangays = () => {
  const navigate = useNavigate()
  const [barangays, setBarangays] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingOfficial, setEditingOfficial] = useState(null)
  
  const [captain, setCaptain] = useState('')
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [removeImage, setRemoveImage] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
      return
    }
    fetchBarangays()
  }, [navigate])

  const fetchBarangays = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/admin/barangays`)
      if (response.ok) {
        const data = await response.json()
        setBarangays(data)
      }
    } catch (err) {
      setError('Failed to load barangay officials.')
    } finally {
      setLoading(false)
    }
  }

  const openEditModal = (official) => {
    setEditingOfficial(official)
    setCaptain(official.captain)
    setDescription(official.description || '')
    setImageFile(null)
    setRemoveImage(false)
    setShowModal(true)
  }

  const handleSave = async (e) => {
    if (e) e.preventDefault()
    
    if (!captain.trim()) {
      setError('Captain name is required')
      return
    }

    setSubmitting(true)
    const formData = new FormData()
    formData.append('captain', captain)
    formData.append('description', description)
    formData.append('remove_image', removeImage ? 'true' : 'false')
    formData.append('_method', 'POST')
    
    if (imageFile) {
      formData.append('image', imageFile)
    }

    try {
      const response = await fetch(`${API_BASE_URL}/admin/barangays/${editingOfficial.id}`, {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      })

      if (response.ok) {
        setSuccess('Official updated successfully!')
        setShowModal(false)
        fetchBarangays()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        const errorData = await response.json().catch(() => ({}))
        setError(errorData.message || 'Failed to save official')
      }
    } catch (err) {
      setError('A network error occurred.')
    } finally {
      setSubmitting(false)
    }
  }

  const getImageUrl = (path) => {
    if (!path) return null
    if (path.startsWith('http')) return path
    return `${API_BASE_URL.replace('/api', '/storage')}/${path}`
  }

  const filteredBarangays = barangays.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.captain.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="admin-content">
      {/* Top Bar */}
      <div className="admin-topbar d-flex justify-content-between align-items-center">
        <div>
          <h5>Barangay Officials</h5>
          <small>{barangays.length} barangays registered</small>
        </div>
        <div className="admin-search-wrapper" style={{ width: '280px' }}>
          <FaSearch className="search-icon" size={13} />
          <input 
            type="text" 
            placeholder="Search barangay or captain..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Container fluid className="p-4">
        <AdminToast message={success} type="success" onClose={() => setSuccess('')} />
        <AdminToast message={error} type="error" onClose={() => setError('')} />

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" style={{ color: '#3b82f6' }} />
          </div>
        ) : (
          <Row className="g-3">
            {filteredBarangays.map((brgy) => (
              <Col key={brgy.id} lg={3} md={4} sm={6}>
                <div className="admin-photo-card h-100">
                  <div className="photo-wrapper" style={{ height: '200px', background: '#f1f5f9' }}>
                    {brgy.image_path ? (
                      <img src={getImageUrl(brgy.image_path)} alt={brgy.captain} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    ) : (
                      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center" style={{ color: '#cbd5e1' }}>
                        <FaUserTie size={40} />
                        <span style={{ fontSize: '0.72rem', marginTop: '8px' }}>No Photo</span>
                      </div>
                    )}
                    <div className="photo-actions">
                      <button className="admin-btn-action edit" style={{ background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} onClick={() => openEditModal(brgy)}>
                        <FaEdit size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <span className="admin-badge mb-2" style={{ background: 'rgba(239,68,68,0.08)', color: '#dc2626', textTransform: 'uppercase', fontSize: '0.6rem' }}>
                      Barangay {brgy.name}
                    </span>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9rem', marginTop: '4px' }}>{brgy.captain}</div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>Punong Barangay</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="admin-modal">
        <Form onSubmit={handleSave}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Barangay Official</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mb-4">
              <span className="admin-badge" style={{ background: 'rgba(100,116,139,0.08)', color: '#475569', padding: '6px 16px', fontSize: '0.78rem' }}>
                Barangay {editingOfficial?.name}
              </span>
            </div>
            
            <Form.Group className="mb-3">
              <Form.Label>Punong Barangay Name *</Form.Label>
              <Form.Control 
                type="text" 
                value={captain} 
                onChange={e => setCaptain(e.target.value)} 
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={2}
                value={description} 
                onChange={e => setDescription(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Official Photo</Form.Label>
              {editingOfficial?.image_path && !removeImage && (
                <div className="mb-2 position-relative" style={{ width: '80px', height: '80px' }}>
                  <img src={getImageUrl(editingOfficial.image_path)} className="w-100 h-100" style={{ borderRadius: '12px', objectFit: 'cover', border: '1px solid rgba(0,0,0,0.06)' }} alt="current" />
                  <button 
                    type="button"
                    className="position-absolute border-0 d-flex align-items-center justify-content-center" 
                    style={{ top: '-6px', right: '-6px', width: '20px', height: '20px', borderRadius: '50%', background: '#ef4444', color: 'white', fontSize: '0.65rem', cursor: 'pointer' }}
                    onClick={() => setRemoveImage(true)}
                  >
                    ×
                  </button>
                </div>
              )}
              {removeImage && <div className="admin-alert error mb-2" style={{ padding: '0.5rem 0.75rem', fontSize: '0.78rem' }}>Image will be removed upon saving</div>}
              <Form.Control type="file" accept="image/*" onChange={e => {
                setImageFile(e.target.files[0])
                setRemoveImage(false)
              }} />
              <Form.Text style={{ color: '#94a3b8', fontSize: '0.72rem' }}>Recommended: Square aspect ratio (e.g. 500x500px)</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="admin-btn-action" style={{ width: 'auto', padding: '0.5rem 1.25rem', fontSize: '0.82rem', fontWeight: 600 }} onClick={() => setShowModal(false)} disabled={submitting}>Cancel</button>
            <button className="admin-btn-primary" type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Update Official'}
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default ManageBarangays
