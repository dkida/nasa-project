const { getALlPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getALlPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
