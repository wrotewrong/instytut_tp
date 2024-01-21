const express = require('express');
const router = express.Router();
const envController = require('../controllers/env.controller');

router.get('/env', envController.getEnv);

module.exports = router;
