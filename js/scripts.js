$(document).ready(function() {
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
    $('.day').click('.day_toggle_trigger', function(){
        if ($('.day_toggle_trigger',this).text() == 'Смотреть программу')
        {
            $('.day_body', this).slideDown(600);
        $('.day_toggle_trigger',this).text('Свернуть');
    }
        else{
            $('.day_body', this).slideUp(600);
            $('.day_toggle_trigger',this).text('Смотреть программу');
        }
    }
    ,
// function(){
//         $('.day_body', this).slideUp(600);
//         $('.day_toggle_trigger').text('Смотреть программу');
//     }

);
});

/*Конец документа*/
});