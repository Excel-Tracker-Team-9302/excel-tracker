import React from 'react';
import CompetencyCard from './CompetencyCard';
import DeleteButton from '../TrackingLocations/DeleteButton';


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
        </div>
                ); 
            })
            }
        </div>
    );
}

export default CompetenciesList;