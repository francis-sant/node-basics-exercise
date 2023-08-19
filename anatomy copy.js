const http = require("http");

const server = http.createServer();
server.on("request", (request, response) => {
  //   console.log(request.headers["user-agent"]);
  //   console.log("a request was made with", request.method);

  let body = [];
  request
    .on("error", (err) => {
      // This prints the error message and stack trace to `stderr`.
      console.error(err.stack);
    })
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
      response.writeHead(200, {
        "Content-Type": "application/json",
        "X-Powered-By": "bacon",
      });

      //write to response using write()
      //   response.write("Hi Hi Hi");

      // write to response in json format or default message
      //   response.end(body || "Hello, you!");

      // parse json and write to responde in normal format
      let jsonObj = JSON.parse(body);
      for (let key in jsonObj) {
        response.write(key + ": " + jsonObj[key] + "\n");
      }
      response.end();
      //   console.log(jsonObj);
    });

  //   if (request.url.substring(0, 7) === "/secret") {
  //     response.end("Access Denied!");
  //   } else {
  //     response.end("Hello Node.js Server!");
  //   }
});

server.listen(3000, () => {
  // console.log("The HTTP server is listening at Port 3000.");
});
