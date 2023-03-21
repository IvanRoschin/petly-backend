const getByKeyword = require("./getByKeyword");
const getByCategory = require("./getByCategory");
const foundNotice = require("./foundNotice");
const addToFavorites = require("./addToFavorites");
const getFavorite = require("./getFavorite");
const removeFromFavorites = require("./removeFromFavorites");
const add = require("./add");
const getByUser = require("./getByUser");
const removeById = require("./removeById");

module.exports = {
  getByKeyword,
  getByCategory,
  foundNotice,
  addToFavorites,
  getFavorite,
  removeFromFavorites,
  add,
  getByUser,
  removeById,
};