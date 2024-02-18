import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { MergeSort } from "./merge-sort.js";

const { default: json } = await import("./index.json", {
  assert: { type: "json" },
});

const pageContent = new PageContent(json);
const mergeSortPage = new AlgorithmPage(MergeSort, pageContent);
