import React, { Component } from 'react';
import './../styles/UserDetails.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Colors from '../assets/text/Colors.js';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Home/Header.js';
import {dummyData} from './../services/DummyData';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompetencyCard from './UserView/CompetencyCard';





import {
  withRouter
} from 'react-router-dom'

import ACTIONS from '../redux/action'
import { connect } from 'react-redux';


class UserDetails extends Component {


  competencies = dummyData.competencies.filter(competency => {
    return (competency);
  }) 

  mentors=dummyData.users.filter(user => {
    return (user.role == "Mentor");
  })

  assign = event => {
    alert(event.target.text);
  };


  render() {

    return (
      <div>
        <Header handleLogout={() => this.handleLogout} pageName="Users"/>
        <div className="Users">
          <div className="UserDetails">
            <div className ="UD-header" style={{color:Colors.blue}}>
              User: {this.props.location.state.name}
            </div>
            <div className = "UD-body">
              Role = {this.props.location.state.userType}
              {this.props.location.state.userType == "Student" &&
                <div>
                  <div className='tc'>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Add Mentor
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {this.mentors.map((mentor, i) => {
                        return (<Dropdown.Item onClick = {this.assign}> {this.mentors[i].name} </Dropdown.Item>);
                      })}
                      </Dropdown.Menu>
                    </Dropdown>
                      <h1>Competencies</h1>
                      {this.competencies.map((competency, i) => {
                          return( <CompetencyCard 
                                    title={this.competencies[i].title} 
                                    domain={this.competencies[i].domain}
                                    subcategory={this.competencies[i].subcategory}
                                    difficulty={this.competencies[i].difficulty}
                                  />
                          ); 
                      })}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserDetails));