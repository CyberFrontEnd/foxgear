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
    loop: true, // Включено зацикливание
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
    const totalSlides = swiper.slides.length / 1;
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
  $("#menu3").metisMenu();
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

$(document).ready(function () {
  // Start brand
  const $ul = $('.flexic');
  const wrapperHeight = $('.wrapper').height();


  $ul.children().clone().appendTo($ul);


  function checkScrollDirection() {
    const wrapperOffsetTop = $('.wrapper').offset().top;
    const windowHeight = $(window).height();
    const scrollPosition = $(window).scrollTop();


    if (scrollPosition > (wrapperOffsetTop + wrapperHeight - windowHeight / 2)) {
      $ul.css('animation', 'scroll-reverse 20s linear infinite');
    } else {
      $ul.css('animation', 'scroll 20s linear infinite');
    }
  }

  checkScrollDirection();
  $(window).on('scroll', checkScrollDirection);
});

$(document).ready(function () {
  $(".phone_mask").inputmask("+7 (999) 999-99-99");
});

$(document).ready(function () {
  $(document).ready(function () {
    function toggleMenu() {
      if ($(window).width() <= 770) {
        $('.headerBtn').off('click').on('click', function (event) {
          event.preventDefault();
          $(this).toggleClass('active');
          $('.mobileMenuBlock').toggleClass('active');
          $('body').toggleClass('hide');
        });
      }
    }

    toggleMenu(); // Запуск при загрузке
    $(window).resize(toggleMenu); // Запуск при изменении размера окна
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });

  $('#scrollTop').click(function () {
    $('html, body').animate({scrollTop: 0}, 50);
  });
});


$(document).ready(function () {
  // Start select custom
  $('.select-selected').on('click', function () {
    $(this).parents('.custom-select').children('.select-items').slideDown();
  });

  $(document).click(function (e) {
    var container = $(".custom-select");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".select-items").slideUp();
    }
  });

  $('.select-itemsIn__name').on('click', function () {
    let value = $(this).text();
    $(this).parents('.custom-select').children('.select-items').slideUp();
    $(this).parents('.custom-select').children('.select-selected').text(value);
  });
});