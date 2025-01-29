const slidesList = document.querySelector(".slides");
let slides = document.querySelectorAll(".slide");
const navButtons = document.querySelectorAll(".nav-button");
const navButtonPrev = document.querySelector(".nav-button_prev");
const titleContainer = document.querySelector(".slider__titleContainer");
const title = document.querySelector(".slider__title");
let currentSlideNumber = 0;
let currentNavButtonNumber = 1;
const lastSlideNumber = slides.length - 1;
const lastNavButtonNumber = navButtons.length - 1;

const MIN_RIGHT_POS = -25;

const getRightPosition = (slideNumber, distance) => {
  return `${MIN_RIGHT_POS - slideNumber * distance}%`;
};

const setSlidesRightPositions = () => {
  slides[currentSlideNumber].style.right = 0;

  const restCount = lastSlideNumber - currentSlideNumber;
  const distance = restCount > 2 ? 13 : 20;

  for (let i = 0; i < restCount; i++) {
    slides[i + currentSlideNumber + 1].style.right = getRightPosition(
      i,
      distance
    );
  }
};

const removeCurrentClasses = (slideNumber) => {
  setTimeout(() => {
    for (let i = slideNumber; i >= 0; i--) {
      slides[slideNumber].classList.remove("slide_current");
    }
  }, 500);
  navButtons[slideNumber + 1].classList.remove("nav-button_current");
};

const addCurrentClasses = () => {
  slides[currentSlideNumber].classList.add("slide_current");
  slides[currentSlideNumber].style.right = 0;
  navButtons[currentNavButtonNumber].classList.add("nav-button_current");
  setTitle();
};

const changeCurrentSlideNext = () => {
  if (currentSlideNumber === lastSlideNumber) return;

  const slideNumber = currentSlideNumber;
  removeCurrentClasses(slideNumber);
  currentSlideNumber += 1;
  currentNavButtonNumber += 1;
  addCurrentClasses();
  setSlidesRightPositions();
};

const changeCurrentSlidePrev = () => {
  if (currentSlideNumber === 0) return;

  const slideNumber = currentSlideNumber;
  removeCurrentClasses(slideNumber);
  currentSlideNumber -= 1;
  currentNavButtonNumber -= 1;
  addCurrentClasses();
  setSlidesRightPositions();
};

const changeCurrentSlide = (slideNumber) => {
  if (currentSlideNumber === slideNumber) return;

  const curSlideNumber = currentSlideNumber;
  removeCurrentClasses(curSlideNumber);
  currentSlideNumber = slideNumber;
  currentNavButtonNumber = slideNumber + 1;
  addCurrentClasses();
  setSlidesRightPositions();
};

const getListener = (index) => {
  if (index === 0) return changeCurrentSlidePrev;
  if (index === lastNavButtonNumber) return changeCurrentSlideNext;

  return changeCurrentSlide;
};

const setTitle = () => {
  title.style.opacity = 0.3;
  setTimeout(() => {
    title.style.opacity = 1;
    title.textContent = slides[currentSlideNumber].getAttribute("data-title");
  }, 300);
};

const setNavButtonsListeners = () => {
  navButtons.forEach((button, index) => {
    button.addEventListener("click", () => getListener(index)(index - 1));
  });
};

const setDefault = () => {
  for (let i = 0; i <= lastSlideNumber; i++) {
    if (i === 0) slides[i].classList.add("slide_current");
    slides[i].style.zIndex = i;
    slides[i].addEventListener("click", () => changeCurrentSlide(i));
  }
  setSlidesRightPositions();
  setTitle();
  setNavButtonsListeners();
};

setDefault();
