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

// if checkbox is checked

let checkbox = document.getElementById("burger");

let line = document.querySelector(".line");

let modal = document.querySelector(".modal");

function burgerTransition() {
  if (checkbox.checked) {
    line.classList.remove("after-modal");
    line.classList.add("before-modal");
  } else {
    line.classList.remove("before-modal");
    line.classList.add("after-modal");
  }
}

modal.addEventListener("click", e => {
  checkbox.checked = false;
  burgerTransition();
});

checkbox.addEventListener("change", burgerTransition);

// Smooth scrolling

// // let links = document.getElementsByClassName("smooth-scroll");
let links = document.querySelectorAll(".smooth-scroll");

// // console.log(links);
// // console.log(aa);

links.forEach(link => {
  let linkDestination = document.querySelector(link.getAttribute("href"));
  link.addEventListener("click", e => {
    e.preventDefault();
    linkDestination.scrollIntoView({
      behavior: "smooth"
    });
  });
  // window.scroll({
  //   top: linkDestination.offsetTop,
  //   left: 0,
  // });
});

// function scroll(element) {
//   let start = null;
//   const target = element && element ? element.getBoundingClientRect().top : 0;
//   const firstPos = window.pageYOffset || document.documentElement.scrollTop;
//   let pos = 0;

//   (function() {
//     var browser = ["ms", "moz", "webkit", "o"];

//     for (
//       let x = 0, length = browser.length;
//       x < length && !window.requestAnimationFrame;
//       x++
//     ) {
//       window.requestAnimationFrame =
//         window[browser[x] + "RequestAnimationFrame"];
//       window.cancelAnimationFrame =
//         window[browser[x] + "CancelAnimationFrame"] ||
//         window[browser[x] + "CancelRequestAnimationFrame"];
//     }
//   })();

//   function showAnimation(timestamp) {
//     if (!start) {
//       start = timestamp || new Date().getTime();
//     } //get id of animation

//     let elapsed = timestamp - start;
//     let progress = elapsed / 600; // animation duration 600ms

//     //ease in function from https://github.com/component/ease/blob/master/index.js
//     const outQuad = function(n) {
//       return n * (2 - n);
//     };

//     let easeInPercentage = +outQuad(progress).toFixed(2);

//     // if target is 0 (back to top), the position is: current pos + (current pos * percentage of duration)
//     // if target > 0 (not back to top), the positon is current pos + (target pos * percentage of duration)
//     pos =
//       target === 0
//         ? firstPos - firstPos * easeInPercentage
//         : firstPos + target * easeInPercentage;

//     window.scrollTo(0, pos);
//     console.log(pos, target, firstPos, progress);

//     if (
//       (target !== 0 && pos >= firstPos + target) ||
//       (target === 0 && pos <= 0)
//     ) {
//       cancelAnimationFrame(start);
//       if (element) {
//         element.setAttribute("tabindex", -1);
//         element.focus();
//       }
//       pos = 0;
//     } else {
//       window.requestAnimationFrame(showAnimation);
//     }
//   }
//   window.requestAnimationFrame(showAnimation);
// }

// window.addEventListener("load", function() {
//   // use slice for supporting IE 11
//   Array.prototype.slice
//     .call(document.querySelectorAll(".smooth-scroll"))
//     .forEach(item => {
//       const target = item.getAttribute("href");

//       item.addEventListener("click", e => {
//         e.preventDefault();
//         scroll(document.querySelector(target));
//       });
//     });
// });
