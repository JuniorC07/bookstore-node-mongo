import { isValidObjectId } from 'mongoose'
import booksService from '../services/book.js'

const findAll = async (req, res) => {
  const books = await booksService.findAll()
  res.status(200).json(books)
}

const findAllByAuthorId = async (req, res) => {
  const { authorId } =  req.params
  const books = await booksService.findAllByAuthorId(authorId)
  res.status(200).json(books)
}

const findOne = async (req, res) => {
  const { id } =  req.params
  const book = await booksService.findOne(id)
  res.status(200).json(book)
}

const create = async (req, res) => {
  const {
    title,
    publishingCompany,
    price,
    pages,
    authorId
  } =  req.body

  if(authorId && !isValidObjectId(authorId)){
    return res.status(422).json({
      message: "You must provide a valid author id"
    })
  }
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
  res.status(200).send("Book has been updated")

}

const remove = async (req, res) => {
  const { id } =  req.params
  await booksService.remove(id)
  res.status(200).send("Book has been removed")
}

export default {
  findAllByAuthorId,
  findAll,
  findOne, 
  create,
  update,
  remove
}