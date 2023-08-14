const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

const PORT = 3001;

server.use(morgan("dev"));
server.use(cors());

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
