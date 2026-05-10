import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Nav, Button, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignOutAlt, FaTachometerAlt, FaListAlt, FaFolderOpen, FaCog, FaLock, FaSave, FaImage } from 'react-icons/fa'
import capasLogo from '../../assets/images/capas.logo.jpg'

const Settings = () => {
  const navigate = useNavigate()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match')
      return
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // In a real app, you would call your backend/Firebase here
    setSuccess('Password updated successfully!')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <>
      <div className="flex-grow-1" style={{ background: 'var(--gray-100)' }}>
        <div className="bg-white px-4 py-3 d-flex justify-content-between align-items-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div>
            <h5 className="fw-bold mb-0">Account Settings</h5>
            <small className="text-muted">Manage your admin account credentials</small>
          </div>
        </div>

        <Container fluid className="p-4">
          <Row>
            <Col lg={6}>
              <Card className="modern-card border-0" style={{ boxShadow: 'var(--shadow)' }}>
                <Card.Body className="p-4 p-lg-5">
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <div className="icon-badge bg-primary-light" style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(12,12,107,0.1)' }}>
                      <FaLock size={18} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h5 className="fw-bold mb-0">Update Password</h5>
                  </div>

                  {success && <Alert variant="success" className="py-2 small mb-4">{success}</Alert>}
                  {error && <Alert variant="danger" className="py-2 small mb-4">{error}</Alert>}

                  <Form onSubmit={handleUpdatePassword}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold small text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>Current Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        className="modern-input" 
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold small text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>New Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        className="modern-input" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold small text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>Confirm New Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        className="modern-input" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="btn-primary-red w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                      <FaSave size={14} /> Update Credentials
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Settings
