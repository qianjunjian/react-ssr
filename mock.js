const express = require("express");

const app = express();

app.get("/api/course/list", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST")
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    res.json({
        code: 0,
        list: [
            {
                name: "123"
            }
        ]
    })
})

app.listen(9090, () => {
    console.log("mock启动完毕！")
})