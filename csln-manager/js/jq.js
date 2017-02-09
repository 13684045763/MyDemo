/* 左侧导航动画 */
$(function () {
  var leftbars = $('.leftnav .navitem a');
  var leftbars2 = $('.leftnav .navitem');

  /*leftbars.click(function () {
    leftbars.find('.iconlink').removeClass('active');
    $(this).find('.iconlink').addClass('active');
  });*/
  /*leftbars.click(function () {
    leftbars.removeClass('active');
    $(this).addClass('active');
  });*/

  leftbars2.hover(function () {
    //$(this).find('.subnav').css('display', 'flex');
    $(this).find('.subnav').fadeIn(300);
  }, function () {
    $(this).find('.subnav').css('display', 'none');
  });
});

/* 右上导航内容生成 */
$(function () {
  var targets = $('.navitem .active').next('.subnav');
  var targetNormal = $('.navitem .iconlink').next('.subnav');
  var elesNormalLink = targetNormal.find('.subnav-list');
  var eles = targets.find('.subnav-list');
  var title = eles.find('.subnavlink').eq(0).text();

  $('.title span').text(title);
  $('.menu .menulist').text(title);

  eles.find('.subnavlink').click(function () {
    var titleClick = $(this).text();
    //var tarHref = $(this).attr('href');
    //window.location.href = tarHref;
    $('.title span').text(titleClick);
    $('.menu .menulist').text(titleClick);
    return false;
  });
  //alert(eles.find('.subnavlink').eq(2).html());
  eles.clone(true).appendTo('.menu');


});

/* 右上导航动画 */
$(function () {
  var menuButton = $('.menu .menulist');
  var menuList = $('.menu .subnav-list');
  menuButton.click(function () {
    $(this).next('.subnav-list').stop().fadeIn(200).animate({
      top: 0
    }, 200);
  });
  menuList.mouseleave(function () {
    $(this).stop().animate({
      top: 30
    }, 200).fadeOut(200);
  });
  menuList.mouseup(function () {
    $(this).stop().fadeOut(200).animate({
      top: 30
    }, 200);
  });
});
