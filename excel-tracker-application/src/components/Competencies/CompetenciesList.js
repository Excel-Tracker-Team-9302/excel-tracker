import React from 'react';
import CompetencyCard from './CompetencyCard';
import DeleteButton from '../TrackingLocations/DeleteButton';
import CreateCompetencyButton from '../Common/CreateCompetencyButton';


const CompetenciesList = ({Competencies, prop}) => {
    return(
        <div>
            {
            Competencies.map((Competency, i) => {
                return(
                    <div className="side-by-side-icons">
                    <CompetencyCard 
                        title={Competencies[i].title} 
                        domain={Competencies[i].domain}
                        subcategory={Competencies[i].subcategory} 
                        prop = {prop}
                    />
                    <DeleteButton></DeleteButton>
                    <CreateCompetencyButton buttonTitle="Confirm" title="Edit Competency" id={Competencies[i].id} />
        </div>
                ); 
            })
            }
        </div>
    );
}

export default CompetenciesList;