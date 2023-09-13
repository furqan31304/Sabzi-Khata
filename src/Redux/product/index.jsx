import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../Api/Apis";
import { CUSTOMER_ADD, CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_SUCCESS, CUSTOMER_GET, CUSTOMER_GET_FAILURE, CUSTOMER_GET_SUCCESS, CUSTOMER_UPDATE, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_SUCCESS, PAY_AMOUNT, PAY_AMOUNT_FAILURE, PAY_AMOUNT_SUCCESS, PRODUCT_ADD, PRODUCT_ADD_FAILURE, PRODUCT_ADD_SUCCESS, PRODUCT_GET, PRODUCT_GET_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_TOGGLE, PRODUCT_TOGGLE_FAILURE, PRODUCT_TOGGLE_SUCCESS, PRODUCT_UPDATE, PRODUCT_UPDATE_FAILURE, PRODUCT_UPDATE_SUCCESS } from "../actionTypes";

function* productGet(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='productGet';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : PRODUCT_GET_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type: PRODUCT_GET_FAILURE,payload:Data.data.error})
    }
}
function* productUPDATE(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='productUpdate';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data.id,"THIS IS AFter");
        yield put({type : PRODUCT_UPDATE_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:PRODUCT_UPDATE_FAILURE,payload:Data.data.error})
    }
}
function* productADD(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='productAdd';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.id,"THIS IS AFter");
        yield put({type : PRODUCT_ADD_SUCCESS,payload:Data.data});
        yield put({type:PRODUCT_GET,payload:{admin_id:localStorage.getItem('authToken')}});

    }
    else{
        yield put({type:PRODUCT_ADD_FAILURE,payload:Data.data.error})
    }
}

function* productToggle(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='productDisable';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data.id,"THIS IS AFter");
        yield put({type : PRODUCT_TOGGLE_SUCCESS,payload:Data.data});
        yield put({type:PRODUCT_GET,payload:{admin_id:localStorage.getItem('authToken')}});
    }
    else{
        yield put({type:PRODUCT_TOGGLE_FAILURE,payload:Data.data.error})
    }
}

export function* productGetSaga() {
    yield takeLatest(PRODUCT_GET,productGet)
}
export function* productAddSaga() {
    yield takeLatest(PRODUCT_ADD,productADD)
}
export function* productUpdateSaga() {
    yield takeLatest(PRODUCT_UPDATE,productUPDATE)
}
export function* productToggleSaga() {
    yield takeLatest(PRODUCT_TOGGLE,productToggle)
}
