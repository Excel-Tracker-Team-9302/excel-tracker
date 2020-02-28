import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

import UserServices from '../../services/UserServices';

export default function InviteUserButton() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleChangeType = event => {
    setType(event.target.value || '');
  };

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
    if (email == '' || type == '') {
      alert('Please select a type and enter the user\'s email!');
    } else {
      UserServices.inviteNewUser(email, type);
    alert('Invited ' + email + ' as a(n) ' + type + '.');
    setOpen(false);
    }
  }

  const getUserTypes = () => {
    let userTypes = ['Administrator', 'Instructor', 'Peer Coordinator', 'Student']
    return userTypes.map((item) => <option value={item}>{item}</option>)
  }

  return (
    <div>
      <Button onClick={handleClickOpen} color='secondary'>Invite a New User</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Email Invite for New User to Join</DialogTitle>
        <DialogContent>
            <InputLabel>User Type</InputLabel>
            <Select
              native
              value={type}
              onChange={handleChangeType}
            >
              {getUserTypes()}
            </Select>
            <br/>
            <TextField onChange={handleChangeEmail} id="standard-basic" value={email} label="User Email" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Send Invite
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}