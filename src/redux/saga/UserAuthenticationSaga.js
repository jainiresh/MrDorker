import { put } from "redux-saga/effects";

export function* logoutV2User(action){
    console.log('Heer logout')
    yield put({type:'IS_LOGGED_OUT'});
    yield put({type:'CLEAR_USER_METADATA'});
}