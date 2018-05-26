var express = require("express");
var router = express.Router();
const util = require('../utilities.js');

const User = require("../models/user.model");

const UserViewModel = require("../viewModels/user.viewModel");

/**
 * POST login username
 * route: /login
 * returns: status
 */
router.post("/login", async (req, res, next) => {
  let username = req.body.username;

  let user = await User.findOne({ username: username });
  if (!user) {
    user = new User({
      username: username,
      level: 0,
      resources: 500,
      lastChange: new Date()
    });
    await user.save();
  }
  console.log(user)
  user.resources = util.calculateResources(user.resources, user.lastChange, user.level);
  res.json(user);
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
