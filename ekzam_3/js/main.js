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
                    breakpoint: 640,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        })

        $(document).ready(function() {
            $("a.nav-link").click(function () {
                var elementClick = $(this).attr("href");
                var destination = $(elementClick).offset().top;
                $('html,body').animate( { scrollTop: destination }, 700 );
                return false;
            });
        });
    })
})(jQuery);

