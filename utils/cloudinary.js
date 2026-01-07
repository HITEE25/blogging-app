const cloudinary = require('cloudinary').v2;
//using cloudinary version 2

cloudinary.config({
    //cloudinary account name
    cloud_name: process.env.cloud_name,
    //public id
    api_key: process.env.api_key,
    //secret pass
    api_secret: process.env.api_secret,
})

//for use in other files
module.exports = cloudinary;