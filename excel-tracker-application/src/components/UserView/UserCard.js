import React, {Component} from 'react';
import './../../styles/UserCard.css';

/**
 * Card used to display the information about individual
 * users. Used to organize user display on the Users page.
 * Expects information about the user to be passed in
 * 
 * (Febuary 2020)
 *  
 */
const UserCard = ({name, userType, prop, email}) => {

	const gotodetails = event => {
    	prop.history.push({
          pathname : '/userDetails',
          state :{
          name: name,
          userType: userType,
          email: email
          }
          } 
        );
  	};

    return (
        <div className='userCard' onClick = {gotodetails}>   
            <p>Name: {name}</p>
            <p>Role: {userType}</p>
        </div>
    );
}

export default UserCard;