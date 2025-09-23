// Hamburger menu logic for mobile nav
const hamburger = document.getElementById('hamburger-menu');
const navUl = document.getElementById('main-nav');
const langBtn = document.getElementById('lang-toggle');

function closeMenu() {
  navUl.classList.remove('open');
  document.body.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
}

function openMenu() {
  navUl.classList.add('open');
  document.body.classList.add('menu-open');
  hamburger.setAttribute('aria-expanded', 'true');
}

hamburger.addEventListener('click', () => {
  if (navUl.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close menu on nav link click (mobile)
navUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && navUl.classList.contains('open')) {
    closeMenu();
  }
});

// Close menu on resize if desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    closeMenu();
  }
});

// Optional: close menu on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
