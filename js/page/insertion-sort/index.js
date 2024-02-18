import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { InsertionSort } from "./insertion-sort.js";

const { default: json } = await import("./index.json", {
  assert: { type: "json" },
});

const pageContent = new PageContent(json);
const insertionSortPage = new AlgorithmPage(InsertionSort, pageContent);
