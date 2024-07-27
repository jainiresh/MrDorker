import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import {mySaga} from './saga'
import { login } from './reducers';
import { saveStateToLocal } from '../utils/stateLocalStorage';




const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: login,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

store.subscribe(()=>{
    saveStateToLocal(store.getState())
})
sagaMiddleware.run(mySaga)

