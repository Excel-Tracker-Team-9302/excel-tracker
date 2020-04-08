import dummyData from './DummyData'
import Config from './../Config'

const key = 'eyJraWQiOiIxY1VGTnVraGl6eEFEQjVlQUR0dUQ0WlhBMGE5eVNWVTNDa1RmZTF4cGlVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMGQyYzYxMC1mMmJhLTQ4OTQtYTJlMS0yMTY0ZGJkYTgzMzAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfYTVlWjQ0ZFh4IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6InRlc3RhZG1pbiIsImF1ZCI6IjR2cm8wNTJ1M2xjdWkxZGJmN29oYjU0b2k3IiwiZXZlbnRfaWQiOiJlZTFlZTBmZC00ZjZjLTQwMTctYWVkMS04NGY2MjFhNjU1NjIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU4NjIxNDg4MSwibmFtZSI6IkphY29iIEFsbGVuIiwiZXhwIjoxNTg2MjE4NDgxLCJjdXN0b206cm9sZSI6IkFkbWluIiwiaWF0IjoxNTg2MjE0ODgxLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20ifQ.We9EzNv9p3T4QszpZFWGUWRNd8qAlFarLlyc6LZsbT4eLI5tI9IJ5pcCnmZdZDr9T6ALPvOxtsBCVoobUeQCUqW41U9Of-L-ER8ciQ-_y40yrtu6n1Kr2VlcmmH8L79TqwXhrIGik3rqwuhziLVmXkCd4frQepelWdUhTXRcOFPsEqJd4XK64_90oG3732UW95g6fQ0zGFqbLMP8hYcVPPa6NGZj2SUUccrW7zSrXbU3i2oZQa9OxxCouJZxwuTEPCoBGlo-AusI3tmrENV7Hq1iWNFTe79GgbEJzt4BAsx8I8HA2eSu2id0p3LIm_6haMpivAtv6mzE7ENHn3_QnQ'

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

  async createTrackingLocation(name) {
    let data = {
      "LocationName": name,
      "CompetencyIds": "[]",
    }

    let url = Config.baseAPI + '/tracking-locations-to-competencies'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      },
      body: JSON.stringify(data)
    })

    return response

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
}

export default UserServices;