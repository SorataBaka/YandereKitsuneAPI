const express = require("express")
const morgan = require("morgan")
require("dotenv").config()

const app = new express()
const router = require("./src/router.js")


app.use(express.json())
app.use(morgan("dev"))
app.use("/", router)

app.get("/", (req, res, next) => {
    res.json({
        Status: 404,
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