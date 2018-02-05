import React, { Component, browserHistory } from 'react';
import axios from 'axios';
import PlansList from './PlansList';
import UsersPlan from './UsersPlan';
import { Link } from 'react-router-dom';


//  Here is the the form component where users enter demographics

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: null,
      username: null,
      age: null,
      zip_code: null,
      income: null,
      plan_id: null,
    };
    //  Binding our methods below
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getPlan = this.getPlan.bind(this);
  }

  //  At the time the form component loads, we want to have available to us our API list of plans.
  componentDidMount() {
    axios.get('/api/plans')
      .then((res) => {
        this.setState({
          plans: res.data.data.plans,
        });
        console.log('App is running!');
      }).catch(err => console.log(err));
  }

  //  Takes the input from the Form and saves it to state
  handleChange(e) {
    // e.preventDefault();
    const name = e.target.name;
    const val  = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://api.zippopotam.us/us/${this.state.zip_code}`)
      .then((res) => {
        this.setState({
          location: res.data.places[0].state,
        });
      });
    this.props.usersSubmit('POST', e, this.state, this.state.id);

  }


showPlan(){
    this.setState({
      showPlan: !this.state.showPlan
    });



   handleClick = () => {
        browserHistory.push('/UsersPlan');
    };
}

  // \\addPlan - grab ID of the selected plan where button is
  //  POST with User data to users table
  // e.target.value >

  // Our render below are compartmentalized divs to handle the different elements of the user-entry form
  render() {
    if (!this.state.plans) {
      return (<div className="Loading">Loading...</div>);
    }
    return (
      <div className="user-form">
        <form className="user-form" onSubmit={this.handleSubmit}>
          <div className="userflow1">
            <input
              type="text"
              name="username"
              placeholder="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="userflow2">
            <input
              type="number"
              name="age"
              placeholder="age"
              onChange={this.handleChange}
            />
          </div>
          <div className="userflow3">
            <input
              type="text"
              name="zip_code"
              placeholder="zip"
              onChange={this.handleChange}
            />
          </div>
          <div className="userflow4">
            <input
              type="text"
              name="income"
              placeholder="income"
              onChange={this.handleChange}
            />
          </div>
          <div className="userflow5">
            <input
              type="text"
              name="plan_id"
              placeholder="Enter plan ID here"
              onChange={this.handleChange}
            />
          </div>
          <Link to='/UsersPlan'>
           <input type="submit" className="submit" />
          </Link>
        </form>
        <div className="plans-container">
        </div>
           <PlansList
            age={this.state.age}
            location={this.state.location}
            plansList={this.state.plans}
          />
 </div>


)

}

}

export default Form;
