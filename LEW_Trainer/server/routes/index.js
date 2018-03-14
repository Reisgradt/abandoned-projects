const router   = require('express').Router(),
      config   = require('../config'),
      api_v1_0 = require('./api_v1_0');


router.use('/api/v1.0', api_v1_0);

//Главная страница сайта
router.get('/*', (req, res) => {
    res.sendFile(config.get('server:rootPath') + '/public/index.html');
});


module.exports = router;
