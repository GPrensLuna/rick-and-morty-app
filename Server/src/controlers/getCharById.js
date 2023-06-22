const axios = require("axios");

const getChartById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { name, status, species, gender, origin, image } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          name,
          status,
          species,
          gender,
          origin,
          image,
        })
      );
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err.message);
    });
};

module.exports = getChartById;
