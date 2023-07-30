const express = require('express');
const APIController = require('../controllers/APIController');

const router = express.Router();

router.get('/', APIController.reversePromptHandler);

module.exports = router;
