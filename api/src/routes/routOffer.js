const express = require('express');
const router = express.Router();
const item = require('../controllers/offerController');
const fileController = require('../controllers/filesController');
const uploadOffer = require('../middlewares/OfferUpload');

router.post('/cadastrar', uploadOffer, item.createItem);

router.get('/listar', item.getItems);
router.get('/:id', item.getThisItem)
router.get('/destroy/:id', item.destroyThisItem);

router.get('/files', fileController.getListOffers);
router.get('/files/:name', fileController.importOffers);
router.get('/files/:name/download', fileController.downloadOffers);

module.exports = router;