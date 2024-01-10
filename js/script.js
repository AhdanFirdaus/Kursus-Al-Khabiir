const scriptURL =
  "https://script.google.com/macros/s/AKfycbz6N4-X4mdYHnYvSY_LceGouxP7x2yur7_CMDc7LmaktacelHZr8on06R1A3Fp9fcd5/exec";
const form = document.forms["kursus-al-khabiir"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("btn-none");
  btnKirim.classList.toggle("btn-none");
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      btnLoading.classList.toggle("btn-none");
      btnKirim.classList.toggle("btn-none");
      // tampilkan alert
      alert.classList.toggle("alert-none");
      // reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  // slidesPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  gragCursor: "true",
  // loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    520: {
      slidesPerView: 2,
    },

    950: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});


AOS.init({
  once: true,
});
