import React, {Component} from 'react';
import './../../styles/UserCard.css';

const UserCard = ({name, userType}) => {
    return (
        <div className='userCard'>   
            <p>Name: {name}</p>
            <p>Role: {userType}</p>
        </div>
    );
}

export default UserCard;