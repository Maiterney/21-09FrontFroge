const database = require('../../config/config');
const Banner = require('../model/Banners');

exports.addBanner = async (bannerChose, bannerSrc, bannerTitle, bannerDescription) => {
    try{

        const result = await database.sync();

        const createBanner = await Banner.create({
            bannerChose: bannerChose,
            bannerSrc: bannerSrc,
            bannerTitle: bannerTitle,
            bannerDescription: bannerDescription
        });


    } catch ( error ) {

        console.log( error );

    }
}

exports.callBanners = async () => {
    try{

        const result = await database.sync();

        const callBanners = await Banner.findAll();
        return callBanners;

    } catch ( error ) {

        console.log( error );

    }
}

exports.callThisBanner = async ( bannerId ) => {
    try{

        const result = await database.sync();

        const callThisBanner = await Banner.findById( bannerId ).then(thisBanner => thisBanner);

        return callThisBanner;          

    } catch ( error ) {

        console.log( error );

    }
}