import { image_base } from "./js/image_base.js";

console.log(image_base.first_slide);

const slide = document.querySelector(".slide");
const arrow_left = document.querySelector(".arrow_png");
const arrow_right = document.querySelector(".arrow_png_right");
const timer = document.querySelector(".timer");

console.dir(slide);

function addSlide(target_slide) {
  slide.src = target_slide;
}

addSlide(image_base.first_slide);

let slide_index = 0;

const slider_array = [];
for (let key in image_base) {
  slider_array.push(key);
}

console.log(slider_array[1]);
console.log(image_base[slider_array[0]]);

arrow_left.addEventListener("click", (e) => {
  slide.classList.add("slide_back");
  slide.classList.replace("slide_back", "slide_effect");
  setTimeout(backSlide, 500);
});
arrow_right.addEventListener("click", (e) => {
  slide.classList.add("slide_back");
  slide.classList.replace("slide_back", "slide_effect");
  setTimeout(nextSlide, 500);
});

function nextSlide() {
  slide_index += 1;
  if (slide_index > 4) {
    slide_index = 0;
  }
  addSlide(image_base[slider_array[slide_index]]);
  console.log(slide_index);
  slide.classList.replace("slide_effect", "slide_back");
  console.log(slide_index);
}

function backSlide() {
  slide_index -= 1;
  console.log(slide_index);
  if (slide_index <= 0) {
    slide_index = 4;
  }
  addSlide(image_base[slider_array[slide_index]]);
  console.log(slide_index);
  slide.classList.replace("slide_effect", "slide_back");
  console.log(slide_index);
}

// timer.addEventListener("click", (e) => {
//   setInterval(nextSlideTime, 3700);
// });
let intervalTimer;

function nextSlideTime() {
  slide.classList.add("slide_back");
  slide.classList.replace("slide_back", "slide_effect");
  setTimeout(nextSlide, 700);
}
console.log(timer.click);

timer.addEventListener("click", (e) => {
  if (timer.classList.contains("onClick") === true) {
    console.log("true");
    clearInterval(intervalTimer);
    timer.classList.remove("onClick");
  } else {
    console.log("false");

    timer.classList.add("onClick");
    intervalTimer = setInterval(nextSlideTime, 3700);
  }
});
