import React, { Component } from 'react';
import '../../styles/Login.css';
import Button from '@material-ui/core/Button';
import Colors from '../../assets/text/Colors.js';


import {
  withRouter
} from 'react-router-dom'

import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';


class Register extends Component {

  username = '';
  password = '';
  passwordConfirm = '';
  

  handleChangeUsername = event => {
    this.username = (event.target.value || '');
  };

  handleChangePassword = event => {
    this.password = (event.target.value || '');
  };

  handleChangePasswordConfirm = event => {
    this.passwordConfirm = (event.target.value || '');
  };

  handleRegister = event => {
    if (this.username == '') {
      alert('Username cannot be empty');
    }
    else if (this.password == this.passwordConfirm && this.password.length > 6) {
      this.props.history.push('/login');
    } else {
      alert("Passwords do not match or are shorter than six characters!");
    }
  };

  handleCancel = event => {
    this.props.history.push('/login');
  };

  render() {

    return (
      <div className="Login">
        <header className="Login-header">
          <div style={{color:Colors.blue}}>
            Register a new user
          </div>
        </header>
        <div className="Login-body">
          <form className = "Register-form">
            <div className='Login-input' style={{color:Colors.blue}}><div style={styles.label}>Enter New Username: </div><input type="text" className="Login-box" onChange={this.handleChangeUsername}/></div>
            <div className='Login-input' style={{color:Colors.blue}}><div style={styles.label}>Enter New password: </div><input type="password" className="Login-box" onChange={this.handleChangePassword}/></div>
            <div className='Login-input' style={{color:Colors.blue}}><div style={styles.label}>Confirm password: </div><input type="password" className="Login-box" onChange={this.handleChangePasswordConfirm}/></div>

            <Button style={styles.button} onClick={this.handleRegister}>Register</Button>
            <Button style={styles.button} onClick={this.handleCancel}>Cancel</Button>


          </form>        
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

const styles = {
  button: {
    color:Colors.white, 
    'background-color':Colors.blue, 
    'border-radius':'50pt', 
    width: 'calc(30px + 20vmin)',
    margin:'10px', 
    padding:'10px', 
    'font-size': 'calc(5px + 3vmin)'
  },
  label: {
    width: 'calc(200px + 40vmin)',
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));