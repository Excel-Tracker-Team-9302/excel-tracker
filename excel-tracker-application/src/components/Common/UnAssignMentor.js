import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

import './../../styles/UserDetails.css';
import UserServices from '../../services/UserServices';
import DeleteImage from './../../assets/images/Delete.png'


/**
 * Pop-up button used to unassign a mentor from a specific student.
 * The student will no longer have a mentor, and thus their
 * page will now display an Add Mentor button
 * 
 * Dialog created using the Material UI Dialog 
 * demos here: https://material-ui.com/components/dialogs/
 * (Febuary 2020)
 */
class UnAssignMentor extends React.Component {

  componentDidMount() {
    let mentors = UserServices.getMentors()
    this.setState({
      mentors: mentors
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
    UserServices.unassignMentor(this.props.studentEmail)
    this.closeWindow()
  }

  render() {
    return (
      <div className='UD-holder'>
        <Button variant='contained' onClick={this.openWindow} color='secondary'>Unassign Mentor</Button>
        <Dialog open={this.state.open} onClose={this.closeWindow}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <DialogTitle>Unassign this mentor from this student?</DialogTitle>
            </div>

            <Button onClick={this.closeWindow} size='small'>
              <img src={DeleteImage} width="22vw" height="50%" />
            </Button>
          </div>
          <DialogActions>
            <Button variant='contained' onClick={this.handleSubmit} color="secondary">
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