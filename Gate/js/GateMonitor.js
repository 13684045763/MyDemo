$(function () {

    /*绑定鼠标离开事件*/
    $('#maincontent .bgcolor').hover(function () {
        $(this).find('.choise').stop().slideDown();
    }, function () {
        $(this).find('.choise').stop().slideUp();
    });

    var n = 0;
    var ele = $('#maincontent li');
    var eleLength = ele.length;

    //定义定时器让动画函数每4秒运行一次
    var t = setInterval(Do, 5000);
    var eleli;

    /*初始化input*/
    ele.each(function (index) {
        var value = $(this).attr('id');
        var text1 = $(this).text();
        var text2 = text1.substring(0, text1.indexOf('：'));
        var labelEle = $('<label>' + text2 + '<input checked="checked" value="' + value + '" type="checkbox" /></label>');
        labelEle.appendTo('#maincontent .choise').css({
            'background-color': 'darkblue',
            'box-shadow': '1px 1px 3px gray',
            'color': 'white'
        });
    });

    var inputs = $('#maincontent input');
    var labels = $('#maincontent label');

    /*inputs的check状态改变时执行的函数*/
    inputs.change(function () {
        var ID = $(this).attr('value');
        var ele = $('#maincontent').find('[id="' + ID + '"]');
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
    });



    //动画函数
    function Do() {
        eleli = $('#maincontent').find('.block'); //将显示的li放入eleli集合中，每次执行动画函数时都会检查当前存在得li，当减少li的时候可以马上应用效果，当增加li时得等到动画循环完从0开始后才能得到应用效果

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
        } else {
            n = 0;
            Do();
        }
    }
});
