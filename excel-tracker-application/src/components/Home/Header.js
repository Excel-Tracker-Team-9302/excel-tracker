
import Button from '@material-ui/core/Button';

import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import CreateCompetencyButton from './../Common/CreateCompetencyButton'


const styles = {

  menuButton: {
    marginRight: 2,
  },

  title: {
    flexGrow: 1,
  },
};


/**
 * Header for the main application
 * 
 * Header created by referencing the Material UI App Bar
 * outline here: https://material-ui.com/components/app-bar/
 * (Febuary 2020)
 * 
 */
function Header(props) {
 
  const classes = props.classes;

  return (
      <div>
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
