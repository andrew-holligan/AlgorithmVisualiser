import { Default } from "./variants/default.js";
import { BiDirectional } from "./variants/bi-directional.js";

export class SelectionSort {
  static run(array, choice) {
    switch (choice) {
      case "Default":
        return Default.sort(array);
      case "BiDirectional":
        return BiDirectional.sort(array);
      default:
        return Default.sort(array);
    }
  }
}
