console.log("Adios Mundo!");

const http = require("http");
const host = "0.0.0.0"
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Adios Mundo! owo");
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
  console.log("Servidor corriendo en " + host + "/" + port);
});