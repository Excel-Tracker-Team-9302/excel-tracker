import React, { Component } from 'react';

import Colors from './../assets/text/Colors';
import Card from 'react-bootstrap/Card';
import './../styles/Dashboard.css';
import logo from './../assets/images/logo.svg';
import competencies from './../assets/images/competencies.png'

import Button from 'react-bootstrap/Button'

class Dashboard extends React.Component {

    render() {
        return (
          <div className="Dashboard">
                  <br></br>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={competencies} />
                <Card.Body>
                  <Card.Title>Competencies</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <br></br>
            
          </div>
        );
    }
}
    
export default Dashboard;
