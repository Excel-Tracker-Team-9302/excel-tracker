import React, { Component } from 'react';

import Colors from './../assets/text/Colors';
import Card from 'react-bootstrap/Card';
import CoolCard from './coolcard.js'

import logo from './../assets/images/logo.svg';
import competencies from './../assets/images/competencies.png'

import Button from 'react-bootstrap/Button'

class Dashboard extends React.Component {

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
              <br></br>
              <CoolCard />
              <br></br>
            </header>
          </div>
        );
    }
}
    
export default Dashboard;
