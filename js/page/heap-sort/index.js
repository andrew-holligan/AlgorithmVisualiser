import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { HeapSort } from "./heap-sort.js";

// using fetch because works on mobile

await fetch("./js/page/heap-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const heapSortPage = new AlgorithmPage(HeapSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
