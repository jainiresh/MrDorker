import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

let userId = 0;

async function loginBackendRequest (loginPayload){
    try{
        const response =  await axios.post(`http://localhost:3002/authService/login`, loginPayload);
        // console.log("Login response : " + JSON.stringify(response))
        if(!response.data || !response.data.authToken){
            return {error: true, userData: '', authToken: ''}
        }
        return {userId: response.data.userId, username : response.data.username, email: response.data.email, authToken: response.data.authToken}
    }
    catch(e){
            console.log("Error logging in!")
            return {error: true, userData: '', authToken: ''};
    }
    
}

async function registrationBackendRequest(registerPayload){
    try {
        const response = await axios.post(process.env.REACT_APP_BACKEND_URL + "/authService/login", registerPayload)
        // console.log("Register response " + JSON.stringify(response));
        if(!response.data || !(response.data.authToken)){
            return {error: true, userData: '', authToken: ''};
        }
        return {userId: response.data.userId, username : response.data.username, email: response.data.email, authToken: response.data.authToken}
    } catch (error) {
        console.log('Error registering the user !')
        return {error: true, userData: '', authToken: ''};
    }
}

function* loginUser (action){
    try {
        // console.log(
        //     "Pre login call : " + JSON.stringify(action.payload)
        // )
        const loginResponse = yield call(loginBackendRequest, action.payload)
        // console.log(
        //     "Post login call" + JSON.stringify(loginResponse)
        // )
        if(!loginResponse.error){
        yield put({type: 'USER_LOGIN_SUCCESS', payload: loginResponse})
}
        else
        yield put ({type: 'UESR_LOGIN_FAILED', message: 'Login failed'})
    } catch (error) {
        yield put ({type: 'UESR_LOGIN_FAILED', message: error.message})
    }
}

function* registerUser(action){
    try{
        // console.log(
        //     "Pre reg call : " + JSON.stringify(action.payload)
        // )
        const regResponse = yield call(registrationBackendRequest, action.payload)
        // console.log(
        //     "Post reg call" + JSON.stringify(regResponse)
        // )
        if(!regResponse.error)
            yield put ({type:'USER_REGISTER_SUCCESS', payload: regResponse})
        else
            yield put ({type: 'USER_REGISTER_FAILED', message: 'Registration failed'})
    }
    catch (error) {
        yield put ({type: 'USER_REGISTER_FAILED', message: error.message})
    }
}


export function* mySaga(){
    yield takeEvery('USER_LOGIN_REQUEST', loginUser)
    yield takeEvery('USER_REGISTER_REQUEST', registerUser)
}