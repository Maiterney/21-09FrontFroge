const express = require('express');
const router = express.Router();
const item = require('../controllers/bannerController');
const fileController = require('../controllers/filesController');
const uploadBanner = require('../middlewares/DestinationUpload');


router.post('/cadastrar', uploadBanner, item.createItem);
router.get('/listar', item.getItems);
router.get('/:id', item.getThisItem)
router.get('/destroy/:id', item.destroyThisItem);
router.get('/files', fileController.getListBanners);
router.get('/files/:name', fileController.importBanner);
router.get('/files/:name/download', fileController.downloadBanner);

module.exports = router;

