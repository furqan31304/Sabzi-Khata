import { all } from "redux-saga/effects";
import  {useData, userData, watchForGet, watchLogin,watchSignUp}  from "../Redux/auth";
import { customerAddSaga, customerGetSaga, customerHistoryDetailsSaga, customerHistorySaga, customerPaySaga, customerUpdateSaga } from "../Redux/customer";
import { productAddSaga, productGetSaga, productToggleSaga, productUpdateSaga } from "../Redux/product";
import { userDataSaga, usserData } from "../Redux/userdata";
import { activeProductGetSaga, cartSaga } from "../Redux/pos";
import customerDashboardReducer from "../Redux/dashboard/reducer";
import { customerDashboardSaga, supplierDashboardSaga } from "../Redux/dashboard";
import { supplierAddSaga, supplierGetSaga, supplierHistoryDetailsSaga, supplierHistorySaga, supplierPaySaga, supplierUpdateSaga } from "../Redux/supplier";
import { customerReportSaga } from "../Redux/customerReport";
import { supplierReportSaga } from "../Redux/supplierReport";
import { cartSupplierSaga } from "../Redux/posSupplier";
// import CalculatorSaga from "../redux/calculator";
// import SubscriptionSaga from "../redux/createSubscription";
// import AllRecruiterSaga from "../redux/recruiter";
// import AllUserData from "../redux/user";
// import JobSaga from "../redux/createJob";
// import userManagement from "../redux/userManagement";
export default function* rootSagas() {
    yield all([
        // AllUserData(),
        watchLogin(),
        watchSignUp(),
        watchForGet(),
        userDataSaga(),
        // customer Saga
        customerAddSaga(),
        customerUpdateSaga(),
        customerGetSaga(),
        customerPaySaga(),
        customerHistorySaga(),
        customerHistoryDetailsSaga(),
        
        // Product Saga
        productAddSaga(),
        productUpdateSaga(),
        productGetSaga(),
        productToggleSaga(),
        activeProductGetSaga(),

        // dashboard saga
        customerDashboardSaga(),
        supplierDashboardSaga(),

        // Supplier Saga
        supplierAddSaga(),
        supplierUpdateSaga(),
        supplierGetSaga(),
        supplierPaySaga(),
        supplierHistorySaga(),
        supplierHistoryDetailsSaga(),
        cartSaga(),
        cartSupplierSaga(),
        customerReportSaga(),
        supplierReportSaga()
       


        
        // userManagement(),
        // AllRecruiterSaga(),
        // CalculatorSaga(),
        // SubscriptionSaga(),
        // JobSaga()
    ])
}