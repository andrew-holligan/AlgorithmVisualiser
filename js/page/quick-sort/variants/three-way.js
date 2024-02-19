import { Sort } from "../../sort.js";

export class ThreeWay extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    ThreeWay.quickSort(moves, arr, 0, arr.length - 1);

    return moves;
  }

  static quickSort(moves, arr, l, r) {
    if (l < r) {
      let pivotIndices = ThreeWay.partition(moves, arr, l, r);
      let i = pivotIndices[0];
      let j = pivotIndices[1];

      ThreeWay.quickSort(moves, arr, l, i);
      ThreeWay.quickSort(moves, arr, j, r);
    }
  }

  static partition(moves, arr, l, r) {
    let pivot = arr[r];
    let i = l - 1;
    let j = l - 1;

    for (let index = l; index <= r - 1; index++) {
      if (arr[index] <= pivot) {
        i++;
        j++;

        moves.push([i, arr[index]]);
        moves.push([index, arr[i]]);

        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }

    for (let index = l; index <= r - 1; index++) {
      if (arr[index] === pivot) {
        j++;

        moves.push([j, arr[index]]);
        moves.push([index, arr[j]]);

        [arr[j], arr[index]] = [arr[index], arr[j]];
      }
    }

    moves.push([j + 1, arr[r]]);
    moves.push([r, arr[j + 1]]);

    [arr[j + 1], arr[r]] = [arr[r], arr[j + 1]];

    j++;
    j++;

    return [i, j];
  }
}
