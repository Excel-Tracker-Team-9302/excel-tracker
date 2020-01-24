import React, {Component} from 'react';
import './../styles/Register.css';
import BasicButton from './Common/BasicButton';

class Register extends Component {
    handleClick() {
        alert("I was clicked!");
    }
    render() {
        return(
            <div className='Register'>
              <h1>Register a new user</h1>
              <div>Enter new username: <input type='text' placeholder='Username'/></div>
              <div>Enter new password: <input type='text' placeholder='Password'/></div>
              <BasicButton label={'Register'} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Register;