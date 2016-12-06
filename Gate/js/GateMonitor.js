$(function () {
    /*绑定鼠标点击h2事件*/
    $('#maincontent h2').click(function () {
        $(this).next().stop().slideToggle();
    });
    /*绑定鼠标离开事件*/
    $('#maincontent .bgcolor').hover(function () {
        $(this).find('.choise').stop().slideDown();
    }, function () {
        $(this).find('.choise').stop().slideUp();
    });
    /*input控制li显示消失事件,用each事件给每个input添加表单改变change()函数*/
    var inputs = $('#maincontent input');
    inputs.each(function (index) {
        var ID = $(this).attr('value');
        $(this).change(function () {
            if ($(this).is(':checked')) {
                var ele = $('#maincontent').find('[id="' + ID + '"]');
                ele.removeClass('none').addClass('block'); //fadeIn(500);
            } else {
                $('#maincontent').find('[id="' + ID + '"]').removeClass('block').addClass('none'); //fadeOut(500);
            }
        });
    });

    var n = 0;
    var ele = $('#maincontent li');
    var eleLength = ele.length;
    var t =setInterval(Do,4000);

    Do();

    function Do() {
        var eleli = $('#maincontent').find('.block');
        //alert(eleli.length);

        if (n < eleli.length) {
            eleli.eq(n).stop().delay(1000).animate({
                'bottom': '43%'
            }, 500).delay(3000).animate({
                'bottom': '100%'
            }, 300).animate({
                'bottom': '-18%',
                'opacity': '0'
            }, 0).css('opacity', '1');
            n++;
        }else{
            n=0;
            //Do();
        }
    }
});


