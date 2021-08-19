import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

// 可以使用库 isomorphic-style-loader/withStyle
function withStyle(Comp, styles) {
    function NewComp(porps) {
        if (porps.staticContext) {
            console.log("11>>>>>>>>>>>>>", styles._getCss())
            porps.staticContext.css.push(styles._getCss())
        }
        return <Comp {...porps} />
    }
    hoistNonReactStatics(NewComp, Comp);
    return NewComp;
}

export default withStyle