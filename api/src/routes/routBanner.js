const express = require('express');
const router = express.Router();
const item = require('../controllers/bannerController');
const fileController = require('../controllers/filesController');
const uploadBanner = require('../middlewares/BannerUpload');


router.get('/midia', fileController.bannersMidiaList);
router.get('/midia/:name', fileController.importBanner);
router.get('/midia/:name/download', fileController.downloadBanner);
router.get('/listar', item.getItems);
router.get('/:id', item.getThisItem)
router.get('/destroy/:id', item.destroyThisItem);
router.post('/cadastrar', uploadBanner, item.createItem);


module.exports = router;

