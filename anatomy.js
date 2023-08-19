const http = require("http");
const fs = require("fs");


const server = http.createServer();
server.on("request", (request, response) => {
  //   console.log("a request was made with", request.method);

  let body = [];
  request
    .on("error", (err) => {
     
      // console.error(err.stack);
    })
    .on("data", (chunk) => {
      body.push(chunk); 
    })
    .on("end", () => {

      //here i have to parse the data received from chunk
      body = Buffer.concat(body).toString();

const replacement = JSON.parse(body);
      fs.readFile("template.html", { encoding: "utf-8" }, (err, data) => { 
        
        if (!err) {
          for (let key in replacement) {
            data = data.replace(`{${key}}`, replacement[key]);
            console.log(data);
          } 
        }else {
            console.log(err); 
          }
  response.end(data);
      } 
      );
    });

  
});

server.listen(3000, () => {
  // console.log("The HTTP server is listening at Port 3000.");
});
