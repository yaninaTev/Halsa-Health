import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import PlansList from './components/PlansList';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import UsersPlan from './components/UsersPlan';
import PlanCard from './components/PlanCard';
import UsersList from './components/UsersList';
import Landing from './components/Landing';

//  We decided to split our apiUserData and apiPlanData to better separate our concerns for the constructor states; reducing the risk of getting a singular apiLoaded boolean for two calls.
class App extends Component {
  constructor() {
    super();
    this.state = {
      plans: null,
      users: null,
      apiUserDataLoaded: false,
      apiPlanDataLoaded: false,
      shouldShowUserForm: false,
      isHidden: true,
    };
    //  Here we are binding our methods -- per standard!
    this.usersSubmit = this.usersSubmit.bind(this);
    this.showUserForm = this.showUserForm.bind(this);
    this.getAllPlans = this.getAllPlans.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }


  componentDidMount() {
    this.getAllPlans();
    this.getAllUsers();
  }

  //  This is the individual API route for our plans API
  getAllPlans() {
    axios.get('/api/plans')
      .then((res) => {
        this.setState({
          plans: res.data.data.plans,
          apiPlanDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  //  This is the individual API route for our users API
  getAllUsers() {
    axios.get('/api/users')
      .then((res) => {
        this.setState({
          users: res.data.data.users,
          apiUserDataLoaded: true,
          shouldShowUserForm: false,
          currentlyEditing: null,
        });
      }).catch(err => console.log(err));
  }

  //  This was not yet used, but would be in the future User Edit functionality
  setEditing(id) {
    this.setState({
      currentlyEditing: id,
    });
  }

  //  We only introduced a Delete functionality for Users in this iteration
  deleteUser(id) {
    axios.delete(`/api/users/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      this.getAllUsers();
    });
    console.log('Hey you deleted me!');
  }

  //  Likewise for Users -- our plans were already created, and we were only creating Users on the fly
  usersSubmit(method, event, data, id) {
    event.preventDefault();
    axios(`/api/users/${id || ''}`, {
      method:
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }).then((res) => {
      this.getAllUsers();
    });
    console.log('This is the usersSubmit console.log');
  }

  showUserForm() {
    this.setState(prevState => ({
      isClicked: true,
    }));
  }

  render() {
    console.log(this.state.users, 'users');
    if (!this.state.plans) {
      return (<p className="Loading">Loading...</p>);
    }
    return (
      <div className="App">
        <main>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              path="/Form"
              render={props =>
                <Form {...props} usersSubmit={this.usersSubmit} />}
            />
            <Route
              path="/UsersPlan"
              render={props =>
                <UsersPlan {...props} plans={this.state.plans} users={this.state.users} />}
            />
            <Route
              path="/UsersList"
              render={props =>
                <UsersList {...props} setEditing={this.state.setEditing} deleteUser={this.deleteUser} usersList={this.state.users} />}
            />
          </Switch>
          {/* {!this.state.users
            ? (<div>loading..</div>)
            : (<UsersList deleteUser={this.deleteUser} usersList={this.state.users} />)
          } */}
        </main>
      </div>
    );
  }
}

export default App;
