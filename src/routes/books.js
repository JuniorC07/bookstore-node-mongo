import { Router } from 'express'
import booksController from '../controllers/books.js'
import handleMethod from '../utils/handleMethod.js'

const booksRouter = Router()

booksRouter.get('/', handleMethod(booksController.findAll))
booksRouter.get('/author/:authorId', handleMethod(booksController.findAllByAuthorId))
booksRouter.get('/:id', handleMethod(booksController.findOne))
booksRouter.post('/', handleMethod(booksController.create))
booksRouter.put('/:id', handleMethod(booksController.update))
booksRouter.delete('/:id', handleMethod(booksController.remove))

export default booksRouter