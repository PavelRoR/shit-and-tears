$(document).ready(function () {
    /* Якорь */
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    /*План*/
    $(function () {
        $('.day').click('.day_toggle_trigger', function () {
            if ($('.day_toggle_trigger', this).text() == 'Смотреть программу') {
                $('.day_body', this).slideDown(600);
                $('.day_toggle_trigger', this).text('Свернуть');
            } else {
                $('.day_body', this).slideUp(600);
                $('.day_toggle_trigger', this).text('Смотреть программу');
            }
        });
    });
    /*Сертификаты*/
    $('#certificats').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["&larr;", "&rarr;"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
    /*Видео-отзывы Жанны*/
    $('#jannas_videos, #alexs_videos').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["&larr;", "&rarr;"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    /*Текстовые отзывы Жанны*/
    $('#jannas_texts, #alexs_texts').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["&larr;", "&rarr;"],
        dots: false,
        items: 1,
        autoHeight: true
    });

    /*Видео в отзывах*/
    $(".video_wrapper").click('.video_wrapper img', function () {
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>')
    });
    /*Конец документа*/
});