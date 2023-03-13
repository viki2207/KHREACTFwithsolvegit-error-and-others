import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers";
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//rootreducer :index.js from reducer folder will hold the details about ur all reducers

//app initial state :{}
//middleware / thunk :

// createStore : it is the method which help us to create the store for our react redux application.

export default store;
