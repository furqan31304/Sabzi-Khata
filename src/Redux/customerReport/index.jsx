import { call, put, takeLatest } from "redux-saga/effects";
import { callApi } from "../../Api/Apis";
import { CUSTOMER_REPORT, CUSTOMER_REPORT_FAILURE, CUSTOMER_REPORT_SUCCESS,} from "../actionTypes";

function* customerReport(data) {
    const formData = new FormData();
    for (let key in data.payload) {
      formData.append(key, data.payload[key]);
    }
    let url='todayList';
    const Data = yield call(callApi, url,'POST',formData);
    if (Data.status === 200) {
        console.log(Data.data.data);
        yield put({type : CUSTOMER_REPORT_SUCCESS,payload:Data.data});
    }
    else{
        yield put({type:CUSTOMER_REPORT_FAILURE,payload:Data.data.error})
    }
}


export function* customerReportSaga() {
    yield takeLatest(CUSTOMER_REPORT,customerReport)
}
