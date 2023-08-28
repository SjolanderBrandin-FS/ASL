const express = require('express');
const router = express.Router();
const imageCtrl = require('../controllers/images');

router.get('/', imageCtrl.index);
router.get('/new', imageCtrl.form);
router.get('/:id', imageCtrl.show);
router.get('/:id/edit', imageCtrl.form);
router.post('/', imageCtrl.create);
router.post('/:id', imageCtrl.update);
router.delete('/:id', imageCtrl.remove);
router.all('/:id/delete', imageCtrl.remove);
module.exports = router