const fs = require('fs');
const img = fs.readFileSync('src/assets/images/capas.logo.jpg');
const base64 = img.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circleClip">
      <circle cx="50" cy="50" r="50"/>
    </clipPath>
  </defs>
  <image href="data:image/jpeg;base64,${base64}" width="100" height="100" clip-path="url(#circleClip)" preserveAspectRatio="xMidYMid slice"/>
</svg>`;
fs.writeFileSync('public/capas-favicon.svg', svg);
console.log('Favicon created successfully');
