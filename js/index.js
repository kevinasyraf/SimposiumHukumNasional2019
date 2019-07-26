//Navbar
let navbar = document.getElementById("navbar");

//Sticky Navbar
window.onscroll = stickyNavbar;

// Only need once
let sticky = navbar.offsetTop;
// console.log(sticky + "sticky");

function stickyNavbar() {
  //Window.pageYOffset is the page y coord
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  console.log(window.pageYOffset + "page offset y");
}

// Navbar after scroll
