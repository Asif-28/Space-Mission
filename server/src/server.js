// const express = require("express");
// const app = express();
// app.listen();

const http = require("http");
// use express app object as exported module and passs to create server
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://nasa-planets-api:gp0MeUBi7X77fXbc@nasa-api.vxgtufo.mongodb.net/?retryWrites=true&w=majority";
const server = http.createServer(app);
mongoose.connection.on("open", () => {
  console.log("connected to mongoDb");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});
async function startServer() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await loadPlanetData();
  console.log("done loading");
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
}
startServer();
