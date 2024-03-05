import booksService from '../services/book.js'
import calcSkip from '../utils/calcSkip.js'
import validateMongoId from '../utils/validateMongoId.js'
import validateRequiredFields from '../utils/validateRequiredFields.js'

const context = 'book'

const findAll = async (req, res) => {
  const {title, price, sort, page = 1, limit = 10} =  req.query
  const skip = calcSkip(page, limit)
  const books = await booksService.findAll({title, price, sort, skip, limit})
  res.status(200).json(books)
}

const findAllByAuthorId = async (req, res) => {
  const { authorId } =  req.params
  validateMongoId(authorId, 'authorId')
  const books = await booksService.findAllByAuthorId(authorId)
  res.status(200).json(books)
}

const findOne = async (req, res) => {
  const { id } =  req.params
  validateMongoId(id, context)
  const book = await booksService.findOne(id)
  res.status(200).json(book)
}

const create = async (req, res) => {

  const requiredFields = ['title', 'price']
  validateRequiredFields(requiredFields, req.body)
  const {
    title,
    publishingCompany,
    price,
    pages,
    authorId
  } =  req.body

  validateMongoId(authorId, 'authorId')
  const newBook = await booksService.create({
    title,
    publishingCompany,
    price,
    pages,
    authorId
  })
  res.status(201).json(newBook)
}

const update = async (req, res) => {
  const { id } =  req.params
  validateMongoId(id, context)
  const requiredFields = ['title', 'price']
  validateRequiredFields(requiredFields, req.body)
  const {
    title,
    publishingCompany,
    price,
    pages,
  } =  req.body

  await booksService.update(id, {
    title,
    publishingCompany,
    price,
    pages,
  })
  res.status(200).send('Book has been updated')

}

const remove = async (req, res) => {
  const { id } =  req.params
  validateMongoId(id, context)
  await booksService.remove(id)
  res.status(200).send('Book has been removed')
}

export default {
  findAllByAuthorId,
  findAll,
  findOne, 
  create,
  update,
  remove
}