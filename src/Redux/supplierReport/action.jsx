import {CUSTOMER_GET, CUSTOMER_ADD, CUSTOMER_UPDATE, PAY_AMOUNT, CUSTOMER_HISTORY, CUSTOMER_HISTORY_DETAILS, CUSTOMER_REPORT, SUPPLIER_REPORT} from "../actionTypes"

export const supplierReport = (data) => {
    return ({
        type: SUPPLIER_REPORT,
        payload: data
    })
}
