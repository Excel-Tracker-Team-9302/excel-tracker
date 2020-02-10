import React, {Component} from 'react';
import './../../styles/UserCard.css';

const UserCard = ({name, userType, prop}) => {

	const gotodetails = event => {
    	prop.history.push({
          pathname : '/userDetails',
          state :{
          name: name,
          userType: userType
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