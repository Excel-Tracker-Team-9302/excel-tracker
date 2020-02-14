import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


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


class UnAssignMentor extends React.Component {

  componentDidMount() {
    console.log(UserServices.getMentors())
  }
  constructor(props) {
    super(props);

    this.state = {
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
      <div>
        <Button onClick={this.handleClickOpen} color='secondary'>Unassign Mentor</Button>
        <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
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

export default withStyles(useStyles)(UnAssignMentor);