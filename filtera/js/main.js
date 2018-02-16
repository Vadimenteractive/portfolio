;(function($){
    $(function () {
        // $(window).on('scroll', function () {
        //     if ($(window).offset().top >= 100) {
        //         console.log('scroll');
        //     }
        // })
        $('.c-1').carousel({
            interval: 999999999
        });
        $('.c-2').carousel({
            interval: 999999999
        });
        function naviBar() {
            var $this = $('.hamburger');
            $ulWidth = $this
                .closest('#navigate')
                .children('ul')
                .width(),
                $ulMenu = $this.closest('#navigate')
                    .children('ul'),
                $firstLi = $ulMenu
                    .children('li'),
                $liLength = $firstLi.length,
                $openLiLength = $ulMenu
                    .find('[data-class="open-li"]')
                    .length,
                i = 0;

            //функция очереди анимациий открытия элементов Li
            function anim(n) {
                if (i<$liLength) {
                    setTimeout(function () {
                        $ulMenu
                            .children('li')
                            .eq(i++)
                            .attr('data-class', 'open-li');
                        anim(n);
                    }, 150);
                }
            }

//функция очереди анимациий закрытия элементов Li
            function animOut() {
                //помещаем в переменную колличество открытых элементов Li на данном этапе цикла
                $openLiLength = $ulMenu.find('[data-class="open-li"]').length;
                //если все Лишки закрыты, то скрываем блок Ul и анимируем значёк
                if ($openLiLength == 0) {
                    $this
                        .closest('#navigate')
                        .children('ul')
                        .removeClass('menu-opened')
                        .hide();
                    //иначе если не все Li закрыты, то закрываем последнюю и запускаем функцию заново
                } else {
                    setTimeout(function () {
                        $ulMenu
                            .children('li')
                            .eq(--$openLiLength)
                            .removeAttr('data-class');
                        animOut();
                    }, 150);
                }
            }
//проверка на то что нет открытых элементов Li
            if ($openLiLength == 0){

                $this
                    .closest('#navigate')
                    .children('ul')
                    .addClass('menu-opened')
                    .show();

                anim(); //запуск функции Открытия элементов Li
            }
//проверка на равное количество открытых элементов Li с общим колличеством элементов Li
            else if ($openLiLength == $liLength) {
//запуск функции закрытия элементов Li
                animOut();

            } else {i = $liLength;
                animOut();
            }
        }

        $('.hamburger').on('click', function () {
            naviBar()
        });
        $('.navi-item').on('click', function () {
            naviBar()
        })


        $('.button1').magnificPopup();
        $('.phone').on('focus', function () {
            $('#call_2').addClass('active')
        })
        $('.phone').on('blur', function () {
            $('#call_2').removeClass('active')
        })
    })
})(jQuery);
