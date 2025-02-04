$(document).ready(function () {
  const swiper = new Swiper(".historySlider", {
    direction: "horizontal",
    slidesPerView: 2,
    speed: 650,
    spaceBetween: 65,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const points = document.querySelectorAll(".timeline-item");
  const timeline = document.querySelectorAll(".timeline");
  const timelineWidth = timeline[0].clientWidth;
  const slidesCount = swiper.slides.length;
  const firstHiddenX = 35;
  const firstX = 0;
  const mainX = 120;
  const secondaryX = 950;
  const firstFutureX = 1250;
  const lastX = `100%`;

  const getPosition = (x) => {
    return `${x}px`;
  };

  const setPointsPosition = () => {
    let hiddenPointsCounter = 0;

    points[0].style.left = 0;
    points[slidesCount].style.right = 0;

    for (let i = 1; i <= slidesCount - 1; i++) {
      if (i < swiper.activeIndex + 1) {
        hiddenPointsCounter += 1;
        points[i].style.left = getPosition(firstHiddenX + i * 14);
        points[i].classList.add("timeline-item_hidden");
      } else {
        if (i === swiper.activeIndex + 1)
          points[i].style.left = getPosition(mainX);
        if (i === swiper.activeIndex + 2)
          points[i].style.left = getPosition(secondaryX);
        if (i > swiper.activeIndex + 2) {
          points[i].style.left = getPosition(
            timelineWidth - (slidesCount - 1 - i) * 60
          );
        }
        points[i].classList.remove("timeline-item_hidden");
      }
    }
  };

  swiper.on("slideChange", function () {
    console.log("slide changed", swiper.activeIndex);
    setPointsPosition();
  });

  setPointsPosition();
});