import React, { useState } from 'react'
import { Container, Row, Col, Card, Modal } from 'react-bootstrap'
import { FaSearchPlus, FaTimes } from 'react-icons/fa'

// Import all images
import flag1 from '../assets/images/flagrites.jpg'
import flag2 from '../assets/images/flagrites2.jpg'
import flag3 from '../assets/images/flagrites3.jpg'
import flag4 from '../assets/images/flagrites4.jpg'
import flag5 from '../assets/images/flagrites5.jpg'
import shrine1 from '../assets/images/shrine1.png'
import shrine2 from '../assets/images/shrine_hd.png'
import pinatubo from '../assets/images/pinatubo.webp'
import clark from '../assets/images/clark.jpg'
import lgu from '../assets/images/lgu.jpg'
import lyceum from '../assets/images/lyceum.jpg'
import paleng from '../assets/images/paleng.jpg'
import award from '../assets/images/capas.award.jpg'
import vmalex from '../assets/images/vm.alex.jpg'
import engrBey from '../assets/images/Engr. Bey.png'
import bootsImg from '../assets/images/mayors/boots.webp'

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


// GAD Images
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

const Gallery = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedImg, setSelectedImg] = useState(null)
  const [filter, setFilter] = useState('all')

  const galleryItems = [
    { src: flag1, title: 'Flag Rites 2026', cat: 'events' },
    { src: flag2, title: 'Community Gathering', cat: 'events' },
    { src: flag3, title: 'Official Ceremony', cat: 'events' },
    { src: flag4, title: 'LGU Personnel', cat: 'government' },
    { src: flag5, title: 'Capas Pride', cat: 'culture' },
    { src: shrine1, title: 'National Shrine', cat: 'landmarks' },
    { src: shrine2, title: 'Shrine Obelisk', cat: 'landmarks' },
    { src: pinatubo, title: 'Mount Pinatubo', cat: 'landmarks' },
    { src: clark, title: 'New Clark City', cat: 'landmarks' },
    { src: lgu, title: 'Municipal Hall', cat: 'government' },
    { src: lyceum, title: 'Lyceum of Capas', cat: 'education' },
    { src: paleng, title: 'Public Market', cat: 'economy' },
    { src: award, title: 'Recognition Day', cat: 'events' },
    { src: bootsImg, title: 'Hon. Roseller "Boots" Rodriguez', cat: 'leadership' },
    { src: vmalex, title: 'Vice Mayor Alex Pascual', cat: 'leadership' },
    { src: engrBey, title: 'Engr. Baby Lyn Robles', cat: 'leadership' },
    { src: lgbt1, title: 'LGBTQIA+ Event', cat: 'gad' },
    { src: lgbt2, title: 'Community Support', cat: 'gad' },
    { src: lgbt3, title: 'Pride March', cat: 'gad' },
    { src: lgbt4, title: 'Unity in Diversity', cat: 'gad' },
    { src: lgbt5, title: 'Advocacy Meeting', cat: 'gad' },
    { src: youth1, title: 'Youth Leadership', cat: 'gad' },
    { src: youth2, title: 'Student Summit', cat: 'gad' },
    { src: youth3, title: 'Empowerment Workshop', cat: 'gad' },
    { src: youth4, title: 'Future Leaders', cat: 'gad' },
    { src: youth5, title: 'Skill Building', cat: 'gad' },
    { src: youth6, title: 'Community Service', cat: 'gad' },
    { src: youth7, title: 'Youth Forum', cat: 'gad' },
    { src: award1, title: 'Outstanding Performance', cat: 'awards' },
    { src: award2, title: 'Municipal Excellence', cat: 'awards' },
    { src: award3, title: 'Public Service Award', cat: 'awards' },
    { src: award4, title: 'Governance Citation', cat: 'awards' },
    { src: award5, title: 'Community Impact', cat: 'awards' },
    { src: award6, title: 'Leadership Award', cat: 'awards' },
    { src: award7, title: 'Special Recognition', cat: 'awards' },
    { src: award8, title: 'Performance Excellence', cat: 'awards' },
    { src: award9, title: 'Municipal Achievement', cat: 'awards' },
    { src: award10, title: 'Top Performer', cat: 'awards' },
    { src: award11, title: 'National Recognition', cat: 'awards' },
  ]

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === filter)

  const handleOpen = (img) => {
    setSelectedImg(img)
    setShowModal(true)
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
          {['all', 'awards', 'events', 'landmarks', 'government', 'gad', 'leadership'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
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
          {filteredItems.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="animate-fadeIn">
              <Card 
                className="border-0 shadow-sm overflow-hidden gallery-card h-100" 
                onClick={() => handleOpen(item)}
                style={{ cursor: 'pointer', borderRadius: '15px' }}
              >
                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                  <Card.Img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-100 h-100 object-fit-cover transition-all gallery-img" 
                  />
                  <div className="gallery-overlay d-flex align-items-center justify-content-center">
                    <FaSearchPlus size={30} className="text-white" />
                  </div>
                </div>
                <Card.Body className="p-3 text-center">
                  <h6 className="fw-bold mb-0 text-dark">{item.title}</h6>
                  <span className="text-uppercase small text-muted" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                    {item.cat}
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        size="lg"
        className="gallery-modal"
      >
        <Modal.Body className="p-0 position-relative bg-black rounded-3 overflow-hidden">
          <button 
            onClick={() => setShowModal(false)}
            className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle p-2 shadow-lg"
            style={{ zIndex: 10, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <FaTimes />
          </button>
          {selectedImg && (
            <>
              <img src={selectedImg.src} alt={selectedImg.title} className="w-100 h-auto" />
              <div className="p-4 text-center text-white bg-dark">
                <h4 className="fw-bold mb-1">{selectedImg.title}</h4>
                <p className="mb-0 opacity-75 text-uppercase small">{selectedImg.cat}</p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      <style>{`
        .gallery-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .gallery-img {
          transition: transform 0.5s ease;
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
          background: rgba(220, 53, 69, 0.6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
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
        }
      `}</style>
    </div>
  )
}

export default Gallery
