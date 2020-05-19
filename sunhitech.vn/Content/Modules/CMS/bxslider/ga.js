
    $(document).ready(function () {
        $('.slidenew1').bxSlider({
            speed: 500,
            slideWidth: 5000,
            minSlides: 10,
            maxSlides: 10,
            slideMargin: 5,
            moveSlides: 1,
            auto: true,
            pager: false,
            //ticker: true,
            //tickerHover : true,
            useCSS : true,
            randomStart: true,
            easing: 'cubic-bezier(n,n,n,n)',
        });
        $('.bx-controls-direction').hide();
    })


