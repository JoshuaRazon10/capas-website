// API Configuration for the Capas Website
// Change this URL when you deploy your Laravel backend to cPanel

// Toggle between local development and production
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:8000/api' 
  : 'https://capas.gov.ph/api';

export default API_BASE_URL;
