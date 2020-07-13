$(document).ready(function(){

    $('.hamburger').click(function () {
        $('.main-menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main-menu .mm-close').click(function () {
            $('.main-menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main-menu.open").length) {
            $(".main-menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    $.fn.animate_Text = function() {
        var string = this.text();
        return this.each(function(){
            var $this = $(this);
            $this.html(string.replace(/./g, '<span class="new">$&</span>'));
            $this.find('span.new').each(function(i, el){
                setTimeout(function(){ $(el).addClass('div_opacity'); }, 60 * i);
            });
        });
    };
    $('.header_content__weclome').show();
    $('.header_content__weclome').animate_Text();



/*
    $('.hamburger').click(function () {
        $('.main-menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main-menu .mm-close').click(function () {
            $('.main-menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main-menu.open").length) {
            $(".main-menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    var paging = $('.paging');
    var p_first = $('span.first');
    var p_last = $('span.last');
    var slickElement = $('.main-slider');
    slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        p_first.html(i+"/");
        p_last.html(slick.slideCount);
    });
    if($('.main-slider > div').length >1){
        $(slickElement).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            fade:true,
            //autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
            //dotsClass: 'custom_paging',
        });
    }

    $('.ms-prev').click(function(){
        $(slickElement).slick('slickPrev');
    });
    $('.ms-next').click(function(){
        $(slickElement).slick('slickNext');
    });



    if($('.main-products__slider > div').length > 4) {
        $('.main-products__slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($('.main-products__slider > div').length > 1 && $(window).innerWidth() < 575){
        $('.main-products__slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }


    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
    });


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('.title-breadcrumb').css({'margin-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });

    });
    $(window).resize();



*/

});


