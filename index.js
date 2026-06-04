const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.error(err);
      }
      res.write(data);
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        console.error(err);
      }
      res.write(data);
      res.end();
    });
  } else if (req.url == "/conatct-me") {
    fs.readFile("./contact-me.html", (err, data) => {
      if (err) {
        console.error(err);
      }
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./404.html", (err, data) => {
      if (err) {
        console.error(err);
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8080);
