const authorModel = require('../models/authors')
const logger = require('../logging/logger')

// get all authors
function getAllAuthors(req, res) {
    authorModel.find()
        .then(authors => {
            res.send(authors)
        })
        .catch(err => {
            logger.error(err)
            res.send(err)
        })
}

// get author by ID
function getAuthorsByID (req, res) {
    const id = req.params.id
    authorModel.findById(id)
        .then(author => {
            res.status(200).send(author)
        }).catch(err => {
            logger.error(err)
            res.status(404).send(err)
        })
}

// add author
function addAuthor (req, res) {
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    authorModel.create(author)
        .then(author => {
            res.status(201).send(author)
        }).catch(err => {
            logger.error(err)
            res.status(500).send(err)
        })
}

// update an author by ID
function updateAuthorByID (req, res) {
    const id = req.params.id
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    authorModel.findByIdAndUpdate(id, author, { new: true })
        .then(newAuthor => {
            res.status(200).send(newAuthor)
        }).catch(err => {
            logger.error(err)
            res.status(500).send(err)
        })
}

// delete author by ID
function deleteAuthorByID (req, res) {
    const id = req.params.id
    authorModel.findByIdAndRemove(id)
        .then(author => {
            return res.status(200).send({
                message:'Author successfully deleted',
                data: author
            })
        }).catch(err => {
            logger.error(err)
            res.status(500).send(err)
        })
}

module.exports  = {
    getAllAuthors,
    getAuthorsByID,
    addAuthor,
    updateAuthorByID,
    deleteAuthorByID
}