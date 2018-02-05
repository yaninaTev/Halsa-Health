const db = require('../config/dbConfig');

//  Below are our initialized constructor state for creating a new User
class UsersDB {
  constructor(users) {
    this.id = users.id || null;
    this.username = this.__validate(users.username, 'username');
    this.age = this.__validate(users.age, 'age');
    this.zip_code = this.__validate(users.zip_code, 'zip_code');
    this.plan_id = this.__validate(users.plan_id, 'plan_id');
    this.income = this.__validate(users.income, 'income');
    this.plan_name = this.__validate(users.plan_name, 'plan_name');
    this.price_multiple = this.__validate(users.price_multiple, 'price_multiple');
    this.in_network_deductible = this.__validate(users.in_network_deductible, 'in_network_deductible');
    this.out_of_network_deductible = this.__validate(users.out_of_network_deductible, 'out_of_network_deductible');
    this.maximum_out_of_pocket = this.__validate(users.maximum_out_of_pocket, 'maximum_out_of_pocket');
    this.primary_care_copay = this.__validate(users.primary_care_copay, 'primary_care_copay');
    this.specialist_copay = this.__validate(users.specialist_copay, 'specialist_copay');
    this.urgent_care_copay = this.__validate(users.urgent_care_copay, 'urgent_care_copay');
    this.generic_drugs = this.__validate(users.generic_drugs, 'generic_drugs');
    this.brand_drugs = this.__validate(users.brand_drugs, 'brand_drugs');
    this.concierge_access = this.__validate(users.concierge_access, 'concierge_access');
  }

  //  The below regex was intended to check against faulty ages (numbers) from being entered
  __validate(property, propType) {
    if (propType === 'age') {
      const age = /^\d+$/;
      // if (!property.match(age)) throw new Error('invalid age');
    }
    if (property) return property;
  }

  __modify(changes) {
    for (let prop in changes) {
      this.__validate(changes[prop], prop);
    }
    return Object.assign(this, changes);
  }

  static findAll() {
    return db.manyOrNone(`
      SELECT DISTINCT u.id as id, u.plan_id as plan_id, u.username, u.age, u.zip_code, u.income, p.plan_name
      FROM users u
      INNER JOIN plans p ON u.plan_id=p.id
      ORDER BY u.username ASC`);
  }

  static findById(id) {
    return db.one(`
    SELECT *
    FROM users u
    INNER JOIN plans p ON u.plan_id=p.id
    WHERE u.id = $1
    `, id)
      .then(users => new UsersDB(users));
  }

  static destroy(id) {
    return db.none('DELETE FROM users WHERE id = $1', id);
  }

  create() {
    return db.one(`
      INSERT INTO users
      (plan_id, username, age, zip_code, income)
      VALUES ($/plan_id/, $/username/, $/age/, $/zip_code/, $/income/)
      RETURNING *
        `, this).then(users => this.__modify(users));
  }

  update(changes) {
    this.__modify(changes);
    return db.one(`
      UPDATE users
      SET
      plan_id = $/plan_id/,
      username = $/username/,
      age = $/age/,
      zip_code = $/zip_code/,
      income = $/income/
      WHERE id = $/id/
      RETURNING *
        `, this).then(users => this.__modify(users));
  }
}

module.exports = UsersDB;
