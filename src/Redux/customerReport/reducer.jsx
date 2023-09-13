import {CUSTOMER_REPORT, CUSTOMER_REPORT_FAILURE, CUSTOMER_REPORT_SUCCESS} from "../actionTypes";

const initial_state = {
    customer_report:{
        status:null,
        data:null,
        error:null,
        loading:false
    },  
        }

        const customerReportReducer = (state = initial_state, { type, payload }) => {
            console.log("reducer data:",payload)
                switch (type) {
                    case CUSTOMER_REPORT:
                        return {
                            ...state,
                            customer_report:{ loading: true,}
                           
                        }
                    case CUSTOMER_REPORT_SUCCESS:
                        return {
                            ...state,
                            customer_report:{
                                data:payload.data,
                            loading: false,
                            status:payload.status,
                            error: payload.error,
                            }
                            
                        }
            
                    case CUSTOMER_REPORT_FAILURE:
                        return {
                            ...state,
                            customer_report:{
                                loading: false,
                                error: payload.error,
                            }
                           
                        };
                    default: return { ...state };
                }
            
            }
export default customerReportReducer