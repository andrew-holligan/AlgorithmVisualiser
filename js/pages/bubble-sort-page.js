import { Canvas } from "../canvas/canvas.js";
import { BubbleSort } from "../algorithms/bubble-sort.js";

window.onload = function () {
  init();
};

function init() {
  // init variables
  let n = 20;
  let arr = generateRandomArr(n);

  // init canvas
  const c = new Canvas();
  c.drawFrame(arr);
}

function generateRandomArr(n) {
  // arr = [1, 2, 3, ... , n]
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  // swap each index with a random index
  for (let i = n - 1; i > 0; i--) {
    // all indices above i have been randomised
    let randomI = Math.floor(Math.random() * (i + 1));
    // swap
    [arr[randomI], arr[i]] = [arr[i], arr[randomI]];
  }
  return arr;
}
