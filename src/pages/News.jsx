import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaNewspaper, FaArrowRight, FaCalendar } from 'react-icons/fa'

const sampleNews = [
  { id: 1, title: 'Municipal Infrastructure Development Update for 2026', date: 'May 5, 2026', cat: 'Development', excerpt: 'Major road improvements and drainage systems are underway across multiple barangays as part of the annual infrastructure program.' },
  { id: 2, title: 'COVID-19 Vaccination Booster Drive Extended', date: 'May 3, 2026', cat: 'Health', excerpt: 'The Municipal Health Office announces the extension of the free booster vaccination program for all residents.' },
  { id: 3, title: 'Clean & Green Campaign Launches This June', date: 'May 1, 2026', cat: 'Environment', excerpt: 'Join the municipality-wide tree planting and coastal cleanup initiative starting June 2026.' },
  { id: 4, title: 'Scholarship Applications Now Open for AY 2026–2027', date: 'Apr 28, 2026', cat: 'Education', excerpt: 'The Municipal Scholarship Program is accepting applications from qualified college students.' },
  { id: 5, title: 'Fire Prevention Month: Safety Tips & Reminders', date: 'Apr 25, 2026', cat: 'Safety', excerpt: 'The Bureau of Fire Protection shares essential fire safety tips as we observe Fire Prevention Month.' },
  { id: 6, title: 'Capas Day 2026 Celebration Schedule Released', date: 'Apr 20, 2026', cat: 'Events', excerpt: 'The official schedule of events for the annual Capas Day celebration has been released by the municipal government.' },
]

const News = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <Container>
          <div className="breadcrumb-custom">
            <Link to="/">Home</Link> / <span>News</span>
          </div>
          <h1>News & Announcements</h1>
          <p>Stay updated with the latest happenings in Capas, Tarlac.</p>
        </Container>
      </div>

      {/* News Grid */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-3">
          <Row className="gy-4">
            {sampleNews.map((item, idx) => (
              <Col key={item.id} lg={4} md={6}>
                <Card className="modern-card h-100 border-0">
                  <div className="news-card-img-wrapper">
                    <div className="news-card-img w-100" style={{
                      height: '220px',
                      background: `linear-gradient(135deg, hsl(${(idx * 40) + 340}, 65%, 42%), hsl(${(idx * 40) + 360}, 55%, 55%))`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <FaNewspaper size={48} style={{ opacity: 0.15, color: 'white' }} />
                    </div>
                  </div>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="news-date-badge">{item.cat}</span>
                      <span className="text-muted d-flex align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
                        <FaCalendar size={10} /> {item.date}
                      </span>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.45' }}>
                      {item.title}
                    </h5>
                    <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.7' }}>
                      {item.excerpt}
                    </p>
                    <a href="#" className="text-decoration-none fw-bold mt-auto" style={{ color: 'var(--blue-logo)', fontSize: '0.85rem' }}>
                      Read Full Article <FaArrowRight className="ms-1" size={10} />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination placeholder */}
          <div className="text-center mt-5">
            <p className="text-muted small">
              Showing 6 of 6 articles — <em>Dynamic news from Firebase coming soon.</em>
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default News
