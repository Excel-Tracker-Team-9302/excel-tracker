import React, { Component } from 'react';

import CoolCard from './coolcard.js';
import {
  withRouter
} from 'react-router-dom'

import './../../styles/Dashboard.css';
import Header from './Header.js';
import {dummyData} from './../../services/DummyData';
import UserList from './../UserView/UserList';

import competencies from './../../assets/images/competencies.png'
import reports from './../../assets/images/reports.png'
import users from './../../assets/images/users.png'
import courses from './../../assets/images/courses.png'
import {Container, Row, Col } from 'react-bootstrap'


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
            <Container fixed style = {{ alignItems: 'center', display: 'grid', 'grid-template-columns': '300px 300px', 'justify-content':'center', 'grid-gap': '10px', marginTop: '20px', marginBottom: '20px'}}>
              <CoolCard pageName="Competencies" image={competencies} onClick={() => this.props.history.push('/competencies')}/>
              <CoolCard pageName="Users" image={users} onClick={() => this.props.history.push('/users')}/>
              <CoolCard pageName="Reports" image={reports}/>
              <CoolCard pageName="Tracking Locations" image={courses} onClick={() => this.props.history.push('/trackinglocations')}/>
            </Container>
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(Dashboard);
