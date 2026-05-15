// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Mark active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Contact form submit → WhatsApp redirect
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = contactForm.querySelector('[name="name"]').value.trim();
    const email   = contactForm.querySelector('[name="email"]').value.trim();
    const phone   = contactForm.querySelector('[name="phone"]').value.trim();
    const service = contactForm.querySelector('[name="service"]').value;
    const message = contactForm.querySelector('[name="message"]').value.trim();

    const text =
      `Hello DiGitras Technology, I have an enquiry:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      (phone   ? `Phone: ${phone}\n`     : '') +
      (service ? `Service: ${service}\n` : '') +
      `\nMessage: ${message}`;

    const whatsappURL = `https://wa.me/918270393837?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');

    contactForm.reset();
  });
}
