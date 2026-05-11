import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Card, Button, Carousel, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaGlobe, FaFileAlt, FaUsers, FaNewspaper, FaHandsHelping, FaBuilding, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import backgroundImage from '../assets/images/capas.background.png'
import capasLogo from '../assets/images/capas.logo.jpg'

// Gallery Images
import flag1 from '../assets/images/flagrites.jpg'
import flag2 from '../assets/images/flagrites2.jpg'
import flag3 from '../assets/images/flagrites3.jpg'
import flag4 from '../assets/images/flagrites4.jpg'
import flag5 from '../assets/images/flagrites5.jpg'
import pinatuboImg from '../assets/images/pinatubo.webp'
import clarkImg from '../assets/images/clark.jpg'
import hotline1 from '../assets/images/hotline1.jpg'
import hotline2 from '../assets/images/hotline2.jpg'
import hotline3 from '../assets/images/hotline3.jpg'
import news1Img from '../assets/images/news1.jpg'
import news2Img from '../assets/images/news2.jpg'
import news3Img from '../assets/images/news3.jpg'
import capasAward from '../assets/images/capas.award.jpg'
import bootsImg from '../assets/images/mayors/boots.webp'
import lyceumImg from '../assets/images/lyceum.jpg'
import palengImg from '../assets/images/paleng.jpg'
import lguImg from '../assets/images/lgu.jpg'
import vmAlex from '../assets/images/vm.alex.jpg'
import lgbtImg from '../assets/images/LGBTQ/1.jpg'
import youthImg from '../assets/images/youth/1.jpg'

// Frontpage Awards
import award1 from '../assets/images/frontpage/1.png'
import award2 from '../assets/images/frontpage/2.png'
import award3 from '../assets/images/frontpage/3.png'
import award4 from '../assets/images/frontpage/4.png'
import award5 from '../assets/images/frontpage/5.png'
import award6 from '../assets/images/frontpage/6.png'
import award7 from '../assets/images/frontpage/7.png'
import award8 from '../assets/images/frontpage/8.png'
import award9 from '../assets/images/frontpage/9.png'
import award10 from '../assets/images/frontpage/10.png'
import award11 from '../assets/images/frontpage/11.png'


const Home = () => {
  const pageRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [fbWidth, setFbWidth] = useState(500)

  useEffect(() => {
    // Calculate dynamic width for Facebook iframe
    const updateFbWidth = () => {
      const width = window.innerWidth
      if (width < 576) {
        // Mobile phones: full width minus padding
        setFbWidth(Math.max(180, width - 45))
      } else if (width < 992) {
        // Tablets
        setFbWidth(500)
      } else {
        // Desktop
        setFbWidth(500)
      }
    }
    
    updateFbWidth()

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

    return () => {
      observer.disconnect()
    }
  }, [])


  return (
    <div ref={pageRef}>
      {/* ======== HERO ======== */}
      <section
        className="hero-section position-relative"
        style={{ overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center' }}
      >
        {/* Cinematic MP4 Video Background */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden'
          }}
        >
          <video
            autoPlay
            muted={isMuted}
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/video.capas.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Audio Toggle Button */}
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10 }}>
          <Button 
            variant="outline-light" 
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '45px', height: '45px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.3)' }}
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </Button>
        </div>

        {/* Dark Overlay for Text Readability */}
        <div 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.7))',
            zIndex: 1
          }}
        ></div>

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

              <Button as="a" href="https://www.facebook.com/CapasInformationOfficeOfficial" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-outline">
                Latest News
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ======== MISSION & VISION SECTION ======== */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <Container className="py-4">
          <Row className="gy-5 align-items-stretch">
            <Col lg={6} className="scroll-animate scroll-left">
              <div className="h-100 p-4 p-md-5 bg-white rounded-4 shadow-sm border-start border-4" style={{ borderColor: 'var(--primary)' }}>
                <div className="mb-4">
                  <h2 className="fw-bold m-0" style={{ fontSize: '1.8rem' }}>Our Mission</h2>
                </div>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  IN THE PROMOTION OF THE GENERAL WELL-BEING OF OUR PEOPLE, CAPAS SHALL BE CONSISTENT IN PROVIDING EFFICIENT AND EFFECTIVE SERVICES, THROUGH THE IMPLEMENTATION OF THE PROGRAM, PROJECT AND ACTIVITIES WHERE THE GREATEST NUMBER OF OUR PEOPLE GAINFULLY EMPLOYED.
                </p>
              </div>
            </Col>
            <Col lg={6} className="scroll-animate scroll-right">
              <div className="h-100 p-4 p-md-5 bg-white rounded-4 shadow-sm border-start border-4" style={{ borderColor: 'var(--blue-logo)' }}>
                <div className="mb-4">
                  <h2 className="fw-bold m-0" style={{ fontSize: '1.8rem' }}>Our Vision</h2>
                </div>
                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  CAPAS TO BE THE TOURISM AND AGRO-INDUSTRIAL CAPITAL OF TARLAC WITH EMPOWERED AND HEALTHY CITIZENRY IN A SOCIALLY JUST AND SAFE COMMUNITY WHO LIVES IN A SUSTAINABLE AND ECOLOGICALLY-BALANCED ENVIRONMENT WITH ACCESIBLE AND WELL-PLANNED INFRASTRUCTURE UNDER AN INVESTMENT FRIENDLY, PROGRESSIVE AND DIVERSE ECONOMY, GOVERNED BY GOD-FEARING AND RESPONSIVE LEADERSHIP.
                </p>
              </div>
            </Col>
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
            <a href="https://www.facebook.com/CapasInformationOfficeOfficial" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-bold" style={{ color: 'var(--primary)' }}>
              View All News <FaArrowRight className="ms-1" size={12} />
            </a>
          </div>
          <Row className="g-4">
            {/* Left Column: Facebook Feed */}
            <Col lg={6} className="scroll-animate scroll-left">
              <div className="facebook-feed-wrapper shadow-lg rounded-4 overflow-hidden bg-white p-1 d-flex justify-content-center" style={{ width: '100%', border: '1px solid #ddd' }}>
                <iframe 
                  src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCapasInformationOfficeOfficial&tabs=timeline&width=${fbWidth}&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                  width={fbWidth} 
                  height="900" 
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Capas Facebook Feed"
                ></iframe>
              </div>
            </Col>

            {/* Right Column: Announcements */}
            <Col lg={6} className="scroll-animate scroll-right">
              <div className="announcements-wrapper h-100 bg-white p-4 p-md-5 shadow-lg rounded-4 border-top border-4" style={{ borderColor: 'var(--primary)', maxHeight: '900px', overflowY: 'auto' }}>
                <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <FaVolumeUp className="text-primary-red" /> Official Announcements
                </h3>
                <div className="announcement-list">
                  {[
                    { date: 'May 04, 2026', title: 'Calling all Batch 2026 Latin Honor Graduates!', link: 'https://www.facebook.com/photo/?fbid=948956067946377', img: news1Img },
                    { date: 'May 02, 2026', title: 'Extension of Search for College President — Lyceum of Capas (LUC)', link: 'https://www.facebook.com/CapasInformationOfficeOfficial', img: news2Img },
                    { date: 'April 29, 2026', title: 'IN CELEBRATION OF THE 124TH LABOR DAY: PROVINCIAL JOB FAIR', link: 'https://www.facebook.com/CapasInformationOfficeOfficial', img: news3Img }
                  ].map((ann, i) => (
                    <div key={i} className="announcement-item pb-3 mb-3 border-bottom d-flex gap-3 align-items-start">
                      <div className="announcement-img-thumb shadow-sm rounded-3 overflow-hidden flex-shrink-0" style={{ width: '90px', height: '90px', border: '1px solid var(--gray-300)' }}>
                        <img src={ann.img} alt={ann.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="flex-grow-1">
                        <div className="small text-muted mb-1 fw-bold">{ann.date}</div>
                        <a href={ann.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark announcement-link fw-bold" style={{ fontSize: '1rem', transition: 'color 0.2s ease', display: 'block', lineHeight: '1.4' }}>
                          {ann.title}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button as="a" href="https://www.facebook.com/CapasInformationOfficeOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary-red w-100 py-3">
                    See All Announcements
                  </Button>
                </div>
              </div>
            </Col>
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
                  src={backgroundImage} 
                  alt="Capas Municipal Hall" 
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
                    { num: '20', label: 'Barangays' },
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
            { src: award1, title: 'Outstanding Performance', cat: 'Recognition' },
            { src: award2, title: 'Municipal Excellence', cat: 'Award' },
            { src: award3, title: 'Public Service Award', cat: 'Recognition' },
            { src: award4, title: 'Governance Citation', cat: 'Award' },
            { src: award5, title: 'Community Impact', cat: 'Recognition' },
            { src: award6, title: 'Leadership Award', cat: 'Award' },
            { src: award7, title: 'Special Recognition', cat: 'Recognition' },
            { src: award8, title: 'Performance Excellence', cat: 'Award' },
            { src: award9, title: 'Municipal Achievement', cat: 'Recognition' },
            { src: award10, title: 'Top Performer', cat: 'Award' },
            { src: award11, title: 'National Recognition', cat: 'Award' },
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
                      <Badge className="mb-2" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none' }}>{item.cat}</Badge>
                      <h2 className="display-4 fw-bold text-white mb-0">{item.title}</h2>
                    </div>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
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
                  <Button as="a" href="https://mtpinatubo.com/" target="_blank" rel="noopener noreferrer" className="btn-primary-red py-3 px-5">
                    Discover More
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
                  <Button as="a" href="https://newclark.ph/" target="_blank" rel="noopener noreferrer" className="btn-primary-red py-3 px-5">
                    Discover More
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

    </div>
  )
}

export default Home
