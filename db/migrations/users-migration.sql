

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  plan_id INTEGER REFERENCES plans,
  username VARCHAR(255),
  age BIGINT,
  zip_code VARCHAR(255),
  income BIGINT
);

CREATE INDEX ON users (username);
