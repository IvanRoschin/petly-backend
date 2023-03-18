const express = require("express");
const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(joiSchema), ctrlWrapper(ctrl.signUp));
router.post("/login", validation(joiSchema), ctrlWrapper(ctrl.logIn));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", auth, ctrlWrapper(ctrl.logOut));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
