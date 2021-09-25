const fs = require('fs');
const path = require('path');
module.exports = (req, res, next) => {
    

    const images = fs.readdirSync(path.resolve(__dirname + "/../../build/img"))
    const randomPick = Math.floor(Math.random() * images.length)
    
    const imageName = images[randomPick]


    var newPath = path.resolve(__dirname + `/../../build/img/${imageName}`)
    if(req.query.quality?.toLowerCase() == "original"){
        newPath = path.resolve(__dirname + `/../../assets/${imageName}`)
    }
    return res.sendFile(newPath)
}