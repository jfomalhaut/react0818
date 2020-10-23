const express = require('express');
const factory = require('../factory/factory');
const router = express.Router();

router.get('/insertComment', factory.insertComment);
router.get('/getComments', factory.getComments);

module.exports = router;

// localhost:3000/api/insertComment