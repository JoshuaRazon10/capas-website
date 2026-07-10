import { Container, Row, Col, Table, Tabs, Tab, Card, Badge, Accordion, Spinner } from 'react-bootstrap'
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaSearch, FaUserTie } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API_BASE_URL from '../apiConfig'

const Directory = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('executive')
  const [loading, setLoading] = useState(false)

  // State for directory data (initialized with fallbacks)
  const [executiveOfficesState, setExecutiveOfficesState] = useState([])
  const [nationalAgenciesState, setNationalAgenciesState] = useState([])
  const [utilityProvidersState, setUtilityProvidersState] = useState([])
  const [churchState, setChurchState] = useState([])
  const [barangayOfficialsState, setBarangayOfficialsState] = useState([])

  const resolveImage = (item) => {
    if (!item || !item.image_path) return null;
    const path = item.image_path;
    if (typeof path !== 'string') return path;
    if (path.startsWith('http') || path.startsWith('/') || path.startsWith('data:')) return path;
    return `${API_BASE_URL.replace('/api', '/storage')}/${path}`;
  }

  const normalizeData = (data) => {
    return data.map((item, idx) => ({
      no: item.sort_order || idx + 1,
      name: item.name,
      position: item.position,
      department: item.department,
      deptEmail: item.dept_emails || item.deptEmail || [],
      contact: item.contact_numbers || item.contact || [],
      personalEmail: item.personal_emails || item.personalEmail || [],
      image_path: item.image_path
    }))
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const tab = params.get('tab')
    if (tab) {
      setActiveTab(tab)
    }
    
    // Fetch dynamic data from Laravel Backend
    const fetchDirectory = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/directory`)
        if (response.ok) {
          const data = await response.json()
          
          if (data.executive && data.executive.length > 0) setExecutiveOfficesState(normalizeData(data.executive))
          else setExecutiveOfficesState(executiveOffices)

          if (data.national && data.national.length > 0) setNationalAgenciesState(normalizeData(data.national))
          else setNationalAgenciesState(nationalAgencies)

          if (data.utility && data.utility.length > 0) setUtilityProvidersState(normalizeData(data.utility))
          else setUtilityProvidersState(utilityProviders)

          if (data.church && data.church.length > 0) setChurchState(normalizeData(data.church))
          else setChurchState(catholicChurches)

          if (data.barangay && data.barangay.length > 0) setBarangayOfficialsState(normalizeData(data.barangay))
          else setBarangayOfficialsState(barangayOfficials)
        } else {
          setExecutiveOfficesState(executiveOffices)
          setNationalAgenciesState(nationalAgencies)
          setUtilityProvidersState(utilityProviders)
          setChurchState(catholicChurches)
          setBarangayOfficialsState(barangayOfficials)
        }
      } catch (error) {
        console.error('Failed to fetch directory from API, using fallbacks:', error)
        setExecutiveOfficesState(executiveOffices)
        setNationalAgenciesState(nationalAgencies)
        setUtilityProvidersState(utilityProviders)
        setChurchState(catholicChurches)
        setBarangayOfficialsState(barangayOfficials)
      } finally {
        setLoading(false)
      }
    }

    fetchDirectory()
  }, [location])

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
      name: 'Mahalia C. Bertillo',
      position: 'Officer-in-Charge',
      department: 'Municipal Public Information Office',
      deptEmail: ['publicinformationoffice@capas.gov.ph', 'mio.capasgov@gmail.com'],
      contact: ['-'],
      personalEmail: []
    },
    {
      no: 10,
      name: 'Engr. Baby Lyn C. Robles',
      position: 'Municipal Engineer / Officer-in-Charge / Zoning Officer',
      department: 'Municipal Engineering Office / Municipal Planning and Development Office / Municipal Zoning Office',
      deptEmail: ['engineering@capas.gov.ph', 'meocapas2017@gmail.com', 'mpdo@capas.gov.ph', 'mpdocapas@gmail.com', 'mlo@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['b.robles@capas.gov.ph']
    },
    {
      no: 11,
      name: 'Gener S. Tanhueco',
      position: 'Municipal Environment and Natural Resources Officer',
      department: 'Municipal Environment and Natural Resources Office',
      deptEmail: ['menro@capas.gov.ph'],
      contact: ['-'],
      personalEmail: ['g.tanhueco@capas.gov.ph']
    },
    {
      no: 12,
      name: 'Atty. Catherine Rose Diaz Cunanan',
      position: 'Municipal Legal Officer',
      department: 'Municipal Legal Office',
      deptEmail: ['legaloffice@capas.gov.ph'],
      contact: ['-'],
      personalEmail: []
    },
    {
      no: 13,
      name: 'Evelyn P. Roque',
      position: 'Municipal Treasurer',
      department: 'Municipal Treasury Office',
      deptEmail: ['treasury@capas.gov.ph', 'mto_capas@yahoo.com'],
      contact: ['-'],
      personalEmail: ['e.roque@capas.gov.ph']
    },
    {
      no: 14,
      name: 'Dr. Leah G. Pangan',
      position: 'Officer-in-Charge',
      department: 'Ospital Ning Capas',
      deptEmail: ['onc@capas.gov.ph'],
      contact: ['045 491 1361', '0908 897 9421', '0908 821 6879'],
      personalEmail: ['dra.l.pangan@capas.gov.ph']
    },
    {
      no: 15,
      name: 'Flordeliza H. Villanueva',
      position: 'Officer-in-Charge',
      department: 'Ospital Ning Capas Administrative Office',
      deptEmail: ['flordelizanucup@yahoo.com'],
      contact: ['-'],
      personalEmail: []
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
    { no: 1, name: 'Bonifacio P. Alzadon Jr.', position: 'Barangay Chairman', department: 'Aranguren', deptEmail: [], contact: ['09084723736'], personalEmail: [] },
    { no: '', name: 'Jenny S. Manalad', position: 'SK Chairman', department: 'Aranguren', deptEmail: [], contact: ['09661352696'], personalEmail: [] },
    { no: '', name: 'Joanne L. Tua', position: 'Barangay Secretary', department: 'Aranguren', deptEmail: [], contact: ['09695032116'], personalEmail: [] },
    { no: 2, name: 'Danny D. Agdeppa', position: 'Barangay Chairman', department: 'Bueno', deptEmail: [], contact: ['09704749790'], personalEmail: [] },
    { no: '', name: 'Vim Aurem Ningala', position: 'SK Chairman', department: 'Bueno', deptEmail: [], contact: ['09468514687'], personalEmail: [] },
    { no: '', name: 'Rosalinda M. Dumlao', position: 'Barangay Secretary', department: 'Bueno', deptEmail: [], contact: ['09484961819'], personalEmail: [] },
    { no: 3, name: 'Arturo O. Joves', position: 'Barangay Chairman', department: 'Cristo Rey', deptEmail: [], contact: ['09195871858'], personalEmail: [] },
    { no: '', name: 'Angel Erika B. Mesa', position: 'SK Chairman', department: 'Cristo Rey', deptEmail: [], contact: ['09811867144'], personalEmail: [] },
    { no: '', name: 'Marife Baun', position: 'Barangay Secretary', department: 'Cristo Rey', deptEmail: [], contact: ['09497087119'], personalEmail: [] },
    { no: 4, name: 'Jose P. Tolentino', position: 'Barangay Chairman', department: 'Cubcub', deptEmail: [], contact: ['09165834221'], personalEmail: [] },
    { no: '', name: 'Karl Andrey D. Alimurung', position: 'SK Chairman', department: 'Cubcub', deptEmail: [], contact: ['09615831041'], personalEmail: [] },
    { no: '', name: 'Julie T. Salak', position: 'Barangay Secretary', department: 'Cubcub', deptEmail: [], contact: ['09107897642'], personalEmail: [] },
    { no: 5, name: 'Gerardo C. Sangalang', position: 'Barangay Chairman', department: 'Cut-Cut I', deptEmail: [], contact: ['09605164665'], personalEmail: [] },
    { no: '', name: 'Krizza Jane P. Payumo', position: 'SK Chairman', department: 'Cut-Cut I', deptEmail: [], contact: ['09773023236'], personalEmail: [] },
    { no: '', name: 'Loreto Garcia', position: 'Barangay Secretary', department: 'Cut-Cut I', deptEmail: [], contact: ['09300934695'], personalEmail: [] },
    { no: 6, name: 'Edwin A. Macale', position: 'Barangay Chairman', department: 'Cut-Cut II', deptEmail: [], contact: ['09398697945'], personalEmail: [] },
    { no: '', name: 'Bonito A. Arroyo', position: 'SK Chairman', department: 'Cut-Cut II', deptEmail: [], contact: ['09703869115'], personalEmail: [] },
    { no: '', name: 'Joselyn G. Lenon', position: 'Barangay Secretary', department: 'Cut-Cut II', deptEmail: [], contact: ['09517532096'], personalEmail: [] },
    { no: 7, name: 'Rogelio D. Pabustan Jr.', position: 'Barangay Chairman', department: 'Dolores', deptEmail: [], contact: ['09328904370'], personalEmail: [] },
    { no: '', name: 'Omar P. Camaya', position: 'SK Chairman', department: 'Dolores', deptEmail: [], contact: ['09092277569'], personalEmail: [] },
    { no: '', name: 'Jocelyn C. Natividad', position: 'Barangay Secretary', department: 'Dolores', deptEmail: [], contact: ['09603788424'], personalEmail: [] },
    { no: 8, name: 'Allan S. Ramos', position: 'Barangay Chairman', department: 'Estrada', deptEmail: [], contact: ['09279084180'], personalEmail: [] },
    { no: '', name: 'Gladys Anne L. Caldino', position: 'SK Chairman', department: 'Estrada', deptEmail: [], contact: ['09150284059'], personalEmail: [] },
    { no: '', name: 'Mariekeith M. Manguera', position: 'Barangay Secretary', department: 'Estrada', deptEmail: [], contact: ['09686620897'], personalEmail: [] },
    { no: 9, name: 'Porfirio D. Laxamana Jr.', position: 'Barangay Chairman', department: 'Lawy', deptEmail: [], contact: ['09472538740'], personalEmail: [] },
    { no: '', name: 'Laisa G. Panoy', position: 'SK Chairman', department: 'Lawy', deptEmail: [], contact: ['09485013580'], personalEmail: [] },
    { no: '', name: 'Jenina Lein T. Linogo', position: 'Barangay Secretary', department: 'Lawy', deptEmail: [], contact: ['09203413539'], personalEmail: [] },
    { no: 10, name: 'Julie R. Guevarra', position: 'Barangay Chairman', department: 'Manga', deptEmail: [], contact: ['09813089501'], personalEmail: [] },
    { no: '', name: 'Lorie C. Tayag', position: 'SK Chairman', department: 'Manga', deptEmail: [], contact: ['09283674188'], personalEmail: [] },
    { no: '', name: 'Glaiza G. Datu', position: 'Barangay Secretary', department: 'Manga', deptEmail: [], contact: ['09070208206'], personalEmail: [] },
    { no: 11, name: 'Ricky M. Datu', position: 'Barangay Chairman', department: 'Manlapig', deptEmail: [], contact: ['09387929334'], personalEmail: [] },
    { no: '', name: 'Paul Angelo T. Mallari', position: 'SK Chairman', department: 'Manlapig', deptEmail: [], contact: ['09071008893'], personalEmail: [] },
    { no: '', name: 'Rogelio S. Beltran', position: 'Barangay Secretary', department: 'Manlapig', deptEmail: [], contact: ['09107234173'], personalEmail: [] },
    { no: 12, name: 'Lota S. Guanlao', position: 'Barangay Chairman', department: 'Maruglu', deptEmail: [], contact: ['09302884765'], personalEmail: [] },
    { no: '', name: 'Adrian F. Sanchez', position: 'SK Chairman', department: 'Maruglu', deptEmail: [], contact: ['09488125252'], personalEmail: [] },
    { no: '', name: 'Elvie D. Mariano', position: 'Barangay Secretary', department: 'Maruglu', deptEmail: [], contact: ['09482618055'], personalEmail: [] },
    { no: 13, name: 'Wendell L. Mercado', position: 'Barangay Chairman', department: "O'Donnell", deptEmail: [], contact: ['09196084313'], personalEmail: [] },
    { no: '', name: 'Benedict S. Meniolas', position: 'SK Chairman', department: "O'Donnell", deptEmail: [], contact: ['09304332019'], personalEmail: [] },
    { no: '', name: 'Rose Ann D. Cadiang', position: 'Barangay Secretary', department: "O'Donnell", deptEmail: [], contact: ['09094614941'], personalEmail: [] },
    { no: 14, name: 'Jude C. Lenon', position: 'Barangay Chairman', department: 'Sta. Juliana', deptEmail: [], contact: ['09206787647'], personalEmail: [] },
    { no: '', name: 'Blessel Joy D. Tercenio', position: 'SK Chairman', department: 'Sta. Juliana', deptEmail: [], contact: ['09481690851'], personalEmail: [] },
    { no: '', name: 'Alona T. Caritativo', position: 'Barangay Secretary', department: 'Sta. Juliana', deptEmail: [], contact: ['09506713477'], personalEmail: [] },
    { no: 15, name: 'Cesario D. Bautista Jr.', position: 'Barangay Chairman', department: 'Sta. Lucia', deptEmail: [], contact: ['09479176588'], personalEmail: [] },
    { no: '', name: 'Shaira Kylene T. Taruc', position: 'SK Chairman', department: 'Sta. Lucia', deptEmail: [], contact: ['09100824645'], personalEmail: [] },
    { no: '', name: 'Raymond Maniebog', position: 'Barangay Secretary', department: 'Sta. Lucia', deptEmail: [], contact: ['09307587875'], personalEmail: [] },
    { no: 16, name: 'Arnold C. Arcilla', position: 'Barangay Chairman', department: 'Sta. Rita', deptEmail: [], contact: ['09513244697'], personalEmail: [] },
    { no: '', name: 'Claire T. Simbulan', position: 'SK Chairman', department: 'Sta. Rita', deptEmail: [], contact: ['09384466305'], personalEmail: [] },
    { no: '', name: 'Annette R. Yumo', position: 'Barangay Secretary', department: 'Sta. Rita', deptEmail: [], contact: ['09513244697'], personalEmail: [] },
    { no: 17, name: 'Jefferson M. Garcia', position: 'Barangay Chairman', department: 'Sto. Domingo I', deptEmail: [], contact: ['09286607326'], personalEmail: [] },
    { no: '', name: 'Lance Laurrenz B. Punla', position: 'SK Chairman', department: 'Sto. Domingo I', deptEmail: [], contact: ['09387929268'], personalEmail: [] },
    { no: '', name: 'Mary Grace G. Ferrer', position: 'Barangay Secretary', department: 'Sto. Domingo I', deptEmail: [], contact: ['09100493503'], personalEmail: [] },
    { no: 18, name: 'Edwin Lucas M. Baron', position: 'Barangay Chairman', department: 'Sto. Domingo II', deptEmail: [], contact: ['09274373611'], personalEmail: [] },
    { no: '', name: 'Princess Mae Y. Ramos', position: 'SK Chairman', department: 'Sto. Domingo II', deptEmail: [], contact: ['09647616684'], personalEmail: [] },
    { no: '', name: 'Angelie Elaine P. Baluyut', position: 'Barangay Secretary', department: 'Sto. Domingo II', deptEmail: [], contact: ['09123035922'], personalEmail: [] },
    { no: 19, name: 'Solomon E. Sicat Jr.', position: 'Barangay Chairman', department: 'Sto. Rosario', deptEmail: [], contact: ['09193865362'], personalEmail: [] },
    { no: '', name: 'Marleo M. Delos Reyes', position: 'SK Chairman', department: 'Sto. Rosario', deptEmail: [], contact: ['09213431448'], personalEmail: [] },
    { no: '', name: 'Lourdes T. Palad', position: 'Barangay Secretary', department: 'Sto. Rosario', deptEmail: [], contact: ['09322291984'], personalEmail: [] },
    { no: 20, name: 'Eliseo C. Malonzo', position: 'Barangay Chairman', department: 'Talaga', deptEmail: [], contact: ['0484327191'], personalEmail: [] },
    { no: '', name: 'Christine Maryjo L. Catacutan', position: 'SK Chairman', department: 'Talaga', deptEmail: [], contact: ['09998888950'], personalEmail: [] },
    { no: '', name: 'Joshua S. Cervantes', position: 'Barangay Secretary', department: 'Talaga', deptEmail: [], contact: ['09469881156'], personalEmail: [] },
  ]

  const nationalAgencies = [
    { no: 1, name: 'Capt. Jan Carlo Tabaculde', position: 'Commander', department: '3rd Mechanized Infantry Batallion, AFP', deptEmail: [], contact: [], personalEmail: [] },
    { no: 2, name: 'Marites L. Villaverde, CPA', position: 'State Auditor III-OIC', department: 'Commission on Audit', deptEmail: [], contact: ['045 491 3337', '045 934 2538'], personalEmail: [] },
    { no: 3, name: 'Elsie C. Sibal', position: 'Election Office IV', department: 'Commission on Election', deptEmail: ['045 491 8358'], contact: [], personalEmail: [] },
    { no: 4, name: 'Susan Tababa', position: 'Municipal Agrarian Reform Officer', department: 'Department of Agrarian Reform', deptEmail: ['darmunicipalofficecluster3@gmail.com'], contact: [], personalEmail: [] },
    { no: 5, name: 'Riza M. Guilas', position: 'Municipal LGU Operation Officer', department: 'Department of Interior and Local Government', deptEmail: ['dilgcapas20@gmail.com'], contact: [], personalEmail: [] },
    { no: 6, name: 'Bernadette L. Galang', position: 'PDO II - Municipal Link', department: 'Department of Social Welfare and Development - 4Ps', deptEmail: ['capas4ps@gmail.com'], contact: ['0933 868 4969'], personalEmail: [] },
    { no: 7, name: 'Adrian Paolo P. David', position: 'Business Councelor II', department: 'Department of Trade and Industry', deptEmail: ['Capas.LGU@negosyocenter.gov.ph'], contact: ['0956 731 0192'], personalEmail: ['Capas.LGU@negosyocenter.gov.ph'] },
    { no: 8, name: 'Zenaida P. Gonzales', position: 'Branch Manager', department: 'Landbank of the Philippines', deptEmail: ['lbpcapas@yahoo.com'], contact: ['045 491 7969'], personalEmail: [] },
    { no: 9, name: 'Tiffany Ann Dizon', position: 'Clerk of Court', department: 'Municipal Circuit Trial Court Branch 66', deptEmail: ['Rtc1Cap066@judiciary.gov.ph'], contact: ['0985 215 6256'], personalEmail: ['rtc1cap066@judiciary.gov.ph'] },
    { no: 10, name: 'Carolin Felipe', position: 'Post Master', department: 'PhilPost', deptEmail: ['PPCCapastarlac2315@yahoo.com'], contact: ['045 491 8854', '0910 219 0047'], personalEmail: ['ppccapastarlac2315@yahoo.com'] },
    { no: 11, name: 'Atty. Tiffany Ann C. Dizon', position: 'Branch Clerk of Court 5', department: 'Regional Trial Court', deptEmail: ['RTCIcap066@judiciary.gov.ph'], contact: ['0985 215 6254'], personalEmail: [] },
  ]

  const utilityProviders = [
    { no: 1, name: 'Converge ICT Solution', position: 'Sto. Domingo 2 Capas, Tarlac', department: 'Utility Provider', deptEmail: ['supportcare@convergeict.com', 'customercare@convergeict.com'], contact: ['(045) 598-3000', '9190572428'], personalEmail: [] },
    { no: 2, name: 'Globe', position: 'Tarlac City (SM Tarlac)', department: 'Utility Provider', deptEmail: ['gttarlac@globe.com.ph'], contact: ['(02) 77301000'], personalEmail: [] },
    { no: 3, name: 'Smart', position: 'Tarlac City (SM Tarlac)', department: 'Utility Provider', deptEmail: ['ftautor@smart.com.ph'], contact: ['09285524615', '(02) 88881111'], personalEmail: [] },
    { no: 4, name: 'PLDT', position: 'MH Del Pilar St. Tarlac City', department: 'Utility Provider', deptEmail: ['customercare@pldt.com'], contact: ['(02) 88888171'], personalEmail: [] },
    { no: 5, name: "O'Donnell Waterworks Cooperative (ORWAMCO)", position: "O'Donnell, Capas, Tarlac", department: 'Utility Provider', deptEmail: [], contact: ['09189592380'], personalEmail: [] },
    { no: 6, name: 'Tarlac II Electric Cooperative, Inc.', position: 'Concepcion, Tarlac', department: 'Utility Provider', deptEmail: [], contact: ['045 923 1000', '0917 800 1000', '0919 056 1000'], personalEmail: [] },
  ]

  const catholicChurches = [
    { no: 1, name: 'San Nicolas De Tolentino Shrine', position: 'Sto. Rosario', department: 'Rev. Fr. Velly G. Lapitan / Rev. Fr. Nickson M. Liwag', deptEmail: [], contact: ['09481144627', '09488391240'], personalEmail: [] },
    { no: 2, name: 'St. Joseph The Patriarch Parish', position: 'Aranguren', department: 'Rev. Fr. Arnulfo D. Corpuz (Priest) / Ma. Theresa Yalung (Secretary)', deptEmail: [], contact: ['09456154634'], personalEmail: [] },
    { no: 3, name: 'St. Joseph The Worker Parish', position: 'Cut-Cut I', department: 'Rev. Fr. Romel Vergara (Priest) / Rochelle Vergara (Secretary)', deptEmail: [], contact: ['09513227813'], personalEmail: [] },
    { no: 4, name: 'Our Lady of the Most Holy Rosary Parish', position: 'Cristo Rey', department: 'Rev. Fr. Jay Policarpio (Priest) / Diane Garino (Secretary)', deptEmail: [], contact: ['09092645745'], personalEmail: [] },
    { no: 5, name: 'Mater Dolorosa Parish', position: 'Dolores', department: 'Rev. Fr. Anthony George Bergonio (Priest) / Julie Jaos (Secretary)', deptEmail: [], contact: ['09701091570'], personalEmail: [] },
    { no: 6, name: 'St. Joseph - Husband of Mary Parish', position: "O'Donnell", department: 'Rev. Fr. Allan M. Talavera (Priest)', deptEmail: [], contact: ['09091939893'], personalEmail: [] },
  ]

  const schoolsData = {
    west: [
      { no: 1, name: "Alunan Elementary School", location: "Sitio Alunan, Bgry. Sta. Juliana", head: "Edmon S. Navarro", email: "edmon.navarro@deped.gov.ph", contact: "09387934347" },
      { no: 2, name: "Binyayan Elementary School", location: "Sitio Binyayan, Barangay O’Donnell", head: "Jobel S. Capunfuerza", email: "jobel.capunfuerza@deped.gov.ph", contact: "09635186879" },
      { no: 3, name: "Bueno Integrated School", location: "Barangay Bueno", head: "Sarah S. Santok", email: "sarah.santok001@deped.gov.ph", contact: "09469573392" },
      { no: 4, name: "Capas West Central Elementary School", location: "Barangay O’Donnell", head: "Villamor M. Gutierrez", email: "villamor.gutierrez001@deped.gov.ph", contact: "09189671601" },
      { no: 5, name: "Flora Elementary School", location: "Sitio Flora, Barangay Maruglu", head: "Noel L. Mariano", email: "noel.mariano001@deped.gov.ph", contact: "09497150048" },
      { no: 6, name: "Kawayan Elementary School", location: "Sitio Kawayan, Barangay Maruglu", head: "Mary Jane G. Dumaplin", email: "mary.dumaplin@deped.gov.ph", contact: "09183459047" },
      { no: 7, name: "Manabayukan Elementary School", location: "Sitio Manabayukan, Barangay O’Donnell", head: "Carol P. Simbulan", email: "carol.simbulan001@deped.gov.ph", contact: "09186253480" },
      { no: 8, name: "Maruglo Elementary School", location: "Barangay Maruglu", head: "Elvin M. Tulio", email: "elvin.tulio001@deped.gov.ph", contact: "09230847891" },
      { no: 9, name: "Pilien Elementary School", location: "Sitio Pilien, Barangay Sta. Juliana", head: "Cyril E. Dionida", email: "cyril.dionida@deped.gov.ph", contact: "09182960623" },
      { no: 10, name: "Pisapungan Elementary School", location: "Sitio Pisapungan, Barangay Sta. Juliana", head: "Alvin M. Gutierrez", email: "alvin.gutierrez001@deped.gov.ph", contact: "09125114185" },
      { no: 11, name: "San Agustin Elementary School", location: "Sitio San Agustin, Barangay O’Donnell", head: "Randy C. Saldi", email: "randy.saldi001@deped.gov.ph", contact: "09341198409" },
      { no: 12, name: "Sta. Juliana Elementary School", location: "Barangay Sta. Juliana", head: "Augusto D. Balatbat", email: "augusto.balatbat@deped.gov.ph", contact: "09993438761" },
      { no: 13, name: "Sta. Lucia Elementary School", location: "Barangay Sta. Lucia", head: "Carlos A. Lapuz Jr.", email: "carlos.lapuzjr@deped.gov.ph", contact: "09234255046" },
      { no: 14, name: "Tarukan Elementary School", location: "Sitio Tarukan, Barangay Sta. Juliana", head: "Jerson D. Gania", email: "jerson.gania@deped.gov.ph", contact: "09097032460" },
      { no: 15, name: "O’Donnell High School", location: "Barangay O’Donnell", head: "Amparo M. Munoz", email: "amparo.munoz@deped.gov.ph", contact: "09209637310" },
      { no: 16, name: "Sta. Juliana High School", location: "Barangay Sta. Juliana", head: "Liezl M. Sanchez", email: "liezl.sanchez001@deped.gov.ph", contact: "09190748063" },
      { no: 17, name: "Sta. Lucia National High School", location: "Barangay Sta. Lucia", head: "Ruperto G. Patangui Jr.", email: "rupertojr.patangui@deped.gov.ph", contact: "09388000378" },
    ],
    east: [
      { no: 1, name: "Angelina D. Jimenez Elementary School", location: "Sto. Domingo 2nd Capas, Tarlac", head: "Rodolfo F. Muñoz", email: "rodolfo.munoz@deped.gov.ph", contact: "09771791011" },
      { no: 2, name: "Benigno S. Aquino, Jr. Elementary School", location: "Barangay Estrada Capas, Tarlac", head: "Victoria P. Calma", email: "victoria.calma003@deped.gov.ph", contact: "09328845124" },
      { no: 3, name: "Calangitan Elementary School", location: "Kalangitan Capas, Tarlac", head: "Anthony G. Siron", email: "anthony.siron@deped.gov.ph", contact: "09958942386" },
      { no: 4, name: "Capas East Central School", location: "Sto. Domingo 1st Capas, Tarlac", head: "Nancy P. Lobo", email: "nancy.lobo001@deped.gov.ph", contact: "09064539214" },
      { no: 5, name: "Capas Gabaldon Elementary School", location: "Cub Cub Capas, Tarlac", head: "Benigno B. Ramos", email: "benigno.ramos@deped.gov.ph", contact: "09995354814" },
      { no: 6, name: "Dolores Elementary School", location: "Dolores Capas, Tarlac", head: "Karen P. Osorio", email: "karen.osorio@deped.gov.ph", contact: "09208134182" },
      { no: 7, name: "Juan Navarro Elementary School", location: "Cut Cut 1st Capas, Tarlac", head: "Mirasol T. Valencia", email: "mirasol.valencia001@deped.gov.ph", contact: "09471627114" },
      { no: 8, name: "Kawili-wili Elementary School", location: "MacArthur Highway, Cutcut II, Sitio Kawili-Wili", head: "Jose Roy B. Balatbat Jr.", email: "joseroy.balatbat@deped.gov.ph", contact: "09321559276" },
      { no: 9, name: "Manga Elementary School", location: "Manga Capas, Tarlac", head: "Loreta C. Razon", email: "loreta.razon@deped.gov.ph", contact: "09064697650" },
      { no: 10, name: "Salangui Primary School", location: "Sitio Salangui Capas, Tarlac", head: "Cherina P. Cruz", email: "cherina.cruz@deped.gov.ph", contact: "09253052182" },
      { no: 11, name: "Sta. Rita Elementary School", location: "Barangay Sta. Rita Capas, Tarlac", head: "Riza P. Tipay", email: "riza.tipay001@deped.gov.ph", contact: "09431371858" },
      { no: 12, name: "Susuba Elementary School ANNEX", location: "Susuba Capas, Tarlac", head: "Eva U. Mendoza", email: "eva.mendoza008@deped.gov.ph", contact: "09198577108" },
      { no: 13, name: "Susuba Main Elementary School", location: "Susuba Capas, Tarlac", head: "Danilo P. Santos", email: "danilo.santos003@deped.gov.ph", contact: "09197230447" },
      { no: 14, name: "Talaga Elementary School", location: "Talaga Capas, Tarlac", head: "Renan T. Revera", email: "renan.rivera001@deped.gov.ph", contact: "09192891247" },
      { no: 15, name: "Calangitan High School", location: "Kalangitan Capas, Tarlac", head: "Dexter B. Dungca", email: "dexter.dungca@deped.gov.ph", contact: "09167546808" },
      { no: 16, name: "Capas National High School", location: "Dolores Capas, Tarlac", head: "Mariolito G. Magcalas", email: "mariolito.magcalas@deped.gov.ph", contact: "09054454157" },
      { no: 17, name: "Capas National High School Senior-High School", location: "Sto. Domingo 1st Capas, Tarlac", head: "Dionisio D. Madriaga", email: "capasnhsseniorhigh@gmail.com", contact: "09475840108" },
    ],
    central: [
      { no: 1, name: "Aquino Elementary School", location: "Aquino ES, Aquino Page Village, Aranguren", head: "Jackie Lou F. Suy", email: "106379.aquinoes@gmail.com", contact: "09459340687" },
      { no: 2, name: "Aranguren Integrated School (ES)", location: "Purok 3, Aranguren", head: "Arsenio S. Castro", email: "500124@deped.gov.ph", contact: "09661368599" },
      { no: 3, name: "Cristo Rey Central Elementary School", location: "Blk. 39 Cristo Rey", head: "Dr. Joymin P. Garcia", email: "106388.cristoreycentrales@deped.gov.ph", contact: "09472425218" },
      { no: 4, name: "Cristo Rey East Elementary School", location: "Block 58 Lot 2 Cristo Rey", head: "Reah R. Sibal", email: "106392.cristoreyeastes@deped.gov.ph", contact: "09228133176" },
      { no: 5, name: "Cristo Rey West Elementary School", location: "Block 34, Cristo Rey", head: "Dr. Lyrma S. Gabatino", email: "106391.cristoreywestes@deped.gov.ph", contact: "09171472522" },
      { no: 6, name: "Lawy Elementary School", location: "San Felipe St. Lawy", head: "Tito P. Dimalanta", email: "106384.lawyes@deped.gov.ph", contact: "09474903436" },
      { no: 7, name: "Manlapig Elementary School", location: "Manlapig, Capas, Tarlac", head: "Dr. Abraham Capuno", email: "106386.manlapig@deped.gov.ph", contact: "09398515128" },
      { no: 8, name: "Aranguren Integrated School (HS)", location: "Purok 3, Aranguren", head: "Elma T. Datu", email: "500124.arangurenishs@deped.gov.ph", contact: "09981929332" },
      { no: 9, name: "Cristo Rey High School", location: "Blk. 74, Cristo Rey", head: "Dr. Noel Palgue", email: "300976@deped.gov.ph", contact: "09993133744" },
      { no: 10, name: "Lawy HS", location: "1187 Lote St., Lawy", head: "Dr. Glenn Quito", email: "300968@deped.gov.ph", contact: "09684646521" },
    ],
    private: [
      { no: 1, name: "Asia Pacific Christian School Inc.", location: "Blk. 2 Cristo Rey", head: "Rev. Dr. Youn Su Choi", email: "apcsiphilippine@gmail.com", contact: "09175105631" },
      { no: 2, name: "Blessed Trinity Child Development", location: "San Jose St. O’Donnell", head: "Rev. Natividad Lundang", email: "blessedtrinitypatling@yahoo.com", contact: "09171041322" },
      { no: 3, name: "Capas Christian High School", location: "Mac Arthur Highway, Cut cut 1", head: "Jovita Sicat", email: "cchsi_2012@yahoo.com", contact: "09338234442" },
      { no: 4, name: "Capas Good Samaritan School Inc.", location: "Sto. Cristo St., Sto. Rosario, Capas Tarlac", head: "Rev. Loren M. Liceta", email: "capasgoodsamaritanschool.inc@gmail.com", contact: "09205531929" },
      { no: 5, name: "Choong Shin Lawy Christian School", location: "Abagatan Street Lawy", head: "Mercy Cancio", email: "choongshinlawychristianschool@gmail.com", contact: "09209823610" },
      { no: 6, name: "Dominican College Of Tarlac", location: "Mc Arthur Highway, Poblacion, Sto. Rosario", head: "Criselda V. Ragel | Leo A. Sagun", email: "domct_2315@dct.edu.ph", contact: "09389184093" },
      { no: 7, name: "God’s Grace Christian Academy", location: "1142 Pangasnan Sto. Domingo II Capas, Tarlac", head: "Cristina Hipolito", email: "godsgracechristianacademyph@gmail.com", contact: "09306581310" },
      { no: 8, name: "Golden Gate Christian School Inc.", location: "1092 Villa San Jose Subd. Cut-cut 1st Capas, Tarlac", head: "Rev. Danilo Yandan", email: "goldengate.ggcsi@gmail.com", contact: "09950185588" },
      { no: 9, name: "Good Shepherd Capas Christian Academy Inc.", location: "Blk. 110 Barangay Cristo Rey", head: "Gail Ann Liwanag", email: "goodshepherdcapasca@gmail.com", contact: "09988872018" },
      { no: 10, name: "Goshen Christian School Of Capas, Inc", location: "Mc Arthur Highway Estrada Capas, Tarlac", head: "Frendelyn Ramos", email: "Goshenchristianschool09@gmail.com", contact: "09437074003" },
      { no: 11, name: "Headway School Of Achievers", location: "0160 Vargas Subd., Sto. Domingo II", head: "Annalyn Caymo", email: "amcaymo@edunetwork.info", contact: "0998-5401305" },
      { no: 12, name: "Lightgiver Christian School", location: "0186 Vargas Street Sto. Domingo 2nd Capas Tarlac", head: "Ptra. Elizabeth Tapnio", email: "administrator@lcsi.education.ph", contact: "09153697744" },
      { no: 13, name: "Midas Institute", location: "Block 108 Lot 113 Cristo Rey", head: "Redesmema Caday", email: "midasinstituteinc@gmail.com", contact: "09915127168" },
      { no: 14, name: "Montessori School Of St. Nicolas", location: "Tizon Drive, Sto. Rosario", head: "Jenifer S. Brusola", email: "-", contact: "09389228713" },
      { no: 15, name: "St. Bethel School Of Central Luzon", location: "230 Sto. Rosario", head: "Elizabeth S. Nunez", email: "-", contact: "-" },
      { no: 16, name: "St. Nathaniel Technical Institute", location: "Block 22 Phase II Cristo Rey", head: "Ella Edem", email: "stnathaniel17@gmail.com", contact: "09989568591" },
      { no: 17, name: "St. Nichole’s Technical School Inc.Of Capas, Tarlac", location: "Sto. Domingo 1st, Mc Arthur Highway, Capas, Tarlac", head: "Arsenio Novesteras", email: "stnicholestech@gmail.com", contact: "09258951774" },
      { no: 18, name: "Tip And Point School Of Tarlac", location: "Blk 55 lot 40 Cristo Rey Capas Tarlac", head: "Juliet Clemente", email: "iamjuliet1013@gmail.com", contact: "09503539735" },
      { no: 19, name: "Wellspring High School, Inc. - Junior High", location: "0769 Niñas Homesite Cutcut I", head: "Medalla Rivera", email: "wellspringhighschool@yahoo.com", contact: "09082775791" },
      { no: 20, name: "Wellspring High School, Inc. - Senior High", location: "Cenizal Subdivision, Sto. Domingo II", head: "Harold Siapo", email: "wellspringhighschool.shs@gmail.com", contact: "09081271607" },
    ]
  }

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
                <div className="d-flex align-items-center gap-2">
                  {item.image_path && (
                    <img src={resolveImage(item)} alt="" className="rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                  )}
                  <div className="fw-bold text-dark" style={{ fontSize: '1rem' }}>{item.name}</div>
                </div>
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
      {/* Hero Section */}
      <section className="directory-hero bg-dark text-white py-5 position-relative overflow-hidden mb-5" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(13,13,13,0.9), rgba(20,24,61,0.8))',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="hero-pattern"></div>
        <Container className="position-relative z-index-1 text-center py-4">
          <h1 className="fw-bold mb-3 display-3">Municipal Directory</h1>
          <p className="lead mx-auto opacity-75" style={{ maxWidth: '800px' }}>
            A comprehensive list of offices, officials, and contact information for the Municipality of Capas.
          </p>
        </Container>
      </section>

      <Container fluid className="py-5 px-lg-5">
        <Card className="border-0 shadow-sm rounded-4">
          <Card.Body className="p-0">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
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
                  {loading ? (
                    <div className="text-center py-5">
                      <Spinner animation="border" variant="danger" />
                      <p className="mt-3 text-muted">Loading offices...</p>
                    </div>
                  ) : renderTable(executiveOfficesState)}
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
                  
                  {loading ? (
                    <div className="text-center py-5">
                      <Spinner animation="border" variant="danger" />
                    </div>
                  ) : (
                    <Accordion flush className="mt-4 custom-school-accordion">
                      {[
                        'Aranguren', 'Bueno', 'Cristo Rey', 'Cubcub', 'Cut-Cut I', 'Cut-Cut II', 
                        'Dolores', 'Estrada', 'Lawy', 'Manga', 'Manlapig', 'Maruglu', 
                        "O'Donnell", 'Sta. Juliana', 'Sta. Lucia', 'Sta. Rita', 
                        'Sto. Domingo I', 'Sto. Domingo II', 'Sto. Rosario', 'Talaga'
                      ].map((brgy, idx) => {
                        const officials = barangayOfficialsState.filter(off => off.department === brgy)
                        if (officials.length === 0) return null;
                        
                        return (
                          <Accordion.Item eventKey={idx.toString()} key={idx} className="border-bottom py-2">
                            <Accordion.Header className="fw-bold fs-5">{brgy}</Accordion.Header>
                            <Accordion.Body>
                              <Table responsive hover size="sm" className="mt-2">
                                <thead className="bg-light">
                                  <tr>
                                    <th className="small">Name</th>
                                    <th className="small">Position</th>
                                    <th className="small">Contact Number</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {officials.map((off, i) => (
                                    <tr key={i}>
                                      <td className="small fw-bold">
                                        <div className="d-flex align-items-center gap-2">
                                          {off.image_path && (
                                            <img src={resolveImage(off)} alt="" className="rounded-circle" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                                          )}
                                          {off.name}
                                        </div>
                                      </td>
                                      <td className="small text-muted">{off.position}</td>
                                      <td className="small">{off.contact.join(' / ')}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </Accordion.Body>
                          </Accordion.Item>
                        )
                      })}
                    </Accordion>
                  )}
                </div>
              </Tab>
              <Tab eventKey="agencies" title="National Agencies">
                <div className="p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 bg-danger text-white rounded-4 shadow-sm">
                      <FaUserTie size={24} />
                    </div>
                    <div>
                      <h2 className="fw-bold mb-0">Attached National Agencies</h2>
                      <p className="text-muted mb-0">National government offices and agencies operating within the Municipality of Capas.</p>
                    </div>
                  </div>
                  {loading ? (
                    <div className="text-center py-5">
                      <Spinner animation="border" variant="danger" />
                    </div>
                  ) : renderTable(nationalAgenciesState)}
                </div>
              </Tab>
              <Tab eventKey="utilities" title="Utilities">
                <div className="p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 bg-danger text-white rounded-4 shadow-sm">
                      <FaUserTie size={24} />
                    </div>
                    <div>
                      <h2 className="fw-bold mb-0">Utility Service Providers</h2>
                      <p className="text-muted mb-0">Major utility companies and cooperatives serving the Municipality of Capas.</p>
                    </div>
                  </div>
                  {loading ? (
                    <div className="text-center py-5">
                      <Spinner animation="border" variant="danger" />
                    </div>
                  ) : renderTable(utilityProvidersState)}
                </div>
              </Tab>
              <Tab eventKey="churches" title="Catholic Churches">
                <div className="p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 bg-danger text-white rounded-4 shadow-sm">
                      <FaUserTie size={24} />
                    </div>
                    <div>
                      <h2 className="fw-bold mb-0">Catholic Churches</h2>
                      <p className="text-muted mb-0">Parishes and shrines within the Municipality of Capas.</p>
                    </div>
                  </div>
                  {loading ? (
                    <div className="text-center py-5">
                      <Spinner animation="border" variant="danger" />
                    </div>
                  ) : renderTable(churchState)}
                </div>
              </Tab>
              <Tab eventKey="schools" title="Schools">
                <div className="p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-3 bg-danger text-white rounded-4 shadow-sm">
                      <FaBuilding size={24} />
                    </div>
                    <div>
                      <h2 className="fw-bold mb-0">Schools</h2>
                      <p className="text-muted mb-0">Educational institutions in the Municipality of Capas categorized by district.</p>
                    </div>
                  </div>
                  
                  <Accordion flush className="mt-4 custom-school-accordion">
                    <Accordion.Item eventKey="0" className="border-bottom py-2">
                      <Accordion.Header className="fw-bold fs-5">Capas West District Schools</Accordion.Header>
                      <Accordion.Body>
                        <div className="mb-3">
                          <div className="fw-bold text-dark">DR. ROBERTO SANTOS</div>
                          <div className="text-muted small">Public Schools District Supervisor</div>
                        </div>
                        <Table responsive hover size="sm" className="mt-3">
                          <thead className="bg-light">
                            <tr>
                              <th className="small">No.</th>
                              <th className="small">School</th>
                              <th className="small">Location</th>
                              <th className="small">School Head</th>
                              <th className="small">Email</th>
                              <th className="small">Contact</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schoolsData.west.map((school, i) => (
                              <tr key={i}>
                                <td className="small text-muted">{school.no}</td>
                                <td className="small fw-bold">{school.name}</td>
                                <td className="small text-muted">{school.location}</td>
                                <td className="small">{school.head}</td>
                                <td className="small">
                                  <a href={`mailto:${school.email}`} className="text-decoration-none">{school.email}</a>
                                </td>
                                <td className="small">{school.contact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="border-bottom py-2">
                      <Accordion.Header className="fw-bold fs-5">Capas East District Schools</Accordion.Header>
                      <Accordion.Body>
                        <div className="mb-3">
                          <div className="fw-bold text-dark">DELFIN J. SIBAL</div>
                          <div className="text-muted small">Public Schools District Supervisor</div>
                        </div>
                        <Table responsive hover size="sm" className="mt-3">
                          <thead className="bg-light">
                            <tr>
                              <th className="small">No.</th>
                              <th className="small">School</th>
                              <th className="small">Location</th>
                              <th className="small">School Head</th>
                              <th className="small">Email</th>
                              <th className="small">Contact</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schoolsData.east.map((school, i) => (
                              <tr key={i}>
                                <td className="small text-muted">{school.no}</td>
                                <td className="small fw-bold">{school.name}</td>
                                <td className="small text-muted">{school.location}</td>
                                <td className="small">{school.head}</td>
                                <td className="small">
                                  <a href={`mailto:${school.email}`} className="text-decoration-none">{school.email}</a>
                                </td>
                                <td className="small">{school.contact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="border-bottom py-2">
                      <Accordion.Header className="fw-bold fs-5">Capas Central District Schools</Accordion.Header>
                      <Accordion.Body>
                        <div className="mb-3">
                          <div className="fw-bold text-dark">CECILIA S. GOMEZ</div>
                          <div className="text-muted small">Public Schools District Supervisor</div>
                        </div>
                        <Table responsive hover size="sm" className="mt-3">
                          <thead className="bg-light">
                            <tr>
                              <th className="small">No.</th>
                              <th className="small">School</th>
                              <th className="small">Location</th>
                              <th className="small">School Head</th>
                              <th className="small">Email</th>
                              <th className="small">Contact</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schoolsData.central.map((school, i) => (
                              <tr key={i}>
                                <td className="small text-muted">{school.no}</td>
                                <td className="small fw-bold">{school.name}</td>
                                <td className="small text-muted">{school.location}</td>
                                <td className="small">{school.head}</td>
                                <td className="small">
                                  <a href={`mailto:${school.email}`} className="text-decoration-none">{school.email}</a>
                                </td>
                                <td className="small">{school.contact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="border-bottom py-2">
                      <Accordion.Header className="fw-bold fs-5">Private Schools</Accordion.Header>
                      <Accordion.Body>
                        <Table responsive hover size="sm" className="mt-3">
                          <thead className="bg-light">
                            <tr>
                              <th className="small">No.</th>
                              <th className="small">School</th>
                              <th className="small">Location</th>
                              <th className="small">School Head</th>
                              <th className="small">Email</th>
                              <th className="small">Contact</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schoolsData.private.map((school, i) => (
                              <tr key={i}>
                                <td className="small text-muted">{school.no}</td>
                                <td className="small fw-bold">{school.name}</td>
                                <td className="small text-muted">{school.location}</td>
                                <td className="small">{school.head}</td>
                                <td className="small">
                                  <a href={`mailto:${school.email}`} className="text-decoration-none">{school.email}</a>
                                </td>
                                <td className="small">{school.contact}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
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
          background-color: #f8f9fa;
        }
        .ls-1 { letter-spacing: 1px; }
        .hover-underline:hover { text-decoration: underline !important; }
      `}</style>
    </div>
  )
}

export default Directory
