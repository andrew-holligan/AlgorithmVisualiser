import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { RadixSort } from "./radix-sort.js";

// using fetch because works on mobile

await fetch("./js/page/radix-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const radixSortPage = new AlgorithmPage(RadixSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
