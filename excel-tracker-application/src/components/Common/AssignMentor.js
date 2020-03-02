import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';


import PropTypes from 'prop-types';

import UserServices from '../../services/UserServices';


/**
 * Pop-up button used to create a program competency
 * 
 * Dialog created using the Material UI Dialog
 * demos here: https://material-ui.com/components/dialogs/
 * and here: https://material-ui.com/components/selects/
 * (Febuary 2020)
 */
class AssignMentor extends React.Component {

  componentDidMount() {
    console.log(UserServices.getMentors())
  }

  constructor(props) {
    super(props);

    this.state = {
      mentor: '',
      open: false
    }

  }

  setMentor(newMentor) {
    this.setState({
      mentor: newMentor
    })
  }


  setOpen(newOpen) {
    this.setState({
      open: newOpen
    })
  }

  handleChangeMentor = event => {
    this.setMentor(event.target.value);
  };

  openWindow = () => {
    this.setState({
      open: true
    })
  }

  closeWindow = () => {
    this.setState({
      open: false
    })
  }

  handleSubmit = () => {
    UserServices.assignMentor(this.state.type, this.props.studentEmail)
    this.closeWindow()
  }

  rendorMentorList() {
    const mentors = UserServices.getMentors()
    const listItems = mentors.map((item) => <option value={item.email}>{item.name}</option>)
    return listItems
  }

  render() {
    return (
      <div>
        <Button variant='contained' onClick={this.openWindow} color='secondary'>Assign Mentor</Button>
        <Dialog open={this.state.open} onClose={this.closeWindow}>
          <DialogTitle>Assign a Mentor to Student</DialogTitle>
          <DialogContent>
                <InputLabel>Mentor Name</InputLabel>
                <Select
                  native
                  value={this.state.mentor}
                  onChange={this.handleChangeMentor}
                >
                  {this.rendorMentorList()}
                </Select>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={this.closeWindow} color="secondary">
              Cancel
            </Button>
            <Button variant='contained' onClick={this.handleSubmit} color="secondary">
              Assign
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
}

AssignMentor.propTypes = {
  studentEmail: PropTypes.string.isRequired
}

export default (AssignMentor);