import authorService from '../services/author.js'

const findAll = async (req, res) => {
  const authors = await authorService.findAll()
  res.status(200).json(authors)
}

const findOne = async (req, res) => {
  const { id } =  req.params
  const author = await authorService.findOne(id)
  res.status(200).json(author)
}

const create = async (req, res) => {
  const {
    name
  } =  req.body
  const newauthor = await authorService.create({ name })
  res.status(201).json(newauthor)
}

const update = async (req, res) => {
  const { id } =  req.params
  const { name } =  req.body

  await authorService.update(id, { name })
  res.status(200).send('author has been updated')
}

const remove = async (req, res) => {
  const { id } =  req.params
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