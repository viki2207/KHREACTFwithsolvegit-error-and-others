import {
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  ACCOUNT_DELETED,
  AUTH_ERROR,
  LOGOUT,
} from "../types";
// it is used to hold and manipulate the user related states in store.
// all auth related operations / user related operaations like  register , login  , loading current user info. etc.
const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};
// it will be part of ur global state / store where we can hold all user related data.

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  // action will share the data needs to be manipulated and it will share the flag
  // data : payload
  const { type, payload } = action;
  switch (type) {
    case LOGOUT:
      localStorage.removeItem("token");

      return {
        token: null,
        isAuthenticated: null,
        loading: true,
        user: null,
      };
    case USER_LOADED:
      // to load the user info
      return { ...state, isAuthenticated: true, loading: false, user: payload };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case ACCOUNT_DELETED:
    case AUTH_ERROR:
    // eslint-disable-next-line no-duplicate-case
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    // to handle the success part of user registration
    // it will give us the token.
    // isAuthenticated : true
    /// loading : false
    // token : we need to use the token from dashboard on wards
    // for create profile / add exp add education etc.

    // localStorage will help us to hold the token in persited way.

    // return { ...state, ...payload, isAuthenticated: true, loading: false };

    default:
      return state;
  }
};
