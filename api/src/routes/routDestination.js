const express = require('express');
const router = express.Router();
const item = require('../controllers/destinationController');
const fileController = require('../controllers/filesController');
const UploadDestination = require('../middlewares/DestinationUpload');

router.get('/midia', fileController.destinationsMidiaList);
router.get('/midia/:name', fileController.importDestinations);
router.get('/midia/:name/download', fileController.downloadDestinations);

router.get('/listar', item.getItems);
router.get('/:id', item.getThisItem)
router.get('/destroy/:id', item.destroyThisItem);

router.post('/cadastrar', UploadDestination, item.createItem);

module.exports = router;