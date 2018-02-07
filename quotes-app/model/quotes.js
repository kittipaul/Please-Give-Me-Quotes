'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuotesSchema = new Schema({
  quote: String,
  author: String
});

module.exports = mongoose.model('Quote', QuotesSchema);
