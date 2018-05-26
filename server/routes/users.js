var express = require('express');
var router = express.Router();

const User = require('../models/user.model');

const UserViewModel = require('../viewModels/user.viewModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bla', async (req, res, next) => {
  res.send('ovo je bla ruta');
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  const user = await User.findOne({_id: id});

  if (!user) {
    return res.sendStatus(404);
  }

  res.json(UserViewModel(user));
});


router.put('/', async (req, res, next) => {
  const newUser = new User();
  newUser.name = 'moje ime';

  await newUser.save();
  
  res.json(newUser);
});

module.exports = router;
