import { call, put } from "redux-saga/effects";
import { reportGenerateApi } from "../../api/reportGeneratorApi";

export function* generateReport(action){
    try {
        const response = yield call(reportGenerateApi, action.payload)
    yield put({type:'POPULATE_REPORT_DATA', payload: response});
    return response;
    } catch (error) {
        yield put({type:'TOASTER_ON', payload:{
            message:'You have run out of credits !',
            error: true
        }})
    }
    
}