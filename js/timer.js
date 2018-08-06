$(document).ready(function () {
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
    /*Конец документа*/
});