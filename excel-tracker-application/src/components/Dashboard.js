import React, { Component } from 'react';

import CoolCard from './coolcard.js';
import Button from '@material-ui/core/Button';

import './../styles/Dashboard.css';


class Dashboard extends React.Component {

    render() {
        return (
          <div className="Dashboard">

            <Button size="small" color="black" style = {{'background-color': '#003057', 'color': '#ffff', 'float':'right', 'margin-right': '30px'}}>
                Logout
            </Button>
      
            <br></br>
            <CoolCard />
            <br></br>
            
          </div>
        );
    }
}
    
export default Dashboard;
