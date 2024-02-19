import { Sort } from "../../sort.js";

export class BottomUp extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    let width = 1;
    let n = arr.length;

    while (width < n) {
      let l = 0;
      while (l < n) {
        let r = Math.min(l + (width * 2 - 1), n - 1);
        let m = Math.min(l + width - 1, n - 1);

        BottomUp.merge(moves, arr, l, m, r);
        l += width * 2;
      }
      width *= 2;
    }

    return moves;
  }

  static merge(moves, arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1 + 1);
    let R = new Array(n2 + 1);

    for (let i = l; i <= m; i++) {
      L[i - l] = arr[i];
    }
    for (let i = m + 1; i <= r; i++) {
      R[i - (m + 1)] = arr[i];
    }

    L[n1] = Infinity;
    R[n2] = Infinity;

    let i = 0;
    let j = 0;

    for (let k = l; k <= r; k++) {
      if (L[i] < R[j]) {
        moves.push([k, L[i]]);

        arr[k] = L[i];
        i++;
      } else {
        moves.push([k, R[j]]);

        arr[k] = R[j];
        j++;
      }
    }
  }
}
