import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "../src/App";
import Header from "../src/component/Header";
import { getClientStore } from "../src/store/store";

const store = getClientStore();
const Page = (
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            {
                routes.map(route => <Route {...route} />)
            }
        </BrowserRouter>
    </Provider>
)

// 注水
ReactDOM.hydrate(Page, document.getElementById("root"));