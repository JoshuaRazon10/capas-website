import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Modal, Spinner } from 'react-bootstrap'
import { FaSearchPlus, FaTimes, FaImage } from 'react-icons/fa'
import API_BASE_URL from '../apiConfig'

// Import some core images as fallbacks or static content if needed
import clark from '../assets/images/clark.jpg'

const Gallery = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedImg, setSelectedImg] = useState(null)
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(false)
  const [galleryItems, setGalleryItems] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/gallery`)
        if (response.ok) {
          const data = await response.json()
          const formattedData = data.map(item => ({
            src: item.image_path.startsWith('http') ? item.image_path : `${API_BASE_URL.replace('/api', '/storage')}/${item.image_path}`,
            title: item.title,
            cat: item.category || 'general'
          }))
          setGalleryItems(formattedData)
        } else {
          setGalleryItems([])
        }
      } catch (error) {
        console.error('Failed to fetch gallery:', error)
        setGalleryItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchGallery()
  }, [])

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === filter)

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 300, behavior: 'smooth' })
  }

  const handleOpen = (img) => {
    setSelectedImg(img)
    setShowModal(true)
  }

  const handleFilterChange = (cat) => {
    setFilter(cat)
    setCurrentPage(1) // Reset to page 1 on filter change
  }

  return (
    <div className="gallery-page py-5 bg-white min-vh-100">
      {/* Header */}
      <section className="gallery-header py-5 mb-5" style={{
        backgroundColor: 'var(--blue-logo)',
        backgroundImage: 'linear-gradient(rgba(20,24,61,0.9), rgba(20,24,61,0.9)), url("/assets/images/capas.background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <Container className="text-center py-4">
          <h1 className="display-3 fw-bold mb-3">Municipal Gallery</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            Capturing the spirit, heritage, and progress of Capas through the lens.
          </p>
        </Container>
      </section>

      <Container>
        {/* Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {['all', 'awards', 'events', 'landmarks', 'government', 'gad', 'leadership', 'general'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`btn rounded-pill px-4 py-2 text-capitalize transition-all ${
                filter === cat ? 'btn-primary-red shadow-lg' : 'btn-outline-secondary'
              }`}
              style={{ fontWeight: '600' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <Row className="g-4">
          {loading ? (
            <Col xs={12} className="text-center py-5">
              <Spinner animation="border" variant="danger" />
              <p className="mt-3 text-muted">Loading masterpiece gallery...</p>
            </Col>
          ) : currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="animate-fadeIn">
                <Card 
                   className="border-0 overflow-hidden gallery-card h-100 shadow-sm" 
                   onClick={() => handleOpen(item)}
                   style={{ cursor: 'pointer', borderRadius: '15px' }}
                >
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <Card.Img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-100 h-100 object-fit-cover transition-all gallery-img" 
                    />
                    <div className="gallery-overlay d-flex flex-column align-items-center justify-content-center text-white p-3 text-center">
                      <div className="zoom-icon-wrapper mb-2">
                        <FaSearchPlus size={24} />
                      </div>
                      <h6 className="fw-bold mb-0">{item.title}</h6>
                      <small className="text-uppercase opacity-75" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>{item.cat}</small>
                    </div>
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5 text-muted">
              <div className="py-5">
                <FaImage size={50} className="opacity-25 mb-3" />
                <p>No images found for this category.</p>
              </div>
            </Col>
          )}
        </Row>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="d-flex justify-content-center mt-5 mb-4">
            <nav className="d-flex align-items-center gap-2">
              <button 
                className="btn btn-light rounded-pill px-3 py-2 shadow-sm d-flex align-items-center gap-2"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <div className="d-flex gap-2 mx-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`btn rounded-circle p-0 d-flex align-items-center justify-content-center transition-all ${
                      currentPage === i + 1 ? 'btn-primary-red shadow-lg' : 'btn-light border shadow-sm'
                    }`}
                    style={{ width: '40px', height: '40px', fontWeight: '600' }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                className="btn btn-light rounded-pill px-3 py-2 shadow-sm d-flex align-items-center gap-2"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        size="lg"
        className="gallery-modal"
      >
        <Modal.Body className="p-0 position-relative bg-black rounded-4 overflow-hidden shadow-2xl">
          <button 
            onClick={() => setShowModal(false)}
            className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-0 shadow-lg d-flex align-items-center justify-content-center"
            style={{ zIndex: 10, width: '40px', height: '40px' }}
          >
            <FaTimes />
          </button>
          {selectedImg && (
            <>
              <img src={selectedImg.src} alt={selectedImg.title} className="w-100 h-auto" style={{ maxHeight: '80vh', objectFit: 'contain' }} />
              <div className="p-4 text-center text-white" style={{ background: 'var(--blue-logo)' }}>
                <h4 className="fw-bold mb-1">{selectedImg.title}</h4>
                <p className="mb-0 opacity-75 text-uppercase small ls-2">{selectedImg.cat}</p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      <style>{`
        .gallery-card {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: none !important;
        }
        .gallery-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        .gallery-img {
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .zoom-icon-wrapper {
          background: rgba(255,255,255,0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
          transform: scale(0.8);
          transition: all 0.3s ease;
        }
        .gallery-card:hover .zoom-icon-wrapper {
          transform: scale(1);
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gallery-modal .modal-content {
          background: transparent;
          border: none;
        }
        .btn-primary-red {
          background-color: var(--primary);
          border-color: var(--primary);
          color: white;
        }
        .btn-primary-red:hover {
          background-color: #a0202c;
          border-color: #a0202c;
          color: white;
          transform: translateY(-2px);
        }
        .ls-2 { letter-spacing: 2px; }
      `}</style>
    </div>
  )
}

export default Gallery
