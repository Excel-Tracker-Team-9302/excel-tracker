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
import {
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
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


class DeleteStudent extends React.Component {

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
    this.props.history.push('/users');
    UserServices.deleteStudent(this.props.email)
    this.setOpen(false)
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color='secondary'>Delete Student</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Are you sure you would like to delete this student?</DialogTitle>

          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
}

DeleteStudent.propTypes = {
  email: PropTypes.string.isRequired
}


export default withStyles(useStyles)(withRouter(DeleteStudent));