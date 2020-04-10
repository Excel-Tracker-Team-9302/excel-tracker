const Types = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_AUTH_TOKEN: "SET_AUTH_TOKEN"
}

const setCurrentUser = userEmail => ({
  type: Types.SET_CURRENT_USER,
  payload: userEmail
})

const setAuthToken = (authToken) => ({
  type: Types.SET_AUTH_TOKEN,
  payload: authToken
})

const ACTIONS = {
  Types,
  setCurrentUser,
  setAuthToken
}

export default ACTIONS;