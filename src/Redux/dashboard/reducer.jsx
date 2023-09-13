import { CUSTOMER_ADD, CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_SUCCESS, CUSTOMER_DASHBOARD, CUSTOMER_DASHBOARD_FAILURE, CUSTOMER_DASHBOARD_SUCCESS, CUSTOMER_GET, CUSTOMER_GET_FAILURE, CUSTOMER_GET_SUCCESS, CUSTOMER_UPDATE, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_SUCCESS, SUPPLIER_DASHBOARD, SUPPLIER_DASHBOARD_FAILURE, SUPPLIER_DASHBOARD_SUCCESS } from "../actionTypes";

const initial_state = {
    customer_dashboard:{
        status:null,
        data:null,
        error:null,
        loading:false
    },
    supplier_dashboard:{
        status:null,
        data:null,
        error:null,
        loading:false
    }, 
    
        }

        const dashboardReducer = (state = initial_state, { type, payload }) => {
            console.log("reducer data:",payload)
                switch (type) {
                    case CUSTOMER_DASHBOARD:
                        return {
                            ...state,
                            customer_dashboard:{ loading: true,}
                           
                        }
                    case CUSTOMER_DASHBOARD_SUCCESS:
                        return {
                            ...state,
                            customer_dashboard:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case CUSTOMER_DASHBOARD_FAILURE:
                        return {
                            ...state,
                            customer_dashboard:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    case SUPPLIER_DASHBOARD:    
                        return {
                            ...state,
                            supplier_dashboard:{ loading: true,}
                           
                        }
                    case SUPPLIER_DASHBOARD_SUCCESS:
                        return {
                            ...state,
                            supplier_dashboard:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case SUPPLIER_DASHBOARD_FAILURE:
                        return {
                            ...state,
                            supplier_dashboard:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    default: return { ...state };
                }
            
            }
export default dashboardReducer