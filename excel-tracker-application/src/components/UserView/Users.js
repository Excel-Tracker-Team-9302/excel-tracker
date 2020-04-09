import React, { Component } from 'react';

import {
  withRouter
} from 'react-router-dom'

import Header from '../Home/Header.js';
import dummyData from '../../services/DummyData';
import UserList from './UserList';
import { InputLabel, Input } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem} from '@material-ui/core';
import InviteUserButton from '../Common/InviteUserButton.js'

import '../../styles/Users.css';

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
        
          
        {/* <Container fixed style = {{ alignItems: 'center', display: 'grid', 'grid-template-columns': '250px 250px 250px', 'justify-content':'center', 'grid-gap': '80px'}}> */}

        <div className="flex-grid">
        <div className="col">
        <Input
          type = "text"
          placeholder="Search for user"
          onChange={ event => this.handleChangeUsername(event.target.value) } 
          />
        </div>

        <div className="col">
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
        </div>

        <div className ="col">
            <InviteUserButton />
          </div>

        </div>
        {/* </Container> */}


          <div className='tc'>
              
          <h1>User List</h1>
          <UserList users={dummyData.users.filter(user => {
    return (user.role === this.state.selected || this.state.selected == "All") 
    && (user.name.toLowerCase().includes(this.state.username.toLowerCase()) || this.state.username === "");
})} prop= {this.props}/> 
          </div>
          
          <br></br>
         
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(Users);
