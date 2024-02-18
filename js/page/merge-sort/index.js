import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { MergeSort } from "./merge-sort.js";

// using fetch because works on mobile

await fetch("./js/page/merge-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const mergeSortPage = new AlgorithmPage(MergeSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
