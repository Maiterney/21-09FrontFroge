const express = require('express');
const router = express.Router();
const item = require('../controllers/bannerController');
const fileController = require('../controllers/filesController');

router.post('/cadastrar/banner', item.createItem);
router.get('/listar/banners', item.getItems);
router.get('/banner/:id', item.getThisItem)
router.get('/files', fileController.getListFiles);
router.get('/files/:name', fileController.importBanner);

module.exports = router;