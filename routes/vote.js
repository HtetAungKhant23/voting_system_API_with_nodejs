const express = require('express');
const router = express.Router();
const controllers = require('../controllers/vote');

router.get('/', controllers.getVoteData);

module.exports = router;