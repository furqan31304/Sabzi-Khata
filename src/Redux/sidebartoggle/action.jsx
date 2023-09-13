import { SIDEBAR_TOGGLE } from "../actionTypes";
export const sidebartoggle = (data) => {
    console.log("Action Data:",data)
    return ({
        type: SIDEBAR_TOGGLE,
        payload: data
    })
}