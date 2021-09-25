const path = require('path')
const fs = require('fs');
module.exports = (req, res, next) =>{
    const { params } = req
    const imageName = params.image
    

    var newPath = path.resolve(__dirname + `/../../build/img/${imageName}`)
    if(req.query.quality?.toLowerCase() == "original"){
        newPath = path.resolve(__dirname + `/../../assets/${imageName}`)
    }

    if(!fs.existsSync(newPath)){
        return res.json({
            Status: 404,
            Message: "File not found"
        })
    }
    return res.sendFile(newPath)

}