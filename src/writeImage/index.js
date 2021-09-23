// const fs = require('fs');
// const path = require('path');
// const axios = require('axios');
// const shortid = require('shortid');
// module.exports = async (req, res, next) => {
//     const { params } = req
//     if(!params.key || !params.url){
//         return res.json({
//             Status: 403,
//             Message: "Invalid parameters provided"
//         })
//     }
//     if(!fs.existsSync(__dirname + `/../../users/${params.key}.json`)){
//         return res.json({
//             Status: 403,
//             Message: "Key invalid"
//         })
//     }

//     const url = params.url
//     const id = shortid.generate()
//     const path = path.resolve(__dirname+ `/../imagegenerator/assets/${id}.png`)
//     const writer = fs.createWriteStream(path)

//     const response = await axios.request({
//         method: "GET",
//         url: url,
//         responseType: "stream"
//     })
//     if(!response) return res.json({
//         Status: 404,
//         Message: "Unable to retrieve image"
//     })
//     response.data.pipe(writer)
//     writer.on("finish", () => {
//         return res.json({
//             Status: 200,
//             Message: "Success write",
//             URL: `/image/${id.png}`
//         })
//     })
//     writer.on("error", err => {
//         console.log(err)
//         return res.json({
//             Status: 403,
//             Message: "Failed write",
//         })
//     })
    
// }