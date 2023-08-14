const { Router } = require("ezpress");
const getCharById = require("../controllers/getChartById");

const login = require("../controllers/login");

const router = new Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", pistFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
