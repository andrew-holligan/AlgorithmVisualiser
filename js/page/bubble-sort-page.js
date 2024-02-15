import { AlgorithmPage } from "./page.js";
import { BubbleSort } from "../algorithm/bubble-sort.js";

const bubbleSortPage = new AlgorithmPage(BubbleSort, "bubble-sort.html");

let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = () => {
  bubbleSortPage.sliderSizeEvent(sliderSize.value);
};
sliderSize.onchange = () => {
  bubbleSortPage.sliderSizeEvent(sliderSize.value);
};

let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = () => {
  bubbleSortPage.sliderSpeedEvent(sliderSpeed.value);
};
sliderSpeed.onchange = () => {
  bubbleSortPage.sliderSpeedEvent(sliderSpeed.value);
};

let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = () => {
  bubbleSortPage.buttonRandomiseEvent();
};

let buttonSort = document.getElementById("input-button-sort");
buttonSort.onclick = () => {
  bubbleSortPage.buttonSortEvent();
};

let buttonsCodeDisplay = Array.from(
  document.getElementsByClassName("code-button")
);
buttonsCodeDisplay.forEach((button) => {
  button.onclick = () => {
    let languageName = button.id.split("-").pop();
    bubbleSortPage.updateCodeDisplay(languageName);
  };
});
