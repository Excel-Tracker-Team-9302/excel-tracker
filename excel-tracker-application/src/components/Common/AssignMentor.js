import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteImage from './../../assets/images/Delete.png'

import Select from '@material-ui/core/Select';


import PropTypes from 'prop-types';

import UserServices from '../../services/UserServices';


/**
 * Pop-up button used to Assign a mentor to a
 * Student in the Excel Program
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DialogTitle>Assign a Mentor to Student</DialogTitle>
            <Button onClick={this.closeWindow} size='small'>
              <img src={DeleteImage} width="22vw" height="50%" />
            </Button>
          </div>
          <DialogContent>
            <Select
              label="Mentor Name"
              native
              value={this.state.mentor}
              onChange={this.handleChangeMentor}
            >
              {this.rendorMentorList()}
            </Select>
          </DialogContent>
          <DialogActions>
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