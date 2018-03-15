;(function($){
    $(function () {
        $('.back-1').on('mouseenter', function () {
            $(this)
                .removeClass('passive')
                .addClass('active')
                .siblings()
                .removeClass('active')
                .addClass('passive');
        });
        $('.back-2').on('mouseenter', function () {
            $(this)
                .removeClass('passive')
                .addClass('active')
                .siblings()
                .removeClass('active')
                .addClass('passive');
        });
        $('#notifi_text').on('focus', function () {
            $('#notifi_submit').addClass('active');
            $('.placeholder').animate({bottom: "-100px"}, 500, 'swing');
            $(this).closest('form').addClass('show');
        });
        $('#notifi_text').on('blur', function () {
            $('#notifi_submit').removeClass('active');
            if($('#notifi_text').val().length == 0) {
                $('.placeholder').animate({bottom: "0"}, 500, 'swing');
            };
            $(this).closest('form').removeClass('show');
        });
        $("a.nav-link").on ('click', function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            $('html,body').animate({scrollTop: destination}, 700);
            return false;
        });
    });

})(jQuery);