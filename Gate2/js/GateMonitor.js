$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        // 分页器
        pagination: '.swiper-pagination',
        paginationType: 'bullets',
        paginationClickable: true,
        keyboardControl: true,
        mousewheelControl: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        speed: 1000,
    });
})

$(function () {
    $('#maincontent .bgcolor').hover(function () {
        $(this).find('.choise').stop().slideDown();
    }, function () {
        $(this).find('.choise').stop().slideUp();
    });


    //插入控制显示隐藏
    for (i = 1; i < 5; i++) {
        var ele = $('.swiper-slide:eq(' + i + ') p');
        ele.each(function (index) {
            var value = $(this).attr('id');
            var text1 = $(this).text();
            var text2 = text1.substring(0, text1.indexOf('：'));
            var labelEle = $('<label>' + text2 + '<input checked="checked" value="' + value + '" type="checkbox" /></label>');
            labelEle.appendTo('#maincontent .choise div:eq(' + (i - 1) + ')').css({
                'background-color': 'darkblue',
                'box-shadow': '1px 1px 3px gray',
                'color': 'white'
            });
        });
    }

    var inputs = $('#maincontent input');


    /*inputs的check状态改变时执行的函数*/
    inputs.change(function () {
        var ID = $(this).attr('value');
        var ele = $('#maincontent').find('[id="' + ID + '"]');
        var num = $(this).parent().parent().find(':checked').length;
        if (num > 0) {
            if ($(this).is(':checked')) {
                ele.removeClass('none').addClass('block');
                /*checked true*/
                $(this).parent().css({
                    'background-color': 'darkblue',
                    'box-shadow': '1px 1px 3px gray',
                    'color': 'white'
                });
            } else {
                ele.removeClass('block').addClass('none');
                /*checked false*/
                $(this).parent().css({
                    'background-color': 'transparent',
                    'box-shadow': 'none',
                    'color': 'black'
                });
            }
        } else {
            return false;
        }
    });
});
