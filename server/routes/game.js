var express = require("express");
var router = express.Router();
const util = require("../utilities.js");

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
      resources: util.calculateResources(
        mongoUser.resources,
        mongoUser.lastChange,
        mongoUser.level
      )
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
router.post("/build", async (req, res, next) => {
  let username = req.body.username;

  let user = await User.findOne({ username: username });
  if (!user) {
    res.sendStatus(400);
    return;
  }
  const cost = util.upgradeCost(user.level);
  console.log(cost);

  if (user.resources < cost) {
    res.status(403).json({
      message: "Not enough resources."
    });
    return;
  }

  if (user.level > 2) {
    res.status(403).json({
      message: "You have already reached the maximum level."
    });
    return;
  }

  user.resources -= util.upgradeCost(user.level);
  user.level += 1;
  user.lastChange = new Date();
  await user.save();
  res.json({
    resources: util.calculateResources(
      user.resources,
      user.lastChange,
      user.level
    ),
    level: user.level
  });
});

module.exports = router;
