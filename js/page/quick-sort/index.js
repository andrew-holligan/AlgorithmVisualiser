import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { QuickSort } from "./quick-sort.js";

// using fetch because works on mobile

await fetch("./js/page/quick-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const quickSortPage = new AlgorithmPage(QuickSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
