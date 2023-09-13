import {combineReducers} from 'redux'
import authReducer from './auth/reducer'
import sidebarReducer from './sidebartoggle/reducer'
import userReducer from './userdata/reducer'
import customerReducer from './customer/reducer';
import productReducer from './product/reducer';
import posReducer from './pos/reducer';
import dashboardReducer from './dashboard/reducer';
import supplierReducer from './supplier/reducer';
import customerReportReducer from './customerReport/reducer';
import supplierReportReducer from './supplierReport/reducer';
import posSupReducer from './posSupplier/reducer';
const reducers = combineReducers({
    authReducer,
    sidebarReducer,
    userReducer,
    customerReducer,
    supplierReducer,
    productReducer,
    posReducer,
    posSupReducer,
    dashboardReducer,
    customerReportReducer,
    supplierReportReducer
    
});

export default reducers;