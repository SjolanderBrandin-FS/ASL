const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/products');

router.get('/', productCtrl.index);
router.get('/new', productCtrl.form);
router.get('/:id', productCtrl.show);
router.get('/:id/edit', productCtrl.form);
router.post('/', productCtrl.create);
router.post('/:id', productCtrl.update);
router.delete('/:id', productCtrl.remove);
router.all('/:id/delete', productCtrl.remove);
module.exports = router