import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaLock, FaSave, FaShieldAlt } from 'react-icons/fa'
import AdminToast from '../../components/AdminToast'

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
      {/* Top Bar */}
      <div className="admin-topbar">
        <h5>Account Settings</h5>
        <small>Manage your admin account credentials</small>
      </div>

      <Container fluid className="p-4">
        <Row>
          <Col lg={6}>
            <div className="admin-card">
              <div className="p-4 p-lg-5">
                {/* Header */}
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(128,0,0,0.08)', flexShrink: 0 }}>
                    <FaLock size={18} style={{ color: '#800000' }} />
                  </div>
                  <div>
                    <h6 style={{ fontWeight: 700, color: '#0f172a', margin: 0, fontSize: '1rem' }}>Update Password</h6>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Change your admin credentials</span>
                  </div>
                </div>

                <AdminToast message={success} type="success" onClose={() => setSuccess('')} />
                <AdminToast message={error} type="error" onClose={() => setError('')} />

                <Form onSubmit={handleUpdatePassword}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b' }}>Current Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                      style={{ borderRadius: '10px', border: '1.5px solid rgba(0,0,0,0.08)', padding: '0.65rem 0.9rem', fontSize: '0.875rem', background: '#f8fafc' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b' }}>New Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      style={{ borderRadius: '10px', border: '1.5px solid rgba(0,0,0,0.08)', padding: '0.65rem 0.9rem', fontSize: '0.875rem', background: '#f8fafc' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b' }}>Confirm New Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      style={{ borderRadius: '10px', border: '1.5px solid rgba(0,0,0,0.08)', padding: '0.65rem 0.9rem', fontSize: '0.875rem', background: '#f8fafc' }}
                    />
                  </Form.Group>
                  <button type="submit" className="admin-btn-primary w-100 justify-content-center" style={{ padding: '0.75rem' }}>
                    <FaSave size={14} /> Update Credentials
                  </button>
                </Form>
              </div>
            </div>
          </Col>

          {/* Security Info */}
          <Col lg={6} className="mt-4 mt-lg-0">
            <div className="admin-card" style={{ borderLeft: '4px solid #f59e0b' }}>
              <div className="p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(245,158,11,0.08)', flexShrink: 0 }}>
                    <FaShieldAlt size={16} style={{ color: '#f59e0b' }} />
                  </div>
                  <h6 style={{ fontWeight: 700, color: '#0f172a', margin: 0, fontSize: '0.9rem' }}>Security Tips</h6>
                </div>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, lineHeight: 2 }}>
                  <li style={{ fontSize: '0.82rem', color: '#64748b' }}>Use at least 8 characters with mixed case</li>
                  <li style={{ fontSize: '0.82rem', color: '#64748b' }}>Include numbers and special characters</li>
                  <li style={{ fontSize: '0.82rem', color: '#64748b' }}>Don't reuse passwords from other accounts</li>
                  <li style={{ fontSize: '0.82rem', color: '#64748b' }}>Change your password regularly</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Settings
