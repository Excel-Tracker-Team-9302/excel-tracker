import React from 'react';
import TLCard from './TLCard';

/**
 * Iterates over all of the tracking locations
 * in the Excel Program, creating a clickable
 * card for each
 * 
 * (Febuary 2020)
 */
const TLList = ({TrackingLocations, prop}) => {
    return(
        <div>
            {
            TrackingLocations.map((TrackingLocation, i) => {
                return(
                    <TLCard 
                        name={TrackingLocations[i].name} 
                        instructors={TrackingLocations[i].instructors}
                        id = {TrackingLocations[i].locationID}
                        prop = {prop}
                    />
                ); 
            })
            }
        </div>
    );
}

export default TLList;