//hamburger open and close

const menuToggle = document.querySelector(".hamburger-button");
const nav = document.querySelector(".mobile-menu")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
})

//nav links function
const navLinks = document.querySelectorAll("main-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const sectionId = this.getAttribute("href");
        const section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior: "smooth"
        });
        menuToggle.classList.remove("active");
         nav.classList.remove("active");
    })
})