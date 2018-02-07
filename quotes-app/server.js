'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Quote = require('./model/quotes');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Credentials", "true");
 res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
 res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
});

app.get('paul', (req, res) => {
  res.send('hi its work!!!!');
})

router.get('/', function(req, res) {
  res.json({ message: "API Initialized!"});
});

app.use('/api', router);

router.route('/quotes')
  .get((req, res) => {
    Quote.find((err, quotes) => {
      if (err) res.send(err);
      res.json(quotes);
    });
  })
  .post((req,res) => {
    var quote = new Quote();
    quote.quote = req.body.quote;
    quote.author = req.body.author;
    quote.background = req.body.background;

    quote.save((err) => {
      if (err) res.send(err);
      res.json({quote: "Quote successfully added"});
    });
  });

mongoose.connect('mongodb://kitti:try1234@ds125628.mlab.com:25628/quotesdb', (err) => {
  if (err) return "Not connected to Database";
  console.log('Database Connected!');
});

app.listen(port, function() {
 console.log(`App running on port ${port}`);
});
