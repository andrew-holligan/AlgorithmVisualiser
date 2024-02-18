import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { BubbleSort } from "./bubble-sort.js";

const { default: json } = await import("./index.json", {
  assert: { type: "json" },
});

const pageContent = new PageContent(json);
const bubbleSortPage = new AlgorithmPage(BubbleSort, pageContent);
