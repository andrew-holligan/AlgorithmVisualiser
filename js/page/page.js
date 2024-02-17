import { Canvas } from "../animation/canvas.js";
import { SortAnimation } from "../animation/sort-animation.js";
import {
  generateArr,
  randomiseArr,
  mapValueToRange,
  removeChildren,
  createChild,
} from "../misc/helpers.js";

const MIN_SLIDER_VALUE = 1;
const MAX_SLIDER_VALUE = 20;

const MIN_CANVAS_ELEMENTS = 20;
const MAX_CANVAS_ELEMENTS = 100;

export class AlgorithmPage {
  constructor(sortingAlgorithm, pageContent) {
    this.sortingAlgorithm = sortingAlgorithm;
    this.pageContent = pageContent;
    this.pageIndex = 0;

    this.animation = null;
    this.size = 60;
    this.arr = generateArr(this.size);
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

    this.init();
  }

  // INITIALISATION

  init() {
    // init page's events
    let buttonSwitchSubpageLeft = document.getElementById(
      "subpage-switcher-button-left"
    );
    buttonSwitchSubpageLeft.onclick = () => {
      if (this.pageIndex <= 0) {
        return;
      }

      this.pageIndex--;
      this.updatePageDisplay();
    };

    let buttonSwitchSubpageRight = document.getElementById(
      "subpage-switcher-button-right"
    );
    buttonSwitchSubpageRight.onclick = () => {
      if (this.pageIndex >= this.pageContent.getAmount() - 1) {
        return;
      }

      this.pageIndex++;
      this.updatePageDisplay();
    };

    let sliderSize = document.getElementById("input-slider-size");
    sliderSize.oninput = () => {
      this.sliderSizeEvent(sliderSize.value);
    };
    sliderSize.onchange = () => {
      this.sliderSizeEvent(sliderSize.value);
    };

    let sliderSpeed = document.getElementById("input-slider-speed");
    sliderSpeed.oninput = () => {
      this.sliderSpeedEvent(sliderSpeed.value);
    };
    sliderSpeed.onchange = () => {
      this.sliderSpeedEvent(sliderSpeed.value);
    };

    let buttonRandomise = document.getElementById("input-button-randomise");
    buttonRandomise.onclick = () => {
      this.buttonRandomiseEvent();
    };

    let buttonSort = document.getElementById("input-button-sort");
    buttonSort.onclick = () => {
      this.buttonSortEvent();
    };

    let buttonsCodeDisplay = Array.from(
      document.getElementsByClassName("code-button")
    );
    buttonsCodeDisplay.forEach((button) => {
      button.onclick = () => {
        let languageName = button.id.split("-").pop();
        this.updateCodeDisplay(languageName);
      };
    });

    // init page's visuals
    this.resize();
    addEventListener("resize", this.resize, false);

    this.updatePageDisplay();
  }

  // EVENTS

  sliderSizeEvent(value) {
    if (this.animation) {
      this.animation.stop();
      this.animation = null;
    }

    this.size = mapValueToRange(
      value,
      MIN_SLIDER_VALUE,
      MAX_SLIDER_VALUE,
      MIN_CANVAS_ELEMENTS,
      MAX_CANVAS_ELEMENTS
    );
    this.arr = generateArr(this.size);
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
    this.swaps = this.sortingAlgorithm.run(
      this.arr,
      this.pageContent.getName(this.pageIndex)
    );
    // initialise new animation
    this.animation = new SortAnimation(this.arr, this.swaps, this.speed);

    Canvas.drawFrame(this.arr);
  }

  buttonSortEvent() {
    if (this.animation) {
      this.animation.start();
    }
  }

  // UPDATING PAGE CONTENT

  resize = () => {
    let canvas = document.getElementById("canvas");
    canvas.width = canvas.parentElement.clientWidth - "32";
    canvas.height = canvas.width / 3;
    Canvas.drawFrame(this.arr);
  };

  updateCodeDisplay(languageName) {
    // update code display
    let codeDisplay = document.getElementById("code-display");
    // TODO
    codeDisplay.innerHTML = this.pageContent
      .getImplementation(this.pageIndex)
      .get(languageName);

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

  updatePageDisplay() {
    if (this.animation) {
      this.animation.stop();
      this.animation = null;
    }
    this.arr = generateArr(this.size);
    Canvas.drawFrame(this.arr);

    // update switcher buttons
    let buttonSwitchSubpageLeft = document.getElementById(
      "subpage-switcher-button-left"
    );
    if (this.pageIndex > 0) {
      buttonSwitchSubpageLeft.innerHTML = this.pageContent.getName(
        this.pageIndex - 1
      );
      buttonSwitchSubpageLeft.style.pointerEvents = "auto";
    } else {
      buttonSwitchSubpageLeft.innerHTML = "";
      buttonSwitchSubpageLeft.style.pointerEvents = "none";
    }

    let buttonSwitchSubpageRight = document.getElementById(
      "subpage-switcher-button-right"
    );
    if (this.pageIndex < this.pageContent.getAmount() - 1) {
      buttonSwitchSubpageRight.innerHTML = this.pageContent.getName(
        this.pageIndex + 1
      );
      buttonSwitchSubpageRight.style.pointerEvents = "auto";
    } else {
      buttonSwitchSubpageRight.innerHTML = "";
      buttonSwitchSubpageRight.style.pointerEvents = "none";
    }

    // update subpage name
    document.getElementById("subpage-name").innerHTML =
      this.pageContent.getName(this.pageIndex);

    // update subpage description
    let description = document.getElementById("info-description");
    removeChildren(description);
    createChild(description, "h3", "Description");
    for (let sentence of this.pageContent.getDescription(this.pageIndex)) {
      createChild(description, "p", sentence);
    }

    // update subpage time complexity
    let timeComplexity = document.getElementById("time-values");
    removeChildren(timeComplexity);
    for (let c of ["best-case", "worst-case", "average-case"]) {
      createChild(
        timeComplexity,
        "li",
        this.pageContent.getComplexity(this.pageIndex).get(c)
      );
    }

    // update subpage space complexity
    let spaceComplexity = document.getElementById("space-values");
    removeChildren(spaceComplexity);
    createChild(
      spaceComplexity,
      "li",
      this.pageContent.getComplexity(this.pageIndex).get("space")
    );

    // update code display
    this.updateCodeDisplay("javascript");
  }
}
