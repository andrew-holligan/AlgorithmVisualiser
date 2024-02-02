import { Canvas } from "./canvas/canvas.js";

window.onload = function () {
  start();
};

function start() {
  const c = new Canvas();
  c.drawFrame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
