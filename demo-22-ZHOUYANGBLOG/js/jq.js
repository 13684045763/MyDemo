$(function () {
    var sectionTop = $('.green-section').offset().top;
    //alert(scroll);
    var ele = $('nav');
    var scTop = $('#top');

    var fs = true; //节流阀
    navScroll();
    $(window).scroll(function () {
        navScroll();
    });
    
    $('#top').click(function(){
        $('body,html').animate({
            'scrollTop':0
        })
    })


    function navScroll() {
        var WindowScroll = $(this).scrollTop();
        if (WindowScroll > sectionTop) {
            if (fs) {
                ele.stop().animate({
                    'top': '-50'
                }, 500);

                scTop.stop().animate({
                    'bottom': '20'
                }, 500);
                fs = false;
            }
        } else {
            if (!fs) {
                ele.stop().animate({
                    'top': '0'
                }, 500);

                scTop.stop().animate({
                    'bottom': '-82'
                }, 500);

                fs = true;


            }
        }
    }

});
