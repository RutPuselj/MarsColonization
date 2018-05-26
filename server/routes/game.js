var express = require("express");
var router = express.Router();

const User = require("../models/user.model");

const UserViewModel = require("../viewModels/user.viewModel");

/**
 * POST login username
 * route: /resources
 * returns: status
 */
router.get("/resources", async (req, res, next) => {});

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
