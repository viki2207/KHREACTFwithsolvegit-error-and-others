// registration
// login
// loading current user
import axios from "axios";
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_ERROR,
} from "../types";
import { setAlert } from "./alertAction";
import api from "../../utils/api";

//Load  user
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_ERROR });
  }
};

//Register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    // used to register the user via performing the rest call.

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify({ name, email, password });
    try {
      console.log(data);
      const res = await api.post("/users", data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      // lets traverse the errors array
      // to process the error i.e. display work should be handled by an action .
      /// let have alertAction.
    }
  };
// export : we can use this function in any file
// const : keyword
// register : name of the function
//({name,email,password}) : json object which is accepted by a function/ method
// as an arguement caller===> component.
// async : asynchronous operations
// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//logout
export const logout = () => ({ type: LOGOUT });
