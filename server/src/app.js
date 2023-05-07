const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const planetRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const app = express();

app.use(cors({ origin: "http://localhost:3000" })); //cors stands for the cross origin resource sharing we are making request from the localhost:3000 to localhost:8000 this is can be done by cors
app.use(morgan("combined"));
app.use(express.json()); //request comes in to express and then gets checked for json content type then goes through the planetsrouter
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetRouter);
app.use(launchesRouter);
app.use('/launches',launchesRouter)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
