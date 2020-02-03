import React, { Component } from 'react';

import CoolCard from './Home/coolcard.js';
import {
  withRouter
} from 'react-router-dom'

import Header from './Home/Header.js';
import {dummyData} from './../services/DummyData';
import UserList from './UserView/UserList';


class Users extends React.Component {

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
          <Header handleLogout={() => this.handleLogout} pageName="Users"/>
          <div className="Users">
          

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
    
export default withRouter(Users);
