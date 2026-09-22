'use strict';

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = mobileMenu.querySelector('.menu-close');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function closeMenu() {
  if (mobileMenu.open) mobileMenu.close();
}

menuButton.addEventListener('click', () => {
  if (mobileMenu.open) {
    closeMenu();
    return;
  }
  mobileMenu.showModal();
  menuButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-is-open');
});
closeButton.addEventListener('click', closeMenu);
mobileMenu.addEventListener('close', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-is-open');
});

let backdropPointerDown = false;
function isOutsideMenu(event) {
  const bounds = mobileMenu.getBoundingClientRect();
  return event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
}
mobileMenu.addEventListener('pointerdown', (event) => { backdropPointerDown = isOutsideMenu(event); });
mobileMenu.addEventListener('click', (event) => {
  if (backdropPointerDown && isOutsideMenu(event)) closeMenu();
  backdropPointerDown = false;
});
mobileMenu.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  if (!link.hash) {
    closeMenu();
    return;
  }
  const section = document.querySelector(link.hash);
  if (!section) return;
  event.preventDefault();
  closeMenu();
  history.pushState(null, '', link.hash);
  section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
  section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
  section.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
});
window.matchMedia('(min-width: 721px)').addEventListener('change', (event) => { if (event.matches) closeMenu(); });

document.getElementById('year').textContent = new Date().getFullYear();
const questions = document.querySelectorAll('.faq-items details');
questions.forEach((detail) => detail.addEventListener('toggle', () => {
  if (detail.open) questions.forEach((other) => { if (other !== detail) other.open = false; });
}));

const sectionLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
const sections = Array.from(document.querySelectorAll('main > section[id]'));
let navigationFrame = null;
function updateNavigation() {
  const readingLine = Math.min(window.innerHeight * 0.32, 240);
  let current = sections[0]?.id;
  sections.forEach((section) => { if (section.getBoundingClientRect().top <= readingLine) current = section.id; });
  sectionLinks.forEach((link) => {
    const active = link.hash === '#' + current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  navigationFrame = null;
}
function requestNavigationUpdate() {
  if (navigationFrame === null) navigationFrame = window.requestAnimationFrame(updateNavigation);
}
window.addEventListener('scroll', requestNavigationUpdate, { passive: true });
window.addEventListener('resize', requestNavigationUpdate, { passive: true });
window.addEventListener('pageshow', requestNavigationUpdate);
updateNavigation();
