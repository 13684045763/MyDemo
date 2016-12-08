//计时器2 60s
$(document).ready(function () {
  var i = 60;
  var countdown = null;

  function timeShow() {
    i--;
    $(".countdown").html("倒计时" + i + "秒");
    if (i < 1) {
      clearInterval(countdown);
      //$(".countdown").html("倒计时结束！！");
      window.opener = null;
      window.location.href = "SelfService.aspx";
    }
  };
  countdown = setInterval(timeShow, 1000);
})
