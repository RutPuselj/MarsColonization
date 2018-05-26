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
  let username = req.body.username;

  let element = await User.findOne({ username: username });
  if (!element) {
    element = new User({
      username: username,
      level: 0,
      resources: 500,
      lastChange: new Date()
    });
    await element.save();
  }
  res.json(element);
});

/**
 * POST logout
 * route: /logout
 * returns: status
 */
router.post("/logout", async (req, res, next) => {
  res.sendStatus(200);
});

module.exports = router;
