import React, {Component} from 'react';
import './../../styles/UserCard.css';

const TLCard = ({name,competencies,locationID,instructors,students}) => {

return (
        <div className='userCard'>   
            <b><div>{name}</div></b>
            <br/>
            <div>Instructors: {instructors|| ''}</div>
        </div>
    );
}

export default TLCard;