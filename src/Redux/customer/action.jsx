import {CUSTOMER_GET, CUSTOMER_ADD, CUSTOMER_UPDATE, PAY_AMOUNT, CUSTOMER_HISTORY, CUSTOMER_HISTORY_DETAILS} from "../actionTypes"

export const customerGet = (data) => {
    return ({
        type: CUSTOMER_GET,
        payload: data
    })
}
export const customerAdd = (data) => {
    return ({
        type: CUSTOMER_ADD,
        payload: data
    })
}
export const customerUpdate = (data) => {
    console.log("Customer Update Data:",data)
    return ({
        type: CUSTOMER_UPDATE,
        payload: data
    })
}
export const customerPay = (data) => {
    console.log("Customer Pay Amount:",data)
    return ({
        type: PAY_AMOUNT,
        payload: data
    })
}
export const customerHistory = (data) => {
    console.log("Customers History: ",data)
    return ({
        type: CUSTOMER_HISTORY,
        payload: data
    })
}
export const customerHistoryDetails = (data) => {
    console.log("Customer History Details:",data)
    return ({
        type: CUSTOMER_HISTORY_DETAILS,
        payload: data
    })
}