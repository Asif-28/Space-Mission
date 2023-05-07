// we require express because we want to use the express router
const express = require("express");
const planetRouter = express.Router();
// import getAllPlanets function from the planets controllers section
const { httpGetAllPlanets } = require("./planets.controllers");
//controllers takes actions and request from the user and then updates the model
planetRouter.get("/planets", httpGetAllPlanets);

module.exports = planetRouter;
