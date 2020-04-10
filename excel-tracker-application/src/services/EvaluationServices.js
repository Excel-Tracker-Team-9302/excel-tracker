import dummyData from './DummyData'

const EvaluationServices = {

  getHistoryforUserComp(userId, compId) {
    return dummyData.evaluations.filter((evaluation) => compId === evaluation.competencyID && userId === evaluation.userID)
                                .sort(function(a, b){
                                  if (a.year < b.year) {
                                    return 1;
                                  } else if (a.year > b.year) {
                                    return -1;
                                  } else if (a.month < b.month) {
                                    return 1;
                                  } else if (a.month > b.month) {
                                    return -1;
                                  } else if (a.day < b.day) {
                                    return 1;
                                  }
                                  return -1;
                                })
  },  
}

export default EvaluationServices;