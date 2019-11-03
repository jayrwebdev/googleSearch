const axios = require('axios');
const db = require('../models')
const path = require('path');

module.exports = (app) => {
    app.get('./api/Books', function(req,res){
        db.Books.find().then(function(data) {
             res.json(data)
        })
    })
    app.post()
}