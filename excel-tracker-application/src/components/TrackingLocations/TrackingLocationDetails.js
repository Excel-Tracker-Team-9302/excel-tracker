import React, { Component } from 'react';
import '../../styles/TrackingLocationDetails.css';
import Colors from '../../assets/text/Colors.js';
import Header from '../Home/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompetencyCard from '../Competencies/CompetencyCard';
import UserServices from '../../services/UserServices';
import Select from '@material-ui/core/Select';
import UserCard from '../UserView/UserCard';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

import {
  withRouter
} from 'react-router-dom'

import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';


class TrackingLocationDetails extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currCompetency: '',
      currStudent: '',
      currInstructor: ''
    }
  }

  competencies = UserServices.getCompetencies().filter(competency => {
    return (competency);
  }).sort(function (a, b) {
    if (a.domain > b.domain) {
      return 1;
    }
    return -1;

  })


  trackingLocations = UserServices.getTrackingLocations().filter(tl => {
    return (tl);
  })

  tl = UserServices.getTrackingLocation(this.props.location.state.id).filter(tl => {
    return (tl);
  })

  instructors = UserServices.getInstructor(this.tl[0].instructors)
  competencies = UserServices.tlToCompetency(this.tl[0].competencies)
  students = UserServices.getInstructor(this.tl[0].students)

  allInstructors = UserServices.getInstructors()
  allSudents = UserServices.getStudents()
  allCompetencies = UserServices.getCompetencies()

  assign = event => {
    alert(event.target.text);
  };

  renderCompetencies = () => {
    return this.allCompetencies.map((item) => <option value={item.id}>{item.title}</option>)
  }


  renderStudents = () => {
    return this.allSudents.map((item) => <option value={item.email}>{item.name}</option>)
  }

  renderInstructors = () => {
    return this.allInstructors.map((item) => <option value={item.email}>{item.name}</option>)
  }

  handleChangeCurrentCompetency = (event) => {
    this.setState({
      currCompetency: event.target.value
    })
  }

  handleChangeCurrentStudent = (event) => {
    this.setState({
      currStudent: event.target.value
    })
  }

  handleChangeCurrentInstructor = (event) => {
    this.setState({
      currInstructor: event.target.value
    })
  }


  render() {

    return (
      <div>
        <Header handleLogout={() => this.handleLogout} pageName="Tracking Location Details" />
        <div className="TL">
          <div className="TLDetails">
            <div className="container">
              <div className="left">
                <div className="TL-header" style={{ color: Colors.blue }}>
                  {this.props.location.state.name}
                  {console.log(this.competencies)}
                  {console.log(this.tl[0].competencies)}


                </div>
              </div>
              <div className="right">
                <div>
                  <h2 style={{ color: Colors.blue }}>Instructors</h2>
                  <div style={{ flex: 2, marginLeft: 5, marginRight: 5 }} className="side-by-side-header">
                    <Select
                      native
                      value={this.state.currInstructor}
                      onChange={this.handleChangeCurrentInstructor}
                    >
                      {this.renderInstructors()}
                    </Select>
                    <AddButton handleClick={() => UserServices.addInstructorToTL(this.state.currInstructor, this.tl)} />
                  </div>

                </div>
                {
                  this.instructors.map((user, i) => {
                    return (
                      <div className="side-by-side-icons">

                        <UserCard
                          name={this.instructors[i].name}
                          userType={this.instructors[i].role}
                          email={this.instructors[i].email}
                          prop={this.props}
                        />
                        <DeleteButton></DeleteButton>
                      </div>

                    );
                  })
                }
              </div>
            </div>
            <div className="container">
              <div className="left">
                <div>
                  <h2 style={{ flex: 1, color: Colors.blue }}>Competencies</h2>
                  <div style={{ flex: 2, marginLeft: 5, marginRight: 5 }} className="side-by-side-header">
                    <Select
                      native
                      value={this.state.currCompetency}
                      onChange={this.handleChangeCurrentCompetency}
                    >
                      {this.renderCompetencies()}
                    </Select>
                    <AddButton handleClick={() => UserServices.addCompToTL(this.state.currCompetency, this.tl)} />
                  </div>

                </div>
                {
                  this.competencies.map((competency, i) => {
                    return (

                      <div className="side-by-side-icons">
                        <CompetencyCard
                          title={this.competencies[i].title}
                          domain={this.competencies[i].domain}
                          subcategory={this.competencies[i].subcategory}
                          prop={this.props}
                        />
                        <DeleteButton></DeleteButton>
                      </div>
                    );
                  })
                }
              </div>
              <div className="right">
                <div>
                  <h2 style={{ color: Colors.blue }}>Students</h2>
                  <div style={{ flex: 2, marginLeft: 5, marginRight: 5 }} className="side-by-side-header">
                    <Select
                      native
                      value={this.state.currStudent}
                      onChange={this.handleChangeCurrentStudent}
                    >
                      {this.renderStudents()}
                    </Select>
                    <AddButton handleClick={() => UserServices.addStudentToTL(this.state.currStudent, this.tl)} />
                  </div>



                </div>
                {
                  this.students.map((user, i) => {
                    return (
                      <div className="side-by-side-icons">
                        <UserCard
                          name={this.students[i].name}
                          userType={this.students[i].role}
                          email={this.students[i].email}
                          prop={this.props}
                        />
                        <DeleteButton></DeleteButton>
                      </div>
                    );
                  })
                }
              </div>
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
    setCurrentUser: (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrackingLocationDetails));