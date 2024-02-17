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
export function mapValueToRange(
  n,
  inputStart,
  inputEnd,
  outputStart,
  outputEnd
) {
  return (
    outputStart +
    ((outputEnd - outputStart) / (inputEnd - inputStart)) * (n - inputStart)
  );
}

// export function delay(n) {
//   let start = (performance.now() + performance.timeOrigin) / 1000;
//   let end = (performance.now() + performance.timeOrigin) / 1000;
//   while (end - start < n) {
//     end = (performance.now() + performance.timeOrigin) / 1000;
//   }
// }

export function removeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function createChild(parent, node, text) {
  let child = document.createElement(node);
  child.innerHTML = text;
  parent.appendChild(child);
}
