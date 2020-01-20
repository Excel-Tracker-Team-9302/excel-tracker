import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import competencies from './../../assets/images/competencies.png'
import './../../styles/Home.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dashboard from './../Dashboard.js'


import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends Component {

  componentDidMount() {
    this.props.setCurrentUser("amy@gmail.com")
    console.log("Props", this.props)
  }

  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dashboard</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello, {this.props.currentUser}
          </a>
      
        </header>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
