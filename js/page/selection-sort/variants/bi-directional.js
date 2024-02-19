import { Sort } from "../../sort.js";

export class BiDirectional extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
      let min = arr[i];
      let max = arr[i];
      let minI = i;
      let maxI = i;

      for (let k = i; k <= j; k++) {
        if (arr[k] < min) {
          min = arr[k];
          minI = k;
        }
        if (arr[k] > max) {
          max = arr[k];
          maxI = k;
        }
      }

      moves.push([i, arr[minI]]);
      moves.push([minI, arr[i]]);
      [arr[i], arr[minI]] = [arr[minI], arr[i]];

      if (arr[minI] === max) {
        moves.push([j, arr[minI]]);
        moves.push([minI, arr[j]]);
        [arr[minI], arr[j]] = [arr[j], arr[minI]];
      } else {
        moves.push([j, arr[maxI]]);
        moves.push([maxI, arr[j]]);
        [arr[j], arr[maxI]] = [arr[maxI], arr[j]];
      }

      i++;
      j--;
    }

    return moves;
  }
}
