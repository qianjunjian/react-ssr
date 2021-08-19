import React from "react";
import { Route } from "react-router-dom";
import Index from "./container/Index";
import About from "./container/About";
import NotFound from "./container/404";

export default [
    {
        path: "/",
        component: Index,
        exact: true,
        key: "index"
    },
    {
        path: "/about",
        component: About,
        exact: true,
        key: "about"
    },
    {
        component: NotFound,
        key: "404"
    }
]