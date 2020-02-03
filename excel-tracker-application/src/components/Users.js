import React, { Component } from 'react';

import CoolCard from './Home/coolcard.js';
import {
  withRouter
} from 'react-router-dom'

import Header from './Home/Header.js';
import {dummyData} from './../services/DummyData';
import UserList from './UserView/UserList';
import { InputLabel, Input } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Users extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        selected: "All",
        username: ""
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }

  handleLogout() {
    this.props.history.push('/');
  }
  handleChange(value) {
    this.setState({selected: value });
  }

  handleChangeUsername(value) {
    this.setState({username: value})
    console.log(this.state.username)
  };
  render() {
      return (
        
        <div>
          <Header handleLogout={() => this.handleLogout} pageName="Users"/>
          <div className="Users">
          
        <Input
        type = "text"
        placeholder="Search for user"
        onChange={ event => this.handleChangeUsername(event.target.value) } 
        />
          <InputLabel id="label">Filter by</InputLabel>
            <Select labelId="label" 
            id="select" 
            value={this.state.selected}
            onChange={event => this.handleChange(event.target.value)}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Mentor">Mentor</MenuItem>
            <MenuItem value="Faculty/Staff">Faculty/Staff</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            </Select>

          <div className='tc'>
              
          <h1>UserList</h1>
          <UserList users={dummyData.users.filter(user => {
    return (user.role === this.state.selected || this.state.selected == "All") 
    && (user.name.toLowerCase().includes(this.state.username.toLowerCase()) || this.state.username === "");
})} /> 
          </div>
          
          <br></br>
         
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(Users);
