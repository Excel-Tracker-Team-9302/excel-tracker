import React, { Component } from 'react';
import './../styles/App.css';
import Login from './Login/Login.js';
import Dashboard from './Home/Dashboard.js'
import Users from './UserView/Users.js'
import UserDetails from './UserView/UserDetails.js'
import TrackingLocations from './TrackingLocations/TrackingLocations.js'
import TrackingLocationDetails from './TrackingLocations/TrackingLocationDetails.js'
import Competencies from './Competencies/Competencies.js'
import Evaluations from './Evaluation/Evaluations.js'


import Register from './Register/Register.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ResetPassword from './Login/ResetPassword';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/trackinglocations">
              <TrackingLocations />
            </Route>
            <Route path="/trackinglocationdetails">
              <TrackingLocationDetails />
            </Route>
            <Route path="/competencies">
              <Competencies />
            </Route>
            <Route path="/userdetails">
              <UserDetails />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/evaluations">
              <Evaluations />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/resetpassword">
              <ResetPassword />
            </Route>
            <Route path="/">
              <Login />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
