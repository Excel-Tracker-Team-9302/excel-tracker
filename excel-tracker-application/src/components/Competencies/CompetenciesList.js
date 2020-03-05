import React from 'react';
import CompetencyCard from './CompetencyCard';
import DeleteButton from '../TrackingLocations/DeleteButton';
import EditButton from '../TrackingLocations/EditButton';


const CompetenciesList = ({Competencies, prop}) => {
    return(
        <div>
            {
            Competencies.map((Competencie, i) => {
                return(
                    <div className="side-by-side-icons">
                    <CompetencyCard 
                        title={Competencies[i].title} 
                        domain={Competencies[i].domain}
                        subcategory={Competencies[i].subcategory} 
                        prop = {prop}
                    />
                    <DeleteButton></DeleteButton>
                    <EditButton></EditButton>
        </div>
                ); 
            })
            }
        </div>
    );
}

export default CompetenciesList;