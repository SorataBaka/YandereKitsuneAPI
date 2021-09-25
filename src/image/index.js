const fs = require('fs');
const path = require('path');
module.exports = (req, res, next) => {
    var newPath = path.resolve(__dirname + "/../../build/img")
    if(req.query.quality?.toLowerCase() == "original"){
        newPath = path.resolve(__dirname + "/../../assets")
    }
    const imageList = fs.readdirSync(newPath)
        return res.json({
            Status: 200,
            imageList: imageList
        })
}