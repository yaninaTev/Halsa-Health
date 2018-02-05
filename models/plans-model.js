const db = require('../config/dbConfig');

const plansDB = {};

//  This matches the same view all or view singular plan under our controllers
plansDB.findAll = () => {
  return db.many('SELECT * FROM plans');
};

plansDB.findById = (id) => {
  return db.one(`
    SELECT * FROM plans
    WHERE id = $1
  `, [id]);
};

module.exports = plansDB;
