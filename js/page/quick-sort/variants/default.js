import { Sort } from "../../sort.js";

export class Default extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    Default.quickSort(moves, arr, 0, arr.length - 1);

    return moves;
  }

  static quickSort(moves, arr, l, r) {
    if (l < r) {
      let pivotI = Default.partition(moves, arr, l, r);
      Default.quickSort(moves, arr, l, pivotI - 1);
      Default.quickSort(moves, arr, pivotI + 1, r);
    }
  }

  static partition(moves, arr, l, r) {
    let pivot = arr[r];
    let i = l - 1;

    for (let j = l; j <= r - 1; j++) {
      if (arr[j] <= pivot) {
        i++;

        moves.push([i, arr[j]]);
        moves.push([j, arr[i]]);

        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    moves.push([i + 1, arr[r]]);
    moves.push([r, arr[i + 1]]);

    [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];

    return i + 1;
  }
}
