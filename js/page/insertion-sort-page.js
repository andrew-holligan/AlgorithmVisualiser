import { AlgorithmPage } from "./page.js";
import { InsertionSort } from "../algorithm/insertion-sort.js";

const insertionSortPage = new AlgorithmPage(
  InsertionSort,
  "insertion-sort.html"
);

let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = () => {
  insertionSortPage.sliderSizeEvent(sliderSize.value);
};
sliderSize.onchange = () => {
  insertionSortPage.sliderSizeEvent(sliderSize.value);
};

let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = () => {
  insertionSortPage.sliderSpeedEvent(sliderSpeed.value);
};
sliderSpeed.onchange = () => {
  insertionSortPage.sliderSpeedEvent(sliderSpeed.value);
};

let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = () => {
  insertionSortPage.buttonRandomiseEvent();
};

let buttonSort = document.getElementById("input-button-sort");
buttonSort.onclick = () => {
  insertionSortPage.buttonSortEvent();
};

let buttonsCodeDisplay = Array.from(
  document.getElementsByClassName("code-button")
);
buttonsCodeDisplay.forEach((button) => {
  button.onclick = () => {
    let languageName = button.id.split("-").pop();
    insertionSortPage.updateCodeDisplay(languageName);
  };
});
