import React from 'react'
import { Container, Row, Col, Table, Tabs, Tab, Card, Badge } from 'react-bootstrap'
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaSearch, FaUserTie } from 'react-icons/fa'

const Directory = () => {
  const executiveOffices = [
    {
      no: 1,
      name: 'Atty. Roseller B. Rodriguez',
      position: 'Municipal Mayor',
      department: 'Office of the Local Chief Executive',
      deptEmail: ['lgucapasmayorsoffice@gmail.com', 'capasmayorsoffice@capas.gov.ph', 'officeadBR2022@gmail.com'],
      contact: ['045 925 0154', '045 925 3258'],
      personalEmail: ['rosellerrodriguez18@gmail.com', 'r.rodriguez@capas.gov.ph']
    },
    {
      no: 2,
      name: 'Alma S. Ayson',
      position: 'Municipal Administrator / Municipal Assessor / Officer-in-Charge',
      department: "Municipal Administrator's Office / Assessor's Office / Human Resources Management Office",
      deptEmail: ['administrator@capas.gov.ph', 'assessorsoffice.capas@gmail.com', 'assessor@capas.gov.ph', 'hrmo@capas.gov.ph', 'capashrmo@gmail.com'],
      contact: ['-'],
      personalEmail: ['a.ayson@capas.gov.ph']
    },
    {
      no: 3,
      name: 'Rhyzeth P. Maliwat, CPA',
      position: 'Municipal Accountant',
      department: 'Accounting Office',
      deptEmail: ['accounting@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['r.maliwat@capas.gov.ph']
    },
    {
      no: 4,
      name: 'Gina M. Intong',
      position: 'Municipal Budget Officer',
      department: 'Budget Office',
      deptEmail: ['budget@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['g.intong@capas.gov.ph', 'gmintong621@gmail.com']
    },
    {
      no: 5,
      name: 'Ma. Mia Q. Dizon',
      position: 'Officer-in-Charge',
      department: 'Business Processing and Licensing Office',
      deptEmail: ['bplo@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['m.dizon@capas.gov.ph', 'ma.mia29@yahoo.com']
    },
    {
      no: 6,
      name: 'Rommel T. Reamico',
      position: 'General Services Officer',
      department: 'General Services Office',
      deptEmail: ['generalservicesoffice@capas.gov.ph', 'gsocapas@gmail.com'],
      contact: ['-'],
      personalEmail: ['r.reamico@capas.gov.ph']
    },
    {
      no: 7,
      name: 'Jhoan P. Altre, CPA',
      position: 'Officer-in-Charge',
      department: 'Market Office',
      deptEmail: ['marketoffice@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['j.altre@capas.gov.ph']
    },
    {
      no: 8,
      name: 'Jesus Q. Dizon',
      position: 'Officer-in-Charge',
      department: 'Motorpool',
      deptEmail: ['motorpool@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['j.dizon@capas.gov.ph', 'jqd128@gmail.com']
    },
    {
      no: 9,
      name: 'Maita Claire L. Bartolome',
      position: 'Officer-in-Charge',
      department: 'Municipal Public Information Office',
      deptEmail: ['publicinformationoffice@capas.gov.ph', 'mio.capasgov@gmail.com'],
      contact: ['-'],
      personalEmail: ['mc.bartolome@capas.gov.ph']
    },
    {
      no: 10,
      name: 'Carlos B. Tuazon',
      position: 'Officer-in-Charge',
      department: 'Municipal Agriculture Office',
      deptEmail: ['dacapastarlac@gmail.com'],
      contact: ['0949 611 9652'],
      personalEmail: ['cbtuazon21@gmail.com']
    },
    {
      no: 11,
      name: 'Atty. Marco Polo E. Cunanan',
      position: 'Municipal Civil Registrar / Data Protection Officer',
      department: 'Municipal Civil Registry / Data Privacy Committee',
      deptEmail: ['mcro@capas.gov.ph', 'capas.mcr@gmail.com'],
      contact: ['045 925 0504'],
      personalEmail: ['atty.m.cunanan@capas.gov.ph']
    },
    {
      no: 12,
      name: 'Angelito S. Mallari',
      position: 'Officer-in-Charge',
      department: 'Municipal Cooperative Development Office',
      deptEmail: ['cooperativeoffice@capas.gov.ph'],
      contact: ['045 923 1407'],
      personalEmail: ['l.mallari@capas.gov.ph']
    },
    {
      no: 13,
      name: 'Mark Robert L. Mercado EMT, RN',
      position: 'Officer-in-Charge',
      department: 'Municipal Disaster Risk Reduction Management Office',
      deptEmail: ['mdrrmo@capas.gov.ph', 'mdrrmc.capas@gmail.com'],
      contact: ['0951 127 9465'],
      personalEmail: ['m.mercado@capas.gov.ph']
    },
    {
      no: 14,
      name: 'Engr. Baby Lyn C. Robles',
      position: 'Municipal Engineer / Officer-in-Charge / Zoning Officer',
      department: 'Municipal Engineering Office / Municipal Planning and Development Office / Municipal Zoning Office',
      deptEmail: ['engineering@capas.gov.ph', 'meocapas2017@gmail.com', 'mpdo@capas.gov.ph', 'mpdocapas@gmail.com', 'mlo@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['b.robles@capas.gov.ph']
    },
    {
      no: 15,
      name: 'Gener S. Tanhueco',
      position: 'Municipal Environment and Natural Resources Officer',
      department: 'Municipal Environment and Natural Resources Office',
      deptEmail: ['menro@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['g.tanhueco@capas.gov.ph']
    },
    {
      no: 16,
      name: 'Dr. Franchette Reyes',
      position: 'Officer-in-Charge',
      department: 'Municipal Health Office',
      deptEmail: ['municipalhealthoffice@capas.gov.ph', 'capasrhu@yahoo.com.ph'],
      contact: ['045 925 0529'],
      personalEmail: ['dr.r.reyes@capas.gov.ph']
    },
    {
      no: 17,
      name: '-',
      position: 'Municipal Legal Officer',
      department: 'Municipal Legal Office',
      deptEmail: ['legaloffice@capas.gov.ph'],
      contact: ['-'],
      personalEmail: []
    },
    {
      no: 18,
      name: 'Maria Consorcia R. Corpuz',
      position: 'Officer-in-Charge',
      department: 'Municipal Social Welfare and Development Office',
      deptEmail: ['mswdo@capas.gov.ph', 'mswdcapas@gmail.com'],
      contact: ['-'],
      personalEmail: []
    },
    {
      no: 19,
      name: 'Paul L. Alata',
      position: 'Officer-in-Charge',
      department: 'Municipal Tourism Office',
      deptEmail: ['tourism@capas.gov.ph', 'capastourismoffice@gmail.com'],
      contact: ['-'],
      personalEmail: []
    },
    {
      no: 20,
      name: 'Evelyn P. Roque',
      position: 'Municipal Treasurer',
      department: 'Municipal Treasury Office',
      deptEmail: ['treasury@capas.gov.ph', 'mto_capas@yahoo.com'],
      contact: ['-'],
      personalEmail: ['e.roque@capas.gov.ph']
    },
    {
      no: 21,
      name: 'Dr. Hensly Hope A. Baun',
      position: 'Municipal Veterinarian',
      department: 'Municipal Veterinary Office',
      deptEmail: ['veterinaryoffice@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['h.baun@capas.gov.ph']
    },
    {
      no: 22,
      name: 'Dr. Leah G. Pangan',
      position: 'Officer-in-Charge',
      department: 'Ospital Ning Capas',
      deptEmail: ['onc@capas.gov.ph'],
      contact: ['045 491 1361', '0908 897 9421', '0908 821 6879'],
      personalEmail: ['dra.l.pangan@capas.gov.ph']
    },
    {
      no: 23,
      name: 'Flordeliza H. Villanueva',
      position: 'Officer-in-Charge',
      department: 'Ospital Ning Capas Administrative Office',
      deptEmail: ['flordelizanucup@yahoo.com'],
      contact: ['-'],
      personalEmail: []
    },
    {
      no: 24,
      name: 'Merly S. Bumagat',
      position: 'Officer-in-Charge',
      department: 'Public Employment Services Office (PESO)',
      deptEmail: ['peso@capas.gov.ph'],
      contact: ['045 491 3840'],
      personalEmail: ['m.bumagat@capas.gov.ph']
    },
    {
      no: 25,
      name: 'Engr. Sonia M. Compra',
      position: 'Officer-in-Charge',
      department: 'Public Order and Safety Management Office (POSMO)',
      deptEmail: ['posmo@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['s.compra@capas.gov.ph']
    }
  ]

  const sbMembers = [
    {
      no: 1,
      name: 'Hon. Alex C. Espinosa',
      position: 'Municipal Vice Mayor',
      department: 'Sangguniang Bayan Office',
      deptEmail: ['vmo@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['espinosa@capas.gov.ph']
    },
    { no: 2, name: 'Hon. Julieta C. Jimenez', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['jimenez@capas.gov.ph'] },
    { no: 3, name: 'Hon. Ariel G. Batican', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['batican@capas.gov.ph'] },
    { no: 4, name: 'Hon. Editha M. Yumul', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['yumul@capas.gov.ph'] },
    { no: 5, name: 'Hon. Benz A. Pineda', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['pineda@capas.gov.ph'] },
    { no: 6, name: 'Hon. Clodualdo B. Gamboa', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['gamboa@capas.gov.ph'] },
    { no: 7, name: 'Hon. Jefferson M. Garcia', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['garcia@capas.gov.ph'] },
    { no: 8, name: 'Hon. Estela S. Manlupig', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['manlupig@capas.gov.ph'] },
    { no: 9, name: 'Hon. Alejandro T. Dueñas', position: 'Municipal Councilor', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['duenas@capas.gov.ph'] },
    { no: 10, name: 'Hon. Victor Valantin', position: 'IPMR Representative', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['valantin@capas.gov.ph'] },
    { no: 11, name: 'Hon. Arnold Arcilla', position: 'ABC President', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['arcilla@capas.gov.ph'] },
    { no: 12, name: 'Hon. Marleo Delos Reyes', position: 'SK Federation President', department: 'Sangguniang Bayan', deptEmail: [], contact: [], personalEmail: ['delosreyes@capas.gov.ph'] },
  ]

  const barangayOfficials = [
    // 1 Aranguren
    { no: 1, name: 'Bonifacio P. Alzadon Jr.', position: 'Barangay Chairman', department: 'Aranguren', deptEmail: [], contact: ['09084723736'], personalEmail: [] },
    { no: '', name: 'Jenny S. Manalad', position: 'SK Chairman', department: 'Aranguren', deptEmail: [], contact: ['09661352696'], personalEmail: [] },
    { no: '', name: 'Joanne L. Tua', position: 'Barangay Secretary', department: 'Aranguren', deptEmail: [], contact: ['09695032116'], personalEmail: [] },
    // 2 Bueno
    { no: 2, name: 'Danny D. Agdeppa', position: 'Barangay Chairman', department: 'Bueno', deptEmail: [], contact: ['09704749790'], personalEmail: [] },
    { no: '', name: 'Vim Aurem Ningala', position: 'SK Chairman', department: 'Bueno', deptEmail: [], contact: ['09468514687'], personalEmail: [] },
    { no: '', name: 'Rosalinda M. Dumlao', position: 'Barangay Secretary', department: 'Bueno', deptEmail: [], contact: ['09484961819'], personalEmail: [] },
    // 3 Cristo Rey
    { no: 3, name: 'Arturo O. Joves', position: 'Barangay Chairman', department: 'Cristo Rey', deptEmail: [], contact: ['09195871858'], personalEmail: [] },
    { no: '', name: 'Angel Erika B. Mesa', position: 'SK Chairman', department: 'Cristo Rey', deptEmail: [], contact: ['09811867144'], personalEmail: [] },
    { no: '', name: 'Marife Baun', position: 'Barangay Secretary', department: 'Cristo Rey', deptEmail: [], contact: ['09497087119'], personalEmail: [] },
    // 4 Cubcub
    { no: 4, name: 'Jose P. Tolentino', position: 'Barangay Chairman', department: 'Cubcub', deptEmail: [], contact: ['09165834221'], personalEmail: [] },
    { no: '', name: 'Karl Andrey D. Alimurung', position: 'SK Chairman', department: 'Cubcub', deptEmail: [], contact: ['09615831041'], personalEmail: [] },
    { no: '', name: 'Julie T. Salak', position: 'Barangay Secretary', department: 'Cubcub', deptEmail: [], contact: ['09107897642'], personalEmail: [] },
    // 5 Cut-Cut I
    { no: 5, name: 'Gerardo C. Sangalang', position: 'Barangay Chairman', department: 'Cut-Cut I', deptEmail: [], contact: ['09605164665'], personalEmail: [] },
    { no: '', name: 'Krizza Jane P. Payumo', position: 'SK Chairman', department: 'Cut-Cut I', deptEmail: [], contact: ['09773023236'], personalEmail: [] },
    { no: '', name: 'Loreto Garcia', position: 'Barangay Secretary', department: 'Cut-Cut I', deptEmail: [], contact: ['09300934695'], personalEmail: [] },
    // 6 Cut-Cut II
    { no: 6, name: 'Edwin A. Macale', position: 'Barangay Chairman', department: 'Cut-Cut II', deptEmail: [], contact: ['09398697945'], personalEmail: [] },
    { no: '', name: 'Bonito A. Arroyo', position: 'SK Chairman', department: 'Cut-Cut II', deptEmail: [], contact: ['09703869115'], personalEmail: [] },
    { no: '', name: 'Joselyn G. Lenon', position: 'Barangay Secretary', department: 'Cut-Cut II', deptEmail: [], contact: ['09517532096'], personalEmail: [] },
    // 7 Dolores
    { no: 7, name: 'Rogelio D. Pabustan Jr.', position: 'Barangay Chairman', department: 'Dolores', deptEmail: [], contact: ['09328904370'], personalEmail: [] },
    { no: '', name: 'Omar P. Camaya', position: 'SK Chairman', department: 'Dolores', deptEmail: [], contact: ['09092277569'], personalEmail: [] },
    { no: '', name: 'Jocelyn C. Natividad', position: 'Barangay Secretary', department: 'Dolores', deptEmail: [], contact: ['09603788424'], personalEmail: [] },
    // 8 Estrada
    { no: 8, name: 'Allan S. Ramos', position: 'Barangay Chairman', department: 'Estrada', deptEmail: [], contact: ['09279084180'], personalEmail: [] },
    { no: '', name: 'Gladys Anne L. Caldino', position: 'SK Chairman', department: 'Estrada', deptEmail: [], contact: ['09150284059'], personalEmail: [] },
    { no: '', name: 'Mariekeith M. Manguera', position: 'Barangay Secretary', department: 'Estrada', deptEmail: [], contact: ['09686620897'], personalEmail: [] },
    // 9 Lawy
    { no: 9, name: 'Porfirio D. Laxamana Jr.', position: 'Barangay Chairman', department: 'Lawy', deptEmail: [], contact: ['09472538740'], personalEmail: [] },
    { no: '', name: 'Laisa G. Panoy', position: 'SK Chairman', department: 'Lawy', deptEmail: [], contact: ['09485013580'], personalEmail: [] },
    { no: '', name: 'Jenina Lein T. Linogo', position: 'Barangay Secretary', department: 'Lawy', deptEmail: [], contact: ['09203413539'], personalEmail: [] },
    // 10 Manga
    { no: 10, name: 'Julie R. Guevarra', position: 'Barangay Chairman', department: 'Manga', deptEmail: [], contact: ['09813089501'], personalEmail: [] },
    { no: '', name: 'Lorie C. Tayag', position: 'SK Chairman', department: 'Manga', deptEmail: [], contact: ['09283674188'], personalEmail: [] },
    { no: '', name: 'Glaiza G. Datu', position: 'Barangay Secretary', department: 'Manga', deptEmail: [], contact: ['09070208206'], personalEmail: [] },
    // 11 Manlapig
    { no: 11, name: 'Ricky M. Datu', position: 'Barangay Chairman', department: 'Manlapig', deptEmail: [], contact: ['09387929334'], personalEmail: [] },
    { no: '', name: 'Paul Angelo T. Mallari', position: 'SK Chairman', department: 'Manlapig', deptEmail: [], contact: ['09071008893'], personalEmail: [] },
    { no: '', name: 'Rogelio S. Beltran', position: 'Barangay Secretary', department: 'Manlapig', deptEmail: [], contact: ['09107234173'], personalEmail: [] },
    // 12 Maruglo
    { no: 12, name: 'Lota S. Guanlao', position: 'Barangay Chairman', department: 'Maruglo', deptEmail: [], contact: ['09302884765'], personalEmail: [] },
    { no: '', name: 'Adrian F. Sanchez', position: 'SK Chairman', department: 'Maruglo', deptEmail: [], contact: ['09488125252'], personalEmail: [] },
    { no: '', name: 'Elvie D. Mariano', position: 'Barangay Secretary', department: 'Maruglo', deptEmail: [], contact: ['09482618055'], personalEmail: [] },
    // 13 O'Donnell
    { no: 13, name: 'Wendell L. Mercado', position: 'Barangay Chairman', department: "O'Donnell", deptEmail: [], contact: ['09196084313'], personalEmail: [] },
    { no: '', name: 'Benedict S. Meniolas', position: 'SK Chairman', department: "O'Donnell", deptEmail: [], contact: ['09304332019'], personalEmail: [] },
    { no: '', name: 'Rose Ann D. Cadiang', position: 'Barangay Secretary', department: "O'Donnell", deptEmail: [], contact: ['09094614941'], personalEmail: [] },
    // 14 Sta. Juliana
    { no: 14, name: 'Jude C. Lenon', position: 'Barangay Chairman', department: 'Sta. Juliana', deptEmail: [], contact: ['09206787647'], personalEmail: [] },
    { no: '', name: 'Blessel Joy D. Tercenio', position: 'SK Chairman', department: 'Sta. Juliana', deptEmail: [], contact: ['09481690851'], personalEmail: [] },
    { no: '', name: 'Alona T. Caritativo', position: 'Barangay Secretary', department: 'Sta. Juliana', deptEmail: [], contact: ['09506713477'], personalEmail: [] },
    // 15 Sta. Lucia
    { no: 15, name: 'Cesario D. Bautista Jr.', position: 'Barangay Chairman', department: 'Sta. Lucia', deptEmail: [], contact: ['09479176588'], personalEmail: [] },
    { no: '', name: 'Shaira Kylene T. Taruc', position: 'SK Chairman', department: 'Sta. Lucia', deptEmail: [], contact: ['09100824645'], personalEmail: [] },
    { no: '', name: 'Raymond Maniebog', position: 'Barangay Secretary', department: 'Sta. Lucia', deptEmail: [], contact: ['09307587875'], personalEmail: [] },
    // 16 Sta. Rita
    { no: 16, name: 'Arnold C. Arcilla', position: 'Barangay Chairman', department: 'Sta. Rita', deptEmail: [], contact: ['09513244697'], personalEmail: [] },
    { no: '', name: 'Claire T. Simbulan', position: 'SK Chairman', department: 'Sta. Rita', deptEmail: [], contact: ['09384466305'], personalEmail: [] },
    { no: '', name: 'Annette R. Yumo', position: 'Barangay Secretary', department: 'Sta. Rita', deptEmail: [], contact: ['09513244697'], personalEmail: [] },
    // 17 Sto. Domingo I
    { no: 17, name: 'Jefferson M. Garcia', position: 'Barangay Chairman', department: 'Sto. Domingo I', deptEmail: [], contact: ['09286607326'], personalEmail: [] },
    { no: '', name: 'Lance Laurrenz B. Punla', position: 'SK Chairman', department: 'Sto. Domingo I', deptEmail: [], contact: ['09387929268'], personalEmail: [] },
    { no: '', name: 'Mary Grace G. Ferrer', position: 'Barangay Secretary', department: 'Sto. Domingo I', deptEmail: [], contact: ['09100493503'], personalEmail: [] },
    // 18 Sto. Domingo II
    { no: 18, name: 'Edwin Lucas M. Baron', position: 'Barangay Chairman', department: 'Sto. Domingo II', deptEmail: [], contact: ['09274373611'], personalEmail: [] },
    { no: '', name: 'Princess Mae Y. Ramos', position: 'SK Chairman', department: 'Sto. Domingo II', deptEmail: [], contact: ['09647616684'], personalEmail: [] },
    { no: '', name: 'Angelie Elaine P. Baluyut', position: 'Barangay Secretary', department: 'Sto. Domingo II', deptEmail: [], contact: ['09123035922'], personalEmail: [] },
    // 19 Sto. Rosario
    { no: 19, name: 'Solomon E. Sicat Jr.', position: 'Barangay Chairman', department: 'Sto. Rosario', deptEmail: [], contact: ['09193865362'], personalEmail: [] },
    { no: '', name: 'Marleo M. Delos Reyes', position: 'SK Chairman', department: 'Sto. Rosario', deptEmail: [], contact: ['09213431448'], personalEmail: [] },
    { no: '', name: 'Lourdes T. Palad', position: 'Barangay Secretary', department: 'Sto. Rosario', deptEmail: [], contact: ['09322291984'], personalEmail: [] },
    // 20 Talaga
    { no: 20, name: 'Eliseo C. Malonzo', position: 'Barangay Chairman', department: 'Talaga', deptEmail: [], contact: ['09484327191'], personalEmail: [] },
    { no: '', name: 'Christine Maryjo L. Catacutan', position: 'SK Chairman', department: 'Talaga', deptEmail: [], contact: ['09998888950'], personalEmail: [] },
    { no: '', name: 'Joshua S. Cervantes', position: 'Barangay Secretary', department: 'Talaga', deptEmail: [], contact: ['09469881156'], personalEmail: [] },
  ]

  const renderTable = (data) => (
    <div className="table-responsive shadow-sm rounded-4 border bg-white mt-4">
      <Table hover className="mb-0 custom-directory-table">
        <thead style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
          <tr>
            <th className="py-3 px-4 text-uppercase small ls-1">No.</th>
            <th className="py-3 px-4 text-uppercase small ls-1">Name</th>
            <th className="py-3 px-4 text-uppercase small ls-1">Position</th>
            <th className="py-3 px-4 text-uppercase small ls-1">Department</th>
            <th className="py-3 px-4 text-uppercase small ls-1">Department Email</th>
            <th className="py-3 px-4 text-uppercase small ls-1">Contact Number</th>
            <th className="py-3 px-4 text-uppercase small ls-1">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td className="py-3 px-3 align-middle fw-bold text-muted">{item.no}</td>
              <td className="py-3 px-3 align-middle">
                <div className="fw-bold text-dark" style={{ fontSize: '1rem' }}>{item.name}</div>
              </td>
              <td className="py-3 px-3 align-middle">
                <div className="text-muted small">
                  {item.position}
                </div>
              </td>
              <td className="py-3 px-3 align-middle text-muted" style={{ fontSize: '0.85rem' }}>
                <span className="fw-semibold">{item.department}</span>
              </td>
              <td className="py-3 px-3 align-middle">
                <div style={{ fontSize: '0.8rem' }}>
                  {item.deptEmail && item.deptEmail.map((email, eIdx) => (
                    <a key={eIdx} href={`mailto:${email}`} className="d-block text-decoration-none text-primary hover-underline mb-1">
                      {email}
                    </a>
                  ))}
                </div>
              </td>
              <td className="py-3 px-3 align-middle">
                <div style={{ fontSize: '0.8rem' }} className="text-dark">
                  {item.contact && item.contact.length > 0 && item.contact[0] !== '-' ? (
                    item.contact.map((phone, pIdx) => (
                      <div key={pIdx} className="mb-1">{phone}</div>
                    ))
                  ) : '-'}
                </div>
              </td>
              <td className="py-3 px-3 align-middle">
                <div style={{ fontSize: '0.8rem' }}>
                  {item.personalEmail && item.personalEmail.length > 0 ? (
                    item.personalEmail.map((email, eIdx) => (
                      <a key={eIdx} href={`mailto:${email}`} className="d-block text-decoration-none text-primary hover-underline mb-1">
                        {email}
                      </a>
                    ))
                  ) : '-'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )

  return (
    <div className="directory-page bg-light min-vh-100">
      {/* Hero Header */}
      <div className="bg-white border-bottom py-5 shadow-sm">
        <Container className="py-3 text-center">
          <Badge bg="danger" className="mb-3 px-3 py-2 text-uppercase ls-2">Capas LGU</Badge>
          <h1 className="display-4 fw-bold text-dark mb-3">Municipal Directory</h1>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
            A comprehensive list of offices, officials, and contact information for the Municipality of Capas.
          </p>
          <div className="mt-4 mx-auto" style={{ maxWidth: '500px' }}>
            <div className="position-relative">
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
              <input 
                type="text" 
                className="form-control form-control-lg ps-5 rounded-pill border-2" 
                placeholder="Search office or official..."
                style={{ fontSize: '1rem' }}
              />
            </div>
          </div>
        </Container>
      </div>

      <Container fluid className="py-5 px-lg-5">
        <Card className="border-0 shadow-sm rounded-4">
          <Card.Body className="p-0">
            <Tabs
              defaultActiveKey="executive"
              id="directory-tabs"
              className="custom-tabs border-bottom"
              justify
            >
              <Tab eventKey="executive" title="Executive Offices">
                <div className="p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 bg-danger text-white rounded-4 shadow-sm">
                      <FaUserTie size={24} />
                    </div>
                    <div>
                      <h2 className="fw-bold mb-0">Executive Offices</h2>
                      <p className="text-muted mb-0">Offices under the Local Chief Executive and administrative departments.</p>
                    </div>
                  </div>
                  {renderTable(executiveOffices)}
                </div>
              </Tab>
              <Tab eventKey="council" title="Sangguniang Bayan">
                <div className="p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 bg-danger text-white rounded-4 shadow-sm">
                      <FaUserTie size={24} />
                    </div>
                    <div>
                      <h2 className="fw-bold mb-0">Sangguniang Bayan</h2>
                      <p className="text-muted mb-0">The legislative body of the Municipality of Capas, led by the Vice Mayor.</p>
                    </div>
                  </div>
                  {renderTable(sbMembers)}
                </div>
              </Tab>
              <Tab eventKey="barangay" title="Barangay Officials">
                <div className="p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 bg-danger text-white rounded-4 shadow-sm">
                      <FaUserTie size={24} />
                    </div>
                    <div>
                      <h2 className="fw-bold mb-0">Barangay Officials</h2>
                      <p className="text-muted mb-0">The local leaders and secretaries of the 20 barangays in Capas.</p>
                    </div>
                  </div>
                  {renderTable(barangayOfficials)}
                </div>
              </Tab>
              <Tab eventKey="agencies" title="National Agencies">
                <div className="p-5 text-center">
                  <p className="text-muted italic">Attached national agencies directory information coming soon.</p>
                </div>
              </Tab>
              <Tab eventKey="utilities" title="Utilities">
                <div className="p-5 text-center">
                  <p className="text-muted italic">Utility service providers directory information coming soon.</p>
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>

      <style>{`
        .custom-tabs .nav-link {
          padding: 1.5rem 1rem;
          border: none;
          border-bottom: 3px solid transparent;
          color: var(--gray-600);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .custom-tabs .nav-link:hover {
          color: var(--primary);
          background-color: rgba(var(--primary-rgb), 0.05);
        }
        .custom-tabs .nav-link.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background-color: white;
        }
        .custom-directory-table thead th {
          border: none;
          letter-spacing: 1px;
        }
        .custom-directory-table tbody tr {
          transition: background-color 0.2s ease;
        }
        .custom-directory-table tbody tr:hover {
          background-color: rgba(var(--primary-rgb), 0.02);
        }
        .ls-1 { letter-spacing: 1px; }
        .ls-2 { letter-spacing: 2px; }
        .hover-underline:hover { text-decoration: underline !important; }
      `}</style>
    </div>
  )
}

export default Directory
