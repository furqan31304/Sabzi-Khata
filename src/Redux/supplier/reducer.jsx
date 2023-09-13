import { SUPPLIER_ADD, SUPPLIER_ADD_FAILURE, SUPPLIER_ADD_SUCCESS, SUPPLIER_GET, SUPPLIER_GET_FAILURE, SUPPLIER_GET_SUCCESS, SUPPLIER_HISTORY, SUPPLIER_HISTORY_DETAILS, SUPPLIER_HISTORY_DETAILS_FAILURE, SUPPLIER_HISTORY_DETAILS_SUCCESS, SUPPLIER_HISTORY_FAILURE, SUPPLIER_HISTORY_SUCCESS, SUPPLIER_UPDATE, SUPPLIER_UPDATE_FAILURE, SUPPLIER_UPDATE_SUCCESS } from "../actionTypes"


const initial_state = {
    supplier_get:{
        status:null,
        data:null,
        error:null,
        loading:false
    },  
    supplier_add:{
        status:null,
        data:null,
        error:null,
        loading:false
    },
    supplier_update:{
        status:null,
        data:null,
        error:null,
        loading:false
    }, 
    supplier_history:{
        status:"",
        data:"",
        error:"",
        loading:false
    },
    supplier_history_details:{
        status:null,
        data:null,
        error:null,
        loading:false
    },
        }

        const supplierReducer = (state = initial_state, { type, payload }) => {
            console.log("reducer data:",payload)
                switch (type) {
                    case SUPPLIER_GET:
                        return {
                            ...state,
                            supplier_get:{ loading: true,}
                           
                        }
                    case SUPPLIER_GET_SUCCESS:
                        return {
                            ...state,
                            supplier_get:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case SUPPLIER_GET_FAILURE:
                        return {
                            ...state,
                            supplier_get:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    
                        case SUPPLIER_ADD:    
                        return {
                            ...state,
                            supplier_add:{ loading: true,}
                           
                        }
                    case SUPPLIER_ADD_SUCCESS:
                        return {
                            ...state,
                            supplier_add:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case SUPPLIER_ADD_FAILURE:
                        return {
                            ...state,
                            supplier_add:{
                                data:payload.data,
                                loading: false,
                                status:payload.status,
                                error: payload.error,
                            }
                           
                        };
                        case SUPPLIER_UPDATE:    
                        return {
                            ...state,
                            supplier_update:{ loading: true,}
                           
                        }
                    case SUPPLIER_UPDATE_SUCCESS:
                        return {
                            ...state,
                            supplier_update:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case SUPPLIER_UPDATE_FAILURE:
                        return {
                            ...state,
                            supplier_update:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };


                        case SUPPLIER_HISTORY:
                        return {
                            ...state,
                            supplier_history:{ loading: true,}
                           
                        }
                    case SUPPLIER_HISTORY_SUCCESS:
                        return {
                            ...state,
                            supplier_history:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
                    case SUPPLIER_HISTORY_FAILURE:
                        return {
                            ...state,
                            supplier_history:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };


                        case SUPPLIER_HISTORY_DETAILS:
                        return {
                            ...state,
                            supplier_history_details:{ loading: true,}
                           
                        }
                    case SUPPLIER_HISTORY_DETAILS_SUCCESS:
                        return {
                            ...state,
                            supplier_history_details:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
                    case SUPPLIER_HISTORY_DETAILS_FAILURE:
                        return {
                            ...state,
                            supplier_history_details:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    
                    default: return { ...state };
                }
            
            }
export default supplierReducer