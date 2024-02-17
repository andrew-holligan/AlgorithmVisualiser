import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { BubbleSort } from "../../algorithm/bubble-sort.js";
import json from "../../content/json/bubble-sort.json" assert { type: "json" };

const pageContent = new PageContent(json);
const bubbleSortPage = new AlgorithmPage(BubbleSort, pageContent);
