import { call, put, takeLatest } from "redux-saga/effects";
import { callApi2 } from "../../Api/Apis";
import { SUPPLIER_REPORT, SUPPLIER_REPORT_FAILURE, SUPPLIER_REPORT_SUCCESS,} from "../actionTypes";

function* supplierReport(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='todayList';
    const Data = yield call(callApi2, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : SUPPLIER_REPORT_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:SUPPLIER_REPORT_FAILURE,payload:Data.data.error})
    }
}


export function* supplierReportSaga() {
    yield takeLatest(SUPPLIER_REPORT,supplierReport)
}
