import { Canvas } from "../canvas/canvas.js";
import { BubbleSort } from "../algorithms/bubble-sort.js";
import { generateArr, randomiseArr } from "../helpers.js";

// globals
const c = new Canvas();
let arr;

// number of elts slider
let slider = document.getElementById("input-slider");
slider.oninput = function () {
  drawOrderedElts(slider.value);
};
slider.onchange = function () {
  drawOrderedElts(slider.value);
};

// randomise button
let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = function () {
  drawRandomisedElts(arr);
};

// initial canvas
window.onload = function () {
  // draw first frame with 10 items
  drawOrderedElts(60);
};

function drawOrderedElts(n) {
  arr = generateArr(n);
  c.drawFrame(arr);
}

function drawRandomisedElts(arr) {
  arr = randomiseArr(arr);
  c.drawFrame(arr);
}
