

INSERT INTO plans (plan_name, price_multiple, in_network_deductible,
out_of_network_deductible, maximum_out_of_pocket, primary_care_copay,
specialist_copay, urgent_care_copay, generic_drugs, brand_drugs,
concierge_access) VALUES
('Halsa Health Bronze Choice 3000', 10, 3000, 4500, 6000, 50, 100, 50, 50, 100, 'No'),
('Halsa Health Silver Choice 2000', 12, 2000, 3000, 4000, 40, 80, 40, 40, 80, 'No'),
('Halsa Health Gold Choice 1000', 14, 1000, 1500, 2000, 30, 60, 30, 30, 60, 'Yes'),
('Halsa Health Platinum Select Plus', 16, 0, 0, 1000, 20, 40, 20, 20, 40, 'Yes');
