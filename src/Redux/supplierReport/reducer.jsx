import {CUSTOMER_REPORT, CUSTOMER_REPORT_FAILURE, CUSTOMER_REPORT_SUCCESS, SUPPLIER_REPORT, SUPPLIER_REPORT_FAILURE, SUPPLIER_REPORT_SUCCESS} from "../actionTypes";

const initial_state = {
    supplier_report:{
        status:null,
        data:null,
        error:null,
        loading:false
    },  
        }

        const supplierReportReducer = (state = initial_state, { type, payload }) => {
            console.log("reducer data:",payload)
                switch (type) {
                    case SUPPLIER_REPORT:
                        return {
                            ...state,
                            supplier_report:{ loading: true,}
                           
                        }
                    case SUPPLIER_REPORT_SUCCESS:
                        return {
                            ...state,
                            supplier_report:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case SUPPLIER_REPORT_FAILURE:
                        return {
                            ...state,
                            supplier_report:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    default: return { ...state };
                }
            
            }
export default supplierReportReducer