import { MaxHeap } from "./variants/max-heap.js";
import { MinHeap } from "./variants/min-heap.js";

export class HeapSort {
  static run(array, choice) {
    switch (choice) {
      case "MaxHeap":
        return MaxHeap.sort(array);
      case "MinHeap":
        return MinHeap.sort(array);
      default:
        return MaxHeap.sort(array);
    }
  }
}
