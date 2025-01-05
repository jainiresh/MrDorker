import { getStateFromLocal } from "../../utils/stateLocalStorage";
import store from "../store";

const preLoadedState = getStateFromLocal();
let emptyState = {
  userId: '0',
  displayName : undefined,
  email: '',
  photoUrl: '',
  accessToken: ''
} ;


function userDetailsReducer(state = emptyState, action) {
  console.log('Here inside reducer ', state)
    switch (action.type) {
      case 'LOAD_USER_STATE_FROM_LOCAL': {
        const loadedState = getStateFromLocal();
        return loadedState?.userDetailsReducer || emptyState; 
      }
      case 'USER_METADATA_POPULATE':{
        const {email, accessToken, userId, displayName, photoUrl} = action.payload;
        return {...state, email, accessToken, userId, displayName, photoUrl};
      }
      case 'CLEAR_USER_METADATA':
      default:
        return emptyState
    }
  }
export default userDetailsReducer;