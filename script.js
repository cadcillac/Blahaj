// Product slider logic
const sliderTrack = document.querySelector('.slider-track');
const products = document.querySelectorAll('.product');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

let currentIndex = 0;
const maxIndex = products.length - 1;
const productWidth = products[0].offsetWidth + 20; // product width + gap

function updateSlider() {
  // Show products starting at currentIndex
  // Limit sliding so last product aligns without empty space on right
  let maxTranslate = productWidth * (products.length - 3); // show 3 in viewport approx
  let translateX = productWidth * currentIndex;
  if (translateX > maxTranslate) translateX = maxTranslate;
  if (translateX < 0) translateX = 0;
  sliderTrack.style.transform = `translateX(-${translateX}px)`;
}

leftBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = 0;
  updateSlider();
});

rightBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  updateSlider();
});

// Initialize (disable left arrow if at start)
updateSlider();

// Contact form submit handler
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    formResponse.style.color = 'green';
    formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
    form.reset();
  } else {
    formResponse.style.color = 'red';
    formResponse.textContent = 'Please complete all fields before submitting.';
  }
});

// About toggle button
const toggleBtn = document.getElementById('toggleMoreAbout');
const moreAboutSection = document.getElementById('moreAbout');

toggleBtn.addEventListener('click', () => {
  if (moreAboutSection.hasAttribute('hidden')) {
    moreAboutSection.removeAttribute('hidden');
    toggleBtn.textContent = 'Less About Us ▲';
    toggleBtn.setAttribute('aria-expanded', 'true');
  } else {
    moreAboutSection.setAttribute('hidden', '');
    toggleBtn.textContent = 'More About Us ▼';
    toggleBtn.setAttribute('aria-expanded', 'false');
    // Clear role description on hide
    document.getElementById('roleDescription').textContent = '';
  }
});

// Hierarchy roles event logic
const roles = document.querySelectorAll('#hierarchy li.role');
const descriptionBox = document.getElementById('roleDescription');

roles.forEach(role => {
  // Show description on hover/focus
  role.addEventListener('mouseenter', () => {
    descriptionBox.textContent = role.dataset.description;
  });
  role.addEventListener('mouseleave', () => {
    descriptionBox.textContent = '';
  });
  role.addEventListener('focus', () => {
    descriptionBox.textContent = role.dataset.description;
  });
  role.addEventListener('blur', () => {
    descriptionBox.textContent = '';
  });
  // For touch/click devices toggle description
  role.addEventListener('click', () => {
    if(descriptionBox.textContent === role.dataset.description) {
      descriptionBox.textContent = '';
    } else {
      descriptionBox.textContent = role.dataset.description;
      role.focus();
    }
  });
});