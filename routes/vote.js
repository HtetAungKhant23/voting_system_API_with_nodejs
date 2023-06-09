const express = require('express');
const router = express.Router();
const controllers = require('../controllers/vote');

router.get('/', controllers.getPercentage);
// router.post('/', controllers.votePost);

router.post('/', controllers.votePost);

module.exports = router;