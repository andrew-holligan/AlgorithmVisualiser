export class Canvas {
  static drawFrame(arr, colourIndices = []) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let xDimension = canvas.getAttribute("width");
    let yDimension = canvas.getAttribute("height");

    let width = xDimension / arr.length;
    let heightChunk = yDimension / arr.length;

    window.requestAnimationFrame(() => {
      // clear frame
      context.clearRect(0, 0, xDimension, yDimension);

      let colour;
      for (let i = 0; i < arr.length; i++) {
        // colour the swapped elements
        if (colourIndices.includes(i)) {
          colour = "#b300ff";
        } else {
          colour = "#deacf5";
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
