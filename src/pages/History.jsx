import React from 'react'
import { Container } from 'react-bootstrap'
import backgroundImage from '../assets/images/capas.background.png'

const History = () => {
  return (
    <div className="history-page py-5 bg-white min-vh-100">
      {/* Header Section */}
      <Container className="text-center mb-5">
        <h1 className="fw-bold text-dark mb-4" style={{ fontSize: '3rem', letterSpacing: '2px' }}>HISTORY OF CAPAS</h1>
        
        <div className="mb-5 shadow-lg rounded overflow-hidden mx-auto" style={{ maxWidth: '1000px' }}>
          <img 
            src={backgroundImage} 
            alt="Municipality of Capas" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      </Container>

      {/* Content Section */}
      <Container className="pb-5">
        <div className="history-content text-dark" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify', fontWeight: '500' }}>
          <p className="mb-4">
            The Municipality of Capas, established in 1712, holds a significant place among the oldest towns in Tarlac. Alongside Bamban (1710), Paniqui (1574), and Tarlac (1686), Capas emerged due to the presence of numerous settlements along the Cutcut River’s riverbanks in the eighteenth century. These settlements belonged to the domains of Pagbatuan and Gudya, which were united by Capitan Mariano Capiendo when he founded the municipality.
          </p>

          <p className="mb-4">
            There are three versions regarding the origin of the name “Capas” based on historical records. The first version attributes it to capas-capas, an edible flower resembling caturay that grew abundantly along the CutCut riverbanks. The second version suggests that it was derived from the Aeta dialect, referring to a cotton tree called capas. The third version proposes that the name resulted from the corruption of the first three letters of the surnames of early settlers, including Capitulo, Capitly, Capiendo, Capuno, Caponga, Capingian, Caparas, Caperlac, Capumpue, Capit, Capil, Capunfuerza, Capunpun, Caputol, Capul, and Capan. These settlers were commonly referred to as “Caps” or “Capas” in the local dialect.
          </p>

          <p className="mb-4">
            In 1860, the Spanish colonial government established the politico-military commandancia, which included Capas, Concepcion, Bamban, Mabalacat, Magalang, Porac, Floridablanca, Victoria, and Tarlac. However, when Tarlac became a province in 1874, the commandancia ceased to function. Additionally, due to frequent flooding along the CutCut riverbanks, the town was relocated to the upper area, where it has remained permanently established.
          </p>

          <p className="mb-4">
            Administratively, Capas was initially governed by the Capitan Municipal, who received orders from the Capitan General in Manila during the Spanish era. This position later changed to President during the American occupation and was further modified to Mayor in mid-1938, which remains the official title to this day.
          </p>

          <p className="mb-4">
            Capas has played a noteworthy role in the Philippines’ history. Its residents actively participated in the uprising against Spanish rule. However, Capas gained its most memorable reputation as the terminal point of the infamous Death March, during which American and Filipino soldiers endured great suffering under Japanese occupation. The town also hosted strategic facilities such as the O’Donnell Transmitter Station and the Naval Transmitter Station, which played crucial roles in the United States’ dominance in Asia. Notably, Capas is the hometown of Bernabe G. Buscayno, also known as “Kumander Dante,” who made his mark during the turbulent period of Philippine contemporary history in the late 1960s and 1970s.
          </p>

          <p className="mb-4">
            Capas faced significant challenges in recent years, including the aftermath of two disastrous Mount Pinatubo eruptions that displaced the local economy and caused the closure of American military bases, leading to the loss of numerous jobs. Despite these hardships, Capas is gradually recovering. Having been spared from subsequent eruptions of Mount Pinatubo, the town is now being cautiously observed by its neighboring communities as an area with potential for economic development.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default History
