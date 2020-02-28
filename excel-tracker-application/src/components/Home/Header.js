
import Button from '@material-ui/core/Button';


import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CreateCompetencyButton from './../Common/CreateCompetencyButton'


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
};



function Header(props) {
 
  const classes = props.classes;

  return (

      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {props.pageName}
          </Typography>
          
          <Button className={classes.menuButton} onClick={() => props.history.push('/dashboard')} color="secondary" variant='contained'>Home</Button>
          <Button className={classes.menuButton}  onClick={() => props.history.push('/')} color="secondary" variant='contained'>Logout</Button>
          <CreateCompetencyButton/>
        </Toolbar>
      </AppBar>
    </div>

  );
}

export default withStyles(styles)(withRouter(Header));
