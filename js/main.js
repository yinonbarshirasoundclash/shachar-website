// שחר חוויות חינוכיות — Main JS

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('open');
    });
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', () => header.classList.remove('open'));
    });
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Contact form -> submits directly to stageart.pnima@gmail.com via FormSubmit (no mail client needed)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', () => {
      const note = document.getElementById('form-status');
      if (note) {
        note.textContent = 'שולח את הפנייה...';
      }
    });
  }

  // After FormSubmit redirects back with ?sent=1, show a thank-you note
  if (window.location.search.includes('sent=1')) {
    const card = document.querySelector('.form-card');
    if (card) {
      card.innerHTML = '<h3>תודה רבה! 🎉</h3><p>קיבלנו את הפנייה שלכם ונחזור אליכם תוך יום עסקים אחד. אפשר גם לפנות אלינו ישירות בוואטסאפ.</p>';
    }
  }

  // Simple reveal-on-scroll
  const revealEls = document.querySelectorAll('.card, .testi-card, .timeline-item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
});
