$(document).ready(function(){
    $(".tiaojian label[name='zhonglei']").click(function(){
        $(".tiaojian label[name='zhonglei']").removeClass("checked");
        $(this).toggleClass("checked");
    });
});

$(document).ready(function(){
    $(".tiaojian label[name='zhuangtai']").click(function(){
        $(".tiaojian label[name='zhuangtai']").removeClass("checked");
        $(this).toggleClass("checked");
    });
});