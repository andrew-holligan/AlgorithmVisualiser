import { Canvas } from "./canvas/canvas.js";
import { generateArr, randomiseArr } from "./helpers.js";

import { BubbleSort } from "./algorithms/bubble-sort.js";

// globals
const location = window.location.pathname.split("/").pop();
const canvas = new Canvas();
const bubbleSort = new BubbleSort(canvas);

let arr;

// initial canvas
window.onload = function () {
  // draw first frame with 60 items
  arr = generateArr(60);
  canvas.drawFrame(arr);
};

// number of elemtents slider
let slider = document.getElementById("input-slider");
slider.oninput = function () {
  arr = generateArr(slider.value);
  canvas.drawFrame(arr);
};
slider.onchange = function () {
  arr = generateArr(slider.value);
  canvas.drawFrame(arr);
};

// randomise button
let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = function () {
  bubbleSort.stop();
  arr = randomiseArr(arr);
  canvas.drawFrame(arr);
};

// sort button
let buttonSort = document.getElementById("input-button-sort");
switch (location) {
  case "bubble-sort.html":
    buttonSort.onclick = function () {
      bubbleSort.setArr(arr);
      bubbleSort.setSpeed(10);
      bubbleSort.animate();
    };
    break;
}
