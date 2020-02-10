import dummyData from './DummyData'


const UserServices = {
  inviteNewUser: function(userId, type) {
    return null;
  },

  sendResetPasswordLink: function(userEmail) {
    return null;
  },

  getMentors: function() {
    return dummyData.users.filter((user) => (user.role && user.role == 'Mentor'))
  },

  assignMentor: function(studentEmail, mentorEmail) {
    return null
  }
}

export default UserServices;