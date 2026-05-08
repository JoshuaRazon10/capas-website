import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaGlobe, FaFileAlt, FaUsers, FaNewspaper, FaHandsHelping, FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import backgroundImage from '../assets/images/capas.background.png'
import capasLogo from '../assets/images/capas.logo.jpg'

// Gallery Images
import flag1 from '../assets/images/flagrites.jpg'
import flag2 from '../assets/images/flagrites2.jpg'
import flag3 from '../assets/images/flagrites3.jpg'
import flag4 from '../assets/images/flagrites4.jpg'
import flag5 from '../assets/images/flagrites5.jpg'
import shrineImg from '../assets/images/shrine.png'
import shrine1 from '../assets/images/shrine1.jfif'
import shrineHD from '../assets/images/shrine_hd.png'
import pinatuboImg from '../assets/images/pinatubo.webp'
import clarkImg from '../assets/images/clark.jpg'
import hotline1 from '../assets/images/hotline1.jpg'
import hotline2 from '../assets/images/hotline2.jpg'
import hotline3 from '../assets/images/hotline3.jpg'
import news1Img from '../assets/images/news1.jpg'
import news2Img from '../assets/images/news2.jpg'
import news3Img from '../assets/images/news3.jpg'
import capasAward from '../assets/images/capas.award.jpg'
import bootsImg from '../assets/images/boots.png'
import lyceumImg from '../assets/images/lyceum.jpg'
import palengImg from '../assets/images/paleng.jpg'
import lguImg from '../assets/images/lgu.jpg'

const Home = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = pageRef.current?.querySelectorAll('.scroll-animate')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    { title: 'Online Permits', icon: <FaGlobe size={28} />, desc: 'Apply for business and construction permits conveniently online.' },
    { title: 'Public Records', icon: <FaFileAlt size={28} />, desc: 'Access official documents, ordinances, and public records.' },
    { title: 'Community Programs', icon: <FaUsers size={28} />, desc: 'Explore barangay programs and community development initiatives.' },
    { title: 'News & Alerts', icon: <FaNewspaper size={28} />, desc: 'Stay updated with the latest municipal news and emergency alerts.' },
  ]

  return (
    <div ref={pageRef}>
      {/* ======== HERO ======== */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <div className="animate-fadeInUp text-center">
            <div className="mb-3">
              <span style={{
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '0.4rem 1.2rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: '600',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white'
              }}>
                Official Government Website
              </span>
            </div>
            <h1 className="hero-title" style={{ color: 'white' }}>Welcome to<br />Capas, Tarlac</h1>
            <p className="hero-subtitle" style={{ color: 'white', opacity: 0.9 }}>
              The Tourism Capital of Tarlac — rich in history, culture, and committed to excellence in public service.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button as={Link} to="/services" className="hero-btn hero-btn-primary">
                Explore Services <FaArrowRight className="ms-2" size={14} />
              </Button>
              <Button as={Link} to="/news" className="hero-btn hero-btn-outline">
                Latest News
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ======== AUTO-SWIPING PHOTO SHOWCASE ======== */}
      <section className="full-width-showcase">
        <Carousel 
          fade 
          interval={3000} 
          controls={false} 
          indicators={false}
          pause={false}
        >
          {[capasAward, bootsImg, lyceumImg, palengImg, lguImg].map((img, idx) => (
            <Carousel.Item key={idx}>
              <div style={{ height: '600px', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
                <img 
                  src={img} 
                  alt=""
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(15px) brightness(0.6)',
                    transform: 'scale(1.1)',
                    zIndex: 1
                  }}
                />
                <img 
                  src={img} 
                  alt={`Capas Showcase ${idx + 1}`}
                  className="w-100 h-100"
                  style={{ objectFit: 'contain', position: 'relative', zIndex: 2 }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-3">
          <div className="section-header scroll-animate">
            <h2>Quick Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Access essential municipal services quickly and efficiently.</p>
          </div>
          <Row className="gy-4">
            {services.map((item, idx) => (
              <Col key={idx} lg={3} md={6}>
                <Card className={`modern-card h-100 text-center p-4 border-0 scroll-animate delay-${idx + 1}`}>
                  <Card.Body className="d-flex flex-column">
                    <div className="service-icon-wrapper mx-auto" style={{ color: 'var(--primary)' }}>
                      {item.icon}
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: 'var(--gray-900)' }}>{item.title}</h5>
                    <p className="text-muted small mb-3 flex-grow-1">{item.desc}</p>
                    <a href="#" className="text-decoration-none fw-bold" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
                      Learn More <FaArrowRight className="ms-1" size={11} />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ======== LATEST NEWS PREVIEW ======== */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-3">
          <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3 scroll-animate">
            <div>
              <h2 className="fw-bold mb-1" style={{ color: 'var(--gray-900)' }}>Latest News</h2>
              <div className="section-divider" style={{ margin: '0' }}></div>
            </div>
            <Link to="/news" className="text-decoration-none fw-bold" style={{ color: 'var(--primary)' }}>
              View All News <FaArrowRight className="ms-1" size={12} />
            </Link>
          </div>
          <Row className="gy-4">
            {[
              { title: 'Calling all Batch 2026 Latin Honor Graduates!', date: 'May 6, 2026', cat: 'Announcement', img: news1Img, desc: 'Please submit your Full Name, High-Quality Photo, Course & School, and Latin Honor Received via Direct Message by May 6, 2026. Huge congrats to Batch 2026!' },
              { title: 'Extension of Search for College President — Lyceum of Capas (LUC)', date: 'May 23, 2026', cat: 'Public Announcement', img: news2Img, desc: 'The LGU of Capas and the Board of Trustees of the Lyceum of Capas have extended the search for a dynamic College President. Submit documentary requirements on or before May 23, 2026, 5:00 PM (PST).' },
              { title: 'Capas Job Fair 2026', date: 'May 2026', cat: 'Employment', img: news3Img, desc: 'The Municipality of Capas invites all job seekers to attend the upcoming Job Fair. Explore career opportunities from various local and national employers. Bring your resume and dress to impress!' },
            ].map((item, idx) => (
              <Col key={idx} lg={4} md={6}>
                <Card className={`modern-card h-100 border-0 scroll-animate delay-${idx + 1}`}>
                  <div className="news-card-img-wrapper">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="news-card-img w-100" 
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="news-date-badge">{item.cat}</span>
                      <span className="text-muted" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.4' }}>{item.title}</h5>
                    <p className="text-muted small mb-3">{item.desc || 'Stay informed with the latest developments and announcements from the municipality of Capas...'}</p>
                    <a href="#" className="text-decoration-none fw-bold" style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>
                      Read More <FaArrowRight className="ms-1" size={10} />
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ======== ABOUT PREVIEW ======== */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-5">
          <Row className="align-items-start g-5">
            <Col lg={5} className="scroll-animate scroll-left">
              <div style={{
                height: '600px',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <img 
                  src={shrineHD} 
                  alt="Capas National Shrine" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
            </Col>
            <Col lg={7} className="scroll-animate scroll-right">
              <div className="ps-lg-4">
                <h6 className="text-uppercase fw-bold ls-2 small mb-2" style={{ color: 'var(--primary)', letterSpacing: '0.1em' }}>
                  WELCOME TO CAPAS OFFICIAL PAGE
                </h6>
                <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: 'var(--gray-900)' }}>
                  About Capas
                </h2>
                
                <div className="about-text-content" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                  <p className="mb-4">
                    Capas is a first-class municipality in the province of Tarlac, Philippines. Known as the "Tourism Capital of Tarlac," 
                    it is home to several historical and natural landmarks that draw visitors from all over the world.
                  </p>
                  <p className="mb-4">
                    The municipality is most famous for the Capas National Shrine, a solemn monument dedicated to the Filipino and 
                    American soldiers who suffered during the Bataan Death March in World War II. It also serves as the gateway 
                    to the world-famous Mount Pinatubo, offering thrill-seekers a rugged 4x4 adventure and a scenic trek to the turquoise crater lake.
                  </p>
                  <p className="mb-4">
                    Officially established in 1712, Capas has grown from a small settlement into a bustling center of commerce and innovation. 
                    Today, it is part of the ambitious New Clark City development, a smart and sustainable metropolis designed to be the 
                    future administrative and economic hub of the Philippines.
                  </p>
                </div>

                <div className="d-flex gap-4 mt-5 mb-4">
                  {[
                    { num: '20+', label: 'Barangays' },
                    { num: '150K+', label: 'Population' },
                    { num: '300+', label: 'Years of History' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="fw-bold" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>{stat.num}</div>
                      <div className="text-muted small fw-bold text-uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button as={Link} to="/about" className="btn-primary-red py-3 px-5 mt-2">
                  Discover More <FaArrowRight className="ms-2" size={12} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======== MUNICIPAL GALLERY ======== */}
      <section className="py-0 overflow-hidden" style={{ background: 'white' }}>
        <div className="section-header pt-5 mb-4 text-center scroll-animate">
          <h6 className="text-uppercase fw-bold ls-2 small mb-2" style={{ color: 'var(--primary)' }}>Visuals</h6>
          <h2 className="fw-bold" style={{ color: 'var(--gray-900)' }}>Municipal Gallery</h2>
          <div className="section-divider"></div>
        </div>

        <Carousel
          fade
          interval={3000}
          controls={true}
          indicators={true}
          className="municipal-carousel shadow-lg"
        >
          {[
            { src: flag1, title: 'Flag Rites 2026', cat: 'Official Events' },
            { src: flag2, title: 'Community Gathering', cat: 'Local Government' },
            { src: flag3, title: 'Official Ceremony', cat: 'Events' },
            { src: flag4, title: 'LGU Personnel', cat: 'Public Service' },
            { src: flag5, title: 'Capas Pride', cat: 'Culture' },
          ].map((item, idx) => (
            <Carousel.Item key={idx}>
                  <div className="carousel-img-wrapper" style={{ height: '70vh', minHeight: '500px', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
                    {/* Blurred background for a premium look */}
                    <img
                      src={item.src}
                      alt=""
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'blur(15px) brightness(0.6)',
                        transform: 'scale(1.1)',
                        zIndex: 1
                      }}
                    />
                    <img
                      className="d-block w-100 h-100"
                      src={item.src}
                      alt={item.title}
                      style={{ objectFit: 'contain', position: 'relative', zIndex: 2 }}
                    />
                <div className="carousel-caption-custom">
                  <Container>
                    <div className="caption-content animate-fadeInUp">
                      <span className="badge bg-primary mb-2" style={{ background: 'var(--primary) !important' }}>{item.cat}</span>
                      <h2 className="display-4 fw-bold text-white mb-0">{item.title}</h2>
                    </div>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* ======== NATIONAL TREASURES SECTION ======== */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-5">
          <Row className="align-items-center g-5">
            {/* Treasure Image */}
            <Col lg={6} className="scroll-animate scroll-left">
              <div className="treasure-img-wrapper">
                <div className="treasure-main-img shadow-lg">
                  <img 
                    src={shrineImg} 
                    alt="Capas National Shrine" 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="img-overlay-accent"></div>
                </div>
                <div className="treasure-stats-float shadow-lg animate-fadeInUp">
                  <div className="stat-item">
                    <span className="stat-num">1991</span>
                    <span className="stat-label">Inauguration</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-num">70m</span>
                    <span className="stat-label">Height</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Treasure Description */}
            <Col lg={6} className="scroll-animate scroll-right">
              <div className="ps-lg-4">
                <h6 className="text-uppercase fw-bold ls-2 small mb-3" style={{ color: 'var(--primary)' }}>Capas Heritage</h6>
                <h2 className="fw-bold mb-4" style={{ fontSize: '2.8rem', color: 'var(--gray-900)', lineHeight: '1.2' }}>
                  The Capas National Shrine: <br />
                  <span style={{ color: 'var(--primary)' }}>A National Treasure</span>
                </h2>
                <div className="heritage-text-content">
                  <p className="lead fw-bold text-dark mb-3">
                    A solemn monument dedicated to the brave Filipino and American soldiers of the Bataan Death March.
                  </p>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                    The Capas National Shrine is a protected historical site in Tarlac that commemorates the sacrifices 
                    of those who suffered during World War II. Its centerpiece, a towering 70-meter obelisk, serves 
                    as a beacon of hope and a reminder of the indomitable human spirit.
                  </p>
                  <ul className="heritage-features-list list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>Historical Landmark:</strong> Recognized as a major WWII memorial in Southeast Asia.</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>Cultural Significance:</strong> A symbol of peace, bravery, and national identity.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>Tourism Pillar:</strong> One of the most visited historical landmarks in Tarlac.</span>
                    </li>
                  </ul>
                  <Button as={Link} to="/about" className="btn-primary-red py-3 px-5">
                    Learn More About Our History
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======== MOUNT PINATUBO SECTION ======== */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-5">
          <Row className="align-items-center g-5 flex-row-reverse">
            {/* Treasure Image */}
            <Col lg={6} className="scroll-animate scroll-right">
              <div className="treasure-img-wrapper ps-lg-4">
                <div className="treasure-main-img shadow-lg">
                  <img 
                    src={pinatuboImg} 
                    alt="Mount Pinatubo" 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="img-overlay-accent"></div>
                </div>
                <div className="treasure-stats-float shadow-lg animate-fadeInUp" style={{ left: 0, right: 'auto' }}>
                  <div className="stat-item">
                    <span className="stat-num">4x4</span>
                    <span className="stat-label">Adventure</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-num">961m</span>
                    <span className="stat-label">Elevation</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Treasure Description */}
            <Col lg={6} className="scroll-animate scroll-left">
              <div className="pe-lg-4">
                <h6 className="text-uppercase fw-bold ls-2 small mb-3" style={{ color: 'var(--primary)' }}>Adventure & Nature</h6>
                <h2 className="fw-bold mb-4" style={{ fontSize: '2.8rem', color: 'var(--gray-900)', lineHeight: '1.2' }}>
                  Mount Pinatubo: <br />
                  <span style={{ color: 'var(--primary)' }}>The Gateway to Adventure</span>
                </h2>
                <div className="heritage-text-content">
                  <p className="lead fw-bold text-dark mb-3">
                    Experience the breathtaking beauty of the world-famous crater lake, accessible primarily through the rugged trails of Capas.
                  </p>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                    Capas, Tarlac serves as the premier jump-off point for the ultimate Mount Pinatubo trek. From the adrenaline-pumping 4x4 jeep ride across the Crow Valley to the scenic hike towards the turquoise crater lake, the journey is as majestic as the destination.
                  </p>
                  <ul className="heritage-features-list list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>4x4 Jeep Trek:</strong> A thrilling cross-country ride through volcanic ash trails.</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>Crater Lake:</strong> Witness the stunning turquoise waters of the caldera.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>Eco-Tourism:</strong> A world-class destination for hikers and nature lovers.</span>
                    </li>
                  </ul>
                  <Button as={Link} to="/services" className="btn-primary-red py-3 px-5">
                    Book Your Adventure
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======== NEW CLARK CITY SECTION ======== */}
      <section className="py-5" style={{ background: 'white' }}>
        <Container className="py-5">
          <Row className="align-items-center g-5">
            {/* Treasure Image */}
            <Col lg={6} className="scroll-animate scroll-left">
              <div className="treasure-img-wrapper">
                <div className="treasure-main-img shadow-lg">
                  <img 
                    src={clarkImg} 
                    alt="New Clark City Athletics Stadium" 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="img-overlay-accent"></div>
                </div>
                <div className="treasure-stats-float shadow-lg animate-fadeInUp">
                  <div className="stat-item">
                    <span className="stat-num">Smart</span>
                    <span className="stat-label">City</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-num">9,450</span>
                    <span className="stat-label">Hectares</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Treasure Description */}
            <Col lg={6} className="scroll-animate scroll-right">
              <div className="ps-lg-4">
                <h6 className="text-uppercase fw-bold ls-2 small mb-3" style={{ color: 'var(--primary)' }}>Future & Innovation</h6>
                <h2 className="fw-bold mb-4" style={{ fontSize: '2.8rem', color: 'var(--gray-900)', lineHeight: '1.2' }}>
                  New Clark City: <br />
                  <span style={{ color: 'var(--primary)' }}>A Vision for the Future</span>
                </h2>
                <div className="heritage-text-content">
                  <p className="lead fw-bold text-dark mb-3">
                    Capas is home to the Philippines' first smart, resilient, and sustainable metropolis.
                  </p>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                    New Clark City represents the evolution of Capas into a world-class destination. Hosting international events at the Athletics Stadium and the Aquatics Center, this sustainable city is designed to be the country's next administrative and economic hub, blending modern technology with natural preservation.
                  </p>
                  <ul className="heritage-features-list list-unstyled mb-4">
                    <li className="d-flex align-items-center mb-3">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>World-Class Sports:</strong> Home to state-of-the-art facilities for international competitions.</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>Sustainable Design:</strong> Built with green energy and disaster-resilient infrastructure.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="check-icon me-3">✓</div>
                      <span><strong>Economic Hub:</strong> A rising center for innovation, government, and global business.</span>
                    </li>
                  </ul>
                  <Button as={Link} to="/government" className="btn-primary-red py-3 px-5">
                    Explore the Future
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======== EMERGENCY HOTLINES SECTION ======== */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-5">
          <div className="section-header text-center mb-5 scroll-animate">
            <h6 className="text-uppercase fw-bold ls-2 small mb-2" style={{ color: 'var(--primary)' }}>Public Safety</h6>
            <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: 'var(--gray-900)' }}>Emergency Hotlines</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-muted mt-3">Quick access to essential municipal emergency services.</p>
          </div>
          
          <Row className="g-4">
            {[hotline1, hotline2, hotline3].map((img, idx) => (
              <Col key={idx} md={4}>
                <Card className={`hotline-card border-0 shadow-lg h-100 overflow-hidden scroll-animate delay-${idx + 1}`} style={{ borderRadius: '20px' }}>
                  <img 
                    src={img} 
                    alt={`Emergency Hotline ${idx + 1}`} 
                    className="w-100" 
                    style={{ objectFit: 'contain', background: 'white' }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>



      {/* ======== CONTACT & MAP SECTION ======== */}
      <section className="py-5" style={{ background: 'var(--gray-100)' }}>
        <Container className="py-5">
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={6}>
              <div className="contact-form-wrapper pe-lg-4">
                <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: 'var(--gray-900)' }}>Leave a Reply</h2>
                <p className="text-muted mb-5" style={{ fontSize: '1.05rem' }}>
                  We are waiting for you on our office of Provincial Government of Tarlac or in way, 
                  contact us via the contact form below your idea.
                </p>
                
                <form className="modern-form">
                  <div className="mb-4">
                    <label className="form-label fw-bold small text-uppercase">Full Name *</label>
                    <input type="text" className="form-control custom-input" placeholder="Your full name" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold small text-uppercase">Contact Number *</label>
                    <input type="text" className="form-control custom-input" placeholder="Your contact number" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold small text-uppercase">Email *</label>
                    <input type="email" className="form-control custom-input" placeholder="Your email address" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold small text-uppercase">Comment *</label>
                    <textarea className="form-control custom-input" rows="4" placeholder="Your message or feedback"></textarea>
                  </div>
                  <Button className="btn-primary-red py-3 px-5 shadow-lg mt-2">
                    Submit Message
                  </Button>
                </form>
              </div>
            </Col>

            {/* Map */}
            <Col lg={6}>
              <div className="map-container-wrapper h-100 position-relative">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Capas+Municipal+Hall" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-nav-btn"
                >
                  Open in Maps <FaPaperPlane size={14} className="ms-1" />
                </a>
                <Card className="border-0 h-100 overflow-hidden shadow-lg" style={{ borderRadius: '24px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.6!2d120.5900!3d15.3270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c7b95cc9b969%3A0xc36db5db78b2d187!2sCapas%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1714972583232!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '550px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======== CTA SECTION ======== */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }}></div>
        <Container className="text-center text-white" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: 'white' }}>Need Assistance?</h2>
          <p className="mb-4" style={{ opacity: 0.85, fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Our municipal hall is ready to serve you. Reach out to us for any inquiries or concerns.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button as={Link} to="/contact" className="hero-btn hero-btn-primary">
              <FaPhone className="me-2" size={14} /> Contact Us
            </Button>
            <Button as={Link} to="/services" className="hero-btn hero-btn-outline">
              <FaHandsHelping className="me-2" size={14} /> View Services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Home
