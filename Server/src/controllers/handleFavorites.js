let myFavorites = [];

function postFav(req, res) {
  myFavorites.push(red.body);
  return res.status(2001).json(myFavorites);
}

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((char) => char.id !== Number(id));

  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
