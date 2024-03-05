import { NotFoundError } from '../errors/index.js'
import authorService from '../services/author.js'
import validateMongoId from '../utils/validateMongoId.js'
import validateRequiredFields from '../utils/validateRequiredFields.js'

const context = 'author'

const findAll = async (req, res) => {
  const authors = await authorService.findAll()
  res.status(200).json(authors, context)
}

const findOne = async (req, res) => {
  const { id } =  req.params
  validateMongoId(id, context)
  const author = await authorService.findOne(id)
  if(author === null) {
    throw new NotFoundError({context})
  }
  return res.status(200).json(author)
}

const create = async (req, res) => {
  const requiredFields = ['name']
  validateRequiredFields(requiredFields, req.body)
  const {
    name
  } =  req.body
  const newauthor = await authorService.create({ name })
  res.status(201).json(newauthor)
}

const update = async (req, res) => {
  const requiredFields = ['name']
  validateRequiredFields(requiredFields, req.body)
  const { id } =  req.params
  const { name } =  req.body
  validateMongoId(id, context)
  await authorService.update(id, { name })
  res.status(200).send('author has been updated')
}

const remove = async (req, res) => {
  const { id } =  req.params
  validateMongoId(id, context)
  await authorService.remove(id)
  res.status(200).send('author has been removed')
}

export default {
  findAll,
  findOne, 
  create,
  update,
  remove
}