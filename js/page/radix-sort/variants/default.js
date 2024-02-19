import { Sort } from "../../sort.js";

export class Default extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    let max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
      Default.countingSort(moves, arr, exp);
      exp *= 10;
    }

    return moves;
  }

  static countingSort(moves, arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      let index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }

    for (let i = 0; i < n; i++) {
      moves.push([i, output[i]]);
      arr[i] = output[i];
    }
  }
}
