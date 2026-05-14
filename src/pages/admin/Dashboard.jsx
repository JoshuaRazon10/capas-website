import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaNewspaper, FaPlus, FaSignOutAlt, FaTachometerAlt, FaListAlt, FaChartLine, FaUsers, FaEye, FaFolderOpen, FaCog, FaImage, FaBullhorn } from 'react-icons/fa'
import capasLogo from '../../assets/images/capas.logo.jpg'

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
    <>
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

          {/* Quick Actions */}
          <Card className="modern-card border-0 mb-4" style={{ boxShadow: 'var(--shadow)' }}>
            <Card.Body className="p-4">
              <h6 className="fw-bold mb-3">Quick Actions</h6>
              <Row className="g-3">
                <Col md={4} lg={2.4}>
                  <Button as={Link} to="/admin/news" className="btn-light w-100 py-3 border d-flex flex-column align-items-center gap-2" style={{ borderRadius: '15px' }}>
                    <FaNewspaper className="text-primary" />
                    <span className="small fw-bold">Post News</span>
                  </Button>
                </Col>
                <Col md={4} lg={2.4}>
                  <Button as={Link} to="/admin/announcements" className="btn-light w-100 py-3 border d-flex flex-column align-items-center gap-2" style={{ borderRadius: '15px' }}>
                    <FaBullhorn className="text-danger" />
                    <span className="small fw-bold">Add Announcement</span>
                  </Button>
                </Col>
                <Col md={4} lg={2.4}>
                  <Button as={Link} to="/admin/files" className="btn-light w-100 py-3 border d-flex flex-column align-items-center gap-2" style={{ borderRadius: '15px' }}>
                    <FaFolderOpen className="text-success" />
                    <span className="small fw-bold">Upload Document</span>
                  </Button>
                </Col>
                <Col md={4} lg={2.4}>
                  <Button as={Link} to="/admin/gallery" className="btn-light w-100 py-3 border d-flex flex-column align-items-center gap-2" style={{ borderRadius: '15px' }}>
                    <FaImage className="text-warning" />
                    <span className="small fw-bold">Add Photo</span>
                  </Button>
                </Col>
                <Col md={4} lg={2.4}>
                  <Button as={Link} to="/admin/settings" className="btn-light w-100 py-3 border d-flex flex-column align-items-center gap-2" style={{ borderRadius: '15px' }}>
                    <FaCog className="text-secondary" />
                    <span className="small fw-bold">Security Settings</span>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

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
    </>
  )
}

export default Dashboard
