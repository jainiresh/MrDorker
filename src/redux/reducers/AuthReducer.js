import { getStateFromLocal } from "../../utils/stateLocalStorage";


const preLoadedState = getStateFromLocal();

let resetState = {
    isAuthenticated : false
}

const initialState = preLoadedState?.authReducer === undefined ? resetState : preLoadedState?.authReducer

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case 'IS_LOGGED_IN':
            return {
                isAuthenticated: true
            }
        case 'IS_LOGGED_OUT':
            return {
                isAuthenticated: false
            }
        default:
            return state;
    }
}

export default AuthReducer;