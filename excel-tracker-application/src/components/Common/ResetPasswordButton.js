import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import UserServices from '../../services/UserServices';
import DeleteImage from './../../assets/images/Delete.png'


/**
 * Pop-up button used reset the password of a user. An
 * email will be sent to the user where they will be directed
 * to reset their own password.
 * 
 * Dialog created using the Material UI Dialog
 * demos here: https://material-ui.com/components/dialogs/
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <DialogTitle>Enter your email to send a reset password link</DialogTitle>
            </div>

            <Button onClick={this.closeWindow} size='small'>
              <img src={DeleteImage} width="22vw" height="50%" />
            </Button>
          </div>
          <DialogContent>
            <TextField onChange={this.handleChangeEmail} value={this.state.email} label="User Email" />
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={this.handleSubmit} color="secondary">
              Send Reset Link
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}

export default ResetPasswordButton;