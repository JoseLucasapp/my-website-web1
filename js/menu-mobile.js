window.addEventListener("load", function (e) {

    if (window.screen.width <= 768) {
        const mobileMenu = document.querySelector(".mobile-menu")
        const menu = document.querySelector(".menu")
        mobileMenu.addEventListener("click", function () {
            mobileMenu.style.display = "none"
            menu.style.display = "flex"
        })
        menu.addEventListener("click", function () {
            menu.style.display = "none"
            mobileMenu.style.display = "block"
        })
    }

})