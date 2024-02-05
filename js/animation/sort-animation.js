import { calculateNextArr } from "../misc/helpers.js";

export class SortAnimation {
  constructor(canvas, arrStart, swaps, speed) {
    this.canvas = canvas;
    this.arrStart = arrStart;
    this.swaps = swaps;
    this.speed = speed;

    this.interval = null;
    this.count = this.swaps.length;
    this.index = 0;
  }

  animate = () => {
    if (this.index > this.count) {
      clearInterval(this.interval);
      console.log("animation stopped");
    } else {
      this.canvas.drawFrame(
        calculateNextArr(this.arrStart, this.swaps, this.index),
        this.swaps[this.index]
      );
      this.index++;
    }
  };

  start() {
    if (!this.interval) {
      console.log("animation started");

      this.interval = setInterval(this.animate, this.speed);
    }
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;

      console.log("animation stopped");
    }
  }

  isStopped() {
    return !this.interval;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
}
