import React, { Component } from 'react';
import './../../styles/Login.css';
import ResetPasswordButton from './../Common/ResetPasswordButton.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Colors from '../../assets/text/Colors.js';
import { makeStyles } from '@material-ui/core/styles';




import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';


class Login extends Component {

  username = '';
  password = '';
  

  handleChangeUsername = event => {
    this.username = (event.target.value || '');
  };

  handleChangePassword = event => {
    this.password = (event.target.value || '');
  };

  handleLogin = event => {
    alert('Username: ' + this.username + '\nPassword: ' + this.password);
  };

  render() {

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
    width: 'calc(30px + 15vmin)',
    margin:'10px', 
    padding:'10px', 
    'font-size': 'calc(5px + 3vmin)'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);