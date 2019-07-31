// Second Navbar
let secondaryNavbar = document.getElementById("navbar-after-header");

window.addEventListener("DOMContentLoaded", e => showSecondNavbar());
let section1Top = document.querySelector("#about").offsetTop;

window.addEventListener("resize", e => {
  section1Top = document.querySelector("#about").offsetTop;
  // console.log("section1top = " + section1Top);
  showSecondNavbar();
});

// // Second navbar shows up after scroll
window.onscroll = showSecondNavbar;

// Top of Section 1

function showSecondNavbar() {
  if (window.pageYOffset >= section1Top) {
    // secondaryNavbar.classList.remove("no-show");
    secondaryNavbar.classList.add("show");
  } else {
    // secondaryNavbar.classList.add("no-show");
    secondaryNavbar.classList.remove("show");
  }
}
