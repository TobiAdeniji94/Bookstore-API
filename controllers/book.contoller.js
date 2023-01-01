const bookModel = require('../models/books')
const logger = require('../logging/logger')

// get all books
function getAllBooks(req, res) {
    bookModel.find()
        .then(books => {
            res.send(books)
        })
        .catch(err => {
            logger.error(err)
            res.send(err)
        })
}

// get book by ID
function getBooksByID (req, res) {
    const id = req.params.id
    bookModel.findById(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            logger.error(err)
            res.status(404).send(err)
        })
}

// add book
function addBook (req, res) {
    const book = req.body
    book.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    bookModel.create(book)
        .then(book => {
            res.status(201).send(book)
        }).catch(err => {
            logger.error(err)
            res.status(500).send(err)
        })
}

// update book by ID
function updateBookByID (req, res) {
    const id = req.params.id
    const book = req.body
    book.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    bookModel.findByIdAndUpdate(id, book, { new: true })
        .then(newBook => {
            res.status(200).send(newBook)
        }).catch(err => {
            logger.error(err)
            res.status(500).send(err)
        })
}

// delete book by ID
function deleteBookByID (req, res) {
    const id = req.params.id
    bookModel.findByIdAndRemove(id)
        .then(book => {
            return res.status(200).send({
                message:'Book successfully deleted',
                data: book
            })
        }).catch(err => {
            logger.error(err)
            res.status(500).send(err)
        })
}

module.exports  = {
    getAllBooks,
    getBooksByID,
    addBook,
    updateBookByID,
    deleteBookByID
}