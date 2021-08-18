import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import indexRedux from "./index";

const serverAxios = axios.create({
    baseURL: "http://localhost:9090/"
})

const clientAxios = axios.create({
    baseURL: "/"
})

const reducer = combineReducers({
    index: indexRedux
})

export const getServerStore = () => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}

export const getClientStore = () => {
    const defaultStore = window.__content ? window.__content : {};
    return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}
