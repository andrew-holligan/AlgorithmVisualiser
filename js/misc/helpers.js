import { BubbleSort } from "../algorithms/bubble-sort.js";

// Description: returns an ordered array up to n
// Input: n
// Output: [1, 2, 3, ..., n-1, n]
export function generateArr(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

// Description: returns the array randomised
// Input: arr (ordered)
// Output: arr (randomised)
export function randomiseArr(arr) {
  // swap each index with a random index
  for (let i = arr.length - 1; i > 0; i--) {
    // all indices above i have been randomised
    let randomI = Math.floor(Math.random() * (i + 1));
    [arr[randomI], arr[i]] = [arr[i], arr[randomI]];
  }
  return arr;
}

// Description: returns a mapped value from one range onto another
// Input: n = value to be mapped
//        inputStart, inputEnd = start and end of given range (range which n lies on)
//        outputStart, outputEnd = start and end of range to be mapped onto
// Output: n (mapped onto output range)
// Example: n = 0
//          input range = [0, 254]
//          output range = [500, 5500]
//          returns 500
export function mapSpeed(n, inputStart, inputEnd, outputStart, outputEnd) {
  return (
    outputStart +
    ((outputEnd - outputStart) / (inputEnd - inputStart)) * (n - inputStart)
  );
}

// export function calculateNextArr(array, swaps, index) {
//   let arr = [...array];
//   let i = 0;
//   while (i < index) {
//     let swapI = swaps[i][0];
//     let swapJ = swaps[i][1];
//     [arr[swapI], arr[swapJ]] = [arr[swapJ], arr[swapI]];
//     i++;
//   }
//   return arr;
// }

// Description: returns the array after swapping the required swaps
// Input: arr = array at index point in time
//        swaps = array containing swap index pairs
//        index = point in time we need array to be swapped to
// Output: arr (swapped)
export function calculateNextArr(arr, swaps, index) {
  let swapI = swaps[index][0];
  let swapJ = swaps[index][1];
  [arr[swapI], arr[swapJ]] = [arr[swapJ], arr[swapI]];
  return arr;
}

export function pickAlgorithm(location, arr) {
  let swaps;
  switch (location) {
    case "bubble-sort.html":
      swaps = BubbleSort.sort(arr);
      break;
  }
  return swaps;
}
