$(document).ready(function () {
    function book() {
        $(".ani01 .books").animate({
            "opacity": "1",
        }, 500);
        $(".ani01 .books").animate({
            "top": "21%",
        }, 5000);
        $(".ani01 .books").css({
            "top": "-4%",
        });
        $(".ani01 .books").animate({
            "opacity": "0",
        }, 300, book);
    };
    book();

    function rfid() {
        $(".banzi p").text("▶ RFID卡识别操作步骤");
        $(".ani01 .card").stop().animate({
            "opacity": "1",
        }, 500);
        $(".ani01 .card").animate({
            "top": "29%",
        }, 5000);
        $(".ani01 .card").css({
            "top": "-4%",
        });
        $(".ani01 .card").animate({
            "opacity": "0",
        }, 300, IDcard);
    };

    function IDcard() {
        $(".banzi p").text("▶ 身份证识别操作步骤");
        $(".IDcardre").stop().animate({
            "opacity": "1",
        }, 500);
        $(".IDcard").animate({
            "opacity": "1",
        }, 500);
        $(".IDcard").animate({
            "top": "60%",
        }, 5000);
        $(".ani01 .IDcard").animate({
            "top": "10%",
            "opacity": "0",
        }, 0);
        $(".IDcardre").delay(5000).animate({
            "opacity": "0",
        }, 300, finger);
    }


    function finger() {
        $(".banzi p").text("▶ 指纹识别操作步骤");
        $(".fingerre").stop().animate({
            "opacity": "1",
        }, 500);
        $(".finger").animate({
            "opacity": "1",
        }, 500);
        $(".finger").animate({
            "top": "57%",
            "right": "-16%",
        }, 5000);
        $(".ani01 .finger").animate({
            "top": "67%",
            "opacity": "0",
            "right": "-36%",
        }, 0);
        $(".fingerre").delay(5000).animate({
            "opacity": "0",
        }, 300, rfid);
    }


    rfid();


})
