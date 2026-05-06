import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaNewspaper, FaPlus, FaSignOutAlt, FaTachometerAlt, FaListAlt, FaChartLine, FaUsers, FaEye } from 'react-icons/fa'

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  const stats = [
    { label: 'Total Articles', value: '24', icon: <FaNewspaper size={24} />, gradient: 'linear-gradient(135deg, #C62828, #E53935)' },
    { label: 'Published', value: '18', icon: <FaEye size={24} />, gradient: 'linear-gradient(135deg, #2E7D32, #43A047)' },
    { label: 'Page Views', value: '1,240', icon: <FaChartLine size={24} />, gradient: 'linear-gradient(135deg, #1565C0, #1E88E5)' },
    { label: 'Visitors', value: '856', icon: <FaUsers size={24} />, gradient: 'linear-gradient(135deg, #6A1B9A, #8E24AA)' },
  ]

  const recentNews = [
    { title: 'Municipal Infrastructure Development Update', date: 'May 5, 2026', status: 'Published' },
    { title: 'COVID-19 Vaccination Booster Drive Extended', date: 'May 3, 2026', status: 'Published' },
    { title: 'Clean & Green Campaign Launches This June', date: 'May 1, 2026', status: 'Draft' },
    { title: 'Scholarship Applications Now Open', date: 'Apr 28, 2026', status: 'Published' },
    { title: 'Fire Prevention Month Safety Tips', date: 'Apr 25, 2026', status: 'Published' },
  ]

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
          <Nav.Link as={Link} to="/admin/dashboard" className="active d-flex align-items-center gap-3">
            <FaTachometerAlt size={16} /> Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/news" className="d-flex align-items-center gap-3">
            <FaListAlt size={16} /> Manage News
          </Nav.Link>
        </Nav>

        <div className="px-3 mt-auto" style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0 }}>
          <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <Nav.Link onClick={handleLogout} className="d-flex align-items-center gap-3 text-danger" style={{ cursor: 'pointer', color: '#EF5350 !important' }}>
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
            <h5 className="fw-bold mb-0">Dashboard</h5>
            <small className="text-muted">Welcome back, Admin</small>
          </div>
          <Button as={Link} to="/admin/news" className="btn-primary-red d-flex align-items-center gap-2" size="sm">
            <FaPlus size={12} /> Add News
          </Button>
        </div>

        {/* Stats */}
        <Container fluid className="p-4">
          <Row className="gy-3 mb-4">
            {stats.map((stat, idx) => (
              <Col key={idx} xl={3} md={6}>
                <Card className="stat-card border-0" style={{ background: stat.gradient, borderRadius: 'var(--radius)' }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.3rem' }}>{stat.label}</div>
                      <div style={{ fontSize: '2rem', fontWeight: 800 }}>{stat.value}</div>
                    </div>
                    <div style={{ opacity: 0.3 }}>{stat.icon}</div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Recent News */}
          <Card className="modern-card border-0" style={{ boxShadow: 'var(--shadow)' }}>
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold mb-0">Recent News Articles</h6>
                <Link to="/admin/news" className="text-decoration-none fw-semibold small" style={{ color: 'var(--primary)' }}>View All</Link>
              </div>
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--gray-300)' }}>
                      <th className="fw-semibold text-muted small text-uppercase border-0 py-3">Title</th>
                      <th className="fw-semibold text-muted small text-uppercase border-0 py-3">Date</th>
                      <th className="fw-semibold text-muted small text-uppercase border-0 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentNews.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-3 fw-medium">{item.title}</td>
                        <td className="py-3 text-muted">{item.date}</td>
                        <td className="py-3">
                          <span className="px-2 py-1" style={{
                            fontSize: '0.75rem', fontWeight: 600, borderRadius: '50px',
                            background: item.status === 'Published' ? 'rgba(46,125,50,0.1)' : 'rgba(255,152,0,0.1)',
                            color: item.status === 'Published' ? '#2E7D32' : '#F57C00',
                          }}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard
