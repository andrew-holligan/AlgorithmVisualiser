import { Canvas } from "./animation/canvas.js";
import { SortAnimation } from "./animation/sort-animation.js";
import {
  generateArr,
  randomiseArr,
  mapValueToRange,
  pickAlgorithm,
} from "./misc/helpers.js";
import { pageData } from "./misc/page-data.js";

// GLOBALS
let animation;
let arr;
let swaps;
let speed;

let location = window.location.pathname.split("/").pop();
let codeDisplay = document.getElementById("code-display");

// PAGE LOAD
window.onload = function () {
  // initialise globals and canvas
  animation = null;
  arr = generateArr(60);
  speed = mapValueToRange(11, 1, 20, 20, 1);
  Canvas.drawFrame(arr);
};

// SIZE SLIDER
let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = function () {
  if (animation) {
    animation.stop();
    animation = null;
  }

  let size = mapValueToRange(sliderSize.value, 1, 20, 20, 100);
  arr = generateArr(size);
  Canvas.drawFrame(arr);
};
sliderSize.onchange = function () {
  if (animation) {
    animation.stop();
    animation = null;
  }

  let size = mapValueToRange(sliderSize.value, 1, 20, 20, 100);
  arr = generateArr(size);
  Canvas.drawFrame(arr);
};

// SPEED SLIDER
let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = function () {
  speed = mapValueToRange(sliderSpeed.value, 1, 20, 20, 1);

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
  speed = mapValueToRange(sliderSpeed.value, 1, 20, 20, 1);

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

// IMPLEMENTATION DISPLAY BUTTONS
let buttonJavascript = document.getElementById("code-button-javascript");
buttonJavascript.onclick = function () {
  let code = pageData.get(location).get("javascript");
  codeDisplay.innerText = code;
};

let buttonJava = document.getElementById("code-button-java");
buttonJava.onclick = function () {
  let code = pageData.get(location).get("java");
  codeDisplay.innerText = code;
};

let buttonPython = document.getElementById("code-button-python");
buttonPython.onclick = function () {
  let code = pageData.get(location).get("python");
  codeDisplay.innerText = code;
};

let buttonCPP = document.getElementById("code-button-cpp");
buttonCPP.onclick = function () {
  let code = pageData.get(location).get("cpp");
  codeDisplay.innerText = code;
};

let buttonCSharp = document.getElementById("code-button-csharp");
buttonCSharp.onclick = function () {
  let code = pageData.get(location).get("csharp");
  codeDisplay.innerText = code;
};

let buttonC = document.getElementById("code-button-c");
buttonC.onclick = function () {
  let code = pageData.get(location).get("c");
  codeDisplay.innerText = code;
};
