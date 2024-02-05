import { Canvas } from "../animation/canvas.js";
import { SortAnimation } from "../animation/sort-animation.js";
import { generateArr, randomiseArr, mapSpeed } from "../misc/helpers.js";
import { BubbleSort } from "../algorithms/bubble-sort.js";

// globals
const canvas = new Canvas();
let animation;
let arr;
let swaps;
let speed;

// initial canvas
window.onload = function () {
  animation = null;
  arr = generateArr(60);
  speed = mapSpeed(60, 20, 100, 500, 0);
  canvas.drawFrame(arr);
};

// slider
// controls number of elements in array
let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = function () {
  arr = generateArr(sliderSize.value);
  canvas.drawFrame(arr);
};
sliderSize.onchange = function () {
  arr = generateArr(sliderSize.value);
  canvas.drawFrame(arr);
};

// slider
// controls speed of animation
let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = function () {
  speed = mapSpeed(sliderSpeed.value, 20, 100, 500, 0);

  // animation is initialised and is running
  if (animation && !animation.isStopped()) {
    animation.stop();
    animation.setSpeed(speed);
    animation.start();
  }
  // animation is initialised
  else if (animation) {
    animation.setSpeed(speed);
  }
};
sliderSpeed.onchange = function () {
  speed = mapSpeed(sliderSpeed.value, 20, 100, 500, 0);

  // animation is initialised and is running
  if (animation && !animation.isStopped()) {
    animation.stop();
    animation.setSpeed(speed);
    animation.start();
  }
  // animation is initialised
  else if (animation) {
    animation.setSpeed(speed);
  }
};

// button
// controls randomising the array
let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = function () {
  //garbage collection
  if (animation) {
    animation.stop();
    animation = null;
  }

  // generate new random arr and swaps
  arr = randomiseArr(arr);
  swaps = BubbleSort.sort(arr);

  // initialise new animation
  animation = new SortAnimation(canvas, arr, swaps, speed);

  console.log(arr);
  canvas.drawFrame(arr);
};

// button
// controls starting the sort animation
let buttonSort = document.getElementById("input-button-sort");
buttonSort.onclick = function () {
  if (animation) {
    animation.start();
  }
};
