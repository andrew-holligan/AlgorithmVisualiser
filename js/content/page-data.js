import { bubbleSortData } from "./bubble-sort-data.js";
import { insertionSortData } from "./insertion-sort-data.js";
import { mergeSortData } from "./merge-sort-data.js";
import { quickSortData } from "./quick-sort-data.js";
import { selectionSortData } from "./selection-sort-data.js";
import { shellSortData } from "./shell-sort-data.js";
import { heapSortData } from "./heap-sort-data.js";

export const pageData = new Map();

pageData.set("bubble-sort.html", bubbleSortData);
pageData.set("insertion-sort.html", insertionSortData);
pageData.set("merge-sort.html", mergeSortData);
pageData.set("quick-sort.html", quickSortData);
pageData.set("selection-sort.html", selectionSortData);
pageData.set("shell-sort.html", shellSortData);
pageData.set("heap-sort.html", heapSortData);
