import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import userDetailsReducer from "./UserDetailsReducer";
import loaderStateReducer from "./LoaderStateReducer";
import ToastReducer from "./ToastReducer";

const rootReducer = combineReducers(
    {
        authReducer: AuthReducer,
        userDetailsReducer : userDetailsReducer,
        ToastReducer: ToastReducer,
        loaderStateReducer: loaderStateReducer
    }
)

export default rootReducer;