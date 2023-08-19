const fs = require("fs");


fs.readFile("template.html", "utf-8", (err, data) => {
  if (err) throw err;
    console.log(data);
    

const replacement = {
  title: "Hello, World!",
  content: "This is a test of the emergency exercise.",
};




  fs.writeFile("./static/default.html", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved");
  });
});
