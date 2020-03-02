import React, { Component } from 'react';

import CoolCard from './Home/coolcard.js';
import {
  withRouter
} from 'react-router-dom'

import Header from './Home/Header.js';
import dummyData from './../services/DummyData';
import CompetenciesList from './Competencies/CompetenciesList.js';
import { InputLabel, Input } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InviteUserButton from './Common/InviteUserButton.js';
import UserServices from '../services/UserServices';


import './../styles/Users.css';
import {Container, Row, Col } from 'react-bootstrap'

class Competencies extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        selected: "All",
        competencies: ""
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChangeTL = this.handleChangeCompetencies.bind(this);
  }

  handleLogout() {
    this.props.history.push('/');
  }
  handleChange(value) {
    this.setState({selected: value });
  }

  handleChangeCompetencies(value) {
    this.setState({competencies: value})
    console.log(this.state.competencies)
  };
  render() {
      return (
        
        <div>
          <Header handleLogout={() => this.handleLogout} pageName="Competencies"/>
          <div className="Users">
        
          
        {/* <Container fixed style = {{ alignItems: 'center', display: 'grid', 'grid-template-columns': '250px 250px 250px', 'justify-content':'center', 'grid-gap': '80px'}}> */}

        <div className="flex-grid">
        <div className="col">
        <Input
          type = "text"
          placeholder="Search"
          onChange={ event => this.handleChangeCompetencies(event.target.value) } 
          />
        </div>

        <div className ="col">
            ///////////////////////////Charlie put your thing here/////////////////////////////////
            <InviteUserButton />
          </div>

        </div>
        {/* </Container> */}


          <div className='tc'>
              
          <h1>Competencies List</h1>
          <CompetenciesList Competencies={UserServices.searchCompetencies(this.state.competencies)} prop= {this.props}/> 
          </div>
          
          <br></br>
         
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(Competencies);
