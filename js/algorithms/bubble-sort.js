export class BubbleSort {
  constructor(canvas, speed, arr) {
    this.arr = arr;

    // for animation
    this.canvas = canvas;
    this.speed = speed;
    this.interval;
    this.segments = [];
    this.count = 0;
    this.index = 0;
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

    function animation() {
      if (self.index >= self.count) {
        clearInterval(self.interval);
      }
      self.canvas.drawFrame(self.segments[self.index]);
      self.index++;
    }

    this.sort();
    this.interval = setInterval(animation, this.speed);
  }
}
