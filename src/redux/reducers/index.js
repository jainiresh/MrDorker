import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import userDetailsReducer from "./UserDetailsReducer";
import toastReducer from "./ToastReducer";

const rootReducer = combineReducers(
    {
        authReducer: AuthReducer,
        userDetailsReducer : userDetailsReducer,
        toastReducer: toastReducer
    }
)

export default rootReducer;