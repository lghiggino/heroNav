// navbar footer items hover effect
const footerItem = document.querySelectorAll(".hero-foot li");

footerItem.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        e.target.classList.add("is-active");
    })
    item.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("is-active");
    })
});

//navbar burger menu
const navbarBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarItens = document.querySelectorAll(".navbar-item");

navbarBurger.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
    navbarItens.forEach(item => {
        item.addEventListener("click", () => {
            navbarMenu.classList.remove("is-active");
        })
    })
})
