import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaYoutube, FaMapMarkerAlt, FaLink, FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PreFooter = () => {
  return (
    <section className="pre-footer-modern py-5 position-relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="bg-decor bg-decor-1"></div>
      <div className="bg-decor bg-decor-2"></div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="gy-5">
          {/* Column 1: Location Map Card */}
          <Col lg={4} md={12}>
            <div className="modern-card h-100 p-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="icon-badge red-badge">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="modern-title mb-0">LOCATION MAP</h3>
              </div>
              <div className="map-wrapper shadow-sm">
                <iframe 
                  title="Capas Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123164.21287955513!2d120.4665452!3d15.4093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ef14798e259f%3A0xc39f8a3791c6904!2sCapas%2C%20Tarlac!5e0!3m2!1sen!2sph!4v1715200000000!5m2!1sen!2sph" 
                  width="100%" 
                  height="220" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-3 text-center">
                <a 
                  href="https://maps.google.com/?q=Capas+Tarlac" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-link-modern"
                >
                  View in Google Maps
                </a>
              </div>
            </div>
          </Col>

          {/* Column 2: Social Media Card */}
          <Col lg={4} md={6}>
            <div className="modern-card h-100 p-4 text-center">
              <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                <div className="icon-badge blue-badge">
                  <FaShareAlt />
                </div>
                <h3 className="modern-title mb-0">FOLLOW US</h3>
              </div>
              <p className="text-muted mb-4 px-3">
                Stay updated with the latest news and announcements from the Municipality of Capas.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a 
                  href="https://www.youtube.com/channel/UCGPbqKxR8633lLk_vwzVkLw" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn yt-btn"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a 
                  href="https://www.facebook.com/CapasInformationOfficeOfficial" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn fb-btn"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="mt-5 p-3 rounded-4 bg-light shadow-inner">
                <small className="d-block fw-bold text-uppercase tracking-widest text-primary mb-1">Official Hashtag</small>
                <div className="h5 fw-bold mb-0">#CapasLGU</div>
              </div>
            </div>
          </Col>

          {/* Column 3: Quick Links Card */}
          <Col lg={4} md={6}>
            <div className="modern-card h-100 p-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="icon-badge dark-badge">
                  <FaLink />
                </div>
                <h3 className="modern-title mb-0">QUICK LINKS</h3>
              </div>
              <div className="quick-links-grid">
                <Link to="/" className="q-link">Home</Link>
                <Link to="/socio-economic" className="q-link">Socio-Economic Profile</Link>
                <Link to="/history" className="q-link">History</Link>
                <Link to="/citizens-charter" className="q-link">Citizen's Charter</Link>
                <Link to="/application-forms" className="q-link">Downloadables</Link>
                <Link to="/job-hiring" className="q-link">Job Openings</Link>
                <Link to="/seal" className="q-link">Official Seal</Link>
                <Link to="/directory" className="q-link">LGU Directory</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style dangerouslySetInnerHTML={{ __html: `
        .pre-footer-modern {
          background-color: #f8f9fa;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .bg-decor {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
          opacity: 0.4;
        }

        .bg-decor-1 {
          width: 300px;
          height: 300px;
          background: rgba(220, 53, 69, 0.1);
          top: -100px;
          right: -50px;
        }

        .bg-decor-2 {
          width: 400px;
          height: 400px;
          background: rgba(20, 24, 61, 0.1);
          bottom: -150px;
          left: -100px;
        }

        .modern-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .modern-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          background: #ffffff;
        }

        .icon-badge {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
        }

        .red-badge { background: linear-gradient(135deg, #ff4d4d, #dc3545); }
        .blue-badge { background: linear-gradient(135deg, #1f255c, #14183d); }
        .dark-badge { background: linear-gradient(135deg, #4a4e69, #0a0c1f); }

        .modern-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 1px;
          color: #14183d;
          text-transform: uppercase;
        }

        .map-wrapper {
          border-radius: 16px;
          overflow: hidden;
          border: 4px solid white;
        }

        .btn-link-modern {
          font-size: 0.85rem;
          font-weight: 700;
          color: #dc3545;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding-bottom: 2px;
          border-bottom: 2px solid rgba(220, 53, 69, 0.2);
          transition: all 0.3s;
        }

        .btn-link-modern:hover {
          color: #14183d;
          border-bottom-color: #14183d;
        }

        .social-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: white;
          color: #14183d;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-btn:hover {
          transform: scale(1.1);
          color: white;
        }

        .yt-btn:hover { background: #FF0000; box-shadow: 0 10px 20px rgba(255, 0, 0, 0.2); }
        .fb-btn:hover { background: #1877F2; box-shadow: 0 10px 20px rgba(24, 119, 242, 0.2); }

        .quick-links-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .q-link {
          color: #4a4e69;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s;
          padding: 8px 12px;
          border-radius: 10px;
        }

        .q-link::before {
          content: '→';
          font-weight: bold;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s;
        }

        .q-link:hover {
          color: #0d6efd;
          background: rgba(13, 110, 253, 0.05);
          padding-left: 15px;
        }

        .q-link:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        .tracking-widest { letter-spacing: 0.15em; }
        .shadow-inner { box-shadow: inset 0 2px 4px rgba(0,0,0,0.05); }

        @media (max-width: 991px) {
          .modern-title { font-size: 1rem; }
        }
      `}} />
    </section>
  )
}

export default PreFooter

