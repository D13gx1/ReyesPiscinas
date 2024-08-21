document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    // Agregamos un listener al botón del menú móvil
    mobileMenuButton.addEventListener('click', function () {
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuButton.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('show', !expanded);
    });

    // Cerrar el menú móvil cuando se hace clic en un enlace
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('show');
        });
    });
});
