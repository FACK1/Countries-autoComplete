const fs = require('fs')
const path = require('path');
const handlers = require('./handlers.js');



function request(url, cb) {
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      return cb(result)
    }).catch(function (err) {
      return console.log(err)
    })

}
