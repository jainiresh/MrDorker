import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import userDetailsReducer from "./UserDetailsReducer";

const rootReducer = combineReducers(
    {
        authReducer: AuthReducer,
        userDetailsReducer : userDetailsReducer
    }
)

export default rootReducer;