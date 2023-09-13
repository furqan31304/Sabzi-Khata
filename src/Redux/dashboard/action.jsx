import {CUSTOMER_DASHBOARD, SUPPLIER_DASHBOARD} from "../actionTypes"

export const customerDashboard= (data) => {
    return ({
        type: CUSTOMER_DASHBOARD,
        payload: data
    })
}
export const supplierDashboard = (data) => {
    return ({
        type: SUPPLIER_DASHBOARD,
        payload: data
    })
}
