export class Canvas {
  constructor() {
    // init canvas
    this.canvas = document.getElementById("canvas");
    this.contex = canvas.getContext("2d");

    // properties
    this.contex.fillStyle = "#cc313d";

    this.xDimension = canvas.getAttribute("width");
    this.yDimension = canvas.getAttribute("height");
  }

  #drawRect(x, y, width, height) {
    // testing
    console.log(
      "x - " + x + "\ty - " + y + "\twidth - " + width + "\theight - " + height
    );

    this.contex.beginPath();
    this.contex.fillRect(x, y, width, height);
    this.contex.stroke();
  }

  drawFrame(arr) {
    // clear frame
    this.contex.clearRect(0, 0, this.xDimension, this.yDimension);

    let width = this.xDimension / arr.length;
    let heightChunk = this.yDimension / arr.length;

    for (let i = 0; i < arr.length; i++) {
      this.#drawRect(
        i * width,
        // draws downwards
        this.yDimension - arr[i] * heightChunk,
        width,
        arr[i] * heightChunk
      );
    }
  }
}
