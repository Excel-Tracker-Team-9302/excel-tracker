import dummyData from './DummyData'


const ComptencyServices = {
  getCompetencyDomains: function() {
    return ["Transportation", "Employment/Careers", "Social and Leadership Development"]
  },

  getCompetencySubCategories: function(domain) {
    let subcategories = {
      "Transportation" : ["Uber/Lyft", "Bus and Train Systems", "Communication"],
      "Employment/Careers": ["Hygiene & Physical Presentation", "Planning and Preparation", "Communication and Behavior", "Work Skills"],
      "Social and Leadership Development": ["General Social Skills", "Romantic"]
    }

    if (subcategories[domain]) {
      return subcategories[domain]
    } 

    return []
  },

  getCompetencyLevels: function() {
    return ["Beginner", "Intermediate", "Advanced", "Expert"]
  },
  
  getEvaluationFrequencies: function() {
    return ["Month", "Semester", "Year"]
  },

  getCompetencies: function() {
    return dummyData.competencies
  },

  getCompetencyById: function(id) {
    return dummyData.competencies.find((competency) => competency.id == id)
  },

  createCompetency: function(competency) {
    return true
  }

}

export default ComptencyServices;