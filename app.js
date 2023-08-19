const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  //   console.log(req)

  let jsonObj = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
  };
  console.log("a request was made", req.method);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(jsonObj));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
