import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { BubbleSort } from "../../algorithm/bubble-sort.js";

console.log("importing json");
const { default: json } = await import("../../content/json/bubble-sort.json", {
  assert: { type: "json" },
});
console.log("finished importing json");
console.log(json);

const pageContent = new PageContent(json);
const bubbleSortPage = new AlgorithmPage(BubbleSort, pageContent);
