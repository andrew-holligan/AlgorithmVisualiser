import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { ShellSort } from "./shell-sort.js";

// using fetch because works on mobile

await fetch("./js/page/shell-sort/index.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((json) => {
    const pageContent = new PageContent(json);
    const shellSortPage = new AlgorithmPage(ShellSort, pageContent);
  })
  .catch((error) => {
    console.log(error);
  });
