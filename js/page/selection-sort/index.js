import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { SelectionSort } from "./selection-sort.js";

// using fetch because works on mobile

await fetch("./js/page/selection-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const selectionSortPage = new AlgorithmPage(SelectionSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
