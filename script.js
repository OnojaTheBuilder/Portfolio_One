/*const menuToggle = document.querySelector (".menu-toggle");
const nav = document.querySelector (".nav");


menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
}) */


const menuToggle = document.querySelector(".hamburger-button");
const nav = document.querySelector(".mobile-menu")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
})
