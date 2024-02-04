export class Canvas {
  constructor() {
    // init canvas
    this.canvas = document.getElementById("canvas");
    this.contex = canvas.getContext("2d");

    this.xDimension = canvas.getAttribute("width");
    this.yDimension = canvas.getAttribute("height");
  }

  #drawRect(x, y, width, height, colour) {
    this.contex.fillStyle = colour;

    this.contex.beginPath();
    this.contex.fillRect(x, y, width, height);
    this.contex.stroke();
  }

  drawFrame(arr, colourIndices = []) {
    let width = this.xDimension / arr.length;
    let heightChunk = this.yDimension / arr.length;
    let self = this;

    function draw() {
      let colour;
      // clear frame
      self.contex.clearRect(0, 0, self.xDimension, self.yDimension);

      for (let i = 0; i < arr.length; i++) {
        // colour the swapped elements
        if (colourIndices.includes(i)) {
          colour = "#b300ff";
        } else {
          colour = "#deacf5";
        }

        self.#drawRect(
          i * width,
          // draws downwards
          self.yDimension - arr[i] * heightChunk,
          width,
          arr[i] * heightChunk,
          colour
        );
      }
    }

    window.requestAnimationFrame(draw);
  }
}
