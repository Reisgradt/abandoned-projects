const httpError = require('../lib/error/httpError');

module.exports = (req, res, next) => {
    res.sendHttpError = (error) => {
        res.status(error.status);
        console.log(`HTTP error! (${error.status})`);

        if ( res.req.headers['x-requested-with'] === 'XMLHttpRequest' ) {
            res.json(error);
        } else {
            res.send({ error: error });
        }
    }

    next();
}
