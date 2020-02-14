// import React, { Component } from 'react';
// import logo from './../../assets/images/logo.svg';
// import competencies from './../../assets/images/competencies.png'
// import './../../styles/Home.css';
// import Card from 'react-bootstrap/Card'
// import Button from '@material-ui/core/Button';
// import Dashboard from './Dashboard.js'

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
import IconButton from '@material-ui/core/IconButton';
import InviteUserButton from './../Common/InviteUserButton.js'
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';


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
 

  console.log(props);
  const classes = props.classes;
  console.log(classes);

  return (

      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.pageName}
          </Typography>
          
          
          <Button className={classes.menuButton} onClick={() => props.history.push('/dashboard')} color="secondary" variant='contained'>Home</Button>
          <Button className={classes.menuButton}  onClick={() => props.history.push('/')} color="secondary" variant='contained'>Logout</Button>
          
        </Toolbar>
      </AppBar>
    </div>

  );
}


const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser))
  }
}

export default withStyles(styles)(withRouter(Header));
