import React from 'react';

import {
  withRouter
} from 'react-router-dom'

import Header from '../Home/Header.js';
import TLList from './TLList.js';
import { Input } from '@material-ui/core';
import UserServices from '../../services/UserServices';
import CreateTrackingLocation from './CreateTrackingLocation'


import '../../styles/Users.css';

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
