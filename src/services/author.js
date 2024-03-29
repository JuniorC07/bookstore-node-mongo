import authorModel from '../models/Author.js'
import bookModel from '../models/Book.js'

const findAll = ({name, skip, limit}) => {
  const filter = {}
  if(name) filter.title = {$regex: name, $options: 'i'}
  return authorModel.find(filter).skip(skip).limit(limit)
}

const findOne = (id) => {
  return authorModel.findById(id)
}

const create = (data) => {
  return authorModel.create(data)
}

const update = async(id, data) => {
  const updatedAuthor = await authorModel.findByIdAndUpdate(id, data)
  await bookModel.updateMany({'author._id': id}, { $set: {'author': updatedAuthor.toObject()}})
  return updatedAuthor
}

const remove = (id) => {
  return authorModel.findByIdAndDelete(id)
}

export default {
  findAll,
  findOne, 
  create,
  update,
  remove
}