import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

// const intialState={
//     accessToken:null,
//     user:null,
//     loading:false
// }
const intialState = {
  accessToken: sessionStorage.getItem("moon-ytc-token")
    ? sessionStorage.getItem("moon-ytc-token")
    : null,
  accessToken: sessionStorage.getItem("moon-ytc-user-token")
    ? JSON.parse( sessionStorage.getItem("moon-ytc-user-token"))
    : null,
  user: null,
  loading: false,
};
export const authReducer = (prevState = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
      case LOG_OUT:
        return {
            ...prevState,
            accessToken:null,
            user:null,
        }
    default:
      return prevState;
  }
};
