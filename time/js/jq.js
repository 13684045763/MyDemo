$(function () {
    var recive = prompt("请输入定时器的最大时间，单位秒（请输入纯数字）："); //定时器的最大时间
    var maxtime = parseInt(recive);
    var n = parseInt(maxtime); //转换为int格式
    var circle = prompt("请输入周期次数（请输入纯数字）：");
    var m = parseInt(circle, 10);
    var t; //创建对象，用来被定时器赋值
    var ani = $('#wrapper .ani');
    var audioEle = document.getElementById('audio'); //创建wav播放对象[0]是jq必带参数，不然后面无法运行
    var time = $('#wrapper h2');

    time.text(n); //页面显示定义的最大时间
    /*插入周期次数小圆点*/
    for (i = 0; i < m; i++) {
        $('<div class="yuan"></div>').appendTo('#wrapper .count');
    }
    /*重置按钮按下时执行*/
    $('#wrapper #reset').click(function () {
        n = maxtime;
        time.text(n);
        clearInterval(t);
        ani.removeClass('rotateani');
        time.removeClass('bigsmall');
        stopPlay();
    });
    /*开始按钮按下时执行*/
    $('#wrapper #start').click(function () {
        startTime();
    });

    /*重载页面重新输入*/
    $('#wrapper #reinput').click(function () {
        window.location.reload(); //重新刷新页面
    });

    /*重置小圆点*/
    $('#wrapper #resetcircle').click(function () {
        $('#wrapper .count .yuan').removeClass('addbg');
    });

    /*空格键事件*/
    $(document).keydown(function (e) {
        //var e = window.event;
        if (e.keyCode == 32) {
            startTime();
            return false; //阻止本身的事件，空格点击按钮
        }
    });

    /*触发事件开始函数*/
    function startTime() {
        if (n > 0) {
            clearInterval(t); //先清除计时器，再倒计时，防止多次点击产生多个计时器
            t = setInterval(daojishi, 1000);
            ani.addClass('rotateani');
            time.addClass('bigsmall');
        } else {
            return false;
        }
    }

    /*daojishi函数*/
    function daojishi() {
        n--;
        if (n < 0) {
            /*倒计时完成结束*/
            ani.removeClass('rotateani');
            time.removeClass('bigsmall');
            audioEle.play();
            var t2 = setTimeout(stopPlay, 8000);
            clearInterval(t);
            n = maxtime;

            /*时间倒流*/
            var i = 0;
            var t3 = setInterval(function () {
                if (++i <= n) {
                    time.text(i);
                } else {
                    clearInterval(t3);
                }
            }, 50);

            /*计时结束给周期次数增加样式:小圆点*/
            $('.count .yuan').each(function (index) {
                if ($(this).attr('class').indexOf('addbg') < 0) {
                    $(this).addClass('addbg');
                    if (index + 1 < $('.count .yuan').length) {
                        return false;
                    } else {
                        var t3 = setTimeout(function () {
                            $('.count .yuan').removeClass('addbg');
                        }, 2000);

                    }

                }
            });

        } else {
            time.text(n);
        }
    }
    /*停止播放并回到0秒函数*/
    function stopPlay() {
        audioEle.pause();
        audioEle.currentTime = 0;
    }

})
