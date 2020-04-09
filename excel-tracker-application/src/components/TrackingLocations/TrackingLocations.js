import React, { Component } from 'react';

import CoolCard from '../Home/coolcard.js';
import {
  withRouter
} from 'react-router-dom'

import Header from '../Home/Header.js';
import dummyData from '../../services/DummyData';
import TLList from './TLList.js';
import { InputLabel, Input } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InviteUserButton from '../Common/InviteUserButton.js';
import UserServices from '../../services/UserServices';
import CreateTrackingLocation from './CreateTrackingLocation'


import '../../styles/Users.css';
import {Container, Row, Col } from 'react-bootstrap'

class TrackingLocations extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        selected: "All",
        trackingLocation: ""
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChangeTL = this.handleChangeTL.bind(this);
  }

  handleLogout() {
    this.props.history.push('/');
  }
  handleChange(value) {
    this.setState({selected: value });
  }

  handleChangeTL(value) {
    this.setState({trackingLocation: value})
    console.log(this.state.trackingLocation)
  };
  render() {
      return (
        
        <div>
          <Header handleLogout={() => this.handleLogout} pageName="Tracking Locations"/>
          <div className="Users">
        
          
        {/* <Container fixed style = {{ alignItems: 'center', display: 'grid', 'grid-template-columns': '250px 250px 250px', 'justify-content':'center', 'grid-gap': '80px'}}> */}

        <div className="flex-grid">
        <div className="col">
        <Input
          type = "text"
          placeholder="Search"
          onChange={ event => this.handleChangeTL(event.target.value) } 
          />
        </div>

        <div className ="col">
            <CreateTrackingLocation />
          </div>

        </div>
        {/* </Container> */}


          <div className='tc'>
              
          <h1>Tracking Location List</h1>
          <TLList TrackingLocations={UserServices.searchTrackingLocations(this.state.trackingLocation)} prop= {this.props}/> 
          </div>
          
          <br></br>
         
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(TrackingLocations);
