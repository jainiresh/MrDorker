import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import {mySaga} from './saga'
import { saveStateToLocal } from '../utils/stateLocalStorage';
import rootReducer from './reducers';




const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

store.subscribe(()=>{
    saveStateToLocal(store.getState())
    console.log('Subscribed : ', store.getState)
})
sagaMiddleware.run(mySaga)

export default store;

