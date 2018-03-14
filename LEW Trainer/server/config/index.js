const nconf = require('nconf'),
      path  = require('path');

nconf.argv()
     .env()
     .file({ file: path.join(__dirname, 'config.json') });

nconf.set('server:rootPath', path.dirname(__dirname)); //Путь до корня сервера

module.exports = nconf;
