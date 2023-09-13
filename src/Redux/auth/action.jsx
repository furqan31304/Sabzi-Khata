import { LOGIN, LOGOUT, SIGNUP, FORGET, USER_DATA} from "../actionTypes"

export const loginUser = (data) => {
    console.log("Action Data:",data)
    return ({
        type: LOGIN,
        payload: data
    })
}
export const signUpUser = (data) => {
    console.log("Action Data SignUp:",data)
    return ({
        type: SIGNUP,
        payload: data
    })
}
export const forgetPass = (data) => {
    console.log("Action Data forget:",data)
    return ({
        type: FORGET,
        payload: data
    })
}
// export const userData = (data) => {
//     console.log("Action User Data:",data)
//     return ({
//         type: USER_DATA,
//         payload: data
//     })
// }
export const logOut = () => {
    return ({
        type: LOGOUT,
    })
}