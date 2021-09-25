const database = require('../../config/config');
const Banner = require('../model/Banners');

exports.addBanner = async (bannerChose, bannerSourc, bannerTitle, bannerDescription) => {
    try{

        const result = await database.sync();

        const createBanner = await Banner.create({
            bannerChose: bannerChose,
            bannerSourc: bannerSourc,
            bannerTitle: bannerTitle,
            bannerDescription: bannerDescription
        });

        console.log(result, createBanner, 'banner cadastrado');

        return createBanner;


    } catch ( error ) {

        console.log( error );

    }
}

exports.callBanners = async () => {
    try{

        const result = await database.sync();

        const callBanners = await Banner.findAll();

        console.log('call banners:', callBanners, result)

        return callBanners;

    } catch ( error ) {

        console.log( error );

    }
}

exports.callThisBanner = async ( bannerId ) => {
    try{

        const result = await database.sync();

        const callThisBanner = await Banner.findByPk(bannerId).then(function(thisBanner){
            if(!thisBanner){
                return 'not found';
            } 

            return thisBanner;
        });

        console.log('this banner:', callThisBanner, result)

        return callThisBanner;          

    } catch ( error ) {

        console.log( error );

    }
}

exports.deleteThisBanner = async ( bannerId ) => {
    try{

        const result = await database.sync();

        const callThisBanner = await Banner.findByPk(bannerId).then(function(thisBanner){
            if(!thisBanner){
                return 'not found';
            } 

            thisBanner.destroy();
        });

        console.log('this banner has been deleted:', callThisBanner, result)

    } catch ( error ) {

        console.log( error );

    }
}