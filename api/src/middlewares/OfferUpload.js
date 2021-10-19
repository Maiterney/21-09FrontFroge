const util = require("util");
const multer = require("multer");
const fs = require('fs');

const maxSize = 4 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/src/static/assets/uploads/offers/");
    },
    filename: (req, file, cb) => {
        cb(null, 'offer_'+file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single('image');

let uploadOffer = util.promisify(uploadFile);


module.exports = uploadOffer;