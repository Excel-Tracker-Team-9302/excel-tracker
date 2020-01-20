import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Colors from '../../assets/text/Colors';

import UserServices from '../../services/UserServices';

const useStyles = makeStyles(theme => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function InviteUserButton() {
  const classes = useStyles();
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

  return (
    <div>
      <Button onClick={handleClickOpen} color='secondary'>Invite a New User</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Email Invite for New User to Join</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">User Type</InputLabel>
              <Select
                native
                value={type}
                onChange={handleChangeType}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={'admin'}>Administrator</option>
                <option value={'instructor'}>Instructor</option>
                <option value={'peer coordinator'}>Peer Coordinator</option>
                <option value={'student'}>Student</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField onChange={handleChangeEmail} id="standard-basic" value={email} label="User Email" />
            </FormControl>
          </form>
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