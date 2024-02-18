import { AlgorithmPage } from "../page.js";
import { PageContent } from "../page-content.js";

import { ShellSort } from "./shell-sort.js";

const { default: json } = await import("./index.json", {
  assert: { type: "json" },
});

const pageContent = new PageContent(json);
const shellSortPage = new AlgorithmPage(ShellSort, pageContent);
