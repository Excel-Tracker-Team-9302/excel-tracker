import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import UserServices from '../../services/UserServices';


export default function InviteUserButton() {

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');


  const handleChangeEmail = event => {
    setEmail(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (email == '') {
      alert('Please enter a valid email address.');
    } else {
      UserServices.sendResetPasswordLink(email);
      alert('Sent link to ' + email + ' to reset your password' + '.');
      setOpen(false);
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen} color='secondary'>Reset Password</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter your email to send a reset password link</DialogTitle>
        <DialogContent>
              <TextField onChange={handleChangeEmail} id="standard-basic" value={email} label="User Email" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Send Reset Link
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}