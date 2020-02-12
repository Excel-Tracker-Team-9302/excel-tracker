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

  handleClickOpen = () => {
    this.props.history.push('/users');
    UserServices.deleteStudent(this.props.studentEmail)
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color='secondary'>Delete User</Button>
      </div>
    );
  }
  
}


export default withStyles(useStyles)(withRouter(DeleteStudent));