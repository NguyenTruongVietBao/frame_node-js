const express = require('express')
const router = express.Router();
const newsController = require('../app/controllers/NewsController')

router.get('/', newsController.home );
router.get('/technology', newsController.newsTechnology );
router.get('/finance', newsController.newsFinance );

module.exports = router;