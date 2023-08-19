// Promises
// const fs = require("node:fs/promises");
// import * as fs from "node:fs/promises";

// asynchronous
// import * as fs from "node:fs";
// import { unlink } from "node:fs";

// Callback example

// unlink("/tmp/hello", (err) => {
//   if (err) throw err;
//   console.log("successfully deleted /tmp/hello");
// });

// import { open } from "node:fs/promises";

// const file = await open("template.html");
// console.log(file);
// for await (const line of file.readLines()) {
//   console.log(line);
// }

import { readFile } from "fs/promises";

let template = await readFile("./template.html", "utf-8");

console.log(template);
