import React from 'react';
import CompetencyCard from './CompetencyCard';
import DeleteButton from '../TrackingLocations/DeleteButton';
import CreateCompetencyButton from '../Common/CreateCompetencyButton';


/**
 * Renderos a list of competencies for the Competency page.
 * The Competency cards display basic information about the caompetency and
 * have the option to edit of delete the competency. 
 * 
 * (March 2020)
 *
 */
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
                    <CreateCompetencyButton buttonTitle="Confirm" title="Edit Competency" id={Competencies[i].id} />
                    <DeleteButton></DeleteButton>
        </div>
                ); 
            })
            }
        </div>
    );
}

export default CompetenciesList;