import React, { Component } from 'react';

import Colors from './../assets/text/Colors';
import Card from 'react-bootstrap/Card';
import CoolCard from './coolcard.js'

import './../styles/Dashboard.css';
import logo from './../assets/images/logo.svg';
import competencies from './../assets/images/competencies.png'

import Button from 'react-bootstrap/Button'

class Dashboard extends React.Component {

    render() {
        return (
          <div className="Dashboard">
      
              <br></br>
              <CoolCard />
              <br></br>
            
          </div>
        );
    }
}
    
export default Dashboard;
