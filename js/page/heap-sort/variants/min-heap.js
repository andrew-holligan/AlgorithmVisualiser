import { Sort } from "../../sort.js";

export class MinHeap extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    MinHeap.heapSort(moves, arr);

    return moves;
  }

  static heapSort(moves, arr) {
    MinHeap.buildHeap(moves, arr);

    let s = arr.length;

    for (let i = arr.length - 1; i >= 0; i--) {
      moves.push([0, arr[i]]);
      moves.push([i, arr[0]]);

      [arr[0], arr[i]] = [arr[i], arr[0]];

      s--;
      MinHeap.heapify(moves, arr, 0, s);
    }
  }

  static buildHeap(moves, arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      MinHeap.heapify(moves, arr, i, arr.length);
    }
  }

  static heapify(moves, arr, i, n) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    let smallest;
    if (l < n && arr[l] < arr[i]) {
      smallest = l;
    } else {
      smallest = i;
    }

    if (r < n && arr[r] < arr[smallest]) {
      smallest = r;
    }

    if (smallest !== i) {
      moves.push([i, arr[smallest]]);
      moves.push([smallest, arr[i]]);

      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      MinHeap.heapify(moves, arr, smallest, n);
    }
  }
}
