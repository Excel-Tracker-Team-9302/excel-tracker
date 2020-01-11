const Types = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
}

const setCurrentUser = userEmail => ({
  type: Types.SET_CURRENT_USER,
  payload: userEmail
})

const ACTIONS = {
  Types,
  setCurrentUser
}

export default ACTIONS;