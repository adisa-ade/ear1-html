document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('#navbar-menu');

    toggleButton.addEventListener('click', function () {
        const openNav = document.querySelector('.open')
        const closeNav = document.querySelector('.close')
        
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('show');

        openNav.classList.toggle('removeActive')
        closeNav.classList.toggle('addActive')
    });
});
