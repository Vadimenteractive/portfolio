;(function($){
    $(function () {
        $('.isotope_1').isotope({
            layoutMode: 'packery',
            itemSelector: '.rectangle'
        });
        $('.carousel').carousel({
            interval: 5000
        });
        $('.slide-contein').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            infinity: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive:[
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 728,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })


    })
})(jQuery);

