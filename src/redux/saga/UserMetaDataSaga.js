import { put } from "redux-saga/effects";

export function* loginV2User(action){
    yield put({type:'TOASTER_ON'});
    yield put({type:'IS_LOGGED_IN'});
    console.log('Payyload ', action.payload);
    const details = action.payload;
    yield put({type:'USER_METADATA_POPULATE', payload:{
        email: details.email,
        userId: details.uid,
        accessToken: details.accessToken,
        displayName: details.displayName,
        photoUrl: details.photoURL
    }})
}