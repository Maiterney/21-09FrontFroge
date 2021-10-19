const express = require('express');
const router = express.Router();
const item = require('../controllers/offerController');
const fileController = require('../controllers/filesController');
const uploadOffer = require('../middlewares/OfferUpload');

router.get('/midia', fileController.offersMidiaList);
router.get('/midia/:name', fileController.importOffers);
router.get('/midia/:name/download', fileController.downloadOffers);

router.get('/listar', item.getItems);
router.get('/:id', item.getThisItem)
router.get('/destroy/:id', item.destroyThisItem);

router.post('/cadastrar', uploadOffer, item.createItem);

module.exports = router;