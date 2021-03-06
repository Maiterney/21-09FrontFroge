const express = require('express');
const router = express.Router();
const item = require('../controllers/bannerController');
const fileController = require('../controllers/filesController');
const uploadFileMiddleWareService = require('../middlewares/BannerUpload');


router.post('/cadastrar/banner', uploadFileMiddleWareService, item.createItem);
router.get('/listar/banners', item.getItems);
router.get('/banner/:id', item.getThisItem)
router.get('/banner/destroy/:id', item.destroyThisItem);
router.get('/files', fileController.getListFiles);
router.get('/files/:name', fileController.importBanner);
router.get('/files/:name/download', fileController.download);

module.exports = router;

