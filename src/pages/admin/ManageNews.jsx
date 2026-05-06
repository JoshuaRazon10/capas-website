import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Nav, Button, Modal, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaTachometerAlt, FaListAlt, FaNewspaper, FaTimes } from 'react-icons/fa'

const ManageNews = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [success, setSuccess] = useState('')

  // Placeholder news data — will be replaced with Firestore
  const [newsList, setNewsList] = useState([
    { id: 1, title: 'Municipal Infrastructure Development Update', content: 'Major road improvements and drainage systems underway...', createdAt: 'May 5, 2026' },
    { id: 2, title: 'COVID-19 Vaccination Booster Drive Extended', content: 'Free booster vaccination program for all residents...', createdAt: 'May 3, 2026' },
    { id: 3, title: 'Clean & Green Campaign Launches This June', content: 'Municipality-wide tree planting and cleanup initiative...', createdAt: 'May 1, 2026' },
    { id: 4, title: 'Scholarship Applications Now Open', content: 'Applications from qualified college students...', createdAt: 'Apr 28, 2026' },
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
    setEditMode(false)
    setTitle('')
    setContent('')
    setShowModal(true)
  }

  const openEditModal = (item) => {
    setEditMode(true)
    setEditId(item.id)
    setTitle(item.title)
    setContent(item.content)
    setShowModal(true)
  }

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return

    if (editMode) {
      setNewsList(prev => prev.map(n => n.id === editId ? { ...n, title, content } : n))
      setSuccess('News article updated successfully!')
    } else {
      const newItem = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      }
      setNewsList(prev => [newItem, ...prev])
      setSuccess('News article created successfully!')
    }

    setShowModal(false)
    setTitle('')
    setContent('')
    setTimeout(() => setSuccess(''), 3000)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setNewsList(prev => prev.filter(n => n.id !== id))
      setSuccess('News article deleted successfully!')
      setTimeout(() => setSuccess(''), 3000)
    }
  }

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="admin-sidebar d-none d-lg-block" style={{ width: '260px', flexShrink: 0 }}>
        <div className="px-4 mb-4">
          <div className="d-flex align-items-center gap-2">
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #C62828, #8E0000)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, color: 'white', fontSize: '0.95rem',
            }}>C</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Capas Admin</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Management Panel</div>
            </div>
          </div>
        </div>

        <Nav className="flex-column">
          <Nav.Link as={Link} to="/admin/dashboard" className="d-flex align-items-center gap-3">
            <FaTachometerAlt size={16} /> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/news" className="active d-flex align-items-center gap-3">
            <FaListAlt size={16} /> Manage News
          </Nav.Link>
        </Nav>

        <div className="px-3" style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0 }}>
          <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <Nav.Link onClick={handleLogout} className="d-flex align-items-center gap-3 text-danger" style={{ cursor: 'pointer' }}>
            <FaSignOutAlt size={16} /> Sign Out
          </Nav.Link>
          <a href="/" className="d-flex align-items-center gap-3 nav-link" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            &larr; Back to Website
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)' }}>
        {/* Top Bar */}
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div>
            <h5 className="fw-bold mb-0">Manage News</h5>
            <small className="text-muted">{newsList.length} total articles</small>
          </div>
          <Button onClick={openAddModal} className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Add New Article
          </Button>
        </div>

        <Container fluid className="p-4">
          {success && (
            <Alert variant="success" className="py-2 d-flex align-items-center gap-2" style={{ borderRadius: 'var(--radius-xs)', fontSize: '0.9rem' }}>
              ✅ {success}
            </Alert>
          )}

          {/* News Table */}
          <Card className="modern-card border-0" style={{ boxShadow: 'var(--shadow)' }}>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--gray-100)' }}>
                      <th className="fw-semibold text-muted small text-uppercase py-3 ps-4 border-0">#</th>
                      <th className="fw-semibold text-muted small text-uppercase py-3 border-0">Title</th>
                      <th className="fw-semibold text-muted small text-uppercase py-3 border-0">Date</th>
                      <th className="fw-semibold text-muted small text-uppercase py-3 pe-4 border-0 text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsList.map((item, idx) => (
                      <tr key={item.id}>
                        <td className="py-3 ps-4 text-muted">{idx + 1}</td>
                        <td className="py-3">
                          <div className="d-flex align-items-center gap-3">
                            <div style={{
                              width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                              background: 'linear-gradient(135deg, rgba(198,40,40,0.1), rgba(198,40,40,0.05))',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <FaNewspaper size={16} style={{ color: 'var(--primary)' }} />
                            </div>
                            <div>
                              <div className="fw-semibold">{item.title}</div>
                              <div className="text-muted" style={{ fontSize: '0.78rem' }}>{item.content.substring(0, 60)}...</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-muted">{item.createdAt}</td>
                        <td className="py-3 pe-4 text-end">
                          <Button variant="link" size="sm" className="text-primary p-1 me-1" onClick={() => openEditModal(item)} title="Edit">
                            <FaEdit size={15} />
                          </Button>
                          <Button variant="link" size="sm" className="text-danger p-1" onClick={() => handleDelete(item.id)} title="Delete">
                            <FaTrash size={14} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {newsList.length === 0 && (
                <div className="text-center py-5 text-muted">
                  <FaNewspaper size={48} className="mb-3" style={{ opacity: 0.2 }} />
                  <p>No news articles yet. Click "Add New Article" to get started.</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header className="border-0 pb-0 px-4 pt-4">
          <Modal.Title className="fw-bold" style={{ fontSize: '1.2rem' }}>
            {editMode ? 'Edit News Article' : 'Add New Article'}
          </Modal.Title>
          <Button variant="link" className="text-muted p-0" onClick={() => setShowModal(false)}>
            <FaTimes size={18} />
          </Button>
        </Modal.Header>
        <Modal.Body className="px-4 py-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small" style={{ color: 'var(--gray-500)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article Title *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter news title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="modern-input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small" style={{ color: 'var(--gray-500)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Content *</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Write article content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="modern-input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small" style={{ color: 'var(--gray-500)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Image (Optional)</Form.Label>
              <Form.Control type="file" accept="image/*" className="modern-input" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-4 pb-4 pt-0">
          <Button variant="light" onClick={() => setShowModal(false)} style={{ borderRadius: 'var(--radius-sm)' }}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="btn-primary-red d-flex align-items-center gap-2">
            {editMode ? 'Update Article' : 'Publish Article'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ManageNews
