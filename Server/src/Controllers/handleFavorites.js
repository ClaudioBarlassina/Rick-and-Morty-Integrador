let myfavorites = [];

const postFav = (req, res) => {
  const respuesta = req.body;
  myfavorites.push(respuesta);
  return res.json(myfavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const deleteChar = myfavorites.filter(char => {
    return char.id !== Number(id);
  });
  myfavorites = deleteChar;
  res.json(myfavorites);
};

module.export = {
  postFav,
  deleteFav,
};
