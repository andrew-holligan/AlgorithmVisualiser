import { Sort } from "./sort.js";

export class HeapSort extends Sort {
  static run(array, choice) {
    if (choice === "Default") {
      return this.defaultSort(array);
    }
  }

  static maxHeapify(moves, arr, i, n) {
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
      HeapSort.maxHeapify(moves, arr, largest, n);
    }
  }

  static buildMaxHeap(moves, arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      HeapSort.maxHeapify(moves, arr, i, arr.length);
    }
  }

  static heapSort(moves, arr) {
    HeapSort.buildMaxHeap(moves, arr);

    let s = arr.length;

    for (let i = arr.length - 1; i >= 0; i--) {
      moves.push([0, arr[i]]);
      moves.push([i, arr[0]]);

      [arr[0], arr[i]] = [arr[i], arr[0]];

      s--;
      HeapSort.maxHeapify(moves, arr, 0, s);
    }
  }

  static defaultSort(array) {
    let arr = [...array];
    let moves = [];

    HeapSort.heapSort(moves, arr);

    return moves;
  }
}
