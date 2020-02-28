import React, {Component} from 'react';
import './../../styles/UserCard.css';

const CompetencyCard = ({title, domain, subcategory, prop}) => {

return (
        <div className='userCard'>   
            <b><div>{title}</div></b>
            <br/>
            <div>Domain: {domain} </div>
            <div>Subcategory: {subcategory}</div>
        </div>
    );
}

export default CompetencyCard;