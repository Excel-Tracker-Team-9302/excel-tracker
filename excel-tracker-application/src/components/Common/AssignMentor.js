import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


import Select from '@material-ui/core/Select';


import PropTypes from 'prop-types';

import UserServices from '../../services/UserServices';



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
    this.setMentor(event.target.value || '');
  };

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setOpen(false);
  };

  handleSubmit = () => {
    UserServices.assignMentor(this.state.type, this.props.studentEmail)
    this.setOpen(false)
  }

  rendorMentorList() {
    const mentors = UserServices.getMentors()
    const listItems = mentors.map((item) => <option value={item.email}>{item.name}</option>)
    return listItems
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color='secondary'>Assign Mentor</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
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
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="secondary">
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