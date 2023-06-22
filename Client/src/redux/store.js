import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer.js";

//const composeRedux  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//cosnt store = createStore(rootReduce, composeREdux(appLyMiddleware(thunk)))

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
