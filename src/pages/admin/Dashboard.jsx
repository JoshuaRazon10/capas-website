import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaNewspaper, FaPlus, FaEye, FaChartLine, FaUsers, FaFolderOpen, FaCog, FaImage, FaBullhorn, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'
import API_BASE_URL from '../../apiConfig'
import AdminToast from '../../components/AdminToast'

const Dashboard = () => {
  const navigate = useNavigate()
  const [articleCount, setArticleCount] = useState(0)
  const [docCount, setDocCount] = useState(0)
  const [recentNews, setRecentNews] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login')
    }
    fetchStats()
  }, [navigate])

  const fetchStats = async () => {
    try {
      const [articlesRes, docsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/admin/articles`),
        fetch(`${API_BASE_URL}/admin/documents`)
      ])
      if (articlesRes.ok) {
        const articles = await articlesRes.json()
        setArticleCount(articles.length)
        setRecentNews(articles.slice(0, 5))
      }
      if (docsRes.ok) {
        const docs = await docsRes.json()
        setDocCount(docs.length)
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err)
    }
  }

  const stats = [
    { label: 'Total Articles', value: articleCount || '—', icon: <FaNewspaper size={20} />, gradient: 'linear-gradient(135deg, #800000, #a00000)', shadow: 'rgba(128,0,0,0.3)' },
    { label: 'Documents', value: docCount || '—', icon: <FaFolderOpen size={20} />, gradient: 'linear-gradient(135deg, #14183d, #1f255c)', shadow: 'rgba(20,24,61,0.3)' },
    { label: 'Page Views', value: '1,240', icon: <FaChartLine size={20} />, gradient: 'linear-gradient(135deg, #10b981, #34d399)', shadow: 'rgba(16,185,129,0.3)' },
    { label: 'Visitors', value: '856', icon: <FaUsers size={20} />, gradient: 'linear-gradient(135deg, #f59e0b, #fb923c)', shadow: 'rgba(245,158,11,0.3)' },
  ]

  const quickActions = [
    { label: 'Post News', icon: <FaNewspaper />, to: '/admin/news', color: '#800000', bg: 'rgba(128,0,0,0.08)' },
    { label: 'Announcement', icon: <FaBullhorn />, to: '/admin/announcements', color: '#14183d', bg: 'rgba(20,24,61,0.08)' },
    { label: 'Upload File', icon: <FaFolderOpen />, to: '/admin/files', color: '#10b981', bg: 'rgba(16,185,129,0.08)' },
    { label: 'Add Photo', icon: <FaImage />, to: '/admin/gallery', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
    { label: 'Settings', icon: <FaCog />, to: '/admin/settings', color: '#64748b', bg: 'rgba(100,116,139,0.08)' },
  ]

  const getTimeGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <>
      {/* Top Bar */}
      <div className="admin-topbar d-flex justify-content-between align-items-center">
        <div>
          <h5>{getTimeGreeting()}, Admin 👋</h5>
          <small>Here's what's happening with your municipal portal</small>
        </div>
        <Link to="/admin/news" className="admin-btn-primary" style={{ textDecoration: 'none' }}>
          <FaPlus size={12} /> New Post
        </Link>
      </div>

      <Container fluid className="p-4">
        {/* Stats */}
        <Row className="g-3 mb-4">
          {stats.map((stat, idx) => (
            <Col key={idx} xl={3} md={6}>
              <Card className="stat-card border-0" style={{ background: stat.gradient, boxShadow: `0 8px 25px ${stat.shadow}` }}>
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '6px', fontWeight: 500, letterSpacing: '0.03em' }}>{stat.label}</div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em' }}>{stat.value}</div>
                  </div>
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Quick Actions */}
        <div className="mb-4">
          <h6 style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a', marginBottom: '14px' }}>Quick Actions</h6>
          <Row className="g-3">
            {quickActions.map((action, idx) => (
              <Col key={idx} xs={6} md={4} lg>
                <Link to={action.to} className="admin-quick-action w-100" style={{ textDecoration: 'none' }}>
                  <div className="icon-circle" style={{ background: action.bg, color: action.color }}>
                    {action.icon}
                  </div>
                  <span>{action.label}</span>
                </Link>
              </Col>
            ))}
          </Row>
        </div>

        {/* Recent News */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h6>Recent Articles</h6>
            <Link to="/admin/news" style={{ textDecoration: 'none', color: '#800000', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              View All <FaArrowRight size={10} />
            </Link>
          </div>
          <div className="table-responsive">
            <table className="admin-table table mb-0">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentNews.length > 0 ? recentNews.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.85rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>{item.type || 'news'}</div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2" style={{ color: '#64748b', fontSize: '0.82rem' }}>
                        <FaCalendarAlt size={11} style={{ opacity: 0.5 }} />
                        {item.date_published || '—'}
                      </div>
                    </td>
                    <td>
                      <span className={`admin-badge ${item.is_published ? 'published' : 'draft'}`}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor' }} />
                        {item.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4" style={{ color: '#94a3b8' }}>
                      No articles found. Create your first post!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard
