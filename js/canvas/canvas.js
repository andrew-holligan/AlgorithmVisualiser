export class Canvas {
  constructor() {
    // init canvas
    this.canvas = document.getElementById("canvas");
    this.contex = canvas.getContext("2d");

    this.xDimension = canvas.getAttribute("width");
    this.yDimension = canvas.getAttribute("height");
  }

  #drawRect(x, y, width, height) {
    // testing
    // console.log(
    //   "x - " + x + "\ty - " + y + "\twidth - " + width + "\theight - " + height
    // );

    //this.contex.fillStyle = colour;

    this.contex.beginPath();
    this.contex.fillRect(x, y, width, height);
    this.contex.stroke();
  }

  drawFrame(arr) {
    let width = this.xDimension / arr.length;
    let heightChunk = this.yDimension / arr.length;
    let self = this;

    function draw() {
      // clear frame
      self.contex.clearRect(0, 0, self.xDimension, self.yDimension);

      for (let i = 0; i < arr.length; i++) {
        self.#drawRect(
          i * width,
          // draws downwards
          self.yDimension - arr[i] * heightChunk,
          width,
          arr[i] * heightChunk
        );
      }
    }

    window.requestAnimationFrame(draw);
  }
}
