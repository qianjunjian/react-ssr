import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return <div>
        <Link to="/">首页</Link> |
        <Link to="about">关于</Link> |
        <Link to="404">404</Link>
    </div>
}