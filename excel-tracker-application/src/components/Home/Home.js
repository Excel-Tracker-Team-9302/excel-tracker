import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import competencies from './../../assets/images/competencies.png'
import './../../styles/Home.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


import ACTIONS from '../../redux/action'
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount() {
    this.props.setCurrentUser("amy@gmail.com")
    console.log("Props", this.props)
  }

  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dashboard</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello, {this.props.currentUser}
          </a>
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
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
