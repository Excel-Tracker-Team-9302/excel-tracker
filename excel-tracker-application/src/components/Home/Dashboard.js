import React, { Component } from 'react';

import CoolCard from './coolcard.js';
import {
  withRouter
} from 'react-router-dom'

import './../../styles/Dashboard.css';
import Header from './Header.js';
import {dummyData} from './../../services/DummyData';
import UserList from './../UserView/UserList';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.history.push('/');
  }

  render() {
      return (
        <div>
          <Header handleLogout={() => this.handleLogout} pageName="Home"/>
          <div className="Dashboard">
          
    
          <br></br>
          <div style={{ height: '80%', display: "flex",
            justifyContent: "center",
            alignItems: "center"}}>
           <CoolCard />
          </div>

          <div className='tc'>
          <h1>UserList</h1>
          <UserList users={dummyData.users} /> 
          </div>
          
          <br></br>
          
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(Dashboard);
