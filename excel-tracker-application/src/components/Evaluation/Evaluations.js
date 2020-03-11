import React, { Component } from 'react';

import {
  withRouter
} from 'react-router-dom'
import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';
import Header from './../Home/Header.js';
import EvaluationForm from './EvaluationForm.js';

class Evaluations extends Component {

  student = this.props.location.state.studentEmail;

  
  render() {


      return (
        
        <div>
          <Header handleLogout={() => this.handleLogout} pageName="Evaluations"/>
          <div>
            Evaluations for {this.student}
          </div>
          <EvaluationForm/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Evaluations));
