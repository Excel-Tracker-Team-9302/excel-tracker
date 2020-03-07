import React, {Component} from 'react';
import './../../styles/UserCard.css';


/**
 * An individual Competency Card to be displayed in the competency
 * list. Requires that information to be displayed is passed in.
 * 
 * (March 2020)
 * 
 */
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