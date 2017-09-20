AppName.Modules.ThemeModule = (function() {
    //Dependencies
    var core = AppName.Core;

    //////////////////////
    // Private Methods //
    ////////////////////

    var matchHeight = function() {
        $.fn.equalHeights = function() {
            var max_height = 0;
            $(this).each(function() {
                max_height = Math.max($(this).height(), max_height);
            });
            $(this).each(function() {
                $(this).height(max_height);
            });
        };
        $('.match-height').equalHeights();
    }

    var owlCarouselBottom = function() {
        var owl = $('.owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 3,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsMobile: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 6000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
        $('.slider-right').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('.slider-left').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
        });
    }

    var owlCarouselHomeBanner = function() {
        var bannerMain = $('.banner-main');
        if (bannerMain.length) {
            bannerMain.owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 2,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsMobile: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000
            });
        }
        $('.banner-arrow .slider-right').click(function() {
            bannerMain.trigger('next.owl.carousel');
        })
        $('.banner-arrow .slider-left').click(function() {
            bannerMain.trigger('prev.owl.carousel', [300]);
        });

        $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
        });
    };

    var popover = function() {
        $('[data-toggle=popover]').popover();
    }

    var scroll = function() {
        $('nav').affix({
            offset: {
                top: $('.logo-container').height()
            }
        });

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var height = $(window).height();
            $('.logo-container').css({
                'opacity': ((height - scrollTop) / height)
            });
        });
    }

    var fadeEffects = function() {
        $(window).fadeThis({
            distance: 70
        });
    }

    var scrollToDiv = function() {
        $('a[href*=#]:not([href=#])').click(function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });
    }

    /////////////////////
    // Public Methods //
    ///////////////////
    var init = function() {
        owlCarouselBottom();
        popover();
        scroll();
        fadeEffects();
        scrollToDiv();
    };

    var resize = function() {
        matchHeight();
    };

    return {
        init: init,
        resize: resize
    };
})();