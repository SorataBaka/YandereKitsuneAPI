const fs = require('fs');
module.exports = (req, res, next) => {
    const wordArray = JSON.parse(fs.readFileSync(__dirname+"/words.json"))
    const randomPick = Math.floor(Math.random() * wordArray.length)
    const word = wordArray[randomPick]
    return res.json({
        Status: 200,
        Word: word
    })
}