const http = require("http");
const fs = require("fs");

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    // Serving an HTML file
    fs.readFile("home.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url == "/about") {
    // Serving plain text
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is about page");
  } else if (req.url == "/json") {
    // Serving a JSON file
    fs.readFile("data.json", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.end(data);
      }
    });
  } else if (req.url == "/image") {
    // Serving an image
    fs.readFile("javascript.png", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data, "binary");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Oops! Page not found!");
  }
});

server.listen(PORT);

console.log(`Server is listening on PORT ${PORT}`);
// P.S. The string in the above statement is a 'Template literal'. Google to know more ;)
