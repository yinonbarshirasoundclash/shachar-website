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

  // Contact form -> mailto fallback (no backend yet)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const phone = data.get('phone') || '';
      const email = data.get('email') || '';
      const topic = data.get('topic') || '';
      const message = data.get('message') || '';

      const subject = encodeURIComponent(`פנייה חדשה מהאתר – ${topic || 'שחר חוויות חינוכיות'}`);
      const body = encodeURIComponent(
        `שם: ${name}\nטלפון: ${phone}\nאימייל: ${email}\nנושא: ${topic}\n\nהודעה:\n${message}`
      );
      window.location.href = `mailto:info@shachar-experiences.co.il?subject=${subject}&body=${body}`;

      const note = document.getElementById('form-status');
      if (note) {
        note.textContent = 'נפתח עבורך חלון מייל עם הפרטים שמילאת — פשוט לשלוח! אפשר גם ליצור קשר ישירות בטלפון או בוואטסאפ.';
      }
    });
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
