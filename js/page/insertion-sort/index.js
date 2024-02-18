import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { InsertionSort } from "./insertion-sort.js";

// using fetch because works on mobile

await fetch("./js/page/insertion-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const insertionSortPage = new AlgorithmPage(InsertionSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
