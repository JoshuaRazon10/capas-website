import React, { useState } from 'react'
import { Container, Row, Col, Form, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa'
import capasLogo from '../../assets/images/capas.logo.jpg'

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
      background: 'linear-gradient(135deg, #14183d 0%, #0a0c1f 50%, #14183d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)' }} />
      
      {/* Grid pattern overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col md={5} lg={4} xl={3}>
            <div className="text-center mb-4">
              <div style={{
                width: '72px', height: '72px', borderRadius: '18px',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem', boxShadow: '0 8px 30px rgba(0,0,0,0.4)', overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.08)'
              }}>
                <img src={capasLogo} alt="Capas Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontWeight: 800, color: 'white', marginBottom: '4px', fontSize: '1.35rem' }}>Admin Portal</h3>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', fontWeight: 500 }}>Municipality of Capas, Tarlac</p>
            </div>

            <div style={{
              borderRadius: '20px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden',
            }}>
              <div className="p-4 p-lg-5">
                <h5 style={{ fontWeight: 700, marginBottom: '4px', textAlign: 'center', color: '#0f172a', fontSize: '1.1rem' }}>Welcome Back</h5>
                <p style={{ color: '#94a3b8', fontSize: '0.82rem', textAlign: 'center', marginBottom: '1.75rem' }}>Sign in to manage the website</p>

                {error && <div className="admin-alert error mb-3">{error}</div>}

                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b', marginBottom: '6px' }}>Email Address</Form.Label>
                    <div className="position-relative">
                      <FaEnvelope size={13} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                      <Form.Control
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ paddingLeft: '2.5rem', borderRadius: '10px', border: '1.5px solid rgba(0,0,0,0.08)', padding: '0.65rem 0.9rem 0.65rem 2.5rem', fontSize: '0.875rem', background: '#f8fafc' }}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="loginPassword">
                    <Form.Label style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748b', marginBottom: '6px' }}>Password</Form.Label>
                    <div className="position-relative">
                      <FaLock size={13} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                      <Form.Control
                        type="password"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ paddingLeft: '2.5rem', borderRadius: '10px', border: '1.5px solid rgba(0,0,0,0.08)', padding: '0.65rem 0.9rem 0.65rem 2.5rem', fontSize: '0.875rem', background: '#f8fafc' }}
                        required
                      />
                    </div>
                  </Form.Group>

                  <button
                    type="submit"
                    className="admin-btn-primary w-100 justify-content-center"
                    disabled={loading}
                    style={{ padding: '0.75rem', fontSize: '0.9rem' }}
                  >
                    {loading ? 'Signing In...' : <>Sign In <FaArrowRight size={13} /></>}
                  </button>
                </Form>

                <div className="text-center mt-4">
                  <a href="/" style={{ color: '#94a3b8', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s ease' }}>&larr; Back to Website</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
