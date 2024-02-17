import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { MergeSort } from "../../algorithm/merge-sort.js";
import json from "../../content/json/merge-sort.json" assert { type: "json" };

const pageContent = new PageContent(json);
const mergeSortPage = new AlgorithmPage(MergeSort, pageContent);
