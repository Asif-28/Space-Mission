// const express = require("express");
// const app = express();
// app.listen();

const http = require("http");
// use express app object as exported module and pass to create server
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://nasa-planets-api:gp0MeUBi7X77fXbc@nasa-api.vxgtufo.mongodb.net/?retryWrites=true&w=majority";
const server = http.createServer(app);
mongoose.connection.once("open", () => {
  console.log("connection ready to mongoDb");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});
//Mongo dB uses the bests possible connection drivers
async function startServer() {
  mongoose.connect(MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // no need to write the above mongo now has the best possible driver options
  });

  await loadPlanetData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
}
startServer();
