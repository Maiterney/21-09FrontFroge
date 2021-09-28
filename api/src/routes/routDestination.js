const express = require('express');
const router = express.Router();
const item = require('../controllers/destinationController');
const fileController = require('../controllers/filesController');
const UploadDestination = require('../middlewares/DestinationUpload');

router.post('/cadastrar', UploadDestination, item.createItem);

router.get('/listar', item.getItems);
router.get('/:id', item.getThisItem)
router.get('/destroy/:id', item.destroyThisItem);

router.get('/files', fileController.getListDestinations);
router.get('/files/:name', fileController.importDestinations);
router.get('/files/:name/download', fileController.downloadDestinations);

module.exports = router;