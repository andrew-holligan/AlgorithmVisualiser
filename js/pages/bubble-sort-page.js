import { Canvas } from "../canvas/canvas.js";
import { generateArr, randomiseArr } from "../helpers.js";
import { BubbleSort } from "../algorithms/bubble-sort.js";

// globals
const location = window.location.pathname.split("/").pop();
const canvas = new Canvas();
const bubbleSort = new BubbleSort(canvas);

let arr;
let speed = 10;

// initial canvas
window.onload = function () {
  arr = generateArr(60);
  canvas.drawFrame(arr);
};

// slider
// controls number of elements in array
let slider = document.getElementById("input-slider");
slider.oninput = function () {
  arr = generateArr(slider.value);
  resetAnimation();
  canvas.drawFrame(arr);
};
slider.onchange = function () {
  arr = generateArr(slider.value);
  resetAnimation();
  canvas.drawFrame(arr);
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
