const express = require("express")
const morgan = require("morgan")
const nocache = require('nocache')
const compression = require("compression")
require("dotenv").config()

const app = new express()
const router = require("./src/router.js")


app.use(express.json())
app.use(morgan("dev"))
app.use(nocache())
app.use(compression())
app.use("/", router)

app.get("/", (req, res, next) => {
    res.json({
        Status: 200,
        Message: "Welcome to the Yandere Kitsune API",
        Paths: [
            "/image",
            "/image/:imagename",
            "/generateimage",
            "/generatewords"
        ]
    })
})
const port = process.env['PORT'] || 3000
app.listen(port, () =>{
    console.log(`App is now listening on port ${port}`)
})