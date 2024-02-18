import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { SelectionSort } from "./selection-sort.js";

const { default: json } = await import("./index.json", {
  assert: { type: "json" },
});

const pageContent = new PageContent(json);
const selectionSortPage = new AlgorithmPage(SelectionSort, pageContent);
