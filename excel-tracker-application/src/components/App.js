import React, { Component } from 'react';
import logo from './../assets/images/logo.svg';
import './../styles/App.css';

import ACTIONS from '../redux/action'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.setCurrentUser("amy@gmail.com")
    console.log("Props", this.props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello, {this.props.currentUser}
          </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
