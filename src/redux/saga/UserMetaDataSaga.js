import { put } from "redux-saga/effects";

export function* loginV2User(action){
    console.log('Here first', action.payload.emailVerified)
    if(!action.payload.emailVerified){
        yield put({type:'TOASTER_ON', payload:{error:true, message:'Please verify your email address and then try again!'}});
        return;
    }
    console.log('Here second')
    yield put({type:'IS_LOGGED_IN'});
    const details = action.payload;
    yield put({type:'USER_METADATA_POPULATE', payload:{
        email: details.email,
        userId: details.uid,
        accessToken: details.accessToken,
        displayName: details.displayName,
        photoUrl: details.photoURL
    }})

    yield put({type:'TOASTER_ON', payload:{error:false, message:'Successfully Logged in !'}});
}

export function* registerV2User(){
    yield put({type:'TOASTER_ON', payload:{message:'Registered User successfully and Verification Email Sent !', error:false}});
}
