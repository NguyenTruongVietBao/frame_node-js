const express = require('express')
const router = express.Router();
const homeController = require('../app/controllers/HomeController')

// router.get('/id', newsController.showID );
// router.get('/:slug', newsController.show );
router.get('/', homeController.home );

module.exports = router;