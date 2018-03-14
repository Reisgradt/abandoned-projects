const router      = require('express').Router(),
      config      = require('../config'),
      axios       = require('axios'),
      querystring = require('querystring'),
      Words       = require('../model/words');


router.post('/get_translate', (req, res) => {
    const {text, lang} = req.fields,
          data = querystring.stringify({
                key: config.get('translater:key'),
                text,
                lang
          });

    axios.post(config.get('translater:url'), data)
    .then(_res => {
        const {code, text} = _res.data;
        let success = false;

        if (code == 200) {
            success = true;
        }
        res.send({
            code,
            text,
            success
        });
    }).catch(_err => {
        const {code, message} = _err.request.data;
        res.send({
            code,
            message,
            success: false
        });
    });

});

router.post('/add_word', (req, res) => {
    const {word, translate} = req.fields;

    if (typeof word == 'undefined' || typeof translate == 'undefined')
        return res.send({success: false, message: "The word and/or its translation are undefined"});


    (new Words({word, translate})).save(err => {
        if (err)
            res.send({success: false, message: "HZ"});
        else
            res.send({success: true});
    })
});


module.exports = router;
