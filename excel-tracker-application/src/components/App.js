import React, { Component } from 'react';
import './../styles/App.css';
import Login from './Login/Login.js';
import Dashboard from './Home/Dashboard.js'
import Users from './Users.js'
import UserDetails from './UserDetails.js'

import Register from './Register.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route path = "/users">
              <Users/>
            </Route>
          <Route path = "/userdetails">
              <UserDetails/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
             <Route path="/register">
              <Register />
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
