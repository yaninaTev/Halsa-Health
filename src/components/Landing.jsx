import React, { Component } from 'react';
import halsalogo from '../image/halsalogo.png';
import { Link } from 'react-router-dom'
 class Landing extends Component {

  render() {
    return (
    	<div className="landing-background">
      <div className="row">
        <div className="halsalogo2">
          <img src={halsalogo} width="" height="" />
        </div>

 <div className="sign-up">

 <p className="enroll">Open enrollment is here. Get covered.</p>
<p>Sign up to get health insurance for you.</p>
 </div>

<div className="start">
<Link to='/Form'>Get Started</Link>



</div>
</div>
</div>
    );
  }
}

export default Landing;
