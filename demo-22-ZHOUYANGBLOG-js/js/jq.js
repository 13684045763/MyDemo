$(function () {
    var sidebar = $('#sidebar'), //选择侧栏
        mask = $('.mask'), //选择遮罩层
        backButton = $('.back-to-top'), //选择返回顶部按钮
        sidebar_trigger = $('#sidebar_trigger'); //选择侧栏触发器

    sidebar_trigger.click(showSideBar); //监听
    mask.click(hideSideBar);
    backButton.click(backToTop);

    /*监听滚动事件*/
    $(window).scroll(function () {
        /*页面滚动的高度和窗口的高度作比较*/
        if ($(window).scrollTop() > $(window).height()) {
            backButton.fadeIn('slow');
        } else {
            backButton.hide();
        }
    });
    $(window).trigger('scroll'); //加载触发回到顶部事件

    /*返回顶部函数*/
    function backToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    }


/*侧栏出现函数*/
    function showSideBar() {
        mask.fadeIn(500);
        sidebar.css({
            'transform': 'translateX(0)'
        });
    }
/*侧栏隐藏函数*/
    function hideSideBar() {
        mask.fadeOut(500);
        sidebar.css({
            'transform': 'translateX(' + sidebar.width() + 'px)'
        });
    }
});
