import {PRODUCT_GET, PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_TOGGLE} from "../actionTypes"

export const productGet = (data) => {
    return ({
        type: PRODUCT_GET,
        payload: data
    })
}
export const productAdd = (data) => {
    return ({
        type: PRODUCT_ADD,
        payload: data
    })
}
export const productUpdate = (data) => {
    console.log("Product Update Data:",data)
    return ({
        type: PRODUCT_UPDATE,
        payload: data
    })
}
export const productToggle = (data) => {
    console.log("Product Toggle Data:",data)
    return ({
        type: PRODUCT_TOGGLE,
        payload: data
    })
}