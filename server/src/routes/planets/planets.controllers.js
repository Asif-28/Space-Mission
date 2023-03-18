const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  // to make sure that our controller function makes the response only once functio stops executing here
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
