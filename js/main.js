//  ✅@@@@@@@@@@@@@@@@@@@@@ All Bootstrap JS here @@@@@@@@@@@@@@@@@@@@@
import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";

// IMPORT THE BOOTSTRAP BUNDLE
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover);
});

// TOOLTIP FROM BOOTSTRAPE
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//  ✅@@@@@@@@@@@@@@@@@@@@@ All Swiper slider JS here @@@@@@@@@@@@@@@@@@@@@

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 320px এর উপরে কাজ করবে... 
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // 480px এর উপরে কাজ করবে...
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // 640px এর উপরে কাজ করবে...
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 740px এর উপরে কাজ করবে...
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // 992px এর উপরে কাজ করবে...
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // 1200px এর উপরে কাজ করবে...
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ---------------------------------------------------------------------------------------
//  ✅@@@@@@@@@@@@@@@@@@@@@ All custom JS here @@@@@@@@@@@@@@@@@@@@@

//   START NAVBAR FUNCTIONALITY SECTION
const navLink = document.querySelectorAll(".nav-link");
const navbar_toggler = document.querySelector(".navbar-toggler");
const navManue = document.querySelector(".navManue");
const navbarCollapse = document.querySelector(".navbar-collapse");

// START MENU BAR TOGGLER
navbar_toggler.addEventListener("click", () => {
  handlBarToggler();
});
// END MENU BAR TOGGLER

// SHADOW TOGGLE ONSCROLL

// SHADOW TOGGLE ONSCROLL

// COMMON FUNCTION START FOR CLICK TWICE PALCE
function handlBarToggler() {
  for (const iterator of navbar_toggler.children) {
    iterator.classList.toggle("d-none");
  }
}
// COMMON FUNCTION END FOR CLICK TWICE PALCE

// START MENU BUTTON COLLAPS AFTER CLICK NAVLINK
navLink.forEach((vlu) => handleNavMenuToggler(vlu));
function handleNavMenuToggler(params) {
  params.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
    handlBarToggler();
  });
}
// END MENU BUTTON COLLAPS AFTER CLICK NAVLINK

// Begin CARD BTN COLLAPSE
const cardBtnEye = document.querySelectorAll(".cardBtnEye");
const fa_eye_slash = document.querySelector(".fa-eye-slash");
const fa_eye = document.querySelector(".fa-eye");

cardBtnEye.forEach(vlu => vlu.addEventListener("click", () => {
  fa_eye_slash.classList.toggle("d-none");
  fa_eye.classList.toggle("d-none");
}));

// END CARD BTN COLLAPSE
