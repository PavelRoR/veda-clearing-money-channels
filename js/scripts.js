$(document).ready(function () {
    /* Работа формы */
    $(function () {
        var check = $('.check', this),
            email = $('.mail', this),
            message = $('.alert_message', this);
        $(".form_newsletter").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert_message', this),
                reNone = /.+/,
                reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{1,20}$/,
                email = $('.mail', this),
                button = $('.button_mail', this);
            if (!email.val().match(reNone)) {
                email.css("border", "1px solid red");
                message.text('Введите email').slideDown(500);
                return false;
            } else if (!email.val().match(reEm)) {
                email.css("border", "1px solid red");
                message.text('Email введен некорректно').slideDown(500);
                return false;
            } else if (!check.prop("checked")) {
                check.next().css("color", "red");
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            } else {
                $('.infront', this).addClass('hide');
                $(".infront_submit", this).addClass("hide");
                $(".infront_submit", this).html("Зарегистрирован Ваш e-mail: " + email.val() + "<br>Бонус уже у Вас на почте").removeClass("hide");
                button.text('Отправлено');
            }
        });
        email.click(function () {
            email.css("border", "none");
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css("color", "#fff");
            message.slideUp(500);
        });
    });
    /*Видео*/
    $(".video_wrapper img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" frameborder="0" class="video_testimonial" allowfullscreen></iframe>')
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