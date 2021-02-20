'use strict';

const express = require('express');
const stamper = require('./middleware/stamper.js');
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const app = express();

function start(port) {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
}

// "get" route -> this route will respond to an incoming "GET" request
// it's endpoint is "/data"
// after the request is made, we run the request object through our "stamper" and
// add a timestamp to the req object
// then, we send a response back to the user
app.get('/data', stamper, (req, res) => {
  let output = {
    num: 10,
    cool: false,
    time: req.timestamp
  }

  // this is where we send our response, we have "constructed" a JSON response,
  // using the express .json method
  res.status(200).json(output);
});

app.use('*', notFoundHandler);
app.use(errorHandler); // your error handler should always be the last route in the your server

module.exports = {
  app: app,
  start: start
}