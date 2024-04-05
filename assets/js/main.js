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
