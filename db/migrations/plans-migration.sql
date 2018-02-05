

DROP TABLE IF EXISTS plans;

CREATE TABLE plans (
  id SERIAL PRIMARY KEY,
  plan_name VARCHAR (255),
  price_multiple BIGINT,
  in_network_deductible BIGINT,
  out_of_network_deductible BIGINT,
  maximum_out_of_pocket BIGINT,
  primary_care_copay BIGINT,
  specialist_copay BIGINT,
  urgent_care_copay BIGINT,
  generic_drugs BIGINT,
  brand_drugs BIGINT,
  concierge_access VARCHAR(255)
);

CREATE INDEX ON plans (plan_name);
