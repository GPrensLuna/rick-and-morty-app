const http = require("http");
const getChartById = require("./controllers/getChartById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      const id = url.split("/").pop(); // Obtener el último elemento del array
      getChartById(res, id); // Pasar 'res' como primer argumento
    }
  })
  .listen(3001, "localhost");
