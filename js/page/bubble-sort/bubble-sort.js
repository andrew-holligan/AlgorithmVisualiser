import { Default } from "./variants/default.js";
import { EarlyExit } from "./variants/early-exit.js";

export class BubbleSort {
  static run(array, choice) {
    switch (choice) {
      case "Default":
        return Default.sort(array);
      case "EarlyExit":
        return EarlyExit.sort(array);
      default:
        return Default.sort(array);
    }
  }
}
