import React from 'react';

//  Information is populated by the database
//  The premium is multiplied by the user's gae, from the input
const PlanCard = (props) => {
  return (
    <div className="plan">
      <h2 className="planName">{props.plan_name} {props.location}</h2>
      <p>Premium per month: {props.price_multiple * props.age}</p>
      <p>In-Network Deductable: {props.in_network_deductible}</p>
      <p>Out-Of-Network Deductable: {props.out_of_network_deductible} </p>
      <p>Maximum Out of Pocket: {props.maximum_out_of_pocket}</p>
      <p>Primary Care Co-Pay: {props.primary_care_copay}</p>
      <p>Specialist Co-Pay: {props.specialist_copay}</p>
      <p>Urgent Care Co-Pay: {props.urgent_care_copay}</p>
      <p>Generic Drugs: {props.generic_drugs} </p>
      <p>Brand Drugs: {props.brand_drugs}</p>
      <p>Concierge Acces: {props.concierge_access} </p>
      <p>Plan ID: {props.id} </p>
    </div>
  )
}

export default PlanCard;
