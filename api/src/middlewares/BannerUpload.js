const util = require("util");
const multer = require("multer");
const fs = require('fs');

const maxSize = 4 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/src/static/assets/uploads/banners/");
    },
    filename: (req, file, cb) => {
        cb(null, 'banner_'+file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single('image');

let uploadBanner = util.promisify(uploadFile);


module.exports = uploadBanner;
