const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/', roomController.room_index);

router.get('/:id', roomController.room_details);

router.get('/create', roomController.room_create_get);

router.post('/create', roomController.room_create_post);

router.delete('/:id', roomController.room_delete);

module.exports = router;