import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { BubbleSort } from "./bubble-sort.js";

// using fetch because works on mobile

await fetch("./js/page/bubble-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const bubbleSortPage = new AlgorithmPage(BubbleSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
