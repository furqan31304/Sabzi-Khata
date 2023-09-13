import { call, put, takeLatest } from "redux-saga/effects";
import { callApi2 } from "../../Api/Apis";
import { SUPPLIER_ADD, SUPPLIER_ADD_FAILURE, SUPPLIER_ADD_SUCCESS, SUPPLIER_GET, SUPPLIER_GET_FAILURE, SUPPLIER_GET_SUCCESS, SUPPLIER_HISTORY, SUPPLIER_HISTORY_DETAILS, SUPPLIER_HISTORY_DETAILS_FAILURE, SUPPLIER_HISTORY_DETAILS_SUCCESS, SUPPLIER_HISTORY_FAILURE, SUPPLIER_HISTORY_SUCCESS, SUPPLIER_UPDATE, SUPPLIER_UPDATE_FAILURE, SUPPLIER_UPDATE_SUCCESS, PAY_AMOUNT_SUPPLIER, PAY_AMOUNT_SUPPLIER_FAILURE, PAY_AMOUNT_SUPPLIER_SUCCESS } from "../actionTypes";

function* supplierGet(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='supplierGet';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : SUPPLIER_GET_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:SUPPLIER_GET_FAILURE,payload:Data.data.error})
    }
}
function* supplierUPDATE(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='supplierUpdate';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data.id,"THIS IS AFter");
        yield put({type : SUPPLIER_UPDATE_SUCCESS,payload:Data.data});
        yield put({type : SUPPLIER_GET,payload:{admin_id:localStorage.getItem('authToken')}});
    }
    else{
        yield put({type:SUPPLIER_UPDATE_FAILURE,payload:Data.data.error})
    }
}
function* supplierADD(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='supplierAdd';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.id,"THIS IS AFter");
        yield put({type : SUPPLIER_ADD_SUCCESS,payload:Data.data});
        yield put({type : SUPPLIER_GET,payload:{admin_id:localStorage.getItem('authToken')}});
    }
    else{
        yield put({type:SUPPLIER_ADD_FAILURE,payload:Data.data.error})
    }
}
function* supplierPay(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='payAmount';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.id,"THIS IS AFter");
        yield put({type : PAY_AMOUNT_SUPPLIER_SUCCESS,payload:Data.data});
        yield put({type : SUPPLIER_GET,payload:{admin_id:localStorage.getItem('authToken')}});
    }
    else{
        yield put({type:PAY_AMOUNT_SUPPLIER_FAILURE,payload:Data.data.error})
    }
}


function* supplierHistory(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='supplierReports';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log("Reports Response:",Data.data.data);
        yield put({type : SUPPLIER_HISTORY_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:SUPPLIER_HISTORY_FAILURE,payload:Data.data.error})
    }
}


function* supplierHistoryDetails(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='purchaseDetail';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : SUPPLIER_HISTORY_DETAILS_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:SUPPLIER_HISTORY_DETAILS_FAILURE,payload:Data.data.error})
    }
}




export function* supplierGetSaga() {
    yield takeLatest(SUPPLIER_GET,supplierGet)
}
export function* supplierAddSaga() {
    yield takeLatest(SUPPLIER_ADD,supplierADD)
}
export function* supplierUpdateSaga() {
    yield takeLatest(SUPPLIER_UPDATE,supplierUPDATE)
}
export function* supplierPaySaga() {
    yield takeLatest(PAY_AMOUNT_SUPPLIER,supplierPay)
}
export function* supplierHistorySaga() {
    yield takeLatest(SUPPLIER_HISTORY,supplierHistory)
}
export function* supplierHistoryDetailsSaga() {
    yield takeLatest(SUPPLIER_HISTORY_DETAILS,supplierHistoryDetails)
}