import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Form, InputGroup, Button, Table, Badge, Spinner } from 'react-bootstrap'
import { FaSearch, FaNewspaper, FaCalendarDay, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import API_BASE_URL from '../apiConfig'

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/articles?type=news`)
      if (response.ok) {
        const data = await response.json()
        setArticles(data)
      }
    } catch (err) {
      console.error('Failed to fetch articles:', err)
    } finally {
      setLoading(false)
    }
  }

  const filteredArticles = articles.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (item.date_published && item.date_published.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const formatDate = (dateStr) => {
    if (!dateStr) return 'No date'
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { 
        month: 'long', day: 'numeric', year: 'numeric' 
      })
    } catch (e) {
      return dateStr
    }
  }

  return (
    <div className="articles-page bg-light min-vh-100">
      {/* Header */}
      <div className="page-header text-white py-5" style={{ 
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container className="py-4">
          <h1 className="display-4 fw-bold">Municipal News</h1>
          <p className="lead opacity-75">Archive of official news, press releases, and stories from Capas.</p>
        </Container>
      </div>

      <Container className="py-5">
        <Card className="border-0 shadow-sm rounded-4 mb-5 p-4">
          <InputGroup className="shadow-sm rounded-pill overflow-hidden border-0 bg-light p-1">
            <InputGroup.Text className="bg-transparent border-0 ps-3">
              <FaSearch style={{ color: 'var(--blue-logo)' }} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search articles by title or date..."
              className="border-0 bg-transparent py-3 shadow-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Card>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 text-muted">Loading articles...</p>
          </div>
        ) : (
          <>
            {/* Latest Previews */}
            {!searchTerm && articles.length > 0 && (
              <div className="mb-5">
                <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <div style={{ width: '8px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  Latest Highlights
                </h3>
                <Row className="g-4">
                  {articles.slice(0, 6).map((item, idx) => (
                    <Col key={item.id} lg={idx === 0 ? 8 : 4} md={6}>
                      <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-lift transition-all bg-white" style={{ border: '1px solid rgba(20,24,61,0.08)' }}>
                        <div style={{ 
                          height: '500px', 
                          overflow: 'hidden',
                          backgroundColor: 'var(--blue-logo)',
                          position: 'relative',
                          padding: '2px',
                          background: idx === 0 ? 'linear-gradient(135deg, var(--blue-logo), var(--primary))' : 'var(--blue-logo)'
                        }}>
                          <div style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: '14px 14px 0 0', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                            {item.external_link ? (
                              <iframe 
                                src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(item.external_link)}&show_text=true&width=${idx === 0 ? 750 : 500}`}
                                width="100%" 
                                height="100%" 
                                style={{ border: 'none', overflow: 'hidden', maxWidth: idx === 0 ? '750px' : '500px' }} 
                                scrolling="no" 
                                frameBorder="0" 
                                allowFullScreen={true} 
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title={`Facebook Post ${item.id}`}
                              ></iframe>
                            ) : (
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-light">
                                    <p className="text-muted small">No Facebook Link Provided</p>
                                </div>
                            )}
                          </div>
                          <Badge className="position-absolute top-0 end-0 m-3 rounded-pill shadow-sm fw-bold px-3 py-2" style={{ backgroundColor: 'var(--blue-logo)', border: 'none', color: 'white' }}>
                            {idx === 0 ? 'TOP STORY' : 'FEATURED'}
                          </Badge>
                        </div>
                        <Card.Body className="p-4 bg-white border-top">
                          <div className="d-flex align-items-center gap-2 mb-2 text-muted small fw-bold">
                            <FaCalendarDay size={12} style={{ color: 'var(--primary)' }} /> {formatDate(item.date_published)}
                          </div>
                          <h6 className="fw-bold mb-3 text-truncate-2" style={{ color: 'var(--blue-logo)', lineHeight: '1.4', height: '2.8em', overflow: 'hidden' }}>{item.title}</h6>
                          {item.external_link && (
                            <Button 
                              as="a" 
                              href={item.external_link} 
                              target="_blank" 
                              variant="link" 
                              className="p-0 text-decoration-none d-flex align-items-center gap-2 mt-auto"
                              style={{ color: 'var(--primary)', fontWeight: '700' }}
                            >
                              Read Full Post <FaExternalLinkAlt size={12} />
                            </Button>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold mb-0">All Article Records</h3>
              <Badge className="rounded-pill px-3 py-2" style={{ backgroundColor: 'var(--blue-logo)', color: 'white' }}>
                {filteredArticles.length} Entries
              </Badge>
            </div>

            <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
              <Table responsive hover className="mb-0 custom-table">
                <thead className="bg-white border-bottom">
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <th className="py-4 px-4 border-0 text-uppercase small fw-bold text-muted" style={{ width: '180px' }}>Date Published</th>
                    <th className="py-4 px-4 border-0 text-uppercase small fw-bold text-muted">Title</th>
                    <th className="py-4 px-4 border-0 text-uppercase small fw-bold text-muted text-center" style={{ width: '150px' }}>Story Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((item) => (
                      <tr key={item.id} className="align-middle">
                        <td className="py-4 px-4 border-0">
                          <div className="d-flex align-items-center gap-2">
                            <FaCalendarDay style={{ color: 'var(--blue-logo)', opacity: 0.6 }} />
                            <span className="fw-semibold">{formatDate(item.date_published)}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 border-0">
                          <h6 className="mb-0 fw-bold text-dark" style={{ lineHeight: '1.4' }}>{item.title}</h6>
                        </td>
                        <td className="py-4 px-4 border-0 text-center">
                          {item.external_link ? (
                            <Button 
                              as="a" 
                              href={item.external_link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="rounded-pill px-3 py-2 btn-sm fw-bold border-2 d-inline-flex align-items-center gap-2"
                              style={{ border: '2px solid var(--blue-logo)', color: 'var(--blue-logo)', background: 'transparent' }}
                            >
                              Read Post <FaExternalLinkAlt size={12} />
                            </Button>
                          ) : '-'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center py-5 text-muted">
                        No articles found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card>
          </>
        )}
      </Container>

      <style>{`
        .custom-table tbody tr {
          transition: all 0.2s ease;
        }
        .custom-table tbody tr:hover {
          background-color: rgba(128, 0, 0, 0.02);
          transform: scale(1.002);
        }
        .text-primary-light { color: #a00000; }
      `}</style>
    </div>
  )
}

export default Articles
