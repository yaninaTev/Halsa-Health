const express = require('express');

const plansRoutes = express.Router();

const plansController = require('../controllers/plans-controller');

plansRoutes.route('/')
  .get(plansController.index);

plansRoutes.route('/:id')
  .get(plansController.show);

module.exports = plansRoutes;
