import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { InsertionSort } from "../../algorithm/insertion-sort.js";

const { default: json } = await import(
  "../../content/json/insertion-sort.json",
  {
    assert: { type: "json" },
  }
);

const pageContent = new PageContent(json);
const insertionSortPage = new AlgorithmPage(InsertionSort, pageContent);
