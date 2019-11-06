const db = require('../models')

module.exports = {
    findAll: (req, res) => {
        db.Book.find({

        }).then((data) => {
            res.json(data)
        }).catch(err => res.sendStatus(422).json(err))
    },
    saveBook: (req, res) => {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    removeBook: (req,res) => {
        db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}