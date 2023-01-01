const express = require('express')
const {addAuthorValidationMW, updateAuthorValidationMW} = require('../validators/author.validators')
const authorController = require('../controllers/author.controller')

const authorRouter = express.Router()

authorRouter.get('/', authorController.getAllAuthors)

authorRouter.get('/:id', authorController.getAuthorsByID)

authorRouter.post('/', addAuthorValidationMW, authorController.addAuthor)

authorRouter.put('/:id', updateAuthorValidationMW, authorController.updateAuthorByID)

authorRouter.delete('/:id', authorController.deleteAuthorByID)


module.exports = authorRouter
