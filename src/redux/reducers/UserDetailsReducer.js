import { getStateFromLocal } from "../../utils/stateLocalStorage";

let emptyState = {
  userId: '0',
  displayName : undefined,
  email: '',
  photoUrl: '',
  accessToken: '',
  subscriptionPlan: ''
} ;


function userDetailsReducer(state = emptyState, action) {
    switch (action.type) {
      case 'LOAD_USER_STATE_FROM_LOCAL': {
        const loadedState = getStateFromLocal();
        return loadedState?.userDetailsReducer || emptyState; 
      }
      case 'USER_METADATA_POPULATE':{
        const {email, accessToken, userId, displayName, photoUrl, subscriptionPlan} = action.payload;
        return {...state, email, accessToken, userId, displayName, photoUrl, subscriptionPlan};
      }
      case 'CLEAR_USER_METADATA':
        return emptyState;
      default:
        return state;
    }
  }
export default userDetailsReducer;