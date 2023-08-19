
import { readFile, writeFile } from "fs";


readFile("template.html", "utf-8", (err, data) => {
  if (err) throw err;
    console.log(data);
    

const replacement = {
  title: "Hello, World!",
  content: "This is a test of the emergency exercise.",
};

for (let key in replacement) {
  data = data.replace(`{${key}}`, replacement[key]);
}

console.log(data);



  writeFile("./static/defaul.html", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
});
