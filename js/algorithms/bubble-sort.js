export class BubbleSort {
  constructor(canvas) {
    this.arr;

    // for animation
    this.canvas = canvas;
    this.speed;
    this.interval;
    this.segments = [];
    this.count = 0;
  }

  sort() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];

          // for animation
          this.segments.push(this.arr.map((elt) => elt));
          this.count++;
        }
      }
    }
  }

  animate() {
    let self = this;
    let index = 0;
    this.count = 0;

    function animation() {
      if (index >= self.count - 1) {
        clearInterval(self.interval);
        console.log("animation stopped");
      } else {
        self.canvas.drawFrame(self.segments[index]);
        index++;
      }
    }

    // reset segments array
    this.segments.length = 0;

    this.sort();
    console.log("animation started");
    this.interval = setInterval(animation, this.speed);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      console.log("animation stopped");
      this.interval = null;
    }
  }

  setArr(arr) {
    this.arr = arr;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
}
