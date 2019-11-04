const axios = require('axios');
const db = require('../models')
const path = require('path');

module.exports = (app) => {
    app.get('/api/Books', function (req, res) {
        db.Books.find({}).then((err, data) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
                res.sendStatus(data)
            }
        })
    });
    app.post('/api/books', (req, res) => {
        db.Books.insertOne({

        }).then((err, data) => {
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        })

    });
    app.delete('api/books/:id', (req, res) => {
        const id = req.params.id
        db.Books.destroy({
            id: id
        }).then((err, data) => {
            if (err) {
               res.sendStatus(500)
            } else {
               res.sendStatus(200)
            }
        })
    })
}