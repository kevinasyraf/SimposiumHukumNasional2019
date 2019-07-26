// Navbar
let navbar = document.getElementById("navbar");

// Navbar Items
let navbarItems = document.querySelector(".navbar-items");

// // Sticky Navbar
window.onscroll = stickyNavbar;

// Only need once
let sticky = navbar.offsetTop;
// console.log(sticky + "sticky");

function stickyNavbar() {
  //Window.pageYOffset is the page y coord
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbarItems.classList.add("after-sticky");
  } else {
    navbar.classList.remove("sticky");
    navbarItems.classList.remove("after-sticky");
  }

  //   console.log(window.pageYOffset + "page offset y");
}
