
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');

// Agrego un evento al hacer click, cuya funcion es alternar la presencia de la clase active
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Versión con función callback anónima
// hamburger.addEventListener("click", function () {
//     navLinks.classList.toggle("active");
// });

// Versión con función callback declarativa
// function toggleNav() {
//     navLinks.classList.toggle("active");
// }

// hamburger.addEventListener("click", toggleNav);
