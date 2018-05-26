var express = require("express");
var router = express.Router();

const User = require("../models/user.model");

const UserViewModel = require("../viewModels/user.viewModel");

/**
 * GET resources
 * route: /resources
 * returns: resources
 */
router.get("/resources", async (req, res, next) => {
  let mongoUser = await User.findOne({
    username: req.query.username
  });
  if (mongoUser) {
    res.json({
      resources: mongoUser.resources
    });
  } else {
    res.status(404);
  }
});

/**
 * POST login username
 * route: /logout
 * returns: status
 */
router.post("/logout", async (req, res, next) => {
  let username = req.params.username;
  if (Users.findOne({ username: username })) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
