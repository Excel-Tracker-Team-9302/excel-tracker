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

class InviteUserButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      email: '',
      type: ''
    }
  }

  handleChangeType = (event) => {
    this.setState({
      type: event.target.value
    })
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  };

  handleChangeOpen = (event) => {
    this.setState({
      email: event.target.value
    })
  };

  closeWindow = () => {
    this.setState({
      open: false
    })
  }

  openWindow = () => {
    this.setState({
      open: true
    })
  };

  handleSubmit = () => {
    if (this.state.email == '' || this.state.type == '') {
      alert('Please select a type and enter the user\'s email!');
    } else {
      UserServices.inviteNewUser(this.state.email, this.state.type);
      alert('Invited ' + this.state.email + ' as a(n) ' + this.state.type + '.');
      this.closeWindow();
    }
  }

  getUserTypes = () => {
    let userTypes = ['Administrator', 'Instructor', 'Peer Coordinator', 'Student']
    return userTypes.map((item) => <option value={item}>{item}</option>)
  }

  render() {
    return (
      <div>
      <Button onClick={this.openWindow} color='secondary'>Invite a New User</Button>
      <Dialog open={this.state.open} onClose={this.closeWindow}>
        <DialogTitle>Email Invite for New User to Join</DialogTitle>
        <DialogContent>
            <InputLabel>User Type</InputLabel>
            <Select
              native
              value={this.state.type}
              onChange={this.handleChangeType}
            >
              {this.getUserTypes()}
            </Select>
            <br/>
            <TextField onChange={this.handleChangeEmail} id="standard-basic" value={this.state.email} label="User Email" />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeWindow} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="secondary">
            Send Invite
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }
}

export default InviteUserButton;