const express = require('express');

const usersRoutes = express.Router();

const usersController = require('../controllers/users-controller');

usersRoutes.route('/')
  .get(usersController.index)
  .post(usersController.create);

usersRoutes.route('/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

module.exports = usersRoutes;
