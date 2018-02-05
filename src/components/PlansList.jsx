import React from 'react';
import PlanCard from './PlanCard';
import UsersPlan from'./UsersPlan';

import { Link } from 'react-router-dom'
//  Probably need to make this stateful
//  In state, collect data from plans database: age, priceMultiple, etc...

const PlansList = (props) => {
  return (
   <div className="plans-container">
     <div className="plans-list">
       {props.plansList.map((plan) => {
        return (
          <PlanCard
            age={props.age}
            location={props.location}
            key={plan.id}
            plan_name={plan.plan_name}
            price_multiple={plan.price_multiple}
            in_network_deductible={plan.in_network_deductible}
            out_of_network_deductible={plan.out_of_network_deductible}
            maximum_out_of_pocket={plan.maximum_out_of_pocket}
            primary_care_copay={plan.primary_care_copay}
            specialist_copay={plan.specialist_copay}
            urgent_care_copay={plan.urgent_care_copay}
            generic_drugs={plan.generic_drugs}
            brand_drugs={plan.brand_drugs}
            concierge_access={plan.concierge_access}
            id={plan.id}
          />
        );
      })}
    </div>
    </div>
  );
};

export default PlansList;
