import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Modal, Form, Spinner, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaEdit, FaTrash, FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'
import AdminToast from '../../components/AdminToast'

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
      {/* Top Bar */}
      <div className="admin-topbar d-flex justify-content-between align-items-center">
        <div>
          <h5>News & Articles</h5>
          <small>{newsList.length} total entries</small>
        </div>
        <button onClick={openAddModal} className="admin-btn-primary">
          <FaPlus size={12} /> Add New Post
        </button>
      </div>

      <Container fluid className="p-4">
        <AdminToast message={success} type="success" onClose={() => setSuccess('')} />
        <AdminToast message={error} type="error" onClose={() => setError('')} />

        <div className="admin-card">
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" style={{ color: '#3b82f6' }} />
              <p className="mt-2" style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Loading articles...</p>
            </div>
          ) : newsList.length > 0 ? (
            <div className="table-responsive">
              <table className="admin-table table mb-0">
                <thead>
                  <tr>
                    <th style={{ paddingLeft: '1.5rem' }}>Image</th>
                    <th>Type</th>
                    <th>Title / Caption</th>
                    <th>Link</th>
                    <th style={{ textAlign: 'right', paddingRight: '1.5rem' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {newsList.map((item) => (
                    <tr key={item.id}>
                      <td style={{ paddingLeft: '1.5rem' }}>
                        <div style={{ width: '56px', height: '42px', borderRadius: '10px', overflow: 'hidden', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {item.image_path ? (
                            <img src={getImageUrl(item.image_path)} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                          ) : (
                            <FaNewspaper size={16} style={{ color: '#cbd5e1' }} />
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="admin-badge" style={{
                          background: item.type === 'news' ? 'rgba(99,102,241,0.1)' : 'rgba(6,182,212,0.1)',
                          color: item.type === 'news' ? '#6366f1' : '#0891b2'
                        }}>
                          {item.type === 'news' ? 'NEWS' : 'ARTICLE'}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.85rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>{item.date_published}</div>
                      </td>
                      <td>
                        {item.external_link ? (
                          <a href={item.external_link} target="_blank" rel="noreferrer" style={{ color: '#800000', fontSize: '0.78rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <FaExternalLinkAlt size={10} /> View
                          </a>
                        ) : (
                          <span style={{ color: '#cbd5e1', fontSize: '0.78rem' }}>No link</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right', paddingRight: '1.5rem' }}>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="admin-btn-action edit" onClick={() => openEditModal(item)}><FaEdit size={13} /></button>
                          <button className="admin-btn-action delete" onClick={() => handleDelete(item.id)}><FaTrash size={13} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="admin-empty-state">
              <div className="icon-wrapper"><FaNewspaper /></div>
              <p>No articles found. Add your first post to get started.</p>
            </div>
          )}
        </div>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className="admin-modal">
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit Post' : 'New Post'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category *</Form.Label>
              <Form.Select value={type} onChange={e => setType(e.target.value)}>
                <option value="news">News Article</option>
                <option value="event">Municipal Article</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Caption / Title *</Form.Label>
              <Form.Control 
                type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="e.g. ANNOUNCEMENT JOBSEEKERS"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date Published</Form.Label>
              <Form.Control 
                type="date" 
                value={datePublished} 
                onChange={e => setDatePublished(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Facebook Link (Optional)</Form.Label>
              <Form.Control 
                type="text" 
                value={externalLink} 
                onChange={e => setExternalLink(e.target.value)} 
                placeholder="https://facebook.com/..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Image (Optional)</Form.Label>
              <Form.Control 
                type="file" 
                accept="image/*" 
                onChange={e => setImageFile(e.target.files[0])}
              />
              {editMode && !imageFile && <small style={{ color: '#94a3b8', display: 'block', marginTop: '4px' }}>Leave empty to keep existing image</small>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="admin-btn-action" style={{ width: 'auto', padding: '0.5rem 1.25rem', fontSize: '0.82rem', fontWeight: 600 }} onClick={() => setShowModal(false)} disabled={submitting}>Cancel</button>
          <button className="admin-btn-primary" onClick={handleSave} disabled={submitting}>
            {submitting ? 'Saving...' : editMode ? 'Update' : 'Publish'}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ManageNews
