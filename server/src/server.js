// const express = require("express");
// const app = express();
// app.listen();

const http = require("http");
// use express app object as exported module and passs to create server

const app = require("./app");
const { loadPlanetData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
async function startServer() {
  await loadPlanetData();
  console.log("done loading");
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
}
startServer();
