import { Sort } from "../sort.js";

export class SelectionSort extends Sort {
  static run(array, choice) {
    if (choice === "Default") {
      return this.defaultSort(array);
    }
  }

  static defaultSort(array) {
    let arr = [...array];
    let moves = [];

    let minI;
    for (let i = 0; i < arr.length - 1; i++) {
      minI = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minI]) {
          minI = j;
        }
      }

      if (minI !== i) {
        moves.push([i, arr[minI]]);
        moves.push([minI, arr[i]]);

        [arr[i], arr[minI]] = [arr[minI], arr[i]];
      }
    }

    return moves;
  }
}
