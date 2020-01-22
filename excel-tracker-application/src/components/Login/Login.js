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
  
  render() {

  const handleChangeUsername = event => {
    this.username = (event.target.value || '');
  };

  const handleChangePassword = event => {
    this.password = (event.target.value || '');
  };

  const handleLogin = event => {
    alert('Username: ');
  };



    return (
      <div className="Login">
        <header className="Login-header">
          <div style={{color:Colors.blue}}>
            Welcome to Excel Tracker!
          </div>
        </header>
        <div className="Login-body">
          <form className = "Login-form">
            <div className='Login-input' style={{color:Colors.blue}}>Username: <input type="text" className="Login-box" onChange={handleChangeUsername}/></div>
            <div className='Login-input' style={{color:Colors.blue}}>Password: <input type="text" className="Login-box" onChange={handleChangePassword}/></div>

            <Button style={{color:Colors.white, 'background-color':Colors.blue, 'border-radius':'50%', width: 'calc(30px + 15vmin)',margin:'10px', padding:'10px', 'font-size': 'calc(5px + 3vmin)'}} onclick={handleLogin}>Log In</Button>

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);