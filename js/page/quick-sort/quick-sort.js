import { Default } from "./variants/default.js";

export class QuickSort {
  static run(array, choice) {
    switch (choice) {
      case "Default":
        return Default.sort(array);
      default:
        return Default.sort(array);
    }
  }
}
