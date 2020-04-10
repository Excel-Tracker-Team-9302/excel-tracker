import React, {Component} from 'react';
import './../../styles/UserCard.css';

/**
 * Tracking Location Card item displayedd on the tracking locations page
 * Will navigate to the tracking locations details page when
 * it is selected.
 * 
 * (Febuary 2020)
 */
const TLCard = ({name,instructors, id, prop}) => {

	const gotodetails = event => {
		if (prop){
	    	prop.history.push({
	          pathname : '/trackinglocationdetails',
	          state :{
			  name: name,
			  id: id,
	          }
	          } 
	        );
    	}
  	};

return (
        <div className='userCard' onClick = {gotodetails}>   
            <b><div>{name}</div></b>
            <br/>
            <div>Instructors: {instructors.toString()}</div>
        </div>
    );
}

export default TLCard;