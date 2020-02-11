import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';


import PropTypes from 'prop-types';

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


class AssignMentor extends React.Component {

  componentDidMount() {
    console.log(UserServices.getMentors())
  }
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      open: false
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



  handleChangeType = event => {
    this.setType(event.target.value || '');
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
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Assign a Mentor to Student</DialogTitle>
          <DialogContent>
            <form className={this.props.classes.container}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="demo-dialog-native">Mentor Name</InputLabel>
                <Select
                  native
                  value={this.state.type}
                  onChange={this.handleChangeType}
                  input={<Input id="demo-dialog-native" />}
                >
                  {this.rendorMentorList()}
                </Select>
              </FormControl>
            </form>
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

export default withStyles(useStyles)(AssignMentor);