(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        document.body.classList.toggle("menu-open");
    });
    document.querySelectorAll(".mobile-menu__nav-link").forEach(n => n.addEventListener("click", () => {
        mobileMenuRef.classList.remove("is-open");
        menuBtnRef.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        body.classList.remove('body--scroll-hidden');
        body.classList.remove('body--scroll-hidden::-webkit-scrollbar');
    }))
})();