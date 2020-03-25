import React from 'react';
import HistoryCard from './HistoryCard';

const HistoryList = ({history}) => {
    return(
        <div>
            {
            history.map((evaluation, i) => {
                return(
                    <HistoryCard 
                        day = {evaluation.day}
                        month = {evaluation.month}
                        year = {evaluation.year}
                        evaluationScore = {evaluation.evaluationScore}
                        evaluator = {evaluation.evaluatorID}
                        evidence = {evaluation.evidence}
                        approved = {evaluation.approved}
                    />
                ); 
            })
            }
        </div>
    );
}

export default HistoryList;