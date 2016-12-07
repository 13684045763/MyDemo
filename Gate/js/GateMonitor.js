$(function () {

    /*绑定鼠标离开事件*/
    $('#maincontent .bgcolor').hover(function () {
        $(this).find('.choise').stop().slideDown();
    }, function () {
        $(this).find('.choise').stop().slideUp();
    });
    /*input控制li显示消失事件,用each事件给每个input添加表单改变change()函数*/
    var inputs = $('#maincontent input');
    var labels = $('#maincontent label');
    /*给label checked true添加样式*/
    labels.css({
        'background-color': 'darkblue',
        'box-shadow': '1px 1px 3px gray',
        'color': 'white'
    });

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

    var n = 0;
    var ele = $('#maincontent li');
    var eleLength = ele.length;

    //定义定时器让动画函数每4秒运行一次
    var t = setInterval(Do, 5000);
    var eleli;

    //动画函数
    function Do() {
        eleli = $('#maincontent').find('.block'); //将显示的li放入eleli集合中

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
