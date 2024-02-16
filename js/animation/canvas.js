const COLOR_PRIMARY = getComputedStyle(document.body).getPropertyValue(
  "--color-1"
);
const COLOR_SECONDARY = getComputedStyle(document.body).getPropertyValue(
  "--color-2"
);

export class Canvas {
  static drawFrame(arr, colourIndex = null) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let xDimension = canvas.getAttribute("width");
    let yDimension = canvas.getAttribute("height");

    let width = xDimension / arr.length;
    let heightChunk = yDimension / arr.length;

    requestAnimationFrame(() => {
      // clear frame
      context.clearRect(0, 0, xDimension, yDimension);

      let colour;
      for (let i = 0; i < arr.length; i++) {
        // colour the swapped elements
        if (colourIndex == i) {
          colour = COLOR_SECONDARY;
        } else {
          colour = COLOR_PRIMARY;
        }

        Canvas.#drawRect(
          context,
          i * width,
          // draws downwards
          yDimension - arr[i] * heightChunk,
          width,
          arr[i] * heightChunk,
          colour
        );
      }
    });
  }

  static #drawRect(context, x, y, width, height, colour) {
    context.fillStyle = colour;

    context.beginPath();
    context.fillRect(x, y, width, height);
    context.stroke();
  }
}
