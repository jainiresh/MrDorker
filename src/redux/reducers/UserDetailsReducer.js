import { getStateFromLocal } from "../../utils/stateLocalStorage";


const preLoadedState = getStateFromLocal();
let emptyState = {
  userIds: '0',
  username : 'initial',
  email: '',
  authToken: '',
  error: true
} ;

const initialState = preLoadedState?.userDetailsReducer === undefined ? emptyState : preLoadedState?.userDetailsReducer;


function userDetailsReducer(state = initialState, action) {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS':
      case 'USER_REGISTER_SUCCESS':
        // console.log('From state : ' + JSON.stringify(action.payload))
        return {
          ...state, userId: action.payload.userId, username: action.payload.username, email: action.payload.email, authToken: action.payload.authToken, error:false
        }
      case 'UESR_LOGIN_FAILED':
      case 'USER_REGISTER_FAILED':
        return emptyState;


      default:
        return initialState
    }
  }
export default userDetailsReducer;