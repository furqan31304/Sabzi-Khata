import { CUSTOMER_ADD, CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_SUCCESS, CUSTOMER_GET, CUSTOMER_GET_FAILURE, CUSTOMER_GET_SUCCESS, CUSTOMER_HISTORY, CUSTOMER_HISTORY_DETAILS, CUSTOMER_HISTORY_DETAILS_FAILURE, CUSTOMER_HISTORY_DETAILS_SUCCESS, CUSTOMER_HISTORY_FAILURE, CUSTOMER_HISTORY_SUCCESS, CUSTOMER_UPDATE, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_SUCCESS } from "../actionTypes";

const initial_state = {
    customer_get:{
        status:null,
        data:null,
        error:null,
        loading:false
    },  
    customer_add:{
        status:null,
        data:null,
        error:null,
        loading:false
    },
    customer_update:{
        status:null,
        data:null,
        error:null,
        loading:false
    }, 
    customer_history:{
        status:"",
        data:"",
        error:"",
        loading:false
    },
    customer_history_details:{
        status:null,
        data:null,
        error:null,
        loading:false
    },
        }

        const customerReducer = (state = initial_state, { type, payload }) => {
            console.log("reducer data:",payload)
                switch (type) {
                    case CUSTOMER_GET:
                        return {
                            ...state,
                            customer_get:{ loading: true,}
                           
                        }
                    case CUSTOMER_GET_SUCCESS:
                        return {
                            ...state,
                            customer_get:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case CUSTOMER_GET_FAILURE:
                        return {
                            ...state,
                            customer_get:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    
                        case CUSTOMER_ADD:    
                        return {
                            ...state,
                            customer_add:{ loading: true,}
                           
                        }
                    case CUSTOMER_ADD_SUCCESS:
                        return {
                            ...state,
                            customer_add:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case CUSTOMER_ADD_FAILURE:
                        return {
                            ...state,
                            customer_add:{
                                data:payload.data,
                                loading: false,
                                status:payload.status,
                                error: payload.error,
                            }
                           
                        };
                        case CUSTOMER_UPDATE:    
                        return {
                            ...state,
                            customer_update:{ loading: true,}
                           
                        }
                    case CUSTOMER_UPDATE_SUCCESS:
                        return {
                            ...state,
                            customer_update:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case CUSTOMER_UPDATE_FAILURE:
                        return {
                            ...state,
                            customer_update:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };


                        case CUSTOMER_HISTORY:
                        return {
                            ...state,
                            customer_history:{ loading: true,}
                           
                        }
                    case CUSTOMER_HISTORY_SUCCESS:
                        return {
                            ...state,
                            customer_history:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
                    case CUSTOMER_HISTORY_FAILURE:
                        return {
                            ...state,
                            customer_history:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };


                        case CUSTOMER_HISTORY_DETAILS:
                        return {
                            ...state,
                            customer_history_details:{ loading: true,}
                           
                        }
                    case CUSTOMER_HISTORY_DETAILS_SUCCESS:
                        return {
                            ...state,
                            customer_history_details:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
                    case CUSTOMER_HISTORY_DETAILS_FAILURE:
                        return {
                            ...state,
                            customer_history_details:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    
                    default: return { ...state };
                }
            
            }
export default customerReducer