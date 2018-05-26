var express = require("express");
var router = express.Router();

const User = require("../models/user.model");

const UserViewModel = require("../viewModels/user.viewModel");

/**
 * POST login username
 * route: /login
 * returns: status
 */
router.post("/login", async (req, res, next) => {
  let username = req.params.username;

  let element = await User.findOne({ username: username });
  if (element) {
    res.sendStatus(200);
  } else {
    element = new User({
      username: username,
      level: 0,
      resources: 500,
      last_change: new Date()
    });
    await element.save();
    res.sendStatus(200);
  }
});

/**
 * POST login username
 * route: /logout
 * returns: status
 */
router.post("/logout", async (req, res, next) => {});

module.exports = router;
