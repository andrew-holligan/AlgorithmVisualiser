import { Sort } from "../sort.js";

export class QuickSort extends Sort {
  static run(array, choice) {
    if (choice === "Default") {
      return this.defaultSort(array);
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

  static quickSort(moves, arr, l, r) {
    if (l < r) {
      let pivotI = QuickSort.partition(moves, arr, l, r);
      QuickSort.quickSort(moves, arr, l, pivotI - 1);
      QuickSort.quickSort(moves, arr, pivotI + 1, r);
    }
  }

  static defaultSort(array) {
    let arr = [...array];
    let moves = [];

    QuickSort.quickSort(moves, arr, 0, arr.length - 1);

    return moves;
  }
}
