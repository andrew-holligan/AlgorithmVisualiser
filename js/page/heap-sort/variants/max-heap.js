import { Sort } from "../../sort.js";

export class MaxHeap extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    MaxHeap.heapSort(moves, arr);

    return moves;
  }

  static heapSort(moves, arr) {
    MaxHeap.buildHeap(moves, arr);

    let s = arr.length;

    for (let i = arr.length - 1; i >= 0; i--) {
      moves.push([0, arr[i]]);
      moves.push([i, arr[0]]);

      [arr[0], arr[i]] = [arr[i], arr[0]];

      s--;
      MaxHeap.heapify(moves, arr, 0, s);
    }
  }

  static buildHeap(moves, arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      MaxHeap.heapify(moves, arr, i, arr.length);
    }
  }

  static heapify(moves, arr, i, n) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    let largest;
    if (l < n && arr[l] > arr[i]) {
      largest = l;
    } else {
      largest = i;
    }

    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest !== i) {
      moves.push([i, arr[largest]]);
      moves.push([largest, arr[i]]);

      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      MaxHeap.heapify(moves, arr, largest, n);
    }
  }
}
