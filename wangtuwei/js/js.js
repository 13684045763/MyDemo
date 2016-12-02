$(document).ready(function () {
    $(".shaixuan li span").click(function () {
        var $aa = $(this).next(".maincontent");
        $(".shaixuan li .maincontent").not($aa).slideUp();
        $aa.slideToggle();
        
        $(".shaixuan li span").not($(this)).removeClass("color");
        $(this).toggleClass("color");
    });
});
