export class BubbleSort {
  constructor(arr) {
    this.arr = arr;
  }

  sort() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
        }
      }
    }
    return this.arr;
  }
}
