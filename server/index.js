import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { StaticRouter, matchPath, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { getServerStore } from "../src/store/store";
import Header from "../src/component/Header";
import { createProxyMiddleware } from "http-proxy-middleware";
import routes from "../src/App";
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static("public"));
const store = getServerStore();

app.use("/api", createProxyMiddleware({
    target: "http://localhost:9090/",
    changeOrigin: true
}))

function csrRender(res) {
    const filename = path.resolve(process.cwd(), "public/index.csr.html");
    const html = fs.readFileSync(filename, "utf-8");
    return res.send(html)
}

app.get("*", (req, res) => {
    
    // 启用CSR
    if (false) {
        csrRender(res);
    }

    const promises = []
    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) {
            const { loadData } = route.component;
            if (loadData) {
                promises.push(loadData(store));
            }
        }
    })

    // 如果路由没有使用switch，会匹配多个路由，这样就有个问题，一个挂了，then不会执行，可以改用allSettled方法
    Promise.all(promises).then(() => {
        const context = {
            css: []
        };
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Header />
                    <Switch>
                        {
                            routes.map(route => <Route {...route} />)
                        }
                    </Switch>
                </StaticRouter>
            </Provider>
        )

        if (context.statuscode) {
            res.status(context.statuscode)
        }

        const css = context.css.join("\n");
        console.log(">>>>>>>>>>>>>", JSON.stringify(css))
    
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8" />
                    <title>react ssr</title>
                    <style>${css}</style>
                </head>
                <body>
                    <script>window.__content=${JSON.stringify(store.getState())}</script>
                    <div id="root">${content}</div>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `)
    })
})

app.listen(9093, () => {
    console.log("监听完毕！")
})


