const { Pet } = require("../../models");
const { NotFound } = require("http-errors");

const editInfo = async (req, res) => {
  const { petId } = req.params;
  const { _id } = req.user;

  const updatedPet = await Pet.findOneAndUpdate(
    { _id: petId, owner: _id },
    req.body,
    {
      new: true,
    }
  );
  if (!updatedPet) {
    throw new NotFound(`Pet with id=${petId} not found`);
  }
  res.json(updatedPet);
};

module.exports = editInfo;
