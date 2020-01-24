
import React, { Component } from 'react';
import './../styles/ResetPassword.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Colors from '../../assets/text/Colors.js';

import { 
  createMuiTheme, 
  ThemeProvider } from '@material-ui/core/styles';



import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';


class ResetPassword extends Component {

  password = '';
  passwordConfirm = '';
  handleChangePassword = event => {
    this.password = (event.target.value || '');
  };

  handleChangePasswordConfirm = event => {
    this.passwordConfirm = (event.target.value || '');
  };

  resetPassword = event => {
    if (this.password == this.passwordConfirm && this.password.length > 6) {
      alert('Password Reset to ' + this.password);
    } else {
      alert("Passwords do not match or are shorter than six characters!");
    }
    
  };
  render() {




    return (
      <ThemeProvider theme={theme}>
      <div className="Login">
        <header className="Login-header">
          <div style={{color:Colors.blue}}>
            Please enter your new password
          </div>
        </header>
        <div className="Login-body">
          <form className = "Login-form">
            <div style={{color: Colors.blue}}>
            <TextField
              id="standard-password-input"
              label="New Password"
              type="password"
              onChange={this.handleChangePassword}
              autoComplete="current-password"
            />
            <br />
            <div style={{marginTop: 10}}>
              <TextField
                id="standard-password-input"
                label="Confirm Password"
                type="password"
                onChange={this.handleChangePasswordConfirm}
                autoComplete="current-password"
              />
            </div>
            </div>
            <div style={{marginTop: 30}}>
              <Button variant='contained' color="secondary" onClick={this.resetPassword}>
                Reset Password
                </Button>
            </div>
            

          </form>
        </div>

      </div>
      </ThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.white,
    }, 
    secondary: {
      main: Colors.blue
    } 
  }
})

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);


