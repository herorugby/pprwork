// jqueryなど

// drawer.js
$(document).ready(function () {
    $('.drawer').drawer();
});

// swiper.js
let swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

// pc-nav-scrol
let scrollNav = $('.pc-scroll-nav');
let target = $('.target');
$(function () {
    scrollNav.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            scrollNav.fadeIn(500);
        } else {
            scrollNav.fadeOut(500);
        }
    });
});

// more description
$(document).ready(function () {
    $('.more').show();
    $('.close').hide();

    $('.more').on('click', function () {
        $(this).hide();
        $('.close').show();
        $('.more-description').slideToggle(500);
    });

    $('.close').on('click', function () {
        $(this).hide();
        $('.more').show();
        $('.more-description').slideToggle(500);
    });
});

// inview.js
$(document).ready(function () {
    $('.fade').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('animate__animated animate__fadeIn');
            $(this).css('animation-delay', '1s');
        } else {
            $(this).css('opacity', 0);
        }
    });
});
