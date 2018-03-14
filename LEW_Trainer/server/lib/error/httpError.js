const path = require('path'),
      util = require('util'),
      http = require('http');

function httpError(status, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, httpError);

    this.status = status;
    this.message = message || http.STATUS_CODES[status] || "Error";
}

util.inherits(httpError, Error);

httpError.prototype.name = "HttpError";

module.exports = httpError;
