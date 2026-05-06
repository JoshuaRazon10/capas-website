import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShieldAlt, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // TODO: Replace with Firebase Auth
    try {
      // Placeholder — Firebase auth will go here
      if (email === 'admin@capas.gov.ph' && password === 'admin123') {
        localStorage.setItem('adminAuth', 'true')
        navigate('/admin/dashboard')
      } else {
        setError('Invalid email or password. Please try again.')
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.')
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(12,12,107,0.2), transparent 70%)' }}></div>
      <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(12,12,107,0.15), transparent 70%)' }}></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col md={5} lg={4}>
            <div className="text-center mb-4">
              <div style={{
                width: '64px', height: '64px', borderRadius: '18px',
                background: 'linear-gradient(135deg, #0C0C6B, #06063A)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem', boxShadow: '0 8px 30px rgba(12,12,107,0.4)',
              }}>
                <FaShieldAlt size={28} color="white" />
              </div>
              <h3 className="fw-bold text-white mb-1">Admin Panel</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Municipality of Capas, Tarlac</p>
            </div>

            <Card className="border-0" style={{
              borderRadius: 'var(--radius)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
            }}>
              <Card.Body className="p-4 p-lg-5">
                <h5 className="fw-bold mb-1 text-center">Welcome Back</h5>
                <p className="text-muted small text-center mb-4">Sign in to manage the website</p>

                {error && <Alert variant="danger" className="py-2 small" style={{ borderRadius: 'var(--radius-xs)' }}>{error}</Alert>}

                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label className="fw-semibold small" style={{ color: 'var(--gray-500)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</Form.Label>
                    <div className="position-relative">
                      <FaEnvelope size={14} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-500)' }} />
                      <Form.Control
                        type="email"
                        placeholder="admin@capas.gov.ph"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="modern-input"
                        style={{ paddingLeft: '2.5rem' }}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="loginPassword">
                    <Form.Label className="fw-semibold small" style={{ color: 'var(--gray-500)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Password</Form.Label>
                    <div className="position-relative">
                      <FaLock size={14} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--gray-500)' }} />
                      <Form.Control
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="modern-input"
                        style={{ paddingLeft: '2.5rem' }}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn-primary-red w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                    disabled={loading}
                  >
                    {loading ? 'Signing In...' : <>Sign In <FaArrowRight size={14} /></>}
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  <a href="/" className="text-muted small text-decoration-none">&larr; Back to Website</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
