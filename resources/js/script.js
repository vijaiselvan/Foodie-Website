$(document).ready(function () {
    $('.js--section-features').waypoint(
        function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        {
            offset: '60px',
        }
    );

    // Scroll on buttons 
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate(
            { scrollTop: $('.js--section-plans').offset().top },
            1000
        );
    });

    $('.js--scroll-to-features').click(function () {
        $('html, body').animate(
            { scrollTop: $('.js--section-features').offset().top },
            1000
        );
    });

    // Navigation scroll
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') ==
                    this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        1000
                    );
                }
            }
        });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(
        function (direction) {
            $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        {
            offset: '50%',
        }
    );

    $('.js--wp-2').waypoint(
        function (direction) {
            $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
        {
            offset: '50%',
        }
    );

    $('.js--wp-3').waypoint(
        function (direction) {
            $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
        {
            offset: '50%',
        }
    );

    $('.js--wp-4').waypoint(
        function (direction) {
            $('.js--wp-4').addClass('animate__animated animate__pulse');
        },
        {
            offset: '50%',
        }
    );

    // Mobile Nav
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    });
});
