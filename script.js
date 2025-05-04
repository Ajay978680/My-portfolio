// Animate section headings on scroll
function animateHeadingsOnScroll() {
  const headings = document.querySelectorAll('h2, .form-title');
  const reveal = () => {
    headings.forEach(h => {
      const rect = h.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        h.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}

// Highlight active nav link on scroll
function highlightActiveNav() {
  const navLinks = document.querySelectorAll('header nav a');
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));
  function onScroll() {
    let index = sections.length - 1;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] && window.scrollY + 120 < sections[i].offsetTop) {
        index = i - 1;
        break;
      }
    }
    navLinks.forEach(link => link.classList.remove('active'));
    if (index >= 0) navLinks[index].classList.add('active');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// Smooth scroll for nav links
function enableSmoothScroll() {
  document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 30,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize all features on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  animateHeadingsOnScroll();
  highlightActiveNav();
  enableSmoothScroll();
});
