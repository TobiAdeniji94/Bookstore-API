const express = require('express')
const {addBookValidationMW, updateBookValidationMW} = require('../validators/book.validators')
const bookController = require('../controllers/book.contoller')

const bookRouter = express.Router()

bookRouter.get('/', bookController.getAllBooks)

bookRouter.get('/:id', bookController.getBooksByID)

bookRouter.post('/', addBookValidationMW, bookController.addBook)

bookRouter.put('/:id', updateBookValidationMW, bookController.updateBookByID)

bookRouter.delete('/:id', bookController.deleteBookByID)


module.exports = bookRouter
