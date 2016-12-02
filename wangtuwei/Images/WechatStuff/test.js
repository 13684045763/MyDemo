$(document).ready(function () {
    $(".content label").click(function () {
        $(".content label").removeClass();
        $(this).addClass("point");
    })
})

$(function () {
    var n1 = $("#finished .chengji span:eq(0)").text();
    var n2 = $("#finished .chengji span:eq(1)").text();
    var t = setInterval(timeOut, 50);
    var t2 = setInterval(timeOut2, 1);
    var m1 = 0;
    var m2 = 0;

    function timeOut() {
        if (m1 <= n1) {
            $("#finished .chengji span:eq(0)").text(m1);
            m1++;
        }

    }

    function timeOut2() {
        if (m2 <= n2) {
            $("#finished .chengji span:eq(1)").text(m2);
            m2++;
        } else {
            good();
        }

    }

    function good() {
        $("#finished .chengji img").animate({
            "opacity": "0.3",
        })
    }
})


$(function () {
    var n = $("#finished .xuhao").length;
    //var n=1;
    $("#finished .xuhao").each(function (index) {
        if (index < n) {
            if (index < 9) {
                $(this).html("0" + (index + 1));
            } else {
                $(this).html(index + 1);
            }
        }
    })
})

$(function(){
    var top = $("#finished h3").offset().top;
    $(window).scroll(function(){
        if($(this).scrollTop()>top){
            $("#finished h3").css({
                "position":"fixed",
                "top":"0",
            });
            $("#finished ul").css({
                "margin-top":top-20,
            });
        }else{
            $("#finished h3").css({
                "position":"relative",
            });
            $("#finished ul").css({
                "margin-top":"0px"
            });
        }
    })
})
