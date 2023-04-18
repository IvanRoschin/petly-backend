const { Pet } = require("../../models");
const { NotFound } = require("http-errors");

const editInfo = async (req, res) => {
  const { petId } = req.params;
  const { _id } = req.user;

  const body = req.body;

  const foundPet = await Pet.findByIdAndUpdate(
    {
      owner: _id,
      _id: petId,
    },
    body,
    {
      new: true,
    }
  );
  if (!foundPet) {
    throw new NotFound(`Pet with id=${petId} not found`);
  }

  res.json(body);
};

module.exports = editInfo;
