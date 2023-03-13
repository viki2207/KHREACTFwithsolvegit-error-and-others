//rootreducer: its going to hold all reducer details at one place
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import profileReducer from "./profileReducer";
import postReducer from "./PostReducer";
const rootReducers = combineReducers({
  authReducer,
  alertReducer,
  profileReducer,
  postReducer,
});

export default rootReducers;
