import React, {Component} from 'react';
import './../../styles/UserCard.css';

const TLCard = ({name,competencies,locationID,instructors,students}) => {

return (
        <div className='userCard'>   
            <p>Name: {name}</p>
            <p>Instructors: {instructors|| ''}</p>
        </div>
    );
}

export default TLCard;