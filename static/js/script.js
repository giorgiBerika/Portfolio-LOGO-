const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", function () {
    document.querySelector(".dropped-burger-menu").classList.toggle("dropped-burg-menu-active");
});
