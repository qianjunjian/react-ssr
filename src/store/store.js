import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import indexRedux from "./index";

const reducer = combineReducers({
    index: indexRedux
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;