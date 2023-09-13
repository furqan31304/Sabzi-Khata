import {
    USER_DATA,USER_DATA_SUCCESS,USER_DATA_FAILURE
} from '../actionTypes'
const initial_state = {
    
    data:null,
    error: null,
    loading: false,
}
const userReducer = (state = initial_state, { type, payload }) => {
console.log("user-reducer data:",payload)
    switch (type) {
                        case USER_DATA:
                            return {
                                ...state,
                                loading: true,
                            }
                        case USER_DATA_SUCCESS:
                            console.log("userData...............",payload);
                            return {
                                
                                ...state,
                                loading: false,
                                data:payload,
                            }
                
                        case USER_DATA_FAILURE:
                            return {
                                ...state,
                                loading: false,
                                error: payload,
                            };

        default: return { ...state };
    }

}
export default userReducer