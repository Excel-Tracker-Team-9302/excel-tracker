import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import DeleteImage from './../../assets/images/Delete.png'

import UserServices from '../../services/UserServices';

/**
 * Pop-up button used to invite a user to the program. The
 * user must provide an email of the user and a user
 * type for the user. An email will be sent to the
 * user where they will be able to set up their account.
 * 
 * Dialog created using the Material UI Dialog 
 * demos here: https://material-ui.com/components/dialogs/
 * and here: https://material-ui.com/components/selects/
 * (January 2020)
 */
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
      <Button variant='contained' onClick={this.openWindow} color='secondary'>Invite a New User</Button>
      <Dialog open={this.state.open} onClose={this.closeWindow}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <DialogTitle>Email Invite for New User to Join</DialogTitle>
          <Button onClick={this.closeWindow} size = 'small'>
              <img  src={DeleteImage} width="22vw" height="50%"/>
          </Button>
        </div>
        
        <DialogContent>
            <Select
              label="User Type"
              native
              value={this.state.type}
              onChange={this.handleChangeType}
            >
              {this.getUserTypes()}
            </Select>
            <br/>
            <TextField onChange={this.handleChangeEmail} value={this.state.email} label="User Email" />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={this.handleSubmit} color="secondary">
            Send Invite
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
  }
}

export default InviteUserButton;