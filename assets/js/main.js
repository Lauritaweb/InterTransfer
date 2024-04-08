// lazy load
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('img.lazy');

    var lazyLoad = function() {
      lazyImages.forEach(function(img) {
        if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom > 0) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
    };

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);

    lazyLoad();
  });

// ends lazy load
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarLinks = document.querySelectorAll('.nav-link');

    // Evento para desplegar/plegar la navbar al hacer clic en el botón de hamburguesa
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    // Evento para cerrar la navbar al hacer clic en un enlace
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Evento para cerrar la navbar al hacer clic fuera de ella
    window.addEventListener('click', function(event) {
        if (!navbarCollapse.contains(event.target) && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Evento para agregar y quitar clase activa al enlace seleccionado
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

// whatsapp
function enviarWhatsapp() {
    const desde = document.getElementById('desdeInput').value;
    const hasta = document.getElementById('hastaInput').value;
    const fecha = document.getElementById('fechaInput').value;
    const hora = document.getElementById('horaInput').value;

    const mensaje = `Reserva de traslado:\nDesde: ${desde}\nHasta: ${hasta}\nFecha: ${fecha}\nHora: ${hora}`;

    // Reemplaza el número
    window.open(`https://api.whatsapp.com/send?phone=+541134875549&text=${encodeURIComponent(mensaje)}`);
  }

//   <!-- START Webchat-->
    (function () {
      let js = document.createElement('script');
      js.type = 'text/javascript';
      js.async = 1;
      js.src = 'https://go.botmaker.com/rest/webchat/p/GZFTBR4QUK/init.js';
      document.body.appendChild(js);
    })();

//   <!-- END Webchat-->