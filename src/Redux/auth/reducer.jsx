import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  FORGET,
  FORGET_FAILURE,
  FORGET_SUCCESS,
  USER_DATA,
  USER_DATA_SUCCESS,
  USER_DATA_FAILURE,
} from "../actionTypes";
const initial_state = {
  login: {
    isAuthenticated:
      localStorage.getItem("authToken") &&
      localStorage.getItem("authToken") !== undefined
        ? true
        : false,
    message: null,
    error: null,
    data: null,
    loading: false,
  },
  signup: {
    isAuthenticated:
      localStorage.getItem("authToken") &&
      localStorage.getItem("authToken") !== undefined
        ? true
        : false,
    message: null,
    error: null,
    data: null,
    loading: false,
    status:null,
  },
  forget: {
    status: null,
    message: null,
    error: null,
    data: null,
    loading: false,
  },
};

const authReducer = (state = initial_state, { type, payload }) => {
  console.log("reducer data:", payload);
  switch (type) {
    case LOGIN:
      return {
        ...state,
        login: { loading: true },
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("authToken", payload.data.id);
      localStorage.setItem("name", payload.data.full_name);
      localStorage.setItem("image", payload.data.image);
      localStorage.setItem("subadmin", payload.data.is_subadmin);
      return {
        ...state,
        login: {
          data: payload.data,
          loading: false,
          message: payload.message,
          isAuthenticated: true,
          error: payload.error,
        },
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          loading: false,
          error: payload,
        },
      };
    case LOGOUT:
      localStorage.removeItem("authToken");
      localStorage.removeItem("name");
      localStorage.removeItem("image");
      localStorage.removeItem("subadmin");
      return {
        ...state,
        login: {
          isAuthenticated: false,
        },
      };
    case SIGNUP:
      return {
        ...state,
        signup: {
          loading: true,
        },
      };
    case SIGNUP_SUCCESS:
        localStorage.setItem("authToken", payload.data.id);
      localStorage.setItem("name", payload.data.full_name);
      localStorage.setItem("image", payload.data.image);
      localStorage.setItem("subadmin", payload.data.is_subadmin);
    
      return {
        ...state,
        signup: {
          loading: false,
          message: payload.message,
          isAuthenticated: true,
          error: payload.error,
          status:payload.status
        },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup: {
          loading: false,
          error: payload,
        },
      };

    case FORGET:
      return {
        ...state,
        forget: {
          loading: true,
        },
      };
    case FORGET_SUCCESS:
      return {
        ...state,
        forget: {
          status: payload.status,
          loading: false,
          data:payload.data,
          message: payload.message,
          error: payload.error,
        },
      };
    case FORGET_FAILURE:
      return {
        ...state,
        forget: {
          status: payload.status,
          loading: false,
          error: payload.error,
        },
      };
    // case USER_DATA:
    //     return {
    //         ...state,
    //         loading: true,
    //     }
    // case USER_DATA_SUCCESS:
    //     return {
    //         ...state,
    //         loading: false,
    //         message: null,
    //         isAuthenticated: true,
    //         error: null
    //     }

    // case USER_DATA_FAILURE:
    //     return {
    //         ...state,
    //         loading: false,
    //         error: payload,
    //     };

    default:
      return { ...state };
  }
};
export default authReducer;
