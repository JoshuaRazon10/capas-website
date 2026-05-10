import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, InputGroup, Button, Table, Badge } from 'react-bootstrap'
import { FaSearch, FaNewspaper, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const articles = [
    { date: 'December 1, 2025', title: '𝗖𝗢𝗡𝗚𝗥𝗔𝗧𝗨𝗟𝗔𝗧𝗜𝗢𝗡𝗦 𝗧𝗢 𝗢𝗨𝗥 𝗡𝗘𝗪 𝗕𝗢𝗔𝗥𝗗 𝗣𝗔𝗦𝗦𝗘𝗥𝗦!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0kPZDy2pPY1YHsfF4c5pK9zvfdmotuk24ZYBGgoKxoCeEUXcoTWUc2Ln6E2GNhhWol' },
    { date: 'December 1, 2025', title: 'Regional Winner para sa Local Legislative Award para sa taong 2022-2025!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0Rg7kGiWNUPXqDzeePfM578g42vtdTNigszZa3Fnbe7LAvH5op4KTEjRMdx6i7GN8l' },
    { date: 'December 4, 2025', title: '𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗔𝘁𝘁𝘆. 𝗔𝗴𝗻𝗲𝘀 𝗗𝗲𝘃𝗮𝗻𝗮𝗱𝗲𝗿𝗮!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid04PQ8TwPFqEYt67fqBxc7BqevtKpYYh94kaLcLg3STmKJQyEUsZ6KYUqYJpoLRKDJl' },
    { date: 'December 5, 2025', title: '𝗪𝗘 𝗔𝗥𝗘 𝗡𝗨𝗠𝗕𝗘𝗥 𝗢𝗡𝗘!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0LtxGtvuBn1vgfTXTixuZuArQQ4Da3inqTXvmJEqEAfGfbLUbc2txSqRcK6eLD4zul' },
    { date: 'December 5, 2025', title: '𝗦𝗮𝗻𝗴𝗴𝘂𝗻𝗶𝗮𝗻𝗴 𝗕𝗮𝘆𝗮𝗻 𝗻𝗴 𝗖𝗮𝗽𝗮𝘀, 𝗛𝘂𝗺𝗮𝗸𝗼𝘁 𝗻𝗴 𝗠𝗮𝗿𝗮𝗺𝗶𝗻𝗴 𝗣𝗮𝗿𝗮𝗻𝗴𝗮𝗹!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0X85DUPE5uqaLzwbW1YvwzG6SPG4rrKJa7TPM6JezPHdEGYCMPCrDvTtyB3TvshMzl' },
    { date: 'December 5, 2025', title: '𝗖𝗢𝗡𝗚𝗥𝗔𝗧𝗨𝗟𝗔𝗧𝗜𝗢𝗡𝗦 𝗔𝗧 𝗚𝗢𝗢𝗗 𝗟𝗨𝗖𝗞, 𝗞𝗢𝗥𝗢 𝗗𝗢𝗠𝗜𝗡𝗜𝗞𝗔𝗡𝗢!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0cKiEn9oc53ed1vzg8ErZyXrjDpjpbDPNUYN83nz2NAWdfrytoMzXCxGmT2bfqH8jl' },
    { date: 'December 5, 2025', title: '80 𝗩𝗼𝗶𝗰𝗲𝘀, 𝗢𝗻𝗲 𝗖𝗮𝗽𝗮𝘀!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0avEwCxmjWMp3HVzmMtmRnzwg1Hi2zNoYWTqvDFAghD3xHvmbHmNhGkA4jNgwLiGjl' },
    { date: 'December 12, 2025', title: '𝗣𝗿𝗼𝘂𝗱 𝗚𝗹𝗼𝗯𝗮𝗹 𝗹𝗲𝗮𝗱𝗲𝗿, 𝗣𝗿𝗼𝘂𝗱 𝗖𝗔𝗣𝗔𝗦𝗘Ñ𝗢!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02zdXHPwFT2orNyXCpw5ke3L9gPrc9pkg6cjzkE7ycPDjTWdDS19C2kya19ycTZhQEl' },
    { date: 'December 14, 2025', title: '𝗞𝗶𝗿𝘀𝘁𝗲𝗻 𝗚𝗶𝗲𝗻 𝗧𝗶𝘇𝗼𝗻, Barangay Sto. Rosario, crowned 𝗠𝗶𝘀𝘀 𝗖𝗮𝗽𝗮𝘀 2025', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02s4prfpUmmhdL4NHNLYGikgmUWQQ4ctV27CHUL3EEfewZk8xARk1LGQzd7b9qTKpzl' },
    { date: 'December 14, 2025', title: '𝗜𝗡𝗧𝗥𝗢𝗗𝗨𝗖𝗜𝗡𝗚 𝗠𝗜𝗦𝗦 𝗖𝗔𝗣𝗔𝗦 2025!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02p8MDYgygRin2wKtVWA9L49bQz9amDimtrkYmx7LRaBSy9pYpGsVeSZgcrA32mawsl' },
    { date: 'December 15, 2025', title: '𝗖𝗮𝗽𝗮𝘀, 𝗚𝗲𝘁-𝗚𝗲𝘁-𝗔𝘄𝘄𝘄𝗮𝗿𝗿𝗱𝘀!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0rPQJP7ZPuGjQKMmcKMMcY3THFKC6KnX7YmLBDZ3ixvQpufbw5dTMJtBMgbwrMVEPl' },
    { date: 'December 15, 2025', title: 'Licensed Dentists - November 2025 Licensure Exam', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0dK3iBngPJd5P9nmR6mgkGNnJuk64giNDpvvDf8a3Lhysrmarvt4x3FzDtwNA5A5Fl' },
    { date: 'December 22, 2025', title: 'THE FIRST POLICE BRIGADIER GENERAL FROM CAPAS: PBGEN JOYCE PATRICK BULAUAN SANGALANG', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02ScBoUQ7U66xhvSPMn5gaqqVFbnFSnzW8JpK6dtb3kvYuW6ViTkz2CNhJRVLoDP85l' },
    { date: 'December 24, 2025', title: '𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗼𝘂𝗿 𝗡𝗲𝘄 𝗖𝗮𝗽𝗮𝘀𝗲ñ𝗼 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹𝘀!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0ixZxepmbKbxKSPVYyXuWWYMjWCm92XVSGuVGMSR5Jv8VuxEmE1dk6v595Va7aCsgl' },
    { date: 'December 24, 2025', title: 'Congratulations to the Licensed Professional Teachers!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid036XMLSkrEWQD7L6SibyXKYVr6hUCjmJp4pvazVupV1A3WMkXmGvn1k2GJMijc9mQjl' },
    { date: 'December 24, 2025', title: '𝗢𝗨𝗥 𝗤𝗨𝗘𝗘𝗡 𝗜𝗦 𝗛𝗢𝗠𝗘!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02Q8o3HXnUyoMxPPEmtke42ProGMbM7A1p1tTBEsmpPc346JPLAwbstmKGNqbTMD3Nl' },
    { date: 'December 27, 2025', title: '𝗙𝗥𝗢𝗠 𝗧𝗔𝗟𝗔𝗚𝗔 𝗧𝗢 𝗧𝗛𝗔𝗜𝗟𝗔𝗡𝗗: 𝗝𝗔𝗬𝗣𝗘𝗘 𝗗𝗘𝗟𝗔 𝗖𝗥𝗨𝗭 𝗜𝗦 𝗚𝗢𝗟𝗗𝗘𝗡!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02riWkLbNtmkZZfjT1UArguA4sBHZWhuw4RRrHrFwYvLrzDnaG5ZnLc3Yb3tKoY278l' },
    // October Articles
    { date: 'October 2, 2025', title: '𝗖𝗮𝗽as 𝗧𝗲𝗮𝗰𝗵𝗲𝗿𝘀 𝗪𝗶𝗻 3𝗿𝗱 𝗥𝘂𝗻𝗻𝗲𝗿-𝗨𝗽 𝗶𝗻 𝗛𝗜𝗠𝗜𝗚𝗦𝗔𝗬𝗔𝗪𝗜𝗧𝗔𝗡', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0eqgXConFTo7YSwELELFgifeSVA9aA4g7552TTMabYwYcHpyL1TPNXq7PzpU3ny3jl' },
    { date: 'October 6, 2025', title: '𝗔𝗻𝗱𝗿𝗶𝗲 𝗛𝗲𝗹𝗿𝗶𝗰 𝗔. 𝗣𝗮𝗻𝗴𝗶𝗹𝗶𝗻𝗮𝗻, 𝗕𝗮𝘁𝗮𝗻𝗴 𝗖𝗮𝗽𝗮𝘀𝗲ñ𝗼', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0aNRARg3HWaKwBG49eNpu2U3zdesUfWAUeACHZkStJbPzEjStaVN344TGtPaxCwSol' },
    { date: 'October 8, 2025', title: '𝗖𝗮𝗽𝗮𝘀 𝗟𝗚𝗨 𝗕𝗮𝗴𝘀 𝗙𝗶𝗿𝘀𝘁-𝗘𝘃𝗲𝗿 𝗡𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗔𝘄𝗮𝗿𝗱 𝗳𝗼𝗿 𝗢𝘂𝘁𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝗔𝗰𝗰𝗼𝘂𝗻𝘁𝗶𝗻𝗴 𝗢𝗳𝗳𝗶𝗰𝗲', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02wpkpdebDvSFqY6PXhvWSAnsSyrMoJznBhU7WP8eyjH9nHQaLzSRt6Dk9z9mPFx6Yl' },
    { date: 'October 10, 2025', title: '𝗣𝗔𝗧𝗟𝗜𝗡𝗚, 𝗠𝗔𝗚𝗔𝗟𝗜𝗡𝗚!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid015UR4Ja71YpbEkqaAD8rtwc1QzvYt5gV6yWLddncBVcB56k7DHxc8o81j2banme2l' },
    { date: 'October 15, 2025', title: '𝗕𝗮𝘁𝗮𝗻𝗴 𝗺𝗮𝗵𝘂𝘀𝗮𝘆 𝘀𝗮 𝗠𝗮𝘁𝗵, 𝗧𝗮𝗴𝗮-𝗖𝗮𝗽𝗮𝘀 𝘆𝗮𝗻!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0wevq5sCmeEpnxRyJFKEHjcXVnabfWJodw4VzxD144GQxsAVbSt7bNtaxSLuoXBvtl' },
    { date: 'October 17, 2025', title: 'Physician Licensure Exam Passers!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0t2GADggQyZehDUQ4Y6QuRd8aWs8GePfYGhwSkExqGovBgQcgCAVNBQ1iJ4wdjUVYl' },
    { date: 'October 18, 2025', title: 'October 2025 Optometrist Licensure Examination Passers!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid07yjEUKKDKhqquWEjaxgeZb2hgLS45Ud1vmTbr4XMfirENYwS5dXnBXTExQMWndB9l' },
    { date: 'October 18, 2025', title: 'Congratulations Dr. Sienna Rose Lobo Mabuti of Brgy. Aranguren', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02eeS4jwnQFLbCJpmRD2mwWY7MWzQzpvt35w3th7R2pzNzW8VmHvx99XrdnBcf9m8Bl' },
    { date: 'October 21, 2025', title: '𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀, 𝗘𝗻𝗴𝗿. 𝗥𝗼𝘀𝗮𝗹𝗶𝗻𝗱𝗮 𝗡. 𝗦𝗮𝗺𝗽𝗮𝗻𝗴!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid036huwpFN2GcRL8k6n68v1scjTtL5h3T21wGL1qL7Hrd7onTMMiCVyqXfzE1PHDLNUl' },
    { date: 'October 21, 2025', title: '𝗟𝗼𝗰𝗮𝗹 𝗕𝗮𝗿𝗯𝗲𝗿 𝗡𝗮𝗺𝗲𝗱 𝗙𝗶𝗻𝗮𝗹𝗶𝘀𝘁 𝗶𝗻 𝗡𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗖𝗼𝗺𝗽𝗲𝘁𝗶𝘁𝗶𝗼𝗻', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0bdpWAUuic3jUzLauPieY8NzEmKdgHZbnGTHTV76GM74K3kZadYMz86Xqg5yNVjGvl' },
    { date: 'October 25, 2025', title: 'Chemical Technicians and Chemist Licensure Exam Passers!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid023bVuTRoQCQ2V4xN727gaA2swYk4YNgD15sutJodPHHb6D9oDUjG2BwQp6LZfSStvl' },
    { date: 'October 28, 2025', title: 'Dr. Elvira B. Mercado National Award', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0245ZnqWmUnj9crYELPFfHVvxW2KsbcFrnzFHc5ga5U9BzN9tZy6Tmc9FnPj6oZhaml' },
    { date: 'October 30, 2025', title: '𝗖𝗔𝗣𝗔𝗦 𝗕𝗔𝗥𝗕𝗘𝗥 𝗜𝗦 𝗡𝗔𝗧𝗜𝗢𝗡𝗔𝗟 𝗖𝗛𝗔𝗠𝗣𝗜𝗢𝗡!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid0tU3o48V7JNLBNywhdsgB9XpdTSXDCBsykoSVF6wAC7Lm8vAPnaFJcffkZuGn5ZGql' },
    { date: 'October 31, 2025', title: 'Pagbati sa ating bagong Capaseño Veterinarian!', link: 'https://www.facebook.com/CapasInformationOfficeOfficial/posts/pfbid02gn55hWYxiGujKdKNzeXXKbVArXtEdzbquKbNPKwkhZJDg7H5Z6TFVrRfxwzAvAAWl' },
  ]

  const filteredArticles = articles.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <div className="breadcrumb-custom mb-3 opacity-75">
            <Link to="/" className="text-white text-decoration-none">Home</Link> / <span className="text-primary-light">News</span>
          </div>
          <h1 className="display-4 fw-bold">Municipal Articles</h1>
          <p className="lead opacity-75">Archive of official news, press releases, and stories from Capas.</p>
        </Container>
      </div>

      <Container className="py-5">
        <Card className="border-0 shadow-sm rounded-4 mb-5 p-4">
          <InputGroup className="shadow-sm rounded-pill overflow-hidden border-0 bg-light p-1">
            <InputGroup.Text className="bg-transparent border-0 ps-3">
              <FaSearch className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search articles by title or date..."
              className="border-0 bg-transparent py-3 shadow-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Card>

        {/* Latest Previews */}
        {!searchTerm && (
          <div className="mb-5">
            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <div style={{ width: '8px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
              Latest Highlights
            </h3>
            <Row className="g-4">
              {articles.slice(0, 5).map((item, idx) => (
                <Col key={idx} lg={idx === 0 ? 8 : 4} md={6}>
                  <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-lift transition-all bg-white">
                    <div style={{ 
                      height: idx === 0 ? '300px' : '200px', 
                      background: `linear-gradient(135deg, var(--blue-logo), var(--primary))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                      <FaNewspaper size={idx === 0 ? 80 : 50} style={{ opacity: 0.2, color: 'white' }} />
                      <Badge bg="light" className="text-dark position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 shadow-sm fw-bold">
                        Latest Post #{idx + 1}
                      </Badge>
                    </div>
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center gap-2 mb-2 text-muted small fw-bold">
                        <FaCalendarAlt size={12} /> {item.date}
                      </div>
                      <h5 className="fw-bold mb-3" style={{ lineHeight: '1.4' }}>{item.title}</h5>
                      <Button 
                        as="a" 
                        href={item.link} 
                        target="_blank" 
                        variant="link" 
                        className="p-0 text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-auto"
                      >
                        Read Full Story on Facebook <FaExternalLinkAlt size={12} />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold mb-0">All Article Records</h3>
          <Badge bg="light" className="text-muted rounded-pill px-3 py-2 border">
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
                filteredArticles.map((item, idx) => (
                  <tr key={idx} className="align-middle">
                    <td className="py-4 px-4 border-0">
                      <div className="d-flex align-items-center gap-2">
                        <FaCalendarAlt className="text-primary opacity-50" />
                        <span className="fw-semibold">{item.date}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-0">
                      <h6 className="mb-0 fw-bold text-dark" style={{ lineHeight: '1.4' }}>{item.title}</h6>
                    </td>
                    <td className="py-4 px-4 border-0 text-center">
                      <Button 
                        as="a" 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        variant="outline-primary"
                        className="rounded-pill px-3 py-2 btn-sm fw-bold border-2 d-inline-flex align-items-center gap-2"
                      >
                        Read Post <FaExternalLinkAlt size={12} />
                      </Button>
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
