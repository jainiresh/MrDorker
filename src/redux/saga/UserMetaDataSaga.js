import { call, put } from "redux-saga/effects";
import { newUserSubscriptionApi } from "../../api/subscription/newUserSubscriptionApi";

export function* loginV2User(action){
    if(!action.payload.emailVerified){
        yield put({type:'TOASTER_ON', payload:{error:true, message:'Please verify your email address and then try again!'}});
        return;
    }
    yield put({type:'IS_LOGGED_IN'});
    const details = action.payload;
    yield put({type:'USER_METADATA_POPULATE', payload:{
        email: details.email,
        userId: details.uid,
        accessToken: details.accessToken,
        displayName: details.displayName,
        photoUrl: details.photoURL,
        subscriptionPlan: "FREE"
    }})

    yield put({type:'TOASTER_ON', payload:{error:false, message:'Successfully Logged in !'}});
}

export function* registerV2User(){
    yield put({type:'TOASTER_ON', payload:{message:'Registered User successfully and Verification Email Sent !', error:false}});
}

export function* registerViaGoogle(action) {
    yield put({ type: 'IS_LOGGED_IN' });
  
    const details = action.payload;
    console.log('Here 1');
  
    try {
      yield call(newUserSubscriptionApi, { email: details.email, accessToken: details.accessToken });
    } catch (error) {
      console.error('Error during user subscription:', error);
      // Handle the error appropriately (e.g., log to a service, display a user-friendly error message)
    }
  
    yield put({ type: 'NEW_SUBSCRIPTION_FREE', payload: details.email });
  
    yield put({
      type: 'USER_METADATA_POPULATE',
      payload: {
        email: details.email,
        userId: details.uid,
        accessToken: details.accessToken,
        displayName: details.displayName,
        photoUrl: details.photoURL,
        subscriptionPlan: 'FREE',
      },
    });
  
    yield put({ type: 'TOASTER_ON', payload: { error: false, message: 'Successfully Logged in!' } });
  }