import React from 'react'
import { Container } from 'react-bootstrap'
import capasLogo from '../assets/images/capas.logo.jpg'

const Profile = () => {
  return (
    <div className="profile-page py-5 bg-white">
      {/* Header Section */}
      <Container className="text-center mb-5">
        <img 
          src={capasLogo} 
          alt="Capas Logo" 
          style={{ 
            width: '450px', 
            height: '450px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            marginBottom: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }} 
        />
        <h1 className="fw-bold text-dark mb-4" style={{ fontSize: '3rem', letterSpacing: '4px' }}>PROFILE</h1>
      </Container>

      {/* Content Section */}
      <Container className="pb-5">
        <div className="profile-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* A. PHYSICAL FEATURES */}
          <section className="mb-5">
            <h4 className="fw-bold mb-4 text-dark" style={{ borderLeft: '5px solid var(--primary)', paddingLeft: '15px' }}>
              A. PHYSICAL FEATURES
            </h4>
            
            <div className="profile-text text-dark" style={{ fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'justify' }}>
              <p className="mb-3">
                Capas occupies a total area of 43,148.55 hectares. A land locked area located in the southwestern part of Tarlac province, bounded by the towns of San Jose on the north, Tarlac on the northeast, Concepcion on the east, Bamban on the south, and Zambales on the west. It lies at geographical coordinates of 15° 15’ to 15° 26’latitude and 120° 37’ longitude.
              </p>
              <p className="mb-3">
                It has approximately 46.24% rolling to hilly lands while the rest is plain to mountainous.
              </p>
              <p className="mb-3">
                Soil characteristics include Tarlac clay loam, La Paz fine sand and Luisita sandy sand. The western boundary is dominated by volcanic rocks of the basalt and andesite types covered by undifferentiated Tarlac soils.
              </p>
              <p className="mb-3">
                Capas has coarse to medium textured soil that is prone to seasonal flooding. Permeability is affected by soil texture and crop management practices by the farmers when they plant sugar cane and other annual crops. The town’s hilly and mountainous portion manifests moderate to very rapid permeability due to soil compactness.
              </p>
              <p className="mb-3">
                Sand deposits containing predominantly of quartz and magnetite minerals were observed in O’Donnell River. It is believed to have come from the pyroclastic hills and mountains in the southern part of the municipality. Sand and gravel found in the area are good for construction materials and aggregates. Non-active cones were also identified and mapped in Barangay Sta. Juliana near the Crow Valley area.
              </p>
              <p className="mb-3">
                There was confirmation that Capas has deposits of metallic and non-metallic minerals. The metallic deposits of manganese ore reserve was 190,000 metric ton where part of the areas are within the former US Military Reservation in Camp O’Donnell.
              </p>
              <p className="mb-3">
                Placer gold deposits, on the other hand have been reported to exist at Cabatuan Creek in Barangay Bueno including that of Pumice.
              </p>
              <p className="mb-3">
                Capas is traverse by various water systems, such as rivers, creeks and tributaries. The O’Donnell River forms as the principal river. The Bulsa-Morinones River flows into confluence with O’Donnell River with Bangut River serving as tributary. Both rivers are prone to flashfloods. Cutcut River is a minor river system which flows in Rio Chico River at the Tarlac-Nueva Ecija boundary. A hot spring is located in Barangay Bueno.
              </p>
              <p className="mb-3">
                Forest lands occupied the largest area of Capas. There are two critical watershed areas namely; O’Donnell and Balog-Balog with a total area of 28,025 hectares. Capas Death March Monument is declared a NIPAS Area.
              </p>
              <p className="mb-3">
                There are two national roads that link Capas with other municipalities and provinces. The Manila North Road classified as a north-south backbone and Capas-Magalang Road classified as a national secondary road. The Manila-North Road links Capas to the North Luzon Expressway, while the latter forms part of Capas access to Subic-Clark-Tarlac Expressway.
              </p>
            </div>
          </section>

          {/* B. DEMOGRAPHICS */}
          <section className="mb-5">
            <h4 className="fw-bold mb-4 text-dark" style={{ borderLeft: '5px solid var(--primary)', paddingLeft: '15px' }}>
              B. DEMOGRAPHICS
            </h4>
            
            <div className="profile-text text-dark" style={{ fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'justify' }}>
              <p className="mb-3">
                The Aetas were the first inhabitants of Capas, today it is inhabited by people of different ethnic groupings Pampangos, Ilocanos, Pangasinenses and Tagalogs. One percent are Bicolanos and Visayans.
              </p>
              <p className="mb-3">
                Capas has 20 barangays with a total population of 135,735, with a household population of 27,147 (NSO 2012, unofficial) at 3.55 annual growth rate.
              </p>
              <p className="mb-3">
                As of 2012 the highest household population distributed among Capas 20 Barangays was observed in Cristo Rey at 6,157 followed by O’Donnell, Sta. Lucia and Cutcut I at 2,827, 2,173, and 2,001 respectively. Bueno and Manga were observed to be the least populated Barangays at 320 and 370 respectively.
              </p>
              <p className="mb-3">
                Like the rest of the country, the young population in Capas exhibits a pyramidal age structure. The population between ages zero to 14 years old account for 40%.
              </p>
              <p className="mb-3">
                Capas is predominantly a Kapampangan speaking town. Roman Catholic religion has remained deeply rooted in the municipality of Capas ever since its propagation followed by the Iglesia ni Cristo denomination.
              </p>
              <p className="mb-3">
                Literacy rate is pegged at 96%.
              </p>
            </div>
          </section>

          {/* C. ECONOMY */}
          <section className="mb-5">
            <h4 className="fw-bold mb-4 text-dark" style={{ borderLeft: '5px solid var(--primary)', paddingLeft: '15px' }}>
              C. ECONOMY
            </h4>
            
            <div className="profile-text text-dark" style={{ fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'justify' }}>
              <p className="mb-3">
                Currently, an existing commercial area is located in the poblacion area, more specifically along major roads where major commercial/financial economic activities are concentrated.
              </p>
              <p className="mb-3">
                Several educational institutions, medical facilities, religious institutions and government institutions are also found in this area. Major transport routes also pass through the poblacion area which links the municipality to other nearby areas. This area was identified as major commercial/institutional area due to the existence/availability of the said institutions and services.
              </p>
              <p className="mb-3">
                The municipality is predominantly an agricultural town despite the fast pace of urbanization. The total productive agricultural area devoted to crops is 9,567 has. This is 30.28% of the total land area.
              </p>
              <p className="mb-3">
                Secondary agricultural crops include corn, root crops and vegetables which are planted extensively on an intercropping basis in between rice planting and harvesting.
              </p>
              <p className="mb-3">
                The needed economic support facilities for agro-industrial activities such as post harvest facilities, including drying stations, rice and feed mills must be put in place. These economic activities pose great potential economic gains for Capas.
              </p>
              <p className="mb-3">
                Organic farming is also an economic activity which poses a great potential. Already existing are organic farms in Barangays Sta. Rita and Manga.
              </p>
              <p className="mb-3">
                Tourism is also a vital player in Capas economy. Sta. Juliana is home to a satellite office while the Municipal Hall serves as the main tourism information center.
              </p>
              <p className="mb-3">
                The Barangay is home to a number of tourism sites and activities which includes a wellness SPA, Tambo lake and Hotspring. It also serves as the jump off point going to Mt. Pinatubo. Barangay O’Donnell the adjacent barangay of Sta. Juliana offers accommodation facilities for tourist.
              </p>
              <p className="mb-3">
                Barangay Bueno and Maruglu also serve as tourism sites for Bueno Hot springs, Mabanagnag Falls, the gunnery range and ethnic festivals for katutubo (Aeta Day).
              </p>
            </div>
          </section>

        </div>
      </Container>
    </div>
  )
}

export default Profile
