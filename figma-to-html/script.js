var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

// Sub Category  
$("#owl-carousel-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  navText: ['<div class="custom-prev1"><img src="./images/sub-cat prev.svg" alt="vector"></div>', '<div class="custom-next1"><img src="./images/sub-cat next.png" alt="vector"></div>'],
  responsive: {
    0: {
      items: 1
    },
    991: {
      items: 2
    },
    1200: {
      items: 2
    },
    1400: {
      items: 3
    }
  }
});

// Latest products
$(document).ready(function () {
  $('.ath_common_slider_outer').owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
    }
  });
});

$(document).ready(function () {
  $('.ath_carousel_se_01_carousel').owlCarousel({
    items: 3,
    nav: true,
    loop: true,

    mouseDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});





