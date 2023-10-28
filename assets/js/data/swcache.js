const resource = [
  /* --- CSS --- */
  '/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/app.js',
  '/sw.js',

  /* --- HTML --- */
  '/index.html',
  '/404.html',

  
    '/categories/',
  
    '/tags/',
  
    '/archives/',
  
    '/about/',
  

  /* --- Favicons & compressed JS --- */
    '/assets/img/favicons/icon.ico',
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'chirpy-img.netlify.app',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

