import { FaUsers, FaHandsHelping, FaVenusMars, FaChild, FaUserFriends, FaRainbow, FaExternalLinkAlt, FaFacebook } from 'react-icons/fa'
import { Container, Row, Col, Card, Tab, Nav, Carousel } from 'react-bootstrap'

import lgbt1 from '../assets/images/LGBTQ/1.jpg'
import lgbt2 from '../assets/images/LGBTQ/2.jpg'
import lgbt3 from '../assets/images/LGBTQ/3.jpg'
import lgbt4 from '../assets/images/LGBTQ/4.jpg'
import lgbt5 from '../assets/images/LGBTQ/5.jpg'
import youth1 from '../assets/images/youth/1.jpg'
import youth2 from '../assets/images/youth/2.jpg'
import youth3 from '../assets/images/youth/3.jpg'
import youth4 from '../assets/images/youth/4.jpg'
import youth5 from '../assets/images/youth/5.jpg'
import youth6 from '../assets/images/youth/6.jpg'
import youth7 from '../assets/images/youth/7.jpg'
import engrBey from '../assets/images/Engr. Bey.png'

const GAD = () => {
  const lgbtImages = [lgbt1, lgbt2, lgbt3, lgbt4, lgbt5]
  const youthImages = [youth1, youth2, youth3, youth4, youth5, youth6, youth7]

  return (
    <div className="gad-page bg-light min-vh-100 pb-5">
      {/* Page Header */}
      <div className="page-header py-5 mb-0" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <Container className="py-5 text-center">
          <h1 className="display-4 fw-bold mb-3">Gender and Development (GAD) Corner</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '800px' }}>
            Empowering every gender. Building an inclusive Capas.
          </p>
        </Container>
      </div>

      {/* Section 1: Mandate and Commitment */}
      <section className="py-5 bg-white border-bottom shadow-sm">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={7}>
              <div className="pe-lg-5">
                <h6 className="text-primary fw-bold text-uppercase letter-spacing-2 mb-3">Our Commitment</h6>
                <h2 className="fw-bold mb-4 h1">About our Gender and Development Program</h2>
                <div className="text-muted lead-sm" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                  <p>
                    The Local Government Unit (LGU) of Capas is committed to building a community where every individual, regardless of gender, has equal opportunities to thrive and contribute to our shared progress. This commitment is not just an initiative; it is a mandate rooted in <strong>Republic Act No. 9710</strong>, also known as the <strong>Magna Carta of Women</strong>, and is strongly upheld by the Department of the Interior and Local Government (DILG).
                  </p>
                  <p>
                    Gender and Development (GAD) is a development perspective that recognizes the different roles and needs of women, men, and all genders. It is about making sure that our policies, programs, and projects are fair, inclusive, and responsive to everyone's needs. By practicing gender-responsive governance, we ensure that our LGU's services and resources equitably benefit all members of the community, helping us create a society that is not only prosperous but also just, safe, and empowering for everyone.
                  </p>
                  <p>
                    This GAD Corner on our official website serves as a testament to our dedication. It is a central hub for information on our GAD programs and a platform to highlight the vital roles of children, youth, women, and the LGBTQIA+ community in nation-building. We invite you to explore the pages and learn more about our ongoing efforts to champion gender equality and social justice here in Capas.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="gad-visuals-grid position-relative">
                <div className="bg-primary position-absolute w-100 h-100 rounded-4" style={{ top: '20px', left: '20px', zIndex: 0, opacity: 0.1 }}></div>
                <div className="position-relative p-2 bg-white rounded-4 shadow-sm overflow-hidden" style={{ zIndex: 1 }}>
                   <Carousel fade interval={3000} controls={false} indicators={true} className="gad-main-carousel rounded-3 overflow-hidden">
                     {[...lgbtImages, ...youthImages].sort(() => 0.5 - Math.random()).map((img, idx) => (
                       <Carousel.Item key={idx}>
                         <div style={{ height: '400px' }}>
                           <img
                             className="d-block w-100 h-100"
                             src={img}
                             alt={`GAD Activity ${idx + 1}`}
                             style={{ objectFit: 'cover' }}
                           />
                           <div className="carousel-caption d-none d-md-block" style={{ background: 'rgba(0,0,0,0.4)', left: 0, right: 0, bottom: 0, padding: '20px' }}>
                             <h5 className="fw-bold m-0 text-white">GAD Community in Action</h5>
                             <p className="small m-0 text-white-50">Empowering and supporting every sector in Capas.</p>
                           </div>
                         </div>
                       </Carousel.Item>
                     ))}
                   </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: GAD Sectors */}
      <section className="py-5 mt-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold h1">GAD Sectors and Their Needs</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-muted">Explore our programs and articles dedicated to specific community sectors.</p>
          </div>

          <Tab.Container id="gad-sectors-tabs" defaultActiveKey="women">
            <Row className="gy-4">
              <Col lg={4}>
                <Nav variant="pills" className="flex-column gad-custom-pills gap-2">
                  <Nav.Item>
                    <Nav.Link eventKey="women" className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm border">
                      <FaVenusMars size={20} />
                      <span className="fw-bold">Women's Empowerment</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="youth" className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm border">
                      <FaUserFriends size={20} />
                      <span className="fw-bold">Youth Groups</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="child" className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm border">
                      <FaChild size={20} />
                      <span className="fw-bold">Child Protection & Rights</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="lgbt" className="d-flex align-items-center gap-3 p-3 rounded-4 shadow-sm border">
                      <FaRainbow size={20} />
                      <span className="fw-bold">LGBTQIA+ Inclusivity</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              
              <Col lg={8}>
                <Tab.Content className="ps-lg-4">
                  {/* Women's Empowerment */}
                  <Tab.Pane eventKey="women">
                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="p-4" style={{ background: 'linear-gradient(135deg, var(--blue-logo) 0%, #1f255c 100%)', color: 'white' }}>
                        <h3 className="fw-bold m-0">Women's Empowerment</h3>
                      </div>
                      <Card.Body className="p-4">
                        <h5 className="fw-bold mb-4 border-bottom pb-2" style={{ color: 'var(--blue-logo)' }}>Recent Articles & Features</h5>
                        <Row className="gy-3">
                          {[
                            "https://web.facebook.com/share/p/16xWrwwjcr/",
                            "https://web.facebook.com/share/p/1BCSvABztx/",
                            "https://web.facebook.com/share/p/1RVa5svmou/",
                            "https://web.facebook.com/share/p/1K4huTaVJU/",
                            "https://web.facebook.com/share/p/1CDXWQtEB9/"
                          ].map((url, idx) => (
                            <Col md={12} key={idx}>
                              <a href={url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 text-decoration-none text-dark hover-translate-x transition-all">
                                <FaFacebook style={{ color: 'var(--blue-logo)', fontSize: '1.4rem' }} />
                                <span className="text-truncate">Feature Article #{idx + 1} - LGU Capas Official</span>
                                <FaExternalLinkAlt className="ms-auto text-muted small" />
                              </a>
                            </Col>
                          ))}
                        </Row>
                        <div className="mt-4 p-4 bg-light rounded-4 text-center">
                          <h6 className="fw-bold mb-2">Activities Gallery</h6>
                          <p className="text-muted small mb-0">Photos showcasing empowerment seminars and livelihood programs.</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Youth Groups */}
                  <Tab.Pane eventKey="youth">
                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="p-4" style={{ background: 'linear-gradient(135deg, var(--blue-logo) 0%, #1f255c 100%)', color: 'white' }}>
                        <h3 className="fw-bold m-0">Youth Groups</h3>
                      </div>
                      <Card.Body className="p-4">
                        <h5 className="fw-bold mb-4 border-bottom pb-2" style={{ color: 'var(--blue-logo)' }}>Recent Articles & Features</h5>
                        <Row className="gy-3 mb-4">
                          {[
                            "https://web.facebook.com/share/p/12LatZRjybJ/",
                            "https://web.facebook.com/share/p/171QCMpUs2/"
                          ].map((url, idx) => (
                            <Col md={12} key={idx}>
                              <a href={url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 text-decoration-none text-dark hover-translate-x transition-all">
                                <FaFacebook style={{ color: 'var(--blue-logo)', fontSize: '1.4rem' }} />
                                <span className="text-truncate">Youth Leadership Feature #{idx + 1}</span>
                                <FaExternalLinkAlt className="ms-auto text-muted small" />
                              </a>
                            </Col>
                          ))}
                        </Row>
                        <div className="p-4 bg-light rounded-4">
                          <h6 className="fw-bold mb-3 text-center">Youth Activities Gallery</h6>
                          <Row className="gx-2 gy-2">
                            {youthImages.map((img, idx) => (
                              <Col xs={6} md={4} key={idx}>
                                <div className="gallery-img-wrapper rounded-3 overflow-hidden shadow-sm h-100">
                                  <img 
                                    src={img} 
                                    alt={`Youth Event ${idx + 1}`} 
                                    className="w-100 h-100 object-fit-cover hover-scale transition-all"
                                    style={{ minHeight: '120px' }}
                                  />
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* Child Protection */}
                  <Tab.Pane eventKey="child">
                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="p-4" style={{ background: 'linear-gradient(135deg, var(--blue-logo) 0%, #1f255c 100%)', color: 'white' }}>
                        <h3 className="fw-bold m-0">Child Protection and Rights</h3>
                      </div>
                      <Card.Body className="p-4">
                        <h5 className="fw-bold mb-4 border-bottom pb-2" style={{ color: 'var(--blue-logo)' }}>Recent Articles & Features</h5>
                        <Row className="gy-3">
                          {[
                            "https://web.facebook.com/share/p/1A1b8sTXBm/",
                            "https://web.facebook.com/share/p/1C469GMq2Z/",
                            "https://web.facebook.com/share/p/16Ad2dxbLF/",
                            "https://web.facebook.com/share/p/179Gj9o9TW/",
                            "https://web.facebook.com/share/p/1FZvqGiBAb/",
                            "https://web.facebook.com/share/p/1CRmY4nxWq/",
                            "https://web.facebook.com/share/p/17LUimC3vU/",
                            "https://web.facebook.com/share/p/17AHgqnfkJ/"
                          ].map((url, idx) => (
                            <Col md={12} key={idx}>
                              <a href={url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 text-decoration-none text-dark hover-translate-x transition-all">
                                <FaFacebook style={{ color: 'var(--blue-logo)', fontSize: '1.4rem' }} />
                                <span className="text-truncate">Child Welfare Program #{idx + 1}</span>
                                <FaExternalLinkAlt className="ms-auto text-muted small" />
                              </a>
                            </Col>
                          ))}
                        </Row>
                        <div className="mt-4 p-4 bg-light rounded-4 text-center">
                          <h6 className="fw-bold mb-2">Child Protection Gallery</h6>
                          <p className="text-muted small mb-0">Photos from national children's month and welfare programs.</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>

                  {/* LGBTQIA+ Inclusivity */}
                  <Tab.Pane eventKey="lgbt">
                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                      <div className="p-4" style={{ background: 'linear-gradient(135deg, var(--blue-logo) 0%, #1f255c 100%)', color: 'white' }}>
                        <h3 className="fw-bold m-0">LGBTQIA+ Inclusivity</h3>
                      </div>
                      <Card.Body className="p-4">
                        <h5 className="fw-bold mb-4 border-bottom pb-2" style={{ color: 'var(--blue-logo)' }}>Recent Articles & Features</h5>
                        <Row className="gy-3 mb-4">
                          {[
                            "https://web.facebook.com/share/p/1ArBwtjF9Y/",
                            "https://web.facebook.com/share/v/19HqxojfU5/"
                          ].map((url, idx) => (
                            <Col md={12} key={idx}>
                              <a href={url} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 text-decoration-none text-dark hover-translate-x transition-all">
                                <FaFacebook style={{ color: 'var(--blue-logo)', fontSize: '1.4rem' }} />
                                <span className="text-truncate">LGBTQIA+ Community Feature #{idx + 1}</span>
                                <FaExternalLinkAlt className="ms-auto text-muted small" />
                              </a>
                            </Col>
                          ))}
                        </Row>
                        <div className="p-4 bg-light rounded-4">
                          <h6 className="fw-bold mb-3 text-center">LGBTQIA+ Events Gallery</h6>
                          <Row className="gx-2 gy-2">
                            {lgbtImages.map((img, idx) => (
                              <Col xs={6} md={4} key={idx}>
                                <div className="gallery-img-wrapper rounded-3 overflow-hidden shadow-sm h-100">
                                  <img 
                                    src={img} 
                                    alt={`LGBTQ Event ${idx + 1}`} 
                                    className="w-100 h-100 object-fit-cover hover-scale transition-all"
                                    style={{ minHeight: '150px' }}
                                  />
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>

      {/* Section 3: GAD Resources and Reports */}
      <section className="py-5 bg-white border-top">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold h1" style={{ color: 'var(--blue-logo)' }}>GAD Plans, Accomplishments & Reports</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-muted">Access official documents and reports regarding our Gender and Development initiatives.</p>
          </div>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm rounded-4 p-4 text-center">
                <FaHandsHelping size={50} className="mb-3 opacity-50" style={{ color: 'var(--blue-logo)' }} />
                <h4 className="fw-bold mb-3" style={{ color: 'var(--blue-logo)' }}>GAD Accomplishments & Plans</h4>
                <p className="text-muted mb-4">Click the buttons below to access our full archive of GAD reports and future plans.</p>
                
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a 
                    href="https://drive.google.com/drive/folders/1vwKglz1XNWqT25RSKgyU_O7N4V4_Pmw2?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn rounded-pill px-4"
                    style={{ backgroundColor: 'var(--blue-logo)', color: 'white' }}
                  >
                    View Accomplishments Folder
                  </a>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 4: Contact Information */}
      <section className="py-5 bg-light border-top">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold h1 mb-3" style={{ color: 'var(--blue-logo)' }}>Contact the GAD Focal Point System</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-muted mb-5 lead mx-auto" style={{ maxWidth: '700px' }}>
              Connect with our dedicated Focal Point System for more information regarding GAD programs and initiatives.
            </p>
          </div>
          
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <div className="position-relative d-inline-block">
                <div className="position-absolute w-100 h-100 rounded-4" style={{ top: '15px', left: '15px', zIndex: 0, opacity: 0.1, backgroundColor: 'var(--blue-logo)' }}></div>
                <img 
                  src={engrBey} 
                  alt="ENGR. BABY LYN CAINGAT ROBLES - GAD Focal Person" 
                  className="rounded-4 shadow-lg position-relative" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '800px', 
                    height: 'auto', 
                    zIndex: 1, 
                    border: '5px solid white' 
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .gad-custom-pills .nav-link {
          background: white;
          color: #444;
          border: 1px solid #eee !important;
          transition: all 0.3s ease;
          margin-bottom: 5px;
        }
        .gad-custom-pills .nav-link.active {
          background: var(--blue-logo) !important;
          color: white !important;
          border-color: var(--blue-logo) !important;
          transform: translateX(10px);
          box-shadow: 0 4px 15px rgba(20, 24, 61, 0.2);
        }
        .hover-translate-x {
          transition: all 0.3s ease;
        }
        .hover-translate-x:hover {
          transform: translateX(8px);
          background-color: #f8f9fa !important;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .letter-spacing-2 {
          letter-spacing: 2px;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .gallery-img-wrapper {
          background: #eee;
          aspect-ratio: 4/3;
        }
      `}</style>
    </div>
  )
}

export default GAD
