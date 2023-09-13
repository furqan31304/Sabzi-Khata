import {SUPPLIER_GET, SUPPLIER_ADD, SUPPLIER_UPDATE, SUPPLIER_HISTORY, SUPPLIER_HISTORY_DETAILS, PAY_AMOUNT_SUPPLIER} from "../actionTypes"

export const supplierGet = (data) => {
    return ({
        type: SUPPLIER_GET,
        payload: data
    })
}
export const supplierAdd = (data) => {
    return ({
        type: SUPPLIER_ADD,
        payload: data
    })
}
export const supplierUpdate = (data) => {
    console.log("supplier Update Data:",data)
    return ({
        type: SUPPLIER_UPDATE,
        payload: data
    })
}
export const supplierPay = (data) => {
    console.log("supplier Pay Amount:",data)
    return ({
        type: PAY_AMOUNT_SUPPLIER,
        payload: data
    })
}
export const supplierHistory = (data) => {
    console.log("suppliers History: ",data)
    return ({
        type: SUPPLIER_HISTORY,
        payload: data
    })
}
export const supplierHistoryDetails = (data) => {
    console.log("supplier History Details:",data)
    return ({
        type: SUPPLIER_HISTORY_DETAILS,
        payload: data
    })
}