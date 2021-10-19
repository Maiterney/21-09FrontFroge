const BannerService = require('../database/service/BannerService');

exports.createItem = async (req, res, next) => {

    console.log(req.body);

    let { bannerdata } = req.body;
    let data = JSON.parse(bannerdata);
    const { chose, title, description } = data;

    let bsrc = 'banner_'+req.file.originalname;

    if(chose != '' && title != '' && description != ''){
        await BannerService.addBanner(
            chose,
            bsrc,
            title,
            description
        );

        res.status(200).json({
            message: `File: ${bsrc} uploaded successfully`,
            bannerChose: chose,
            bannerSrc: bsrc,
            bannerTitle: title,
            bannerDescription: description
        });

    } else {

        res.status(400).json({
            message: `Database upload error`,
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

exports.destroyThisItem = async (req, res) => {
    const Banner = await BannerService.deleteThisBanner(req.params.id);
    let id = req.params.id;
    res.status(200).json({
        Banner: `Banner ${id} has been deleted`
    })
}