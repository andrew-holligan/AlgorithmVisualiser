import { Canvas } from "../animation/canvas.js";
import { SortAnimation } from "../animation/sort-animation.js";
import { generateArr, randomiseArr, mapValueToRange } from "../misc/helpers.js";
import { pageData } from "../content/page-data.js";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 20;

const MIN_CANVAS_ELEMENTS = 20;
const MAX_CANVAS_ELEMENTS = 100;

export class AlgorithmPage {
  constructor(sortingAlgorithm, name) {
    this.sortingAlgorithm = sortingAlgorithm;
    this.name = name;

    this.animation = null;
    this.arr = generateArr(60);
    this.swaps = null;
    // mapping range to its flipped self since smaller is faster
    // starts at 11 (in the middle of the slider)
    this.speed = mapValueToRange(
      11,
      MIN_SLIDER_VALUE,
      MAX_SLIDER_VALUE,
      MAX_SLIDER_VALUE,
      MIN_SLIDER_VALUE
    );

    // init page's visuals
    Canvas.drawFrame(this.arr);
    this.updateCodeDisplay("javascript");
  }

  updateCodeDisplay(languageName) {
    // update code display
    let codeDisplay = document.getElementById("code-display");
    // codeDisplay.setAttribute("data-highlighted", "no");
    codeDisplay.innerHTML = pageData.get(this.name).get(languageName);

    // set our active button
    let codeButtons = Array.from(
      document.getElementsByClassName("code-button")
    );
    codeButtons.forEach((button) => {
      button.classList.remove("code-button-activated");
    });
    document
      .getElementById("code-button-" + languageName)
      .classList.add("code-button-activated");
  }

  sliderSizeEvent(value) {
    if (this.animation) {
      this.animation.stop();
      this.animation = null;
    }

    let size = mapValueToRange(
      value,
      MIN_SLIDER_VALUE,
      MAX_SLIDER_VALUE,
      MIN_CANVAS_ELEMENTS,
      MAX_CANVAS_ELEMENTS
    );
    this.arr = generateArr(size);
    Canvas.drawFrame(this.arr);
  }

  sliderSpeedEvent(value) {
    this.speed = mapValueToRange(
      value,
      MIN_SLIDER_VALUE,
      MAX_SLIDER_VALUE,
      MAX_SLIDER_VALUE,
      MIN_SLIDER_VALUE
    );

    // animation is initialised and is running
    if (this.animation && !this.animation.isStopped()) {
      this.animation.stop();
      this.animation.setSpeed(this.speed);
      this.animation.start();
    }
    // animation is initialised
    else if (this.animation) {
      this.animation.setSpeed(this.speed);
    }
  }

  buttonRandomiseEvent() {
    if (this.animation) {
      this.animation.stop();
      this.animation = null;
    }

    // generate new random arr and swaps
    this.arr = randomiseArr(this.arr);
    // decide what sorting algorithm to use
    this.swaps = this.sortingAlgorithm.sort(this.arr);
    // initialise new animation
    this.animation = new SortAnimation(this.arr, this.swaps, this.speed);

    Canvas.drawFrame(this.arr);
  }

  buttonSortEvent() {
    if (this.animation) {
      this.animation.start();
    }
  }
}
