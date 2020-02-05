import React, { Component } from 'react';
import './../styles/App.css';


import ACTIONS from '../redux/action'
import { connect } from 'react-redux';

import Header from './Home/Header.js';
import Login from './Login/Login.js';
import Dashboard from './Home/Dashboard.js'
import Users from './Users.js'

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
          {/* <nav>
            <ul>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
          <Route path = "/users">
              <Users/>
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
