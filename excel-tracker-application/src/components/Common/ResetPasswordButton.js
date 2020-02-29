import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import UserServices from '../../services/UserServices';


/**
 * Pop-up button used reset the password of a user
 * 
 * Dialogue created by referencing the Material UI Dialogue 
 * outline here: https://material-ui.com/components/dialogs/
 * (Febuary 2020)
 */
class ResetPasswordButton extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      open: false,
      email: ''
    }
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  openWindow = () => {
    this.setState({
      open: true
    })
  };

  closeWindow = () => {
    this.setState({
      open: false
    })
  };

  handleSubmit = () => {
    if (this.state.email == '') {
      alert('Please enter a valid email address.');
    } else {
      UserServices.sendResetPasswordLink(this.state.email);
      alert('Sent link to ' + this.state.email + ' to reset your password' + '.');
      this.closeWindow()
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.openWindow} color='secondary'>Reset Password</Button>
        <Dialog open={this.state.open} onClose={this.closeWindow}>
          <DialogTitle>Enter your email to send a reset password link</DialogTitle>
          <DialogContent>
                <TextField onChange={this.handleChangeEmail} value={this.state.email} label="User Email" />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeWindow} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="secondary">
              Send Reset Link
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}

export default ResetPasswordButton;