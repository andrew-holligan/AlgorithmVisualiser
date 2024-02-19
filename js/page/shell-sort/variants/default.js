import { Sort } from "../../sort.js";

export class Default extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    let h = 1;
    while (h < arr.length / 3) {
      h = 3 * h + 1;
    }

    while (h >= 1) {
      for (let i = h; i < arr.length; i++) {
        // let j
        for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
          moves.push([j, arr[j - h]]);
          moves.push([j - h, arr[j]]);

          [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
        }
      }
      h = Math.floor(h / 3);
    }
    return moves;
  }
}
