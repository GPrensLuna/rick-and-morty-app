const axios = require("axios");
const errorHandler = require("../utils/errors");

const URL_BASE = `https://rickandmortyapi.com/api/character`;

const getChartById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios(`${URL_BASE$}${id}`);
    const { name, species, status, origin, image, gender } = response.data;

    const character = { id, name, species, status, origin, image, gender };

    res.status(200).json(character);
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = getChartById;
