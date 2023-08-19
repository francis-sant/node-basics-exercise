import { readFile, writeFile } from "fs/promises";

let template = await readFile("./template.html", "utf-8");

const replacement = {
  title: process.argv[3] || "My first Page",
  content: process.argv[4] || "Danger test",
};

for (let key in replacement) {
  template = template.replace(`{${key}}`, replacement[key]);
}

console.log(template);

await writeFile(`./static/${process.argv[2] || "default"}.html`, template);
