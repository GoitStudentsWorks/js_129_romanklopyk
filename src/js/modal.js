(() => {
    const refs = {
        openMenuBtn: document.querySelector('.nav-button'),
        closeMenuBtn: document.querySelector('.mob-menu-button'),
        menu: document.querySelector('.mob-menu'),
        body: document.body,
        menuLinks: document.querySelectorAll('.mob-link'),
    };

    if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) return;

    function openMenu() {
        refs.menu.classList.add('is-open');
        refs.body.classList.add('is-scroll-locked');
    }

    function closeMenu() {
        refs.menu.classList.remove('is-open');
        refs.body.classList.remove('is-scroll-locked');
    }

    refs.openMenuBtn.addEventListener('click', e => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            openMenu();
        }
    });

    refs.closeMenuBtn.addEventListener('click', closeMenu);

    refs.menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            refs.menu.classList.remove('is-open');
            refs.body.classList.remove('is-scroll-locked');
        }
    });
})();
