const express    = require('express'),
      app        = express(),
      path       = require('path'),
      routes     = require('./routes/index'),
      config     = require('./config'),
      formidable = require('express-formidable'),
      connection = require('./lib/connection')



const NODE_ENV = process.env.NODE_END || 'development';

// config
app.set('port', process.env.PORT || config.get('server:port'));
app.use(express.static( path.join(__dirname, 'public') ) );
app.use((req, res, next) => {
    res.removeHeader("x-powered-by");
    next();
});
app.use(formidable());


// all routes here
app.use(routes);


app.use((req, res) => {
    res.status(404).send("Sorry, I can't find that.");
});


if (!module.parent) {
    app.listen(app.get('port'));
    console.log('Express started on port ' + app.get('port'));
}
