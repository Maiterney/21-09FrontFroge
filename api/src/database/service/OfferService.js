const database = require('../../config/config');
const Offer = require('../model/Offers');

exports.addOffer = async (
    offerSource,
    offerTitle,
    offerRating,
    offerPrice,
    offerDescription,
    offerInfo,
    offerBlog,
) => {
    try{

        const result = await database.sync();

        const addOffer = await Offer.create({
            offerSource:offerSource,
            offerTitle:offerTitle,
            offerRating:offerRating,
            offerPrice:offerPrice,
            offerDescription:offerDescription,
            offerInfo:offerInfo,
            offerBlog:offerBlog
        });

        return addOffer;


    } catch ( error ) {

        console.log( error );

    }
}

exports.callOffers = async () => {
    try{

        const result = await database.sync();

        const callOffers = await Offer.findAll();

        return callOffers;

    } catch ( error ) {

        console.log( error );

    }
}

exports.callThisOffer = async ( offerId ) => {
    try{

        const result = await database.sync();

        const callThisOffer = await Offer.findByPk(offerId).then(function(thisoffer){
            if(!thisoffer){
                return 'not found';
            } 

            return thisoffer;
        });

        //console.log('this banner:', callThisBanner, result)

        return callThisOffer;          

    } catch ( error ) {

        console.log( error );

    }
}

exports.deleteThisOffer = async ( offerId ) => {
    try{

        const result = await database.sync();

        const deleteThisOffer = await Offer.findByPk(offerId).then(function(thisOffer){
            if(!thisOffer){
                return 'not found';
            } 

            thisOffer.destroy();
        });

    } catch ( error ) {

        console.log( error );

    }
}