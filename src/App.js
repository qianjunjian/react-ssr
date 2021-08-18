import React from "react";
import { Route } from "react-router-dom";
import Index from "./container/Index";
import About from "./container/About";

// export default (
//     <div>
//         <Route path="/" exact component={Index} />
//         <Route path="/about" exact component={About} />
//     </div>
// )

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
    }
]