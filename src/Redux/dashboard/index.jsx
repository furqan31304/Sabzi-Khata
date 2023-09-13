import { call, put, takeLatest } from "redux-saga/effects";
import { callApi2,callApi } from "../../Api/Apis";
import { CUSTOMER_ADD, CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_SUCCESS, CUSTOMER_DASHBOARD, CUSTOMER_DASHBOARD_FAILURE, CUSTOMER_DASHBOARD_SUCCESS, CUSTOMER_GET, CUSTOMER_GET_FAILURE, CUSTOMER_GET_SUCCESS, CUSTOMER_UPDATE, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_SUCCESS, PAY_AMOUNT, PAY_AMOUNT_FAILURE, PAY_AMOUNT_SUCCESS, SUPPLIER_DASHBOARD, SUPPLIER_DASHBOARD_FAILURE, SUPPLIER_DASHBOARD_SUCCESS } from "../actionTypes";

function* customerDashboard(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='dashbord';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : CUSTOMER_DASHBOARD_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:CUSTOMER_DASHBOARD_FAILURE,payload:Data.data.error})
    }
}

function* supplierDashboard(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='dashbord';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log("Supplier Response",Data.data.data);
        yield put({type :SUPPLIER_DASHBOARD_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:SUPPLIER_DASHBOARD_FAILURE,payload:Data.data.error})
    }
}
export function* customerDashboardSaga() {
    yield takeLatest(CUSTOMER_DASHBOARD,customerDashboard)
}
export function* supplierDashboardSaga() {
    yield takeLatest(SUPPLIER_DASHBOARD,supplierDashboard)
}