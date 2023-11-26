
    $(document).ready(function () {


        //------------ Offcanvas menu -------------

        $('.menu__open').click(function() {
            $('.mobile__menu__area').addClass('active');
            $('.mobile__menu').addClass('active');
        });
        $('.menu__close').click(function() {
          $('.mobile__menu__area').removeClass('active');
          $('.mobile__menu').removeClass('active');
      });


        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });


    }); //---document-ready-----

     //------------ price card slider -------------

    const swiper1 = new Swiper('.price__slider__active', {
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1500,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        draggable: true,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 640px
          992: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
    })

    $('.gallery__wrapper').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      pauseOnHover: true,
      infinite: true,
      autoplaySpeed: 1000,
      arrows: false,
      centerMode: true,
      variableWidth: true
    });