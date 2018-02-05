const UsersDB = require('../models/users-model');

const usersController = {};

// Below are our different controllers for the User CRUD experience
usersController.index = (req, res, next) => {
  UsersDB.findAll()
    .then((users) => {
      res.json({
        message: 'ok',
        data:
        { users },
      });
    }).catch(next);
};

//  Find All
usersController.show = (req, res, next) => {
  UsersDB.findById(req.params.id)
    .then((user) => {
      res.json({
        message: 'ok',
        data:
        { user },
      });
    }).catch(next);
};

//  Create new user
usersController.create = (req, res, next) => {
  req.body.age = parseInt(req.body.age, 10);
  new UsersDB({
    username:
    req.body.username,
    age:
    req.body.age,
    zip_code:
    req.body.zip_code,
    plan_id:
    req.body.plan_id,
    income:
    req.body.income,
  }).create()
    .then((user) => {
      res.json({
        message: 'User added successfully!',
        data:
        { user },
      });
    }).catch(next);
};

// Update user -- which is currently out of commmission
usersController.update = (req, res, next) => {
  new UsersDB({
    username:
    req.body.username,
    age:
    req.body.age,
    zip_code:
    req.body.zip_code,
    plan_id:
    req.body.plan_id,
    income:
    req.body.income,
  }, req.user.id).then((user) => {
    res.status(202).json({
      message: 'User updated successfully!',
      data:
      { user },
    });
  }).catch(next);
};

//  Delete a user
usersController.delete = (req, res, next) => {
  UsersDB.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'User deleted successfully!',
      });
    }).catch(next);
};

module.exports = usersController;
