import React from 'react';
import CompetencyCard from './CompetencyCard';

const CompetenciesList = ({Competencies, prop}) => {
    return(
        <div>
            {
            Competencies.map((Competencie, i) => {
                return(
                    <CompetencyCard 
                        title={Competencies[i].title} 
                        domain={Competencies[i].domain}
                        subcategory={Competencies[i].subcategory} 
                        prop = {prop}
                    />
                ); 
            })
            }
        </div>
    );
}

export default CompetenciesList;