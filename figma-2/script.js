// Carousel Product from this seller and Similar Products
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