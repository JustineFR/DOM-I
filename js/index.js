const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// UPDATE NAVIGATION LINKS
let navLinks = document.querySelectorAll("nav a")
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

// UPDATE CTA
let ctaTitle = document.querySelector('h1')
ctaTitle.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']

let ctaImage = document.getElementById('cta-img')
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

// UPDATE MAIN CONTENT
let mainContentTitle = document.getElementsByClassName('text-content')
mainContentTitle[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainContentTitle[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainContentTitle[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainContentTitle[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainContentTitle[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainContentTitle[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainContentTitle[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainContentTitle[3].querySelector('p').textContent = siteContent['main-content']['product-content']
mainContentTitle[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainContentTitle[4].querySelector('p').textContent = siteContent['main-content']['vision-content']

let middleImage = document.querySelector('.middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

let mainContentText = document