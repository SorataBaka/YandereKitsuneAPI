const express = require('express');
const router = express.Router();

router.get('/generateimage', require("./imagegenerator/index.js"))
router.get('/generatewords', require("./wordgenerator/index.js"))
router.get("/image", require("./image/index.js"))
router.get("/image/:image", require("./image/sendFile.js"))

//router.get("/upload/:key/:url", require("./writeImage/index.js"))

module.exports = router