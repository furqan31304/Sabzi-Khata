import {ACTIVE_PRODUCT_GET, ADD_TO_CART, CART, CUSTOMER_SET, PRODUCT_SET, REMOVE_FROM_CART, UPDATE_CART} from "../actionTypes"

export const customerSet = (data) => {
    return ({
        type: CUSTOMER_SET,
        payload: data
    })
}

export const cart = (data) => {
    console.log("Cart........",data)
    return ({
        type: CART,
        payload: data
    })
}
export const productSet = (data) => {
    return ({
        type: PRODUCT_SET,
        payload: data
    })
}
export const activeProductGet = (data) => {
    console.log('productGetActive',data)
    return ({
        type: ACTIVE_PRODUCT_GET,
        payload: data
    })
}
export const addToCart = (data) => {
    console.log('addToCart',data)
    return ({
        type: ADD_TO_CART,
        payload: data
    })
}

export const updateCart = (data) => {
    console.log('updateToCart',data)
    return ({
        type: UPDATE_CART,
        payload: data
    })
}
export const removeFromCart = (data) => {
    console.log('removeFromCart',data)
    return ({
        type: REMOVE_FROM_CART,
        payload: data
    })
}