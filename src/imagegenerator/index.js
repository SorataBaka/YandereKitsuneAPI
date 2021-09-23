const fs = require('fs');
module.exports = (req, res, next) => {
    const images = fs.readdirSync(__dirname + "/assets")
    const randomPick = Math.floor(Math.random() * images.length)
    
    const imageName = images[randomPick]

    return res.sendFile(__dirname + `/assets/${imageName}`)
}