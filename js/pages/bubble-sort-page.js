import { Canvas } from "../canvas/canvas.js";
import { generateArr, randomiseArr, mapSpeed } from "../helpers.js";
import { BubbleSort } from "../algorithms/bubble-sort.js";

// globals
const location = window.location.pathname.split("/").pop();
const canvas = new Canvas();
const bubbleSort = new BubbleSort(canvas);

let arr;
let speed;

// initial canvas
window.onload = function () {
  arr = generateArr(60);
  canvas.drawFrame(arr);
};

// slider
// controls number of elements in array
let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = function () {
  arr = generateArr(sliderSize.value);
  resetAnimation();
  canvas.drawFrame(arr);
};
sliderSize.onchange = function () {
  arr = generateArr(sliderSize.value);
  resetAnimation();
  canvas.drawFrame(arr);
};

// slider
// controls speed of animation
let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = function () {
  speed = mapSpeed(sliderSpeed.value, 20, 100, 500, 0);
  resetAnimation();
  // canvas.drawFrame(arr);
};
sliderSpeed.onchange = function () {
  speed = mapSpeed(sliderSpeed.value, 20, 100, 500, 0);
  resetAnimation();
};

// button
// controls randomising the array
let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = function () {
  arr = randomiseArr(arr);
  resetAnimation();
  canvas.drawFrame(arr);
};

// button
// controls starting the sort animation
let buttonSort = document.getElementById("input-button-sort");
buttonSort.onclick = function () {
  resetAnimation();
  bubbleSort.animate();
};

function resetAnimation() {
  bubbleSort.stop();
  bubbleSort.setArr(arr);
  bubbleSort.setSpeed(speed);
}
