import { REMOVE_ALERT, SET_ALERT } from "../types";

const initialState = [];
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      console.log(JSON.stringify(payload));
      // it will brings the array.
      return [...state, payload];

    case REMOVE_ALERT:
      // payload brings the id.

      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
