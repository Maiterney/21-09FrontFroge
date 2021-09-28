const destinationService = require('../database/service/DestinationService');

exports.createItem = async (req, res, next) => {

    console.log(req.body);

    let { destinationdata } = req.body;
    let data = JSON.parse(destinationdata);
    const {title, price, size } = data;

    let bsrc = req.file.originalname;

    if(title != '' && size != ''){
        await destinationService.addDestination(
            title,
            price,
            size,
            bsrc,
        );

        res.status(200).json({
            message: `File: ${bsrc} uploaded successfully`,
            destinationTitle: title,
            destinationPrice: price,
            destinationSize: size,
        });

    } else {

        res.status(400).json({
            message: `Database upload error`,
            destinationTitle: title,
            destinationPrice: price,
            destinationSize: size,
        });

    }
    
}

exports.getItems = async (req, res) => {
    const ListDestinations = await destinationService.callDestination();
    res.status(200).json({
        ListDestinations: ListDestinations
    });
}

exports.getThisItem = async (req, res) => {
    const Destination = await destinationService.callThisDestination(req.params.id);
    res.status(200).json({
        Destination: Destination
    })
}

exports.destroyThisItem = async (req, res) => {
    const Destination = await destinationService.deleteThisDestination(req.params.id);
    let id = req.params.id;
    res.status(200).json({
        Destination: `Destination ${id} has been deleted`
    })
}