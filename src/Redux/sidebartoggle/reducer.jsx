import { SIDEBAR_TOGGLE } from "../actionTypes"
const initial_state = {
    state:""
}
const sidebarReducer = (state = initial_state, { type, payload }) => {
    console.log("reducer data:",payload)
        switch (type) {
            case SIDEBAR_TOGGLE:
                return {
                    state:payload
                }
            default: return {state};
        }
    
    }
    export default sidebarReducer