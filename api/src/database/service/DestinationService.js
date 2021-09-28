const database = require('../../config/config');
const Destination = require('../model/Destinations');

exports.addDestination = async (
    destinationTitle,
    destinationPrice,
    destinationSize,
    destinationSource
) => {
    try{

        const result = await database.sync();

        const addDestination = await Destination.create({
            destinationTitle:destinationTitle,
            destinationPrice:destinationPrice,
            destinationSize:destinationSize,
            destinationSource:destinationSource
        });

        //console.log(result, createBanner, 'banner cadastrado');

        return createOffer;


    } catch ( error ) {

        console.log( error );

    }
}

exports.callDestination = async () => {
    try{

        const result = await database.sync();

        const callDestination = await Destination.findAll();

        return callDestination;

    } catch ( error ) {

        console.log( error );

    }
}


exports.callThisDestination = async ( destinationId ) => {
    try{

        const result = await database.sync();

        const callThisDestination = await Destination.findByPk(destinationId).then(function(thisdestination){
            if(!thisdestination){
                return 'not found';
            } 

            return thisdestination;
        });

        //console.log('this banner:', callThisBanner, result)

        return callThisDestination;          

    } catch ( error ) {

        console.log( error );

    }
}

exports.deleteThisDestination = async ( destinationId ) => {
    try{

        const result = await database.sync();

        const deleteThisDestination = await Destination.findByPk(destinationId).then(function(thisdestination){
            if(!thisdestination){
                return 'not found';
            } 

            thisdestination.destroy();
        });


    } catch ( error ) {

        console.log( error );

    }
}