const { getAllPlanets } = require("../../models/planets.model");

async function httpGetAllPlanets(req, res) {
  // to make sure that our controller function makes the response only once function stops executing here
  return res.status(200).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
