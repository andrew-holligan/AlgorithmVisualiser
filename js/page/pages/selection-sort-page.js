import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { SelectionSort } from "../../algorithm/selection-sort.js";

const { default: json } = await import(
  "../../content/json/selection-sort.json",
  {
    assert: { type: "json" },
  }
);

const pageContent = new PageContent(json);
const selectionSortPage = new AlgorithmPage(SelectionSort, pageContent);
