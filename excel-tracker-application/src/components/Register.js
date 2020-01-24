import React, {Component} from 'react';
import './../styles/Register.css';
import BasicButton from './Common/BasicButton';

import {
  withRouter
} from 'react-router-dom'


class Register extends Component {

    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.push('/');
    }
    render() {
        return(
            <div className='Register'>
              <h1>Register a new user</h1>
              <div>Enter new username: <input type='text' placeholder='Username'/></div>
              <div>Enter new password: <input type='password' placeholder='Password'/></div>
              <BasicButton label={'Register'} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default withRouter(Register);