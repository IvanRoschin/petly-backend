const signUp = require("./signUp");
const logIn = require("./logIn");
const getCurrent = require("./getCurrent");
const logOut = require("./logOut");
const updateAvatar = require("./updateAvatar");
const editInfo = require("./editInfo");
const refreshToken = require("./refreshToken");
const googleAuth = require("./googleAuth");
const deleteUser = require("./delete");
const restorePass = require("./restorePass");

module.exports = {
  signUp,
  logIn,
  getCurrent,
  logOut,
  updateAvatar,
  editInfo,
  refreshToken,
  googleAuth,
  deleteUser,
  restorePass,
};
