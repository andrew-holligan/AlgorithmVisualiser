import { Canvas } from "./animation/canvas.js";
import { SortAnimation } from "./animation/sort-animation.js";
import {
  generateArr,
  randomiseArr,
  mapSpeed,
  pickAlgorithm,
} from "./misc/helpers.js";

// GLOBALS
let animation;
let arr;
let swaps;
let speed;

// PAGE LOAD
window.onload = function () {
  // initialise globals and canvas
  animation = null;
  arr = generateArr(60);
  speed = mapSpeed(60, 20, 100, 500, 0);
  Canvas.drawFrame(arr);
};

// SIZE SLIDER
let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = function () {
  arr = generateArr(sliderSize.value);
  Canvas.drawFrame(arr);
};
sliderSize.onchange = function () {
  arr = generateArr(sliderSize.value);
  Canvas.drawFrame(arr);
};

// SPEED SLIDER
let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = function () {
  speed = mapSpeed(sliderSpeed.value, 20, 100, 100, 0);

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
  speed = mapSpeed(sliderSpeed.value, 20, 100, 100, 0);

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

// RANDOMISE BUTTON
let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = function () {
  if (animation) {
    animation.stop();
    animation = null;
  }

  // generate new random arr and swaps
  arr = randomiseArr(arr);

  // decide what sorting algorithm to use
  let location = window.location.pathname.split("/").pop();
  swaps = pickAlgorithm(location, arr);

  // initialise new animation
  animation = new SortAnimation(arr, swaps, speed);

  Canvas.drawFrame(arr);
};

// SORT BUTTON
let buttonSort = document.getElementById("input-button-sort");
buttonSort.onclick = function () {
  if (animation) {
    animation.start();
  }
};
