import { Sort } from "../sort.js";

export class InsertionSort extends Sort {
  static run(array, choice) {
    if (choice === "Default") {
      return this.defaultSort(array);
    }
  }

  static defaultSort(array) {
    let arr = [...array];
    let moves = [];

    for (let j = 1; j <= arr.length - 1; j++) {
      let key = arr[j];
      let i = j - 1;
      while (i >= 0 && arr[i] > key) {
        // store clone of assignment
        moves.push([i + 1, arr[i]]);

        arr[i + 1] = arr[i];
        i = i - 1;
      }
      // store clone of assignments
      moves.push([i + 1, key]);

      arr[i + 1] = key;
    }

    return moves;
  }
}
