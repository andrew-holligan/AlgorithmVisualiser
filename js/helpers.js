export function generateArr(n) {
  // arr = [1, 2, 3, ... , n]
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

export function randomiseArr(arr) {
  // swap each index with a random index
  for (let i = arr.length - 1; i > 0; i--) {
    // all indices above i have been randomised
    let randomI = Math.floor(Math.random() * (i + 1));
    // swap
    [arr[randomI], arr[i]] = [arr[i], arr[randomI]];
  }
  return arr;
}

// a godly piece of stack overflow
// this maps a range to another range
// example:
// input range = [0, 254], output range = [500, 5500]
// input = 0, output = 500
export function mapSpeed(
  input,
  input_start,
  input_end,
  output_start,
  output_end
) {
  return (
    output_start +
    ((output_end - output_start) / (input_end - input_start)) *
      (input - input_start)
  );
}
