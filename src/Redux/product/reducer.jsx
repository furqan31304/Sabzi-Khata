import {PRODUCT_ADD, PRODUCT_ADD_FAILURE, PRODUCT_ADD_SUCCESS, PRODUCT_GET, PRODUCT_GET_FAILURE, PRODUCT_GET_SUCCESS, PRODUCT_TOGGLE, PRODUCT_TOGGLE_FAILURE, PRODUCT_TOGGLE_SUCCESS, PRODUCT_UPDATE, PRODUCT_UPDATE_FAILURE, PRODUCT_UPDATE_SUCCESS } from "../actionTypes";

const initial_state = {
    product_get:{
        status:null,
        data:null,
        error:null,
        loading:false
    },  
    product_add:{
        status:null,
        data:null,
        error:null,
        loading:false
    },
    product_toggle:{
        status:null,
        data:null,
        error:null,
        loading:false
    },
    product_update:{
        status:null,
        data:null,
        error:null,
        loading:false
    }, 
        }

        const productReducer = (state = initial_state, { type, payload }) => {
            console.log("reducer data:",payload)
                switch (type) {
                    case PRODUCT_GET:
                        return {
                            ...state,
                            product_get:{ loading: true,}
                           
                        }
                    case PRODUCT_GET_SUCCESS:
                        return {
                            ...state,
                            product_get:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case PRODUCT_GET_FAILURE:
                        return {
                            ...state,
                            product_get:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    case PRODUCT_ADD:    
                        return {
                            ...state,
                            product_add:{ loading: true,}
                           
                        }
                    case PRODUCT_ADD_SUCCESS:
                        return {
                            ...state,
                            product_add:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }

                    case PRODUCT_ADD_FAILURE:
                        return {
                            ...state,
                            product_add:{
                                data:payload.data,
                                loading: false,
                                status:payload.status,
                                error: payload.error,
                            }
                           
                        };

                        case PRODUCT_TOGGLE:
                        return{
                            ...state,
                            product_toggle:
                            {
                                loading: true,
                            }
                        }
                        case PRODUCT_TOGGLE_SUCCESS:
                        return{
                            ...state,
                            product_toggle:{
                                data:payload.data,
                                loading: false,
                                status:payload.status,
                                error: payload.error,}
                        }
                        case PRODUCT_TOGGLE_FAILURE:
                        return{
                            ...state,
                            product_toggle:{
                                data:payload.data,
                                loading: false,
                                status:payload.status,
                                error: payload.error,}
                        }
                        case PRODUCT_UPDATE:    
                        return {
                            ...state,
                            product_update:{ loading: true,}
                           
                        }
                    case PRODUCT_UPDATE_SUCCESS:
                        return {
                            ...state,
                            product_update:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case PRODUCT_UPDATE_FAILURE:
                        return {
                            ...state,
                            product_update:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    default: return { ...state };
                }
            
            }
export default productReducer