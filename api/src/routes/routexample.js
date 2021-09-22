const express = require('express');
const router = express.Router();
const item = require('../controllers/examplecontroller');

router.post('/cadastrar/item', item.createItem);
router.get('/listar/item', item.getItems);

module.exports = router;