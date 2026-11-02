document.addEventListener('DOMContentLoaded', () => {

  // 1. Mensaje de interacción al dar clic en los botones "Alquilar"
  const rentButtons = document.querySelectorAll('.product-card .btn-action');

  rentButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const productName = e.target.parentElement.querySelector('h4').innerText;
      alert(`¡Gracias por tu interés! Has seleccionado: "${productName}". Redirigiendo al proceso de reserva...`);
    });
  });

  // 2. Simulación de envío del formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad.');
      contactForm.reset();
    });
  }

  // 3. Desplazamiento suave para los enlaces del menú
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

});