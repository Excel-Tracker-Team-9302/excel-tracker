import React from 'react';
import TLCard from './TLCard';

const TLList = ({TrackingLocations, prop}) => {
    return(
        <div>
            {
            TrackingLocations.map((TrackingLocation, i) => {
                return(
                    <TLCard 
                        name={TrackingLocations[i].name} 
                        instructors={TrackingLocations[i].instructors}
                        prop = {prop}
                    />
                ); 
            })
            }
        </div>
    );
}

export default TLList;