import {CUSTOMER_GET, CUSTOMER_ADD, CUSTOMER_UPDATE, PAY_AMOUNT, CUSTOMER_HISTORY, CUSTOMER_HISTORY_DETAILS, CUSTOMER_REPORT} from "../actionTypes"

export const customerReport = (data) => {
    return ({
        type: CUSTOMER_REPORT,
        payload: data
    })
}
