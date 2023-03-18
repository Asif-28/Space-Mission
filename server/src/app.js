const express = require("express");

const planetRouter = require("./routes/planets/planets.router");

const app = express();
// requets comes in to express and then gets checked for json content type then goes through the planetsrouter

app.use(express.json());
app.use(planetRouter);

module.exports = app;
