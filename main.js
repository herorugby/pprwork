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
