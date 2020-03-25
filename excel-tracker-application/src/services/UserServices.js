import dummyData from './DummyData'


const UserServices = {
  inviteNewUser: function(userId, type) {
    return null;
  },

  getStudents: function() {
    return dummyData.users.filter((user) => (user.role && user.role == 'Student'))
  },

  getInstructors: function() {
    return dummyData.users.filter((user) => (user.role && user.role == 'Faculty/Staff'))
  },

  sendResetPasswordLink: function(userEmail) {
    return null;
  },

  getMentors: function() {
    return dummyData.users.filter((user) => (user.role && user.role == 'Mentor'))
  },

  assignMentor: function(studentEmail, mentorEmail) {
    return null
  },

  getTrackingLocations() {
    return dummyData.trackingLocations
  },

  getCompetencies() {
    return dummyData.competencies
  },

  deleteStudent(studentEmail) {
    return null;
  },

  getMentor(studentEmail) {
    let student = dummyData.users.filter((user) => user.email == studentEmail);
    console.log("GOODBYE", student)
    return student[0].mentor;
  },

  unassignMentor(studentEmail) {
    return null
  },

  searchTrackingLocations(search) {
    return dummyData.trackingLocations.filter((trackingLocation) => (trackingLocation.name.toLowerCase().includes(search.toLowerCase()))||search =='') 
  },

  searchCompetencies(search) {
    return dummyData.competencies.filter((competency) => (competency.title.toLowerCase().includes(search.toLowerCase()))||search =='') 
  },

  getTrackingLocation(tlid) {
    return dummyData.trackingLocations.filter((trackingLocation) => (trackingLocation.locationID == tlid))
  },

  createTrackingLocation(name) {
    return null
  },

  addCompToTL(compId, track) {
    console.log(compId)
    return null
  },

  addStudentToTL(studentEmail, track) {
    console.log(studentEmail)
    return null
  },

  addInstructorToTL(instructorEmail, track) {
    console.log(instructorEmail)
    return null
  },

  getInstructor(emails) {
    return dummyData.users.filter((user) => emails.includes(user.email))
  }, 
  tlToCompetency(cids) {
    return dummyData.competencies.filter((competency) => cids.includes(competency.id))
  },
  getStudent(emails) {
    return dummyData.users.filter((user) => emails.includes(user.email))
  }, 
  
  getUser(email) {
    return dummyData.users.filter((user) => email == (user.email))[0]
  }, 
}

export default UserServices;