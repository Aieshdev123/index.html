// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

// Smooth scroll & active link
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start'});
      nav.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    }
  });
});

// IntersectionObserver to highlight section in nav
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
      document.querySelector(`.nav a[href="#${id}"]`)?.classList.add('active');
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form -> mailto draft with validation
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = (document.getElementById('name')).value.trim();
  const email = (document.getElementById('email')).value.trim();
  const service = (document.getElementById('service')).value;
  const message = (document.getElementById('message')).value.trim();

  if (!name || !email || !service || !message) {
    note.textContent = 'Please fill out all fields.';
    return;
  }

  const subject = encodeURIComponent(`Inquiry: ${service} — ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:ayesha.va.services@example.com?subject=${subject}&body=${body}`;
  note.textContent = 'Opening your email app…';
});
