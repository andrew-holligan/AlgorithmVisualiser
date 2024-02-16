import { bubbleSortData } from "./bubble-sort-data.js";
import { insertionSortData } from "./insertion-sort-data.js";
import { mergeSortData } from "./merge-sort-data.js";

export const pageData = new Map();

pageData.set("bubble-sort.html", bubbleSortData);
pageData.set("insertion-sort.html", insertionSortData);
pageData.set("merge-sort.html", mergeSortData);
