import { Default } from "./variants/default.js";
import { BottomUp } from "./variants/bottom-up.js";

export class MergeSort {
  static run(array, choice) {
    switch (choice) {
      case "Default":
        return Default.sort(array);
      case "BottomUp":
        return BottomUp.sort(array);
      default:
        return Default.sort(array);
    }
  }
}
