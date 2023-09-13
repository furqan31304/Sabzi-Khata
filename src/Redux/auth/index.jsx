import {call,put, takeLatest} from "redux-saga/effects";
import { LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP, FORGET_SUCCESS, FORGET_FAILURE, FORGET, USER_DATA_SUCCESS, USER_DATA_FAILURE, USER_DATA } from "../actionTypes";
import { callApi } from "../../Api/Apis";

function* watcherLogin(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='login';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data.id,"THIS IS AFter");
        yield put({type : LOGIN_SUCCESS,payload:Data.data});
        yield put({type:USER_DATA,payload:{id:Data.data.data.id,is_subadmin:Data.data.data.is_subadmin}});
    }
    else{
        yield put({type:LOGIN_FAILURE,payload:Data.data.error})
    }
}

// function* userData(data) {
//     const formData = new FormData();
//     for (let key in data.payload) {
//       formData.append(key, data.payload[key]);
//     }
//     let url='admin_data';
//     const Data = yield call(callApi, url,'POST',formData);
//     if (Data.status === 200) {
//         yield put({type : USER_DATA_SUCCESS,payload:Data.data});
//     }
//     else{
//         yield put({type:USER_DATA_FAILURE,payload:Data.data.error})
//     }
// }


function* watcherSignUp(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='sign_up';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        yield put({type : SIGNUP_SUCCESS,payload:Data.data});
        yield put({type:USER_DATA,payload:{id:Data.data.data.id,is_subadmin:Data.data.data.is_subadmin}});
    }
    else{
        yield put({type:SIGNUP_FAILURE,payload:Data.data.error})
    }
}
function* watcherForGet(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='reset';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        yield put({type : FORGET_SUCCESS,payload:Data.data});
        console.log('forget Data',Data.data);
    }
    else{
        yield put({type:FORGET_FAILURE,payload:Data.data.error})
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN,watcherLogin)
}
export function* watchSignUp(){
    yield takeLatest(SIGNUP,watcherSignUp)
}
export function* watchForGet(){
    yield takeLatest(FORGET,watcherForGet)
}
// export function* usserData(){
//     yield takeLatest(USER_DATA,userData)
// }