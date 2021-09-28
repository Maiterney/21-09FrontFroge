const util = require("util");
const multer = require("multer");
const fs = require('fs');

const maxSize = 4 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/src/static/assets/uploads/destinations");
    },
    filename: (req, file, cb) => {
        cb(null, 'destination_'+file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    limits: { fileSize: maxSize }
}).single('image');

let UploadDestination = util.promisify(uploadFile);


module.exports = UploadDestination;