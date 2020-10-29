jQuery(function($) {


    var screenWidth = $(window).width();

    $('body').on('click', '#jump_block *', function (e) {
        e.stopPropagation();
    });
    $('body').on('click', '.jlinkn', function () {
        window.open($(this).data('link'));
        return false;
    });

    $('body').on('click', '.jlink', function () {
        window.location.href = $(this).data('link');
        return false;
    });


    $('html').on('click', '.p-header-mob', function () {
       $('.profile-info-box').toggle(200);
    });

    $('html').on('click', '.profile-opt-item', function (e) {
        var chevron = $(this).find('.profile-opt-chevron-icon');
        if($(this).find('.profile-opt-drop')){
            e.preventDefault();
            if($(this).hasClass('profile-opt-item-active')){
                $(this).removeClass('profile-opt-item-active');
                chevron.removeClass('profile-opt-chevron-active');
            } else{
                $(this).addClass('profile-opt-item-active');
                chevron.addClass('profile-opt-chevron-active');
            }
        }
    });

    $('html').on('click', '.card-info-ru-title', function (e) {
        var chevron = $(this).find('.icon-info');
        if($(this).next().is(':visible')){
           $(this).next().hide();
            chevron.removeClass('icon-info-active');
        }else{
            $(this).next().show();
            chevron.addClass('icon-info-active');
        }
    });




    var gallery = $('#gallery');
    var galleryNav = $('.gallery-nav');

    // Колличество слайдов
    var slidesCount = gallery.children().length;
    console.log(slidesCount);
    if (gallery.length > 0) {
        console.log('no empty');
        gallery.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            adaptiveHeight: true,
            centerPadding: "100px",
            mobileFirst: true,
            variableWidth: true,
            // infinite:false,
            prevArrow: "<button type='button' class='slick-arrow prev'>Previous</button>",
            nextArrow: "<button type='button' class='slick-arrow next'>Next</button>",
            focusOnSelect: true,
            autoplaySpeed: 5000,
            //fade: true,
            // asNavFor: '.gallery-nav'
        });


        // Если слайдов меньше 9 то ставим то кол-во что имеется. если больше то ставим 9
        // navSlidesToShow = slidesCount < 9 ? slidesCount -1 : 9;
        // galleryNav.slick({
        //     slidesToShow:  navSlidesToShow, // 3,
        //     slidesToScroll: 1,
        //     asNavFor: '.gallery-for',
        //     // centerPadding: "5px",
        //     arrows: false,
        //     // infinite:false,
        //     mobileFirst: true,
        //     variableWidth: true,
        //     focusOnSelect: true,
        //     useTransform: false
        // });
        //
         gallery.show();
        // galleryNav.show();
        // $('.gallery-tags').show();
        //
        //
        // var galleryNavSlide = $('.gallery-nav .slick-slide');
        // // Если вдруг не вычислит ширину слайда навигации
        // if(!galleryNavSlide.innerWidth())  galleryNavSlide.innerWidth = 84;
        //
        // var galleryNavTrack = $('.gallery-nav .slick-list.draggable');
        // /* подгоняем ширину блока навигации ЕСДИ СЛАЙДОВ МЕНЬШЕ ЧЕМ ШИРИНА ГЛАВНОГО СЛАЙДЕРА 800px
        // под количество слайдов для непрерывного прокручивания */
        // if(navSlidesToShow <9){
        //     galleryNavTrack.css({'width': galleryNavSlide.innerWidth() * slidesCount +18});
        // }
    }

    if(screenWidth < 1024){
        var bottomStop;
        $('.card-price-row').appendTo('#card-price-mob');
         $('.card-special-row,.card-owner-row, .card-history-row').appendTo($('#card-other-mob'));

        if($('.b-jk-recommended').length){
            //console.log($('.b-jk-recommended').outerHeight());
            bottomStop = bottomStop + $('.b-jk-recommended').outerHeight();
        }
    }else{
        $('.card-price-row').prependTo('.card-right');
        $('.card-special-row,.card-owner-row, .card-history-row').appendTo($('.card-right'));
    }




});