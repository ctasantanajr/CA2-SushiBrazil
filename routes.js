var express = require('express'),
router = express.Router(),
itemCtrl = require('./item-controller');


router.post('/post/json', itemCtrl.createItem);
router.get('/get/html', itemCtrl.getItems);
router.get('/items/:item', itemCtrl.getItem);
router.delete('/items/:item', itemCtrl.deleteItem);
router.put('/items/:id', itemCtrl.updateItem);



module.exports = router;
