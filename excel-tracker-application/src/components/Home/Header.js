
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

/**
 * Header for the main application
 * 
 * Header created using the Material UI App Bar
 * demos here: https://material-ui.com/components/app-bar/
 * (January 2020)
 * 
 */
class Header extends React.Component {

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <div style={{ flex: 1 }}>
              <Typography variant="h5">
                {this.props.pageName}
              </Typography>
            </div>

            {this.props.pageName == 'Home' ? null : <Button onClick={() => this.props.history.push('/dashboard')} color="secondary" variant='contained'>Home</Button>}
            <div style={{marginLeft: 10}}>
              <Button onClick={() => this.props.history.push('/')} color="secondary" variant='contained'>
                Logout
                </Button>
            </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default (withRouter(Header));
