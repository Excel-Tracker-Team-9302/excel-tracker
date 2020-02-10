import React, {Component} from 'react';
import './../../styles/UserCard.css';

const CompetencyCard = ({title, domain, subcategory, difficulty}) => {

return (
        <div className='userCard'>   
            <p>Name: {title}</p>
            <p>Role: {domain}</p>
        </div>
    );
}

export default CompetencyCard;