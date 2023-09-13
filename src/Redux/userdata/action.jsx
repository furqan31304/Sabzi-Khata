import {USER_DATA} from "../actionTypes"

export const userData = (data) => {
    console.log("Action UserData:",data)
    return ({
        type: USER_DATA,
        payload: data
    })
}
