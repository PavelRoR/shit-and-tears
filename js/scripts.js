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
    /* Таймер */
    var clock;
    var futureDate = new Date("August 07, 2018 00:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        $('.clock-stop').addClass("alert-danger");
        $('.clock-stop').html("Скидка уменьшилась!");
        // $('#sale').text('1 000р.');
        // $('#today').text('9 900р.');
        // $('#link').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=1921&clean=true&lg=ru');

    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                $('.clock-stop').addClass("alert-danger");
                $('.clock-stop').html("Скидка уменьшилась!");
                //  $('#sale').text('1 000р.');
                //  $('#today').text('9 900р.');
                //  $('#link').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=1921&clean=true&lg=ru');
            }
        },
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
        loop: false,
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
    $(".video_wrapper img").click( function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>')
    });

        /*Страые браузеры*/
        var yaBrowserUpdater = new ya.browserUpdater.init({
            "lang": "ru",
            "browsers": {
                "yabrowser": "15.10",
                "chrome": "52",
                "ie": "10",
                "opera": "40",
                "safari": "8",
                "fx": "47",
                "iron": "35",
                "flock": "Infinity",
                "palemoon": "25",
                "camino": "Infinity",
                "maxthon": "4.5",
                "seamonkey": "2.3",
                "theme": "blue"
            }
        });
    /*Конец документа*/
});