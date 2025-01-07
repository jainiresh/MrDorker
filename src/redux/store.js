import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import {mySaga} from './saga/saga'
import { saveStateToLocal } from '../utils/stateLocalStorage';
import rootReducer from './reducers';
import AuthReducer from './reducers/AuthReducer';
import userDetailsReducer from './reducers/UserDetailsReducer';
import ToastReducer from './reducers/ToastReducer';
import loaderStateReducer from './reducers/LoaderStateReducer';
import { reportReducer } from './reducers/ReportReducer';
import subscriptionReducer from './reducers/SubscriptionReducer';




const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        authReducer: AuthReducer,
        userDetailsReducer : userDetailsReducer,
        ToastReducer: ToastReducer,
        loaderStateReducer: loaderStateReducer,
        ReportDataReducer: reportReducer,
        SubscriptionReducer : subscriptionReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

store.subscribe(()=>{
    saveStateToLocal(store.getState())
    console.log('Subscribed : ', store.getState())
})
sagaMiddleware.run(mySaga)

export default store;

