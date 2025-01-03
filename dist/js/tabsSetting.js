$(document).ready(function () {
  $('.itemTabs .cnt_1').css("visibility", "visible");

  $('.itemTabs .tab_1').click(function () {
    $('.itemTabs .cnt_1').css("visibility", "visible");
    $('.itemTabs .cnt_2, .itemTabs .cnt_3').css("visibility", "hidden");
    $('.itemTabs .tab_1').addClass('active');
    $('.itemTabs .tab_2, .itemTabs .tab_3').removeClass('active');
  });


  $('.itemTabs .tab_2').click(function () {
    $('.itemTabs .cnt_1, .itemTabs .cnt_3').css("visibility", "hidden");
    $('.itemTabs .cnt_2').css("visibility", "visible");
    $('.itemTabs .tab_2').addClass('active');
    $('.itemTabs .tab_1, .itemTabs .tab_3').removeClass('active');
  });

  $('.itemTabs .tab_3').click(function () {
    $('.itemTabs .cnt_1, .itemTabs .cnt_2').css("visibility", "hidden");
    $('.itemTabs .cnt_3').css("visibility", "visible");
    $('.itemTabs .tab_3').addClass('active');
    $('.itemTabs .tab_1, .itemTabs .tab_2').removeClass('active');
  });
});