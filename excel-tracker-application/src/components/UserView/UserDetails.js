import React, { Component } from 'react';
import '../../styles/UserDetails.css';
import Colors from '../../assets/text/Colors.js';
import Header from '../Home/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompetencyCard from './../Competencies/CompetencyCard';
import TLCard from './../TrackingLocations/TLCard';
import UserServices from '../../services/UserServices';
import AssignMentor from './../Common/AssignMentor.js';
import DeleteStudent from './../Common/DeleteStudent.js';
import UnAssignMentor from './../Common/UnAssignMentor.js';
import EvaluateButton from './../Evaluation/EvaluateButton.js';



import {
  withRouter
} from 'react-router-dom'

import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';


class UserDetails extends Component {

  competencies = UserServices.getCompetencies().filter(competency => {
    return (competency);
  }).sort(function(a, b){
      if (a.domain > b.domain) {
        return 1;
      }
      return -1;

  })
 
  thisUser = UserServices.getUser(this.props.location.state.email);

  trackingLocations = UserServices.getTrackingLocations().filter(tl => {
    return (tl);
  })

  assign = event => {
    alert(event.target.text);
  };

  evaluate = (competencyId) => {
    console.log(this.props)
    this.props.history.push({
            pathname : '/evaluations',
            state :{
                studentId: this.thisUser.userID,
                competencyId: competencyId
              }
            } 
          );
  };

  getMentor() {
    let mentor = UserServices.getMentor(this.props.location.state.email);
    if (mentor) {
      return (
        <div>
          <p>Mentor: {mentor}</p>
           <UnAssignMentor studentEmail={this.props.location.state.email} />
          
        </div>
      )
    }
    return (
      <AssignMentor studentEmail={this.props.location.state.email}/>
    );
  }


  render() {

    return (
      <div>
        <Header handleLogout={() => this.handleLogout} pageName="Users"/>
        <div className="Users">
          <div className="UserDetails">
            <div className ="UD-header" style={{color:Colors.blue}}>
              {this.props.location.state.name}

            </div>
            <div className = "UD-body">
            {this.props.location.state.userType}
            {this.props.location.state.userType === "Student" ?
                  
                    this.getMentor() : null
            }
            
            <DeleteStudent email={this.props.location.state.email}/>
              {this.props.location.state.userType === "Student" &&
                <div>
                  <div className='udtc'>


                      <h1>Competencies</h1>
                      <h1>Tracking Locations</h1>
                      <div>
                          {this.competencies.map((competency, i) => {
                              return( 
                              <div class="side-by-side-icons">
                              <CompetencyCard 
                                        title={this.competencies[i].title} 
                                        domain={this.competencies[i].domain}
                                        subcategory={this.competencies[i].subcategory}
                                        difficulty={this.competencies[i].difficulty}
                                      />

                              <EvaluateButton competencyId={competency.id} onClick={this.evaluate}/>
                              </div>
                              ); 
                          })}
                      </div>
                      <div>
                          {this.trackingLocations.map((tl, i) => {
                              return( <TLCard 
                                        name= {this.trackingLocations[i].name}
                                        competencies= {this.trackingLocations[i].competencies}
                                        locationID= {this.trackingLocations[i].locationID}
                                        instructors= {this.trackingLocations[i].instructors}
                                        students= {this.trackingLocations[i].students}
                                      />
                              ); 
                          })}
                      </div>
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