$(document).ready(function(){
    
    $('.organization__office, .organization__warehouse').slick({
        prevArrow: '<div class="organization__prev"></div>',
        nextArrow: '<div class="organization__next"></div>'
    });

    $('.organization__item-office').on('click', function(){

        $('.organization__item-warehouse').removeClass('organization__item--active');
        $(this).addClass('organization__item--active');

        $('.organization__warehouse').removeClass('organization__warehouse--active');
        $('.organization__office').addClass('organization__office--active');

        $('.organization__warehouse-text').removeClass('organization__warehouse-text--active');

        return false;
    });
    
    $('.organization__item-warehouse').on('click', function(){

        // active class
        $('.organization__item-office').removeClass('organization__item--active');
        $(this).addClass('organization__item--active');

        // 
        $('.organization__office').removeClass('organization__office--active');
        $('.organization__warehouse').addClass('organization__warehouse--active');

        $('.organization__warehouse-text').addClass('organization__warehouse-text--active');
        return false;
    });

    $('.realized-projects__slider').slick({
        prevArrow: '<div class="realized-projects__prev"></div>',
        nextArrow: '<div class="realized-projects__next"></div>'
    });
});

