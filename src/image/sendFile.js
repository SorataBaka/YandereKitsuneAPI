const path = require('path')
const fs = require('fs');
module.exports = (req, res, next) =>{
    const { params } = req
    const imageName = params.image
    if(!fs.existsSync(__dirname + `/../imagegenerator/assets/${imageName}`)){
        return res.json({
            Status: 404,
            Message: "File not found"
        })
    }
    return res.sendFile(path.resolve(__dirname + `/../imagegenerator/assets/${imageName}`))

}