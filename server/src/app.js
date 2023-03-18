const express = require("express");
const cors = require("cors");

const planetRouter = require("./routes/planets/planets.router");

const app = express();
// requets comes in to express and then gets checked for json content type then goes through the planetsrouter
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(planetRouter);

module.exports = app;
