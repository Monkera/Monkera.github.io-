// Wenn du ein mobiles Menü machen willst
document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
  
    if (navToggle) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
      });
    }
  });
  