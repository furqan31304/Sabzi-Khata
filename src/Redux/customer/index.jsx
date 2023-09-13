import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../Api/Apis";
import { CUSTOMER_ADD, CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_SUCCESS, CUSTOMER_GET, CUSTOMER_GET_FAILURE, CUSTOMER_GET_SUCCESS, CUSTOMER_HISTORY, CUSTOMER_HISTORY_DETAILS, CUSTOMER_HISTORY_DETAILS_FAILURE, CUSTOMER_HISTORY_DETAILS_SUCCESS, CUSTOMER_HISTORY_FAILURE, CUSTOMER_HISTORY_SUCCESS, CUSTOMER_UPDATE, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_SUCCESS, PAY_AMOUNT, PAY_AMOUNT_FAILURE, PAY_AMOUNT_SUCCESS } from "../actionTypes";

function* customerGet(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='customerGet';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : CUSTOMER_GET_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:CUSTOMER_GET_FAILURE,payload:Data.data.error})
    }
}
function* customerUPDATE(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='customerUpdate';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data.id,"THIS IS AFter");
        yield put({type : CUSTOMER_UPDATE_SUCCESS,payload:Data.data});
        yield put({type : CUSTOMER_GET,payload:{admin_id:localStorage.getItem('authToken')}});
    }
    else{
        yield put({type:CUSTOMER_UPDATE_FAILURE,payload:Data.data.error})
    }
}
function* customerADD(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='customerAdd';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.id,"THIS IS AFter");
        yield put({type : CUSTOMER_ADD_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:CUSTOMER_ADD_FAILURE,payload:Data.data.error})
    }
}
function* customerPay(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='payAmount';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.id,"THIS IS AFter");
        yield put({type : PAY_AMOUNT_SUCCESS,payload:Data.data});
        yield put({type : CUSTOMER_GET,payload:{admin_id:localStorage.getItem('authToken')}});
    }
    else{
        yield put({type:PAY_AMOUNT_FAILURE,payload:Data.data.error})
    }
}


function* customerHistory(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='customerReports';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log("Reports Response:",Data.data.data);
        yield put({type : CUSTOMER_HISTORY_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:CUSTOMER_HISTORY_FAILURE,payload:Data.data.error})
    }
}


function* customerHistoryDetails(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='saleDetail';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : CUSTOMER_HISTORY_DETAILS_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:CUSTOMER_HISTORY_DETAILS_FAILURE,payload:Data.data.error})
    }
}




export function* customerGetSaga() {
    yield takeLatest(CUSTOMER_GET,customerGet)
}
export function* customerAddSaga() {
    yield takeLatest(CUSTOMER_ADD,customerADD)
}
export function* customerUpdateSaga() {
    yield takeLatest(CUSTOMER_UPDATE,customerUPDATE)
}
export function* customerPaySaga() {
    yield takeLatest(PAY_AMOUNT,customerPay)
}
export function* customerHistorySaga() {
    yield takeLatest(CUSTOMER_HISTORY,customerHistory)
}
export function* customerHistoryDetailsSaga() {
    yield takeLatest(CUSTOMER_HISTORY_DETAILS,customerHistoryDetails)
}