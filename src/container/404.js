import React from "react";
import { Route } from "react-router-dom";

function Status({code, children}) {
    return <Route render={({staticContext}) => {
        if (staticContext) {
            staticContext.statuscode = code;
        }
        return children
    }}></Route>
}

export default function NotFound(props) {
    return <Status code={404}>
        <div>404, 哈哈哈哈</div>
    </Status>
}