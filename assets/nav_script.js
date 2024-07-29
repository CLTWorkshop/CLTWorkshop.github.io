// script for navigation bar
window.onscroll = function() {stickyNav()};

var navbar = document.querySelector('.navigation');
var sticky = navbar.offsetTop; // Get the initial position of the navigation bar

function stickyNav() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky"); // Add the sticky class if you scrolled past the navbar
    } else {
        navbar.classList.remove("sticky"); // Remove the sticky class if you are above it
    }
}

