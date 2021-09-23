const fs = require('fs');
module.exports = (req, res, next) => {
    const imageList = fs.readdirSync(__dirname + '/../imagegenerator/assets')
        return res.json({
            Status: 200,
            imageList: imageList
        })
}