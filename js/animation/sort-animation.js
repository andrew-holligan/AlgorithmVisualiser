import { Canvas } from "../animation/canvas.js";

export class SortAnimation {
  constructor(arrStart, moves, speed) {
    this.arr = arrStart;
    this.moves = moves;
    this.speed = speed;

    this.interval = null;
    this.count = this.moves.length;
    this.index = 0;
  }

  animate = () => {
    if (this.index >= this.count) {
      clearInterval(this.interval);
      console.log("animation stopped");
    } else {
      // get next screenshot of the array
      let i = this.moves[this.index][0];
      let value = this.moves[this.index][1];
      this.arr[i] = value;

      Canvas.drawFrame(this.arr, i);
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
