var express = require("express");
var router = express.Router();

const User = require("../models/user.model");

const UserViewModel = require("../viewModels/user.viewModel");

const INITAL_COST = 400;
function upgradeCost(currentLevel) {
  let res = 1;
  let exp = currentLevel + 1;
  while (exp--) {
    res *= INITAL_COST;
  }
  return res;
}

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
router.post("/build", async (req, res, next) => {
  let username = req.body.username;

  let user = await User.findOne({ username: username });
  if (!user) {
    res.sendStatus(400);
    return;
  }
  const cost = upgradeCost(user.level);

  if (user.resources < cost) {
    res.status(403).json({
      message: "Not enough resources."
    });
    return;
  }

  user.resources -= upgradeCost(user.level);
  user.level += 1;
  user.lastChange = new Date();
  await user.save();
  res.json({
    resources: user.resources,
    level: user.level
  });
});

module.exports = router;
