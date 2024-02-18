import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { HeapSort } from "./heap-sort.js";

const { default: json } = await import("./index.json", {
  assert: { type: "json" },
});

const pageContent = new PageContent(json);
const heapSortPage = new AlgorithmPage(HeapSort, pageContent);
