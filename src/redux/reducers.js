const { getStateFromLocal } = require("../utils/stateLocalStorage");

const preLoadedState = getStateFromLocal();
let emptyState = {
  userId: '0',
  username : 'initial',
  email: '',
  authToken: '',
  error: true
} ;

const initialState = preLoadedState === undefined ? emptyState : preLoadedState;


function login(state = initialState, action) {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS':
      case 'USER_REGISTER_SUCCESS':
        // console.log('From state : ' + JSON.stringify(action.payload))
        return {
          ...state, userId: action.payload.userId, username: action.payload.username, eail: action.payload.email, authToken: action.payload.authToken, error:false
        }
      case 'UESR_LOGIN_FAILED':
      case 'USER_REGISTER_FAILED':
        return emptyState;


      default:
        return initialState
    }
  }

  module.exports = {login}