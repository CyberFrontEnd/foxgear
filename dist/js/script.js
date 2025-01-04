$(document).ready(function () {
  $('[data-fancybox]').fancybox({
    autoFocus: false,
  });

  $('.headerBtn').on('click', function () {
    $(this).toggleClass('active');
    $('.headerMenu').slideToggle();
    $('.headerRightMenu').toggleClass('active');
  });
});