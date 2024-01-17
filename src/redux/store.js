import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchReducer from "./reducer/fetchReducer";

const store = createStore(fetchReducer, applyMiddleware(thunk))

export default store