import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Modal, Form, Alert, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaEdit, FaMapMarkerAlt, FaUserTie, FaSearch } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'

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
    <div className="flex-grow-1" style={{ background: 'var(--gray-100)', minHeight: '100vh' }}>
      <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center shadow-sm">
        <div>
          <h5 className="fw-bold mb-0">Manage Barangay Officials</h5>
          <small className="text-muted">{barangays.length} barangays registered</small>
        </div>
        <div className="position-relative" style={{ width: '300px' }}>
          <Form.Control 
            type="text" 
            placeholder="Search barangay or captain..." 
            size="sm"
            className="rounded-pill px-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted" size={12} />
        </div>
      </div>

      <Container fluid className="p-4">
        {success && <Alert variant="success" className="border-0 shadow-sm">✅ {success}</Alert>}
        {error && <Alert variant="danger" className="border-0 shadow-sm">❌ {error}</Alert>}

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row className="g-4">
            {filteredBarangays.map((brgy) => (
              <Col key={brgy.id} lg={3} md={4} sm={6}>
                <Card className="modern-card border-0 h-100 shadow-sm overflow-hidden rounded-4">
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative', background: '#f8f9fa' }}>
                    {brgy.image_path ? (
                      <img src={getImageUrl(brgy.image_path)} alt={brgy.captain} className="w-100 h-100 object-fit-cover" />
                    ) : (
                      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted opacity-50">
                        <FaUserTie size={48} />
                        <span className="small mt-2">No Photo</span>
                      </div>
                    )}
                    <div className="position-absolute top-0 end-0 m-2">
                      <Button variant="white" size="sm" className="rounded-circle shadow-sm" onClick={() => openEditModal(brgy)}>
                        <FaEdit size={12} className="text-primary" />
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="p-3 text-center">
                    <Badge bg="danger" className="mb-2 text-uppercase" style={{ fontSize: '0.6rem' }}>Barangay {brgy.name}</Badge>
                    <div className="fw-bold text-dark">{brgy.captain}</div>
                    <small className="text-muted d-block mt-1" style={{ fontSize: '0.75rem' }}>PUNONG BARANGAY</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Form onSubmit={handleSave}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title className="fw-bold">Edit Barangay Official</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mb-4">
              <Badge bg="light" className="text-dark border px-3 py-2">Barangay {editingOfficial?.name}</Badge>
            </div>
            
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold text-uppercase">Punong Barangay Name *</Form.Label>
              <Form.Control 
                type="text" 
                value={captain} 
                onChange={e => setCaptain(e.target.value)} 
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold text-uppercase">Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={2}
                value={description} 
                onChange={e => setDescription(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold text-uppercase">Official Photo</Form.Label>
              {editingOfficial?.image_path && !removeImage && (
                <div className="mb-2 position-relative" style={{ width: '100px', height: '100px' }}>
                  <img src={getImageUrl(editingOfficial.image_path)} className="w-100 h-100 rounded object-fit-cover border" alt="current" />
                  <Button 
                    variant="danger" 
                    size="sm" 
                    className="position-absolute top-0 end-0 m-1 p-0 rounded-circle" 
                    style={{ width: '20px', height: '20px' }}
                    onClick={() => setRemoveImage(true)}
                  >
                    ×
                  </Button>
                </div>
              )}
              {removeImage && <Alert variant="warning" className="py-1 px-2 small mb-2">Image will be removed upon saving</Alert>}
              <Form.Control type="file" accept="image/*" onChange={e => {
                setImageFile(e.target.files[0])
                setRemoveImage(false)
              }} />
              <Form.Text className="text-muted">Recommended: Square aspect ratio (e.g. 500x500px)</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="light" onClick={() => setShowModal(false)} disabled={submitting}>Cancel</Button>
            <Button className="btn-primary-red" type="submit" disabled={submitting}>
              {submitting ? 'Saving...' : 'Update Official'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default ManageBarangays
