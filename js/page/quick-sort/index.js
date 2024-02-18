import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { QuickSort } from "./quick-sort.js";

const { default: json } = await import("./index.json", {
  assert: { type: "json" },
});

const pageContent = new PageContent(json);
const quickSortPage = new AlgorithmPage(QuickSort, pageContent);
