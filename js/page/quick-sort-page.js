import { AlgorithmPage } from "./page.js";
import { QuickSort } from "../algorithm/quick-sort.js";

const quickSortPage = new AlgorithmPage(QuickSort, "quick-sort.html");

let sliderSize = document.getElementById("input-slider-size");
sliderSize.oninput = () => {
  quickSortPage.sliderSizeEvent(sliderSize.value);
};
sliderSize.onchange = () => {
  quickSortPage.sliderSizeEvent(sliderSize.value);
};

let sliderSpeed = document.getElementById("input-slider-speed");
sliderSpeed.oninput = () => {
  quickSortPage.sliderSpeedEvent(sliderSpeed.value);
};
sliderSpeed.onchange = () => {
  quickSortPage.sliderSpeedEvent(sliderSpeed.value);
};

let buttonRandomise = document.getElementById("input-button-randomise");
buttonRandomise.onclick = () => {
  quickSortPage.buttonRandomiseEvent();
};

let buttonSort = document.getElementById("input-button-sort");
buttonSort.onclick = () => {
  quickSortPage.buttonSortEvent();
};

let buttonsCodeDisplay = Array.from(
  document.getElementsByClassName("code-button")
);
buttonsCodeDisplay.forEach((button) => {
  button.onclick = () => {
    let languageName = button.id.split("-").pop();
    quickSortPage.updateCodeDisplay(languageName);
  };
});
