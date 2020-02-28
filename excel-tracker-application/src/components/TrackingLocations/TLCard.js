import React, {Component} from 'react';
import './../../styles/UserCard.css';

const TLCard = ({name,instructors, prop}) => {

	const gotodetails = event => {
		if (prop){
	    	prop.history.push({
	          pathname : '/trackinglocationdetails',
	          state :{
	          name: name
	          }
	          } 
	        );
    	}
  	};

return (
        <div className='userCard' onClick = {gotodetails}>   
            <b><div>{name}</div></b>
            <br/>
            <div>Instructors: {instructors|| ''}</div>
        </div>
    );
}

export default TLCard;