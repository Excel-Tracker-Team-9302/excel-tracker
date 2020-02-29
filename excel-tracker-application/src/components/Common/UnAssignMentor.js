import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import './../../styles/UserDetails.css';


import PropTypes from 'prop-types';

import UserServices from '../../services/UserServices';


/**
 * Pop-up button used to unassign a mentor from a specific student
 * 
 * Dialogue created by referencing the Material UI Dialogue 
 * outline here: https://material-ui.com/components/dialogs/
 * (Febuary 2020)
 */
class UnAssignMentor extends React.Component {

  componentDidMount() {
    let mentors = UserServices.getMentors()
    this.setState({
      mentors:mentors
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      mentors: []
    }

  }

  setType(newType) {
    this.setState({
      type: newType
    })
  }


  setOpen(newOpen) {
    this.setState({
      open: newOpen
    })
  }

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setOpen(false);
  };

  handleSubmit = () => {
    UserServices.unassignMentor(this.props.studentEmail)
    this.setOpen(false)
  }

  render() {
    return (
      <div className = 'UD-holder'>
        <Button onClick={this.handleClickOpen} color='secondary'>Unassign Mentor</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Unassign this mentor from this student?</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="secondary">
              Unassign
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
}

UnAssignMentor.propTypes = {
  studentEmail: PropTypes.string.isRequired
}

export default (UnAssignMentor);