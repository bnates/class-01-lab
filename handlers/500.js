'use strict';

// go to the following docs to get the proper signature structure
// http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses
module.exports = (error, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    message: 'server error'
  })
}