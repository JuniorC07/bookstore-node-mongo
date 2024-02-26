import bookModel from '../models/Book.js'
import authorModel from '../models/Author.js'


const findAll = () => {
  return bookModel.find()
}

const findAllByAuthorId = (authorId) => {
  return bookModel.find({'author._id': authorId})
}

const findOne = (id) => {
  return bookModel.findById(id)
}

const create = async ({ authorId, ...data }) => {
  const author = await authorModel.findById(authorId).then(at => at && at.toObject() || at)
  return bookModel.create({ ...data, author })
}

const update = (id, data) => {
  return bookModel.findByIdAndUpdate(id, data)
}

const remove = (id) => {
  return bookModel.findByIdAndDelete(id)
}

export default {
  findAll,
  findAllByAuthorId,
  findOne, 
  create,
  update,
  remove
}