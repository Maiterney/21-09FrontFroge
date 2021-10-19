const OfferService = require('../database/service/OfferService');

exports.createItem = async (req, res, next) => {

    console.log(req.body);

    let { offerdata } = req.body;
    let data = JSON.parse(offerdata);
    const {title, description, rating, price, info, blog } = data;

    let bsrc = req.file.originalname;

    if(title != '' && description != ''){
        await OfferService.addOffer(
            bsrc,
            title,
            rating,
            price,
            description,
            info,
            blog,
        );

        res.status(200).json({
            message: `File: ${bsrc} uploaded successfully`,
            offerTitle: title,
            offerRating: rating,
            offerPrice: price,
            offerDescription: description,
            offerInfo: info,
            offerBlog: blog,
        });

    } else {

        res.status(400).json({
            message: `Database upload error`,
            offerTitle: title,
            offerRating: rating,
            offerPrice: price,
            offerDescription: description,
            offerInfo: info,
            offerBlog: blog,
        });

    }
    
}

exports.getItems = async (req, res) => {
    const ListOffers = await OfferService.callOffers();
    res.status(200).json({
        ListOffers: ListOffers
    });
}

exports.getThisItem = async (req, res) => {
    const Offer = await OfferService.callThisOffer(req.params.id);
    res.status(200).json({
        Offer: Offer
    })
}

exports.destroyThisItem = async (req, res) => {
    const Offer = await OfferService.deleteThisOffer(req.params.id);
    let id = req.params.id;
    res.status(200).json({
        Offer: `Offer ${id} has been deleted`
    })
}