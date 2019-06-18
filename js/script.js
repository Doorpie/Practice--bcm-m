$(document).ready(function(){
    
    // New arrow section organization
    $('.organization__office, .organization__warehouse').slick({
        prevArrow: '<div class="organization__prev"></div>',
        nextArrow: '<div class="organization__next"></div>'
    });

    // Work with tabs section organization

    $('.organization__item-office').on('click', function(){
 
        $('.organization__item-warehouse').removeClass('organization__item--active');
        $(this).addClass('organization__item--active');

        $('.organization__warehouse').removeClass('organization__warehouse--active');
        $('.organization__office').addClass('organization__office--active');

        $('.organization__warehouse-text').removeClass('organization__warehouse-text--active');

        return false;
    });

    // Work with tabs section organization

    $('.organization__item-warehouse').on('click', function(){
 
        $('.organization__item-office').removeClass('organization__item--active');
        $(this).addClass('organization__item--active');


        $('.organization__office').removeClass('organization__office--active');
        $('.organization__warehouse').addClass('organization__warehouse--active');

        $('.organization__warehouse-text').addClass('organization__warehouse-text--active');

        return false;
    });

    // New arrow section realized-projects

    $('.realized-projects__slider').slick({
        prevArrow: '<div class="realized-projects__prev"></div>',
        nextArrow: '<div class="realized-projects__next"></div>'
    });

    // section header__phone show
    $(window).scroll(function() {

        if ($(document).scrollTop() >= 150) {
            $('.header__phone').addClass('header__phone--active');
        }

        else{
            $('.header__phone').removeClass('header__phone--active');
        }
    });	

    // open list city

    $('.top-location__link').on('click', function(){
        if ($('.top-location__list').hasClass('top-location__list--show')){
            $('.top-location__list').removeClass('top-location__list--show');
        }
        else {
            $('.top-location__list').addClass('top-location__list--show');
        }
        
        return false;
    });

    // hide list city

    $(document).on('click', function(){
        if ($('.top-location__list').hasClass('top-location__list--show')){
            $('.top-location__list').removeClass('top-location__list--show');
        }
    });

    // fixed position scroll manager

    $(window).scroll(function() {
        let scrollManager = $('.aside__manager').offset().top;
		if ($(this).scrollTop() > scrollManager) {
            $(".aside__manager").css('opacity', 0);
            $(".aside__manager--hide").show();
        }
        else{            
            $(".aside__manager--hide").hide();
            $(".aside__manager").css('opacity', 1);		
		}	

		if($(window).scrollTop()+$(window).height()>=$(document).height() - $(window).height() - $('.footer').innerHeight()){
			$(".aside__manager--hide").hide();
		}		
    });

    // popup

   $(".map__button").click(function() {
 
        // let HeightDocument = $(document).height();
        // let WidthDocument = $(document).width();
        // let HeightScreen = $(window).height(); 
          
        // $(".popup").css({"width":WidthDocument,"height":HeightDocument});

        $(".popup").fadeIn(700); // Плавное наложение на страницу фона
        // $(".popup").css({"overflow":"hidden"}); // Наложение запрета на прокрутку страницы
        $('.popup').on('mousewheel touchmove', function(e) {
            e.preventDefault();
      });

        return false;
    }); 

        $(".popup__button").click(function () { 
            setTimeout('$(".popup").fadeOut(700);', 600); // Задержка закрытия фона
        $(".popup").fadeOut(500); 
        // $("body").css({"overflow":"auto"}); // Возвращение подвижности страницы
        });
});

