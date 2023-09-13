import {call,put, takeLatest} from "redux-saga/effects";
import { LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP, FORGET_SUCCESS, FORGET_FAILURE, FORGET, USER_DATA_SUCCESS, USER_DATA_FAILURE, USER_DATA } from "../actionTypes";
import { callApi } from "../../Api/Apis";
function* userDataa(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='admin_data';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        yield put({type : USER_DATA_SUCCESS,payload:Data.data.data[0]});
        console.log("Response",Data.data)
    }
    else{
        yield put({type:USER_DATA_FAILURE,payload:Data.data.error})
        
    }
}
export function* userDataSaga(){
    yield takeLatest(USER_DATA,userDataa)
}