const mongoose = require('mongoose'),
      config   = require('../config');


let global_db
mongoose.Promise = global.Promise

let options = Object.assign({}, config.get('db:options'), {
    promiseLibrary: global.Promise
})

const connection = mongoose.connect(config.get('db:url'), options)

connection.then(db => {
    global_db = db
    console.log("The successful accession to the database")
}, err => {
    console.log("Failed to connect to the database")
    console.log(err)
})

module.exports = global_db
