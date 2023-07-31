const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mail.controller');

router.get('/mail', mailController.getMail);

router.post('/mail', mailController.postMail);

module.exports = router;
