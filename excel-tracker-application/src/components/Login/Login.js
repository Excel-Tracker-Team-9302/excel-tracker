import React, { Component } from 'react';
import './../../styles/Login.css';
import ResetPasswordButton from './../Common/ResetPasswordButton.js';
import Button from '@material-ui/core/Button';
import Colors from '../../assets/text/Colors.js';


import {
  withRouter
} from 'react-router-dom'

import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';


/**
 * Login component of the applicaiton. First screen
 * user enters when navigating to application ('/').
 * 
 * (January 2020)
 */
class Login extends Component {

  username = '';
  password = '';
  

  handleChangeUsername = event => {
    this.username = (event.target.value);
  };

  handleChangePassword = event => {
    this.password = (event.target.value);
  };

  handleLogin = event => {
    this.props.setCurrentUser(this.username);
    this.props.setAuthToken('asdasdasdasdasd')
    this.props.history.push('/dashboard');
  };

  render() {
    console.log(this.props)
    return (
      <div className="Login">
        <header className="Login-header">
          <div style={{color:Colors.blue}}>
            Welcome to Excel Tracker!
          </div>
        </header>
        <div className="Login-body">
          <form className = "Login-form">
            <div className='Login-input' style={{color:Colors.blue}}>Username: <input type="text" className="Login-box" onChange={this.handleChangeUsername}/></div>
            <div className='Login-input' style={{color:Colors.blue}}>Password: <input type="password" className="Login-box" onChange={this.handleChangePassword}/></div>

            <Button style={styles.button} onClick={this.handleLogin}>Log In</Button>

          </form>
            <ResetPasswordButton/ >
        
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  authToken: state.user.authToken,
  auth: state.user.auth
});
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser)),
    setAuthToken: (authToken) => dispatch(ACTIONS.setAuthToken(authToken))
  }
}

const styles = {
  button: {
    color:Colors.white, 
    'background-color':Colors.blue, 
    'border-radius':'50pt', 
    width: 'calc(30px + 15vmin)',
    margin:'10px', 
    padding:'10px', 
    'font-size': 'calc(5px + 3vmin)'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));