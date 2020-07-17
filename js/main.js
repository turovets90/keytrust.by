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


    $('.slider-group').each(function(){
        var slider=$(this).find('.documents-slider');
        $(slider).slick({
                autoplay: false,
                dots: true,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode:true,
                centerPadding: '0px',
                focusOnSelect: true,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,centerMode:false,
                            infinite: true,
                        }
                    }
                ]
            });
    });


    new WOW().init();

});


