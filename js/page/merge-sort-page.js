import { AlgorithmPage } from "./page.js";
import { MergeSort } from "../algorithm/merge-sort.js";

const mergeSortPage = new AlgorithmPage(MergeSort, "merge-sort.html");

let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = () => {
  mergeSortPage.sliderSizeEvent(sliderSize.value);
};
sliderSize.onchange = () => {
  mergeSortPage.sliderSizeEvent(sliderSize.value);
};

let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = () => {
  mergeSortPage.sliderSpeedEvent(sliderSpeed.value);
};
sliderSpeed.onchange = () => {
  mergeSortPage.sliderSpeedEvent(sliderSpeed.value);
};

let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = () => {
  mergeSortPage.buttonRandomiseEvent();
};

let buttonSort = document.getElementById("input-button-sort");
buttonSort.onclick = () => {
  mergeSortPage.buttonSortEvent();
};

let buttonsCodeDisplay = Array.from(
  document.getElementsByClassName("code-button")
);
buttonsCodeDisplay.forEach((button) => {
  button.onclick = () => {
    let languageName = button.id.split("-").pop();
    mergeSortPage.updateCodeDisplay(languageName);
  };
});
