const BannerService = require('../database/service/BannerService');
const uploadFile = require('../middlewares/BannerUpload');

exports.createItem = async (req, res, next) => {

    console.log(req)

    const { chose, title, description } = req;
    let bsrc = req.file;

    //try upload image
    try{

        await uploadFile(req, res);

        if( req.file == undefined ) {
            return res.status(400).json({
                message: "Please upload a file!"
            })
        }

    } catch ( error ){

        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
              message: "File size cannot be larger than 4MB!",
            });
        }

        res.status(500).json({
            message: `Could not upload this file ${req.file.originalname}, ${err}`
        })
    }

    if(chose != '' && title != '' && description != ''){
        // const StatusBanner = await BannerService.createItem(
        //     chose,
        //     bsrc,
        //     title,
        //     description
        // );

        res.status(200).json({
            message: `File: ${req.file.originalname} uploaded successfully, ${StatusBanner}`,
            bannerChose: chose,
            bannerSrc: bsrc,
            bannerTitle: title,
            bannerDescription: description
        });

    } else {

        res.status(200).json({
            message: `File: ${req.file.originalname} uploaded successfully`,
            bannerChose: chose,
            bannerSrc: bsrc,
            bannerTitle: title,
            bannerDescription: description
        });

    }
    
}

exports.getItems = async (req, res) => {
    const ListBanners = await BannerService.callBanners();
    res.status(200).json({
        ListBanners: ListBanners
    });
}

exports.getThisItem = async (req, res) => {
    const Banner = await BannerService.callThisBanner(req.params.id);
    res.status(200).json({
        Banner: Banner
    })
}