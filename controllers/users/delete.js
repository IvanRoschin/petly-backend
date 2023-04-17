const { User } = require("../../models/user");
const { Notice } = require("../../models");
const { Pet } = require("../../models");
const { NotFound } = require("http-errors");

const deleteUser = async (req, res) => {
  const { _id } = req.user;
  console.log("_id", _id);

  const deletedNotice = await Notice.deleteMany({
    owner: _id,
  });
  if (!deletedNotice) {
    throw new NotFound(`No user's notices!`);
  }
  const deletedPet = await Pet.deleteMany({
    owner: _id,
  });
  if (!deletedPet) {
    throw new NotFound(`No user's pets!`);
  }

  await User.findByIdAndDelete(_id);
  res.status(204).json();
};

module.exports = deleteUser;
