$(document).ready(function () {
  $('[data-fancybox]').fancybox({
    autoFocus: false,
  });

  $('.headerBtn').on('click', function () {
    $(this).toggleClass('active');
    $('.headerMenu').slideToggle();
    $('.headerRightMenu').toggleClass('active');
  });


  const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const itemSlider = new Swiper(".itemSlider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const itemSlider2 = new Swiper(".itemSlider2", {
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });



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

$(document).ready(function () {
  const swiper = new Swiper(".pressSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(document).ready(function () {
  const swiper = new Swiper(".liveCompanySlider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination-bullets",
      type: "bullets",
      clickable: true,
    },
    on: {
      init: function () {
        updateFractionPagination(this);
      },
      slideChange: function () {
        updateFractionPagination(this);
      },
    },
  });


  function updateFractionPagination(swiper) {
    const currentSlide = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length - 2;
    const fractionContainer = document.querySelector(".swiper-pagination-fraction");
    fractionContainer.textContent = `${currentSlide} / ${totalSlides}`;
  }
});

$(document).ready(function () {
  $('#tab-container').easytabs({
    animationSpeed: 'fast',
    updateHash: false
  });

  $("#menu1").metisMenu();
  $("#menu2").metisMenu();
});


$(document).ready(function () {
  const swiper = new Swiper(".mapSliderContacts", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


$(document).ready(function () {
  const itemsLeftSlider = new Swiper(".itemsLeftSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});