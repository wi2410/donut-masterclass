(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const body = document.querySelector('[data-body]');

    document.querySelectorAll(".mobile-menu__nav-link").forEach(n => n.addEventListener("click", () => {
        mobileMenuRef.classList.remove('mobile-menu--is-open');
        document.body.classList.remove("menu-open");
        body.classList.remove('body--scroll-hidden');
        body.classList.remove('body--scroll-hidden::-webkit-scrollbar');
    }))

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('mobile-menu--is-open');
        document.body.classList.toggle("menu-open");
        body.classList.toggle('body--scroll-hidden');
        body.classList.toggle('body--scroll-hidden::-webkit-scrollbar');
    });
})();